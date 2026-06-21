"use client";

import { notificationsData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, CheckCircle2, AlertTriangle, Info, Star } from "lucide-react";

const typeConfig: Record<string, { color: string; icon: typeof Bell; label: string }> = {
  info: { color: "bg-blue-100 text-blue-700", icon: Info, label: "Info" },
  positive: { color: "bg-green-100 text-green-700", icon: Star, label: "Positive" },
  reminder: { color: "bg-orange-100 text-orange-700", icon: Bell, label: "Reminder" },
  warning: { color: "bg-red-100 text-red-700", icon: AlertTriangle, label: "Action Needed" },
};

export default function NotificationsPage() {
  const sorted = [...notificationsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
          <p className="text-gray-500 text-sm mt-1">
            {notificationsData.filter((n) => !n.read).length} unread •{" "}
            {notificationsData.filter((n) => n.actionable).length} require action
          </p>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="divide-y">
            {sorted.map((notif) => {
              const config = typeConfig[notif.type] || typeConfig.info;
              const Icon = config.icon;
              return (
                <div
                  key={notif.id}
                  className={`flex items-start gap-4 p-4 transition-colors ${
                    !notif.read ? "bg-blue-50/50" : "hover:bg-gray-50"
                  }`}
                >
                  <div className={`p-2 rounded-lg shrink-0 ${config.color.split(" ")[0]}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className={`font-medium ${!notif.read ? "text-gray-900" : "text-gray-600"}`}>
                        {notif.title}
                      </p>
                      {!notif.read && (
                        <span className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                      )}
                      <Badge className={config.color}>{config.label}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">{notif.message}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <p className="text-xs text-gray-400">{notif.date}</p>
                      {notif.actionable && (
                        <span className="text-xs text-orange-600 font-medium">
                          ⚡ Action required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="shrink-0">
                    {notif.read ? (
                      <CheckCircle2 className="h-4 w-4 text-gray-300" />
                    ) : (
                      <Bell className="h-4 w-4 text-blue-500" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
