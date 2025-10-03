import { NextRequest, NextResponse } from 'next/server'
import { SubscriptionService } from '@/lib/subscription-service'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json(
        { error: 'Missing userId parameter' },
        { status: 400 }
      )
    }

    const [subscription, usageStats] = await Promise.all([
      SubscriptionService.getUserSubscription(userId),
      SubscriptionService.getUsageStats(userId)
    ])

    return NextResponse.json({
      subscription,
      usageStats,
      isTrialExpired: await SubscriptionService.isTrialExpired(userId),
    })

  } catch (error) {
    console.error('Error fetching subscription status:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, userId, planType } = body

    if (!userId) {
      return NextResponse.json(
        { error: 'Missing userId' },
        { status: 400 }
      )
    }

    switch (action) {
      case 'cancel':
        const canceledSubscription = await SubscriptionService.cancelSubscription(userId)
        return NextResponse.json({ success: true, subscription: canceledSubscription })

      case 'reactivate':
        const reactivatedSubscription = await SubscriptionService.reactivateSubscription(userId)
        return NextResponse.json({ success: true, subscription: reactivatedSubscription })

      case 'changePlan':
        if (!planType) {
          return NextResponse.json({ error: 'Missing planType' }, { status: 400 })
        }
        const updatedSubscription = await SubscriptionService.changePlan(userId, planType)
        return NextResponse.json({ success: true, subscription: updatedSubscription })

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }

  } catch (error) {
    console.error('Error updating subscription:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
}