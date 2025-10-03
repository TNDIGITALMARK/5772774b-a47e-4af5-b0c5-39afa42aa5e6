'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  Settings,
  User,
  Palette,
  Globe,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle,
  Users
} from "lucide-react"
import Link from "next/link"
import { WhiteLabelProvider, useWhiteLabel, tenantConfigs, getTenantConfig } from "@/lib/white-label"

function DemoContent() {
  const config = useWhiteLabel()
  const [selectedTenant, setSelectedTenant] = useState<string>("default")

  const handleTenantChange = (tenantId: string) => {
    setSelectedTenant(tenantId)
    // In a real app, this would trigger a page reload with new tenant config
    console.log("Switching to tenant:", tenantId, getTenantConfig(tenantId))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-[hsl(var(--crm-navy))] text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
              <Target className="w-5 h-5 text-[hsl(var(--crm-navy))]" />
            </div>
            <h1 className="text-2xl font-bold">{config.companyName}</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-gray-200 transition-colors">Home</Link>
            <Link href="/dashboard" className="hover:text-gray-200 transition-colors">Dashboard</Link>
            <Link href="/appointments" className="hover:text-gray-200 transition-colors">Schedule</Link>
            <Link href="/demo" className="text-[hsl(var(--crm-accent))] font-semibold">Demo</Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[hsl(var(--crm-navy))]">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">White-Label Multi-Tenant Demo</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience how the same platform can be completely customized for different brands and clients
          </p>
        </div>

        {/* Tenant Switcher */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Palette className="w-5 h-5" />
                <span>Switch Tenant Configuration</span>
              </CardTitle>
              <CardDescription>
                See how the platform adapts to different client brands and configurations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Select Tenant:</label>
                <Select value={selectedTenant} onValueChange={handleTenantChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default (Nexus CRM)</SelectItem>
                    <SelectItem value="acme-corp">Acme Corp</SelectItem>
                    <SelectItem value="startupx">StartupX</SelectItem>
                    <SelectItem value="ecosolutions">EcoSolutions</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {selectedTenant !== "default" && (
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Tenant Configuration Preview:</h4>
                  <div className="text-sm space-y-1 text-blue-800">
                    {(() => {
                      const tenantConfig = getTenantConfig(selectedTenant)
                      return (
                        <div>
                          <p><strong>Company:</strong> {tenantConfig.companyName}</p>
                          <p><strong>Domain:</strong> {tenantConfig.customDomain}</p>
                          <p><strong>Support:</strong> {tenantConfig.supportEmail}</p>
                          <p><strong>Plan:</strong> {tenantConfig.plan?.toUpperCase()}</p>
                        </div>
                      )
                    })()}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Current Configuration Display */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>Current Brand Configuration</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Company Name:</span>
                <span>{config.companyName}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Support Email:</span>
                <span className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>{config.supportEmail}</span>
                </span>
              </div>

              {config.supportPhone && (
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Support Phone:</span>
                  <span className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{config.supportPhone}</span>
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Plan:</span>
                <Badge className={`${config.plan === 'agency' ? 'bg-purple-100 text-purple-800' :
                                  config.plan === 'pro' ? 'bg-blue-100 text-blue-800' :
                                  'bg-gray-100 text-gray-800'}`}>
                  {config.plan.toUpperCase()}
                </Badge>
              </div>

              {config.customDomain && (
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Custom Domain:</span>
                  <span>{config.customDomain}</span>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Feature Access</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {Object.entries(config.features).map(([feature, enabled]) => (
                <div key={feature} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                  <span className="font-medium capitalize">
                    {feature.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <div className="flex items-center space-x-2">
                    {enabled ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                      </>
                    ) : (
                      <>
                        <div className="w-4 h-4 rounded-full bg-gray-300" />
                        <Badge variant="secondary" className="bg-gray-100 text-gray-600">Disabled</Badge>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Plan Limits */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Plan Limits & Usage</span>
            </CardTitle>
            <CardDescription>
              Current limits based on the {config.plan.toUpperCase()} plan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(config.limits).map(([resource, limit]) => (
                <div key={resource} className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold capitalize text-lg text-gray-900 mb-2">
                    {resource}
                  </h4>
                  <p className="text-2xl font-bold text-[hsl(var(--crm-navy))]">
                    {limit === -1 ? "Unlimited" : limit.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to try the platform?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[hsl(var(--crm-navy))] hover:bg-[hsl(var(--crm-navy-dark))]">
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/appointments">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DemoPage() {
  return (
    <WhiteLabelProvider>
      <DemoContent />
    </WhiteLabelProvider>
  )
}