"use client";

import { useState } from "react";
import { outreachData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Mail, Send, X, Loader2 } from "lucide-react";

export default function OutreachPage() {
  const [search, setSearch] = useState("");
  const [composeOpen, setComposeOpen] = useState(false);
  const [composeTo, setComposeTo] = useState("");
  const [composeName, setComposeName] = useState("");
  const [composeSubject, setComposeSubject] = useState("");
  const [composeBody, setComposeBody] = useState("");
  const [sending, setSending] = useState(false);
  const [sendResult, setSendResult] = useState<{ ok: boolean; msg: string } | null>(null);

  const filtered = outreachData.filter(
    (o) =>
      o.name.toLowerCase().includes(search.toLowerCase()) ||
      o.university.toLowerCase().includes(search.toLowerCase()) ||
      o.researchFocus.toLowerCase().includes(search.toLowerCase())
  );

  const statusColor = (status: string) => {
    switch (status) {
      case "responded": return "bg-green-100 text-green-700";
      case "followed_up": return "bg-blue-100 text-blue-700";
      case "declined": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  const openCompose = (name: string, email: string) => {
    setComposeName(name);
    setComposeTo(email);
    setComposeSubject(`PhD Inquiry — ${name.split(" ").pop() || ""} Lab`);
    setComposeBody(`Dear Prof. ${name.split(" ").pop()},\n\n`);
    setComposeOpen(true);
    setSendResult(null);
  };

  const handleSend = async () => {
    setSending(true);
    setSendResult(null);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: composeTo,
          subject: composeSubject,
          body: composeBody,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setSendResult({ ok: true, msg: `Email sent to ${composeName}! (ID: ${data.messageId})` });
        setTimeout(() => setComposeOpen(false), 2000);
      } else {
        setSendResult({ ok: false, msg: data.error || "Failed to send" });
      }
    } catch (err: any) {
      setSendResult({ ok: false, msg: err.message || "Network error" });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Outreach Tracker</h2>
          <p className="text-gray-500 text-sm mt-1">
            {outreachData.length} professors contacted •{" "}
            {outreachData.filter((o) => o.status === "responded").length} responded
          </p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search professors..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left px-4 py-3 font-medium text-gray-600">#</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Professor</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600 hidden md:table-cell">University</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600 hidden lg:table-cell">Research</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600 hidden sm:table-cell">Sent</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Status</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600 hidden xl:table-cell">Response</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((entry) => (
                  <tr key={entry.sno} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-500">{entry.sno}</td>
                    <td className="px-4 py-3">
                      <p className="font-medium text-gray-900">{entry.name}</p>
                      <p className="text-xs text-gray-400">{entry.email}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{entry.university}</td>
                    <td className="px-4 py-3 text-gray-600 hidden lg:table-cell max-w-[200px] truncate">{entry.researchFocus}</td>
                    <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{entry.dateSent}</td>
                    <td className="px-4 py-3">
                      <Badge className={statusColor(entry.status)}>
                        {entry.status === "responded" ? "Replied" : entry.status === "followed_up" ? "Followed Up" : entry.status === "declined" ? "No Go" : "Sent"}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-500 hidden xl:table-cell max-w-[250px] truncate">
                      {entry.responseSummary || "—"}
                    </td>
                    <td className="px-4 py-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 text-xs gap-1"
                        onClick={() => openCompose(entry.name, entry.email)}
                      >
                        <Mail className="h-3 w-3" />
                        Email
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Email Compose Modal */}
      {composeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <div>
                <h3 className="font-semibold text-gray-900">Send Email</h3>
                <p className="text-xs text-gray-500">
                  To: {composeName} ({composeTo})
                </p>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setComposeOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 overflow-auto p-5 space-y-4">
              <div>
                <label className="text-xs font-medium text-gray-500">Subject</label>
                <Input
                  value={composeSubject}
                  onChange={(e) => setComposeSubject(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-500">Body</label>
                <textarea
                  value={composeBody}
                  onChange={(e) => setComposeBody(e.target.value)}
                  rows={10}
                  className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              {sendResult && (
                <div
                  className={`text-sm px-3 py-2 rounded-lg ${
                    sendResult.ok
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {sendResult.msg}
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 px-5 py-4 border-t bg-gray-50 rounded-b-xl">
              <Button variant="outline" size="sm" onClick={() => setComposeOpen(false)}>
                Cancel
              </Button>
              <Button
                size="sm"
                className="gap-2"
                onClick={handleSend}
                disabled={sending || !composeSubject || !composeBody}
              >
                {sending ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Send className="h-3.5 w-3.5" />
                )}
                {sending ? "Sending..." : "Send"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
