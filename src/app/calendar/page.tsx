"use client";

import { calendarData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Mail, Bell } from "lucide-react";

const typeConfig: Record<string, { color: string; icon: typeof Calendar }> = {
  follow_up: { color: "bg-blue-100 text-blue-700", icon: Mail },
  deadline: { color: "bg-red-100 text-red-700", icon: Clock },
  action: { color: "bg-orange-100 text-orange-700", icon: Bell },
  reminder: { color: "bg-purple-100 text-purple-700", icon: Calendar },
};

export default function CalendarPage() {
  const sorted = [...calendarData].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const upcoming = sorted.filter((e) => new Date(e.date) >= new Date());
  const past = sorted.filter((e) => new Date(e.date) < new Date());

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Calendar & Deadlines</h2>
        <p className="text-gray-500 text-sm mt-1">
          Follow-ups, application deadlines, and action items
        </p>
      </div>

      {/* Upcoming */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5 text-orange-500" />
            Upcoming ({upcoming.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcoming.map((event) => {
              const config = typeConfig[event.type] || typeConfig.reminder;
              return (
                <div
                  key={event.id}
                  className="flex items-start gap-4 p-4 rounded-lg border hover:bg-gray-50 transition-colors"
                >
                  <div className="text-center shrink-0 w-14">
                    <p className="text-xs font-medium text-gray-500 uppercase">
                      {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {new Date(event.date).getDate()}
                    </p>
                    <p className="text-xs text-gray-400">
                      {new Date(event.date).toLocaleDateString("en-US", { weekday: "short" })}
                    </p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-gray-900">{event.title}</p>
                      <Badge className={config.color}>{event.type.replace("_", " ")}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">{event.description}</p>
                    {event.professor && (
                      <p className="text-xs text-gray-400 mt-1">
                        Professor: {event.professor}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
            {upcoming.length === 0 && (
              <p className="text-sm text-gray-400 text-center py-8">No upcoming events</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Past */}
      {past.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-gray-500">Past Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {past.map((event) => (
                <div key={event.id} className="flex items-center gap-3 text-sm text-gray-400 p-2">
                  <span className="w-20 shrink-0">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="truncate">{event.title}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
