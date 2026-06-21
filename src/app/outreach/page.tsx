"use client";

import { useState } from "react";
import { outreachData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function OutreachPage() {
  const [search, setSearch] = useState("");

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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
