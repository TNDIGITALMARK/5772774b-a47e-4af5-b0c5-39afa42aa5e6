'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

interface PricingButtonProps {
  planType: 'FREE' | 'PRO' | 'AGENCY'
  buttonText: string
  className?: string
  variant?: 'default' | 'outline' | 'secondary' | 'destructive' | 'ghost' | 'link'
}

export function PricingButton({ planType, buttonText, className, variant = 'default' }: PricingButtonProps) {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubscribe = async () => {
    setLoading(true)

    try {
      if (planType === 'FREE') {
        // For free plan, show a simple signup form (would integrate with auth)
        toast({
          title: 'Welcome to NEXUS CRM!',
          description: 'Free account setup will be available once authentication is configured.',
        })
        return
      }

      if (planType === 'AGENCY') {
        // For agency plan, redirect to contact sales
        toast({
          title: 'Contact Sales',
          description: 'Our sales team will reach out to discuss your agency needs.',
        })
        return
      }

      // For Pro plan, create Stripe checkout session
      const response = await fetch('/api/subscriptions/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planType,
          email: 'demo@example.com', // Would come from auth/form
          name: 'Demo User', // Would come from auth/form
          company: 'Demo Company' // Would come from form
        })
      })

      const data = await response.json()

      if (data.success && data.checkoutUrl) {
        // Redirect to Stripe checkout
        window.location.href = data.checkoutUrl
      } else {
        throw new Error(data.error || 'Failed to create checkout session')
      }

    } catch (error) {
      console.error('Subscription error:', error)
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      onClick={handleSubscribe}
      disabled={loading}
      className={className}
      variant={variant}
    >
      {loading ? 'Processing...' : buttonText}
      {planType !== 'FREE' && !loading && <ArrowRight className="ml-2 w-4 h-4" />}
    </Button>
  )
}

interface TrialButtonProps {
  className?: string
}

export function StartTrialButton({ className }: TrialButtonProps) {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleStartTrial = async () => {
    setLoading(true)

    try {
      const response = await fetch('/api/subscriptions/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planType: 'PRO',
          email: 'trial@example.com',
          name: 'Trial User',
        })
      })

      const data = await response.json()

      if (data.success && data.checkoutUrl) {
        window.location.href = data.checkoutUrl
      } else {
        throw new Error(data.error || 'Failed to start trial')
      }

    } catch (error) {
      console.error('Trial error:', error)
      toast({
        title: 'Error',
        description: 'Unable to start trial. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      size="lg"
      onClick={handleStartTrial}
      disabled={loading}
      className={className}
    >
      {loading ? 'Starting Trial...' : 'Start Free Trial'}
      <ArrowRight className="ml-2 w-5 h-5" />
    </Button>
  )
}