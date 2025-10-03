import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { stripe, PLANS } from '@/lib/stripe'
import { PlanType } from '@/generated/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { planType, email, name, company } = body

    if (!planType || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: planType and email' },
        { status: 400 }
      )
    }

    // Validate plan type
    if (!PLANS[planType as PlanType]) {
      return NextResponse.json(
        { error: 'Invalid plan type' },
        { status: 400 }
      )
    }

    const plan = PLANS[planType as PlanType]

    // Handle free plan signup
    if (planType === 'FREE') {
      // Create user with free subscription
      const user = await prisma.user.create({
        data: {
          email,
          name,
          company,
          subscription: {
            create: {
              planType: 'FREE',
              status: 'ACTIVE',
              currentPeriodStart: new Date(),
              currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
              pricePerMonth: 0,
              trialStart: new Date(),
              trialEnd: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days trial
            }
          }
        },
        include: {
          subscription: true
        }
      })

      return NextResponse.json({
        success: true,
        user,
        message: 'Free account created successfully'
      })
    }

    // For paid plans, create Stripe customer and checkout session
    const stripeCustomer = await stripe.customers.create({
      email,
      name,
      metadata: {
        planType,
        company: company || '',
      }
    })

    // Create user in database
    const user = await prisma.user.create({
      data: {
        email,
        name,
        company,
        stripeCustomerId: stripeCustomer.id,
      }
    })

    // Create checkout session
    const checkoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomer.id,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [
        {
          price: plan.priceId!,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      allow_promotion_codes: true,
      subscription_data: {
        trial_period_days: 14, // 14-day free trial
        metadata: {
          userId: user.id,
          planType,
        },
      },
      success_url: `${process.env.APP_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.APP_URL}/#pricing`,
    })

    return NextResponse.json({
      success: true,
      checkoutUrl: checkoutSession.url,
      customerId: stripeCustomer.id,
    })

  } catch (error) {
    console.error('Error creating subscription:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}