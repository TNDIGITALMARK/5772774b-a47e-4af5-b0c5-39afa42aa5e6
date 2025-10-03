'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Calendar,
  Clock,
  Phone,
  User,
  Mail,
  Target,
  Settings,
  Plus,
  CheckCircle,
  AlertCircle,
  MapPin,
  Video,
  MessageSquare,
  Filter,
  Download,
  Search
} from "lucide-react"
import Link from "next/link"

export default function AppointmentsPage() {
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [appointmentType, setAppointmentType] = useState<string>("")

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"
  ]

  const upcomingAppointments = [
    {
      id: 1,
      client: "Sarah Johnson",
      phone: "+1 (555) 123-4567",
      type: "Phone Consultation",
      date: "Today",
      time: "2:30 PM",
      status: "confirmed",
      notes: "Follow-up on product demo"
    },
    {
      id: 2,
      client: "Mike Chen",
      phone: "+1 (555) 987-6543",
      type: "Video Call",
      date: "Tomorrow",
      time: "10:00 AM",
      status: "pending",
      notes: "Initial consultation"
    },
    {
      id: 3,
      client: "Emma Williams",
      phone: "+1 (555) 456-7890",
      type: "In-Person Meeting",
      date: "Dec 8",
      time: "3:00 PM",
      status: "confirmed",
      notes: "Contract signing meeting"
    }
  ]

  const handleBookAppointment = () => {
    alert(`Appointment booked for ${selectedDate} at ${selectedTime} with phone: ${phoneNumber}`)
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
            <h1 className="text-2xl font-bold">NEXUS CRM</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-gray-200 transition-colors">Home</Link>
            <Link href="/dashboard" className="hover:text-gray-200 transition-colors">Dashboard</Link>
            <Link href="/appointments" className="text-[hsl(var(--crm-accent))] font-semibold">Schedule</Link>
            <Link href="#" className="hover:text-gray-200 transition-colors">Contacts</Link>
            <Link href="#" className="hover:text-gray-200 transition-colors">Campaigns</Link>
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
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Appointment Scheduler</h1>
            <p className="text-gray-600">Manage and schedule appointments with automated phone integration</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" className="text-[hsl(var(--crm-navy))] border-[hsl(var(--crm-navy))]">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" className="text-[hsl(var(--crm-navy))] border-[hsl(var(--crm-navy))]">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <Tabs defaultValue="schedule" className="space-y-8">
          <TabsList className="grid w-full md:w-auto md:inline-flex grid-cols-3 md:grid-cols-none">
            <TabsTrigger value="schedule">Schedule New</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          {/* Schedule New Appointment */}
          <TabsContent value="schedule" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Booking Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Schedule New Appointment</span>
                  </CardTitle>
                  <CardDescription>
                    Book appointments with automatic phone and SMS confirmation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="clientName">Client Name</Label>
                      <Input id="clientName" placeholder="Enter client name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="client@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="flex space-x-2">
                      <Select>
                        <SelectTrigger className="w-20">
                          <SelectValue placeholder="+1" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="+1">+1</SelectItem>
                          <SelectItem value="+44">+44</SelectItem>
                          <SelectItem value="+91">+91</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        id="phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="(555) 123-4567"
                        className="flex-1"
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      SMS confirmation will be sent to this number
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="appointmentType">Appointment Type</Label>
                    <Select value={appointmentType} onValueChange={setAppointmentType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select appointment type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phone">
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4" />
                            <span>Phone Call</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="video">
                          <div className="flex items-center space-x-2">
                            <Video className="w-4 h-4" />
                            <span>Video Conference</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="inperson">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>In-Person Meeting</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="consultation">
                          <div className="flex items-center space-x-2">
                            <MessageSquare className="w-4 h-4" />
                            <span>Consultation</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Time</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Add any special notes or requirements..."
                      className="min-h-20"
                    />
                  </div>

                  <Button
                    onClick={handleBookAppointment}
                    className="w-full bg-[hsl(var(--crm-navy))] hover:bg-[hsl(var(--crm-navy-dark))]"
                    disabled={!selectedDate || !selectedTime || !phoneNumber}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Appointment
                  </Button>
                </CardContent>
              </Card>

              {/* Phone Integration Features */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Phone className="w-5 h-5" />
                      <span>Phone Integration Features</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Automatic SMS Confirmation</h4>
                        <p className="text-sm text-gray-600">
                          Clients receive instant SMS confirmation with appointment details
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Phone Number Validation</h4>
                        <p className="text-sm text-gray-600">
                          Real-time validation ensures accurate contact information
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Reminder Calls & Texts</h4>
                        <p className="text-sm text-gray-600">
                          Automated reminders sent 24 hours and 1 hour before appointment
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">International Support</h4>
                        <p className="text-sm text-gray-600">
                          Support for international phone numbers and time zones
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Call Recording</h4>
                        <p className="text-sm text-gray-600">
                          Optional call recording for quality and training purposes
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="w-4 h-4 mr-2" />
                      Make Quick Call
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Send SMS
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Plus className="w-4 h-4 mr-2" />
                      Add to CRM
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Upcoming Appointments */}
          <TabsContent value="upcoming" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Upcoming Appointments</h2>
              <div className="flex space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input placeholder="Search appointments..." className="pl-10 w-64" />
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {upcomingAppointments.map((appointment) => (
                <Card key={appointment.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-[hsl(var(--crm-navy))] bg-opacity-10 rounded-full flex items-center justify-center">
                          {appointment.type === "Phone Consultation" && <Phone className="w-5 h-5 text-[hsl(var(--crm-navy))]" />}
                          {appointment.type === "Video Call" && <Video className="w-5 h-5 text-[hsl(var(--crm-navy))]" />}
                          {appointment.type === "In-Person Meeting" && <MapPin className="w-5 h-5 text-[hsl(var(--crm-navy))]" />}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{appointment.client}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <div className="flex items-center space-x-1">
                              <Phone className="w-4 h-4" />
                              <span>{appointment.phone}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{appointment.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{appointment.time}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{appointment.notes}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <Badge
                          variant={appointment.status === "confirmed" ? "default" : "secondary"}
                          className={
                            appointment.status === "confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {appointment.status === "confirmed" && <CheckCircle className="w-3 h-3 mr-1" />}
                          {appointment.status === "pending" && <AlertCircle className="w-3 h-3 mr-1" />}
                          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Phone className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Settings className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Appointment History */}
          <TabsContent value="history" className="space-y-6">
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Appointment History</h3>
              <p className="text-gray-500">
                View and analyze your past appointments and client interactions
              </p>
              <Button className="mt-4 bg-[hsl(var(--crm-navy))] hover:bg-[hsl(var(--crm-navy-dark))]">
                Load History
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Today's Appointments</p>
                  <p className="text-2xl font-bold text-[hsl(var(--crm-navy))]">8</p>
                </div>
                <Calendar className="w-8 h-8 text-[hsl(var(--crm-navy))] opacity-60" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">This Week</p>
                  <p className="text-2xl font-bold text-[hsl(var(--crm-success))]">34</p>
                </div>
                <Clock className="w-8 h-8 text-[hsl(var(--crm-success))] opacity-60" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Show Rate</p>
                  <p className="text-2xl font-bold text-[hsl(var(--crm-accent))]">92%</p>
                </div>
                <CheckCircle className="w-8 h-8 text-[hsl(var(--crm-accent))] opacity-60" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Phone Calls</p>
                  <p className="text-2xl font-bold text-[hsl(var(--crm-warning))]">156</p>
                </div>
                <Phone className="w-8 h-8 text-[hsl(var(--crm-warning))] opacity-60" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}