import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Users, Target, Zap, Shield, TrendingUp, Calendar, Phone } from "lucide-react"
import Link from "next/link"
import { PricingButton, StartTrialButton } from "@/components/pricing-buttons"

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-[hsl(var(--crm-navy))] text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
              <Target className="w-5 h-5 text-[hsl(var(--crm-navy))]" />
            </div>
            <h1 className="text-2xl font-bold">NEXUS CRM</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-gray-200 transition-colors">Features</Link>
            <Link href="#pricing" className="hover:text-gray-200 transition-colors">Pricing</Link>
            <Link href="/dashboard" className="hover:text-gray-200 transition-colors">Dashboard</Link>
            <Link href="/appointments" className="hover:text-gray-200 transition-colors">Schedule</Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[hsl(var(--crm-navy))]">
              Login
            </Button>
            <Button className="bg-white text-[hsl(var(--crm-navy))] hover:bg-gray-100">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[hsl(var(--crm-navy))] to-[hsl(var(--crm-navy-dark))] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              UNIFY YOUR BUSINESS.
              <br />
              <span className="text-[hsl(var(--crm-accent))]">AMPLIFY YOUR GROWTH</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              The only multi-tenant CRM platform you need to automate workflows, manage customers,
              and scale your business with AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <StartTrialButton className="bg-[hsl(var(--crm-accent))] text-black hover:bg-[hsl(var(--crm-accent))] hover:brightness-90 px-8 py-3 text-lg font-semibold" />
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[hsl(var(--crm-navy))] px-8 py-3 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Unified Command Center</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage customers, automate workflows, and grow your business in one powerful platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[hsl(var(--crm-navy))] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Pipeline Conversion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-[hsl(var(--crm-navy))] mb-2">78%</div>
                <p className="text-gray-600">Average conversion rate increase with our AI insights</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[hsl(var(--crm-success))] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Active Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-[hsl(var(--crm-success))] mb-2">1,200</div>
                <p className="text-gray-600">Automated campaigns running across all tenants</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[hsl(var(--crm-accent))] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-black" />
                </div>
                <CardTitle className="text-xl">Appointment Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-[hsl(var(--crm-accent))] mb-2">2,500+</div>
                <p className="text-gray-600">Monthly appointments scheduled automatically</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[hsl(var(--crm-warning))] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <CardTitle className="text-xl">Active Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-[hsl(var(--crm-warning))] mb-2">50,000+</div>
                <p className="text-gray-600">Businesses trust our platform daily</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include multi-tenant capabilities and white-label customization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Tier */}
            <Card className="relative hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Free</CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Up to 100 contacts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Basic workflow automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Email campaigns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Phone scheduling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Community support</span>
                </div>
              </CardContent>
              <CardFooter>
                <PricingButton
                  planType="FREE"
                  buttonText="Get Started Free"
                  variant="outline"
                  className="w-full"
                />
              </CardFooter>
            </Card>

            {/* Pro Tier */}
            <Card className="relative border-2 border-[hsl(var(--crm-navy))] hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-[hsl(var(--crm-navy))] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Pro</CardTitle>
                <CardDescription>For growing businesses</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Up to 10,000 contacts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Advanced AI automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Multi-channel campaigns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Advanced phone integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>White-label branding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Priority support</span>
                </div>
              </CardContent>
              <CardFooter>
                <PricingButton
                  planType="PRO"
                  buttonText="Start Pro Trial"
                  className="w-full bg-[hsl(var(--crm-navy))] hover:bg-[hsl(var(--crm-navy-dark))]"
                />
              </CardFooter>
            </Card>

            {/* Agency Tier */}
            <Card className="relative hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Agency</CardTitle>
                <CardDescription>For agencies and enterprises</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$197</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Unlimited contacts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Full AI automation suite</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Omnichannel campaigns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Complete phone system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Full white-label platform</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Custom domain support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Dedicated support</span>
                </div>
              </CardContent>
              <CardFooter>
                <PricingButton
                  planType="AGENCY"
                  buttonText="Contact Sales"
                  className="w-full bg-[hsl(var(--crm-accent))] text-black hover:brightness-90"
                />
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Multi-Tenant Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Multi-Tenant Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built from the ground up to support multiple brands, custom workflows, and complete white-label customization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure & Isolated</h3>
              <p className="text-gray-600">Each tenant gets complete data isolation with enterprise-grade security and custom access controls.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Branding</h3>
              <p className="text-gray-600">White-label your entire platform with custom logos, colors, domains, and email templates.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Intelligent Automation</h3>
              <p className="text-gray-600">AI-powered workflows that adapt to each tenant's unique business processes and customer behavior.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <StartTrialButton className="bg-[hsl(var(--crm-navy))] hover:bg-[hsl(var(--crm-navy-dark))] px-8 py-3" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(var(--crm-navy))] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <Target className="w-5 h-5 text-[hsl(var(--crm-navy))]" />
                </div>
                <h3 className="text-xl font-bold">NEXUS CRM</h3>
              </div>
              <p className="text-gray-300 mb-4">The complete multi-tenant CRM solution for modern businesses.</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-md flex items-center justify-center hover:bg-opacity-30 cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-md flex items-center justify-center hover:bg-opacity-30 cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-md flex items-center justify-center hover:bg-opacity-30 cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="#" className="hover:text-white transition-colors">Pipeline Management</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Marketing Automation</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Sales Tracking</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Customer Support</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Press</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Partners</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">API Reference</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 NEXUS CRM. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}