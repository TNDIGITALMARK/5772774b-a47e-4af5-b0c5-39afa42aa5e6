'use client'

import { createContext, useContext, ReactNode } from 'react'

export interface WhiteLabelConfig {
  // Branding
  companyName: string
  logo?: string
  favicon?: string
  customDomain?: string

  // Colors (HSL values)
  primaryColor: string
  secondaryColor: string
  accentColor: string
  backgroundColor: string
  textColor: string

  // Contact Information
  supportEmail: string
  supportPhone?: string
  address?: string

  // Features
  features: {
    phoneIntegration: boolean
    smsAutomation: boolean
    aiWorkflows: boolean
    customBranding: boolean
    multiTenant: boolean
    apiAccess: boolean
  }

  // Email Templates
  emailTemplates: {
    appointmentConfirmation: string
    appointmentReminder: string
    welcomeEmail: string
    passwordReset: string
  }

  // SMS Templates
  smsTemplates: {
    appointmentConfirmation: string
    appointmentReminder: string
    followUp: string
  }

  // Plan Information
  plan: 'free' | 'pro' | 'agency'
  limits: {
    contacts: number
    campaigns: number
    automations: number
    users: number
  }
}

const defaultConfig: WhiteLabelConfig = {
  companyName: 'NEXUS CRM',
  primaryColor: '217 91% 20%',
  secondaryColor: '210 40% 96.1%',
  accentColor: '45 93% 47%',
  backgroundColor: '0 0% 100%',
  textColor: '222.2 84% 4.9%',
  supportEmail: 'support@nexuscrm.com',
  supportPhone: '+1 (555) 123-4567',
  features: {
    phoneIntegration: true,
    smsAutomation: true,
    aiWorkflows: true,
    customBranding: true,
    multiTenant: true,
    apiAccess: true
  },
  emailTemplates: {
    appointmentConfirmation: `
      Hi {{clientName}},

      Your appointment with {{companyName}} has been confirmed for {{date}} at {{time}}.

      Type: {{appointmentType}}
      {{#if phoneNumber}}Phone: {{phoneNumber}}{{/if}}
      {{#if notes}}Notes: {{notes}}{{/if}}

      If you need to reschedule, please contact us at {{supportEmail}} or {{supportPhone}}.

      Best regards,
      {{companyName}} Team
    `,
    appointmentReminder: `
      Hi {{clientName}},

      This is a friendly reminder of your upcoming appointment with {{companyName}}:

      Date: {{date}}
      Time: {{time}}
      Type: {{appointmentType}}

      We look forward to speaking with you!

      {{companyName}} Team
    `,
    welcomeEmail: `
      Welcome to {{companyName}}!

      Thank you for choosing our CRM platform. We're excited to help you grow your business.

      Get started by:
      1. Setting up your profile
      2. Importing your contacts
      3. Creating your first campaign

      If you have any questions, reach out to us at {{supportEmail}}.

      Best regards,
      {{companyName}} Team
    `,
    passwordReset: `
      Hi there,

      You requested a password reset for your {{companyName}} account.

      Click here to reset your password: {{resetLink}}

      If you didn't request this, please ignore this email.

      {{companyName}} Team
    `
  },
  smsTemplates: {
    appointmentConfirmation: 'Hi {{clientName}}, your appointment with {{companyName}} is confirmed for {{date}} at {{time}}. Reply STOP to opt out.',
    appointmentReminder: 'Reminder: You have an appointment with {{companyName}} today at {{time}}. See you soon!',
    followUp: 'Hi {{clientName}}, thanks for meeting with us! We\'ll follow up with next steps soon. - {{companyName}}'
  },
  plan: 'pro',
  limits: {
    contacts: 10000,
    campaigns: 100,
    automations: 50,
    users: 10
  }
}

const WhiteLabelContext = createContext<WhiteLabelConfig>(defaultConfig)

interface WhiteLabelProviderProps {
  children: ReactNode
  config?: Partial<WhiteLabelConfig>
}

export function WhiteLabelProvider({ children, config }: WhiteLabelProviderProps) {
  const mergedConfig = { ...defaultConfig, ...config }

  return (
    <WhiteLabelContext.Provider value={mergedConfig}>
      {children}
    </WhiteLabelContext.Provider>
  )
}

export function useWhiteLabel() {
  const context = useContext(WhiteLabelContext)
  if (!context) {
    throw new Error('useWhiteLabel must be used within a WhiteLabelProvider')
  }
  return context
}

// Utility functions for template processing
export function processTemplate(template: string, variables: Record<string, any>): string {
  let processed = template

  // Replace simple variables
  Object.entries(variables).forEach(([key, value]) => {
    const regex = new RegExp(`{{${key}}}`, 'g')
    processed = processed.replace(regex, value || '')
  })

  // Handle conditional blocks (simplified Handlebars-like syntax)
  const conditionalRegex = /{{#if (\w+)}}(.*?){{\/if}}/gs
  processed = processed.replace(conditionalRegex, (match, condition, content) => {
    return variables[condition] ? content.trim() : ''
  })

  return processed.trim()
}

// Theme utilities
export function generateCSSVariables(config: WhiteLabelConfig): Record<string, string> {
  return {
    '--crm-primary': config.primaryColor,
    '--crm-secondary': config.secondaryColor,
    '--crm-accent': config.accentColor,
    '--crm-background': config.backgroundColor,
    '--crm-text': config.textColor,
  }
}

export function applyWhiteLabelTheme(config: WhiteLabelConfig) {
  if (typeof window !== 'undefined') {
    const root = document.documentElement
    const cssVars = generateCSSVariables(config)

    Object.entries(cssVars).forEach(([property, value]) => {
      root.style.setProperty(property, value)
    })

    // Update document title and favicon
    document.title = `${config.companyName} - CRM Platform`

    if (config.favicon) {
      const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement
      if (favicon) {
        favicon.href = config.favicon
      }
    }
  }
}

// Multi-tenant configurations
export const tenantConfigs: Record<string, Partial<WhiteLabelConfig>> = {
  'acme-corp': {
    companyName: 'Acme Corp',
    primaryColor: '217 91% 20%',
    accentColor: '45 93% 47%',
    customDomain: 'crm.acmecorp.com',
    supportEmail: 'support@acmecorp.com',
    plan: 'pro'
  },
  'startupx': {
    companyName: 'StartupX',
    primaryColor: '270 80% 50%',
    accentColor: '120 70% 45%',
    customDomain: 'app.startupx.io',
    supportEmail: 'hello@startupx.io',
    plan: 'agency',
    features: {
      phoneIntegration: true,
      smsAutomation: true,
      aiWorkflows: true,
      customBranding: true,
      multiTenant: true,
      apiAccess: true
    }
  },
  'ecosolutions': {
    companyName: 'EcoSolutions',
    primaryColor: '140 70% 35%',
    accentColor: '60 80% 50%',
    customDomain: 'portal.ecosolutions.green',
    supportEmail: 'support@ecosolutions.green',
    plan: 'pro',
    features: {
      phoneIntegration: true,
      smsAutomation: true,
      aiWorkflows: false,
      customBranding: true,
      multiTenant: false,
      apiAccess: false
    }
  }
}

export function getTenantConfig(tenantId: string): Partial<WhiteLabelConfig> {
  return tenantConfigs[tenantId] || {}
}