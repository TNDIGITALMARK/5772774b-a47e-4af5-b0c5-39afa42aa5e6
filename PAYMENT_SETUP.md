# Payment & Subscription Setup Guide

This guide will help you configure the payment processing and subscription functionality for your NEXUS CRM application.

## 🎯 What's Been Implemented

✅ **Backend Infrastructure**
- Database schema for users, subscriptions, payments
- Stripe integration with webhook handling
- Subscription management service
- Trial period handling
- API endpoints for payment processing

✅ **Frontend Integration**
- Interactive pricing buttons on homepage
- Payment flow integration
- Dashboard with subscription status
- Trial and subscription management UI

✅ **Security & Best Practices**
- Webhook signature verification
- Environment variable configuration
- Database constraints and relationships
- Error handling and logging

## 🔧 Required Setup Steps

### 1. Configure Stripe Account

1. **Create a Stripe Account**
   - Go to [https://stripe.com](https://stripe.com) and create an account
   - Complete your account verification

2. **Get API Keys**
   - Navigate to Developers > API Keys in your Stripe Dashboard
   - Copy your Publishable Key (`pk_test_...` for testing)
   - Copy your Secret Key (`sk_test_...` for testing)

3. **Create Products and Prices**
   ```bash
   # Using Stripe CLI (recommended)
   stripe products create --name="Pro Plan" --description="Professional CRM features"
   stripe prices create --product=prod_xxx --unit-amount=4900 --currency=usd --recurring-interval=month

   stripe products create --name="Agency Plan" --description="Full agency features"
   stripe prices create --product=prod_xxx --unit-amount=19700 --currency=usd --recurring-interval=month
   ```

4. **Set up Webhooks**
   - Go to Developers > Webhooks in Stripe Dashboard
   - Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
   - Select events:
     - `customer.subscription.created`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
     - `invoice.payment_succeeded`
     - `invoice.payment_failed`
   - Copy the webhook signing secret (`whsec_...`)

### 2. Update Environment Variables

Edit your `.env` file with your actual Stripe credentials:

```env
# Stripe Configuration
STRIPE_PUBLISHABLE_KEY="pk_test_your_actual_publishable_key_here"
STRIPE_SECRET_KEY="sk_test_your_actual_secret_key_here"
STRIPE_WEBHOOK_SECRET="whsec_your_actual_webhook_secret_here"

# Stripe Product and Price IDs
STRIPE_PRO_PRICE_ID="price_your_pro_plan_price_id"
STRIPE_AGENCY_PRICE_ID="price_your_agency_plan_price_id"

# App Configuration
APP_URL="https://yourdomain.com"  # Update for production
NEXTAUTH_URL="https://yourdomain.com"  # Update for production
NEXTAUTH_SECRET="generate_a_secure_random_string_here"
```

### 3. Database Setup

1. **Initialize Database**
   ```bash
   # Create and push the database schema
   npx prisma db push

   # Generate Prisma client
   npx prisma generate
   ```

2. **Verify Database Connection**
   ```bash
   npx prisma studio
   ```
   This opens a web interface to view your database.

### 4. Test the Payment Flow

1. **Start the Development Server**
   ```bash
   npm run dev
   ```

2. **Test Pricing Buttons**
   - Visit `http://localhost:3000`
   - Click on "Start Pro Trial" or "Start Pro Trial"
   - Verify redirect to Stripe Checkout

3. **Test with Stripe Test Cards**
   - Use card number: `4242 4242 4242 4242`
   - Any future expiry date and any CVC
   - Complete the checkout flow

4. **Verify Webhook Processing**
   - Check your application logs
   - Verify subscription creation in database
   - Test dashboard at `/dashboard`

## 🔒 Security Considerations

### Production Checklist

- [ ] Use live Stripe keys (not test keys)
- [ ] Set up proper HTTPS certificates
- [ ] Configure CORS policies
- [ ] Set up proper authentication
- [ ] Enable database SSL connections
- [ ] Configure proper logging and monitoring
- [ ] Set up backup strategies

### Environment Variables Security

- [ ] Never commit `.env` files to version control
- [ ] Use different keys for development/staging/production
- [ ] Rotate webhook secrets regularly
- [ ] Monitor for suspicious activity

## 🚀 Features Available

### For Customers
- ✅ Free plan signup (no payment required)
- ✅ 14-day free trial for paid plans
- ✅ Secure Stripe Checkout integration
- ✅ Subscription management dashboard
- ✅ Usage tracking and limits
- ✅ Plan upgrades and downgrades

### For Business
- ✅ Webhook-based subscription sync
- ✅ Automatic trial period handling
- ✅ Payment failure management
- ✅ Subscription lifecycle management
- ✅ Multi-tenant architecture ready
- ✅ Comprehensive audit logging

## 📊 Dashboard Features

The `/dashboard` page includes:
- Real-time subscription status
- Usage metrics and limits
- Trial expiration warnings
- Payment history
- Plan management options

## 🔧 Customization

### Modifying Plans
Edit `src/lib/stripe.ts` to adjust:
- Plan features and limits
- Pricing tiers
- Trial periods
- Usage restrictions

### Styling
The pricing components use your existing design system:
- CSS custom properties for colors
- Consistent with your brand theme
- Responsive design patterns

## 🐛 Troubleshooting

### Common Issues

1. **Webhook Not Working**
   - Verify webhook URL is accessible
   - Check webhook signing secret
   - Review server logs for errors

2. **Payment Not Processing**
   - Confirm API keys are correct
   - Check Stripe dashboard for errors
   - Verify price IDs match

3. **Database Connection Issues**
   - Check DATABASE_URL is correct
   - Ensure database server is running
   - Verify Prisma schema is up to date

### Debug Mode
Set `NODE_ENV=development` to see detailed error logs.

## 📞 Support

For Stripe-specific issues:
- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Support](https://support.stripe.com)

For application issues:
- Check application logs
- Review database for data consistency
- Test webhook endpoints manually

## 🎉 You're Ready!

Your payment and subscription system is now fully configured and ready for production. The system includes:

- ✅ Secure payment processing
- ✅ Subscription management
- ✅ Trial period handling
- ✅ Usage tracking
- ✅ Customer dashboard
- ✅ Webhook automation

Start accepting payments and growing your SaaS business! 🚀