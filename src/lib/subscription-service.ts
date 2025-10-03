import { prisma } from './prisma'
import { stripe, PLANS } from './stripe'
import { PlanType } from '@/generated/prisma'

export class SubscriptionService {
  static async getUserSubscription(userId: string) {
    return await prisma.subscription.findUnique({
      where: { userId },
      include: {
        user: true
      }
    })
  }

  static async createTrialSubscription(userId: string, planType: PlanType) {
    const plan = PLANS[planType]
    const trialEndDate = new Date()
    trialEndDate.setDate(trialEndDate.getDate() + 14) // 14 days trial

    return await prisma.subscription.create({
      data: {
        userId,
        planType,
        status: 'TRIALING',
        currentPeriodStart: new Date(),
        currentPeriodEnd: trialEndDate,
        trialStart: new Date(),
        trialEnd: trialEndDate,
        pricePerMonth: plan.price,
      }
    })
  }

  static async cancelSubscription(userId: string) {
    const subscription = await this.getUserSubscription(userId)

    if (!subscription?.stripeSubscriptionId) {
      throw new Error('No active subscription found')
    }

    // Cancel in Stripe
    await stripe.subscriptions.update(subscription.stripeSubscriptionId, {
      cancel_at_period_end: true
    })

    // Update in database
    return await prisma.subscription.update({
      where: { userId },
      data: {
        cancelAtPeriodEnd: true
      }
    })
  }

  static async reactivateSubscription(userId: string) {
    const subscription = await this.getUserSubscription(userId)

    if (!subscription?.stripeSubscriptionId) {
      throw new Error('No subscription found')
    }

    // Reactivate in Stripe
    await stripe.subscriptions.update(subscription.stripeSubscriptionId, {
      cancel_at_period_end: false
    })

    // Update in database
    return await prisma.subscription.update({
      where: { userId },
      data: {
        cancelAtPeriodEnd: false,
        canceledAt: null
      }
    })
  }

  static async changePlan(userId: string, newPlanType: PlanType) {
    const subscription = await this.getUserSubscription(userId)

    if (!subscription?.stripeSubscriptionId) {
      throw new Error('No active subscription found')
    }

    const newPlan = PLANS[newPlanType]

    if (!newPlan.priceId) {
      throw new Error('Invalid plan type')
    }

    // Update subscription in Stripe
    const stripeSubscription = await stripe.subscriptions.retrieve(subscription.stripeSubscriptionId)
    await stripe.subscriptions.update(subscription.stripeSubscriptionId, {
      items: [{
        id: stripeSubscription.items.data[0].id,
        price: newPlan.priceId,
      }],
      proration_behavior: 'create_prorations',
    })

    // Update in database
    return await prisma.subscription.update({
      where: { userId },
      data: {
        planType: newPlanType,
        stripePriceId: newPlan.priceId,
        pricePerMonth: newPlan.price,
      }
    })
  }

  static async getUsageStats(userId: string) {
    const [contactCount, campaignCount] = await Promise.all([
      prisma.contact.count({ where: { userId } }),
      prisma.campaign.count({ where: { userId } })
    ])

    const subscription = await this.getUserSubscription(userId)
    const planType = subscription?.planType || 'FREE'
    const plan = PLANS[planType]

    return {
      contacts: {
        used: contactCount,
        limit: plan.limits.contacts,
        percentage: plan.limits.contacts === -1
          ? 0
          : Math.round((contactCount / plan.limits.contacts) * 100)
      },
      campaigns: {
        used: campaignCount,
        limit: plan.limits.campaigns,
        percentage: plan.limits.campaigns === -1
          ? 0
          : Math.round((campaignCount / plan.limits.campaigns) * 100)
      },
      plan: {
        name: plan.name,
        type: planType,
        price: plan.price,
        status: subscription?.status || 'INACTIVE',
        trialEndsAt: subscription?.trialEnd,
        currentPeriodEnd: subscription?.currentPeriodEnd,
        cancelAtPeriodEnd: subscription?.cancelAtPeriodEnd || false
      }
    }
  }

  static async isTrialExpired(userId: string): Promise<boolean> {
    const subscription = await this.getUserSubscription(userId)

    if (!subscription || !subscription.trialEnd) {
      return false
    }

    return new Date() > subscription.trialEnd
  }

  static async canAccessFeature(userId: string, feature: string): Promise<boolean> {
    const subscription = await this.getUserSubscription(userId)

    if (!subscription) {
      return false // No subscription = no access
    }

    // Check if subscription is active or in trial
    if (!['ACTIVE', 'TRIALING'].includes(subscription.status)) {
      return false
    }

    // Check if trial has expired
    if (subscription.status === 'TRIALING' && await this.isTrialExpired(userId)) {
      return false
    }

    // Feature-specific checks can be added here
    return true
  }

  static async checkUsageLimits(userId: string, resource: 'contacts' | 'campaigns'): Promise<{
    canAdd: boolean,
    used: number,
    limit: number
  }> {
    const stats = await this.getUsageStats(userId)
    const resourceStats = stats[resource]

    return {
      canAdd: resourceStats.limit === -1 || resourceStats.used < resourceStats.limit,
      used: resourceStats.used,
      limit: resourceStats.limit
    }
  }
}