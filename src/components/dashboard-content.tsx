"use client";

import { useState } from "react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  User, 
  Calendar as CalendarIcon, 
  Settings, 
  FileText, 
  Bell, 
  CreditCard,
  CheckCircle2,
  AlertCircle 
} from "lucide-react";

export function DashboardContent() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Mock data for appointments
  const upcomingAppointments = [
    {
      id: 1,
      date: "2025-04-15",
      time: "10:00 AM",
      duration: "2 hours",
      service: "Weekly Check-in",
      caregiver: "Eleanor Wilson",
      status: "confirmed"
    },
    {
      id: 2,
      date: "2025-04-18",
      time: "2:30 PM",
      duration: "1 hour",
      service: "Doctor Appointment",
      caregiver: "Marcus Johnson",
      status: "confirmed"
    },
    {
      id: 3,
      date: "2025-04-22",
      time: "9:00 AM",
      duration: "3 hours",
      service: "Home Cleaning",
      caregiver: "Sophia Chen",
      status: "pending"
    }
  ];

  // Mock data for care plans
  const carePlan = {
    tier: "Comprehensive Care",
    nextRenewal: "May 15, 2025",
    weeklyHours: 12,
    primaryCaregiver: "Eleanor Wilson",
    secondaryCaregiver: "Robert James"
  };

  // Mock data for invoices
  const recentInvoices = [
    {
      id: "INV-2025-001",
      date: "Apr 01, 2025",
      amount: "$1,299.00",
      status: "paid"
    },
    {
      id: "INV-2025-002",
      date: "Mar 01, 2025",
      amount: "$1,299.00",
      status: "paid"
    },
    {
      id: "INV-2025-003",
      date: "Feb 01, 2025",
      amount: "$1,299.00",
      status: "paid"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome</h1>
            <p className="text-muted-foreground">Manage your care services and appointments</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="care-plan">Care Plan</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Current Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{carePlan.tier}</div>
                  <p className="text-xs text-muted-foreground">
                    Renews on {carePlan.nextRenewal}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Weekly Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{carePlan.weeklyHours} hours</div>
                  <p className="text-xs text-muted-foreground">
                    4 hours used this week
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Next Appointment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Apr 15, 10:00 AM</div>
                  <p className="text-xs text-muted-foreground">
                    Weekly Check-in with Eleanor
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Payment Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-500">Current</div>
                  <p className="text-xs text-muted-foreground">
                    Last payment: Apr 01, 2025
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Upcoming Appointments</CardTitle>
                  <CardDescription>
                    Your scheduled care services for the next two weeks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingAppointments.map((appointment) => (
                      <div key={appointment.id} className="flex items-start gap-4 p-4 border rounded-lg">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{appointment.service}</p>
                            <Badge variant={appointment.status === "confirmed" ? "default" : "outline"}>
                              {appointment.status === "confirmed" ? "Confirmed" : "Pending"}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CalendarIcon className="h-4 w-4" />
                            <span>{appointment.date}, {appointment.time} ({appointment.duration})</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="h-4 w-4" />
                            <span>Caregiver: {appointment.caregiver}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full mt-2">View All Appointments</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Calendar</CardTitle>
                  <CardDescription>
                    View and manage your schedule
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Care Team</CardTitle>
                  <CardDescription>
                    Your assigned caregivers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                      <div>
                        <p className="font-medium">{carePlan.primaryCaregiver}</p>
                        <p className="text-sm text-muted-foreground">Primary Caregiver</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                      <div>
                        <p className="font-medium">{carePlan.secondaryCaregiver}</p>
                        <p className="text-sm text-muted-foreground">Secondary Caregiver</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-2">Contact Care Team</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Invoices</CardTitle>
                  <CardDescription>
                    Your payment history
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentInvoices.map((invoice) => (
                      <div key={invoice.id} className="flex items-center justify-between p-2">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="font-medium">{invoice.id}</p>
                            <p className="text-xs text-muted-foreground">{invoice.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{invoice.amount}</p>
                          {invoice.status === "paid" ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-amber-500" />
                          )}
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full mt-2">View All Invoices</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="appointments">
            <Card>
              <CardHeader>
                <CardTitle>Appointments Management</CardTitle>
                <CardDescription>
                  Schedule, view, and manage all your care appointments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">Appointment management coming soon</p>
                  <Button>Schedule New Appointment</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="care-plan">
            <Card>
              <CardHeader>
                <CardTitle>Care Plan Details</CardTitle>
                <CardDescription>
                  View and manage your current care plan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">Care plan management coming soon</p>
                  <Button>Modify Care Plan</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="billing">
            <Card>
              <CardHeader>
                <CardTitle>Billing & Payment</CardTitle>
                <CardDescription>
                  Manage your payment methods and view invoice history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">Payment methods coming soon</p>
                  <Button className="flex items-center">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Add Payment Method
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}