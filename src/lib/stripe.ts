import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-12-18.acacia',
  typescript: true,
})

export const PLANS = {
  FREE: {
    name: 'Free',
    price: 0,
    priceId: null,
    features: [
      'Up to 100 contacts',
      'Basic workflow automation',
      'Email campaigns',
      'Phone scheduling',
      'Community support'
    ],
    limits: {
      contacts: 100,
      campaigns: 5,
      automations: 3
    }
  },
  PRO: {
    name: 'Pro',
    price: 4900, // $49 in cents
    priceId: process.env.STRIPE_PRO_PRICE_ID,
    features: [
      'Up to 10,000 contacts',
      'Advanced AI automation',
      'Multi-channel campaigns',
      'Advanced phone integration',
      'White-label branding',
      'Priority support'
    ],
    limits: {
      contacts: 10000,
      campaigns: 50,
      automations: 25
    }
  },
  AGENCY: {
    name: 'Agency',
    price: 19700, // $197 in cents
    priceId: process.env.STRIPE_AGENCY_PRICE_ID,
    features: [
      'Unlimited contacts',
      'Full AI automation suite',
      'Omnichannel campaigns',
      'Complete phone system',
      'Full white-label platform',
      'Custom domain support',
      'Dedicated support'
    ],
    limits: {
      contacts: -1, // Unlimited
      campaigns: -1,
      automations: -1
    }
  }
} as const

export type PlanType = keyof typeof PLANS