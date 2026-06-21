"use client";

import { outreachData, calendarData, notificationsData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Send, CheckCircle2, Calendar, Bell, TrendingUp } from "lucide-react";

export default function DashboardPage() {
  const totalSent = outreachData.length;
  const responded = outreachData.filter((o) => o.status === "responded").length;
  const responseRate = totalSent > 0 ? ((responded / totalSent) * 100).toFixed(1) : "0";
  const upcomingDeadlines = calendarData.filter(
    (c) => new Date(c.date) >= new Date()
  ).length;
  const unreadNotifs = notificationsData.filter((n) => !n.read).length;

  const stats = [
    { label: "Emails Sent", value: totalSent, icon: Send, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Responses", value: responded, icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50" },
    { label: "Response Rate", value: `${responseRate}%`, icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Upcoming Deadlines", value: upcomingDeadlines, icon: Calendar, color: "text-orange-600", bg: "bg-orange-50" },
    { label: "Unread Alerts", value: unreadNotifs, icon: Bell, color: "text-red-600", bg: "bg-red-50" },
  ];

  const recentResponses = outreachData
    .filter((o) => o.status === "responded")
    .slice(0, 5);

  const upcomingEvents = calendarData
    .filter((c) => new Date(c.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 4);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
        <p className="text-gray-500 text-sm mt-1">
          PhD Outreach — Manufacturing, Fluids, Materials, Thermo, Aero
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${stat.bg}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Recent Responses */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Professor Responses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentResponses.map((r) => (
                <div key={r.sno} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900">{r.name}</p>
                    <p className="text-xs text-gray-500">{r.university} • {r.responseDate}</p>
                    <p className="text-xs text-gray-600 mt-1 truncate">{r.responseSummary}</p>
                  </div>
                  <Badge variant="outline" className="shrink-0 text-xs">
                    {r.status}
                  </Badge>
                </div>
              ))}
              {recentResponses.length === 0 && (
                <p className="text-sm text-gray-400 text-center py-4">No responses yet</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Calendar */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Upcoming Deadlines & Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                  <Calendar className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900">{event.title}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                    <p className="text-xs text-gray-600 mt-1 truncate">{event.description}</p>
                  </div>
                </div>
              ))}
              {upcomingEvents.length === 0 && (
                <p className="text-sm text-gray-400 text-center py-4">No upcoming events</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
