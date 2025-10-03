import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  TrendingUp,
  Users,
  Calendar,
  Target,
  Phone,
  Mail,
  ArrowUp,
  ArrowDown,
  Zap,
  BarChart3,
  MessageSquare,
  Settings,
  Plus,
  Play,
  Pause,
  MoreHorizontal
} from "lucide-react"
import Link from "next/link"

export const dynamic = 'force-dynamic'

export default function DashboardPage() {
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
            <Link href="/" className="hover:text-gray-200 transition-colors">Home</Link>
            <Link href="/dashboard" className="text-[hsl(var(--crm-accent))] font-semibold">Dashboard</Link>
            <Link href="/appointments" className="hover:text-gray-200 transition-colors">Schedule</Link>
            <Link href="#" className="hover:text-gray-200 transition-colors">Contacts</Link>
            <Link href="#" className="hover:text-gray-200 transition-colors">Campaigns</Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[hsl(var(--crm-navy))]">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section with Main CTA */}
        <div className="bg-gradient-to-r from-[hsl(var(--crm-navy))] to-[hsl(var(--crm-navy-dark))] text-white rounded-2xl p-8 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back to your Command Center</h1>
              <p className="text-gray-200 text-lg mb-4">Manage your business with AI-powered automation and insights</p>
            </div>
            <Button className="bg-[hsl(var(--crm-accent))] text-black hover:brightness-90 px-6 py-3">
              <Plus className="w-4 h-4 mr-2" />
              Create Campaign
            </Button>
          </div>
        </div>

        {/* Unified Command Center Metrics */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Unified Command Center</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pipeline Conversion */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pipeline Conversion</CardTitle>
                <div className="w-8 h-8 bg-[hsl(var(--crm-navy))] rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[hsl(var(--crm-navy))]">78%</div>
                <div className="flex items-center space-x-2 mt-2">
                  <ArrowUp className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-green-500">+12% from last month</span>
                </div>
                <Progress value={78} className="mt-3" />
              </CardContent>
            </Card>

            {/* Active Campaigns */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                <div className="w-8 h-8 bg-[hsl(var(--crm-success))] rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[hsl(var(--crm-success))]">1,200</div>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-xs text-gray-500">42% Email Opened</span>
                </div>
                <div className="mt-3 space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Email</span>
                    <span>850</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>SMS</span>
                    <span>350</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Appointment Bookings */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Appointment Bookings</CardTitle>
                <div className="w-8 h-8 bg-[hsl(var(--crm-accent))] rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-black" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[hsl(var(--crm-accent))]">2,500+</div>
                <div className="flex items-center space-x-2 mt-2">
                  <ArrowUp className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-green-500">+8% this week</span>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span>This Month</span>
                    <span>2,500</span>
                  </div>
                  <Progress value={85} />
                </div>
              </CardContent>
            </Card>

            {/* SMS Sent */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">SMS Sent</CardTitle>
                <div className="w-8 h-8 bg-[hsl(var(--crm-warning))] rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-black" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[hsl(var(--crm-warning))]">1,200</div>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-xs text-gray-500">45% Response Rate</span>
                </div>
                <div className="mt-3">
                  <Badge variant="secondary" className="text-xs">Active</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Intelligent Workflow Automation */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Intelligent Workflow Automation</h2>
            <Button variant="outline" className="text-[hsl(var(--crm-navy))] border-[hsl(var(--crm-navy))]">
              <Plus className="w-4 h-4 mr-2" />
              New Workflow
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Workflow Builder Visual */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Active Workflow</CardTitle>
                <CardDescription>Lead nurturing automation with AI optimization</CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-4">
                  {/* Workflow Nodes */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">New Lead</div>
                        <div className="text-xs text-gray-500">Trigger: Form submission</div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-px h-6 bg-gray-300"></div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">AI Score</div>
                        <div className="text-xs text-gray-500">Lead qualification scoring</div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">AI</Badge>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-px h-6 bg-gray-300"></div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Send SMS</div>
                        <div className="text-xs text-gray-500">Personalized follow-up</div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">Scheduled</Badge>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6 pt-4 border-t">
                  <div className="text-sm text-gray-600">
                    <strong>Performance:</strong> 23% conversion rate
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Pause className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Automation Performance */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Automation Performance</CardTitle>
                <CardDescription>Real-time insights and AI recommendations</CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Email Open Rate</span>
                      <span className="text-sm text-gray-600">42%</span>
                    </div>
                    <Progress value={42} className="h-2" />
                    <div className="flex items-center space-x-1 mt-1">
                      <ArrowUp className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-green-500">+5% vs industry avg</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">SMS Response Rate</span>
                      <span className="text-sm text-gray-600">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                    <div className="flex items-center space-x-1 mt-1">
                      <ArrowUp className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-green-500">+12% this month</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Lead Conversion</span>
                      <span className="text-sm text-gray-600">23%</span>
                    </div>
                    <Progress value={23} className="h-2" />
                    <div className="flex items-center space-x-1 mt-1">
                      <ArrowDown className="w-3 h-3 text-red-500" />
                      <span className="text-xs text-red-500">-2% needs optimization</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900 text-sm">AI Recommendation</h4>
                        <p className="text-xs text-blue-800 mt-1">
                          Consider adding a 2-day delay before the SMS follow-up to improve response rates by an estimated 15%.
                        </p>
                        <Button size="sm" className="mt-2 bg-blue-600 hover:bg-blue-700 text-white">
                          Apply Suggestion
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Activity & Multi-Tenant Overview */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates across all your campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Campaign "Summer Sale" achieved 78% open rate</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">150 new leads added to nurture sequence</p>
                    <p className="text-xs text-gray-500">4 hours ago</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">25 appointments scheduled automatically</p>
                    <p className="text-xs text-gray-500">6 hours ago</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">AI optimized workflow "Lead Nurture v2"</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Multi-Tenant Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Multi-Tenant Overview</CardTitle>
              <CardDescription>Performance across all your brands</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">A</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Acme Corp</p>
                      <p className="text-xs text-gray-500">Primary Brand</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-green-600">+23%</p>
                    <p className="text-xs text-gray-500">Conversion</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">StartupX</p>
                      <p className="text-xs text-gray-500">White-label Client</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-green-600">+18%</p>
                    <p className="text-xs text-gray-500">Growth</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">E</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">EcoSolutions</p>
                      <p className="text-xs text-gray-500">Custom Domain</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-blue-600">+31%</p>
                    <p className="text-xs text-gray-500">Engagement</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-4">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Brand
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}