"use client";

import { useState, useMemo } from "react";
import { LogOut, RefreshCw, Search } from "lucide-react";
import type { AdminDashboardData } from "@/lib/types/database";
import { ResponseCard } from "./response-card";

interface AdminDashboardProps {
  data: AdminDashboardData | null;
  onLogout: () => void;
  onRefresh: () => Promise<void>;
}

export function AdminDashboard({
  data,
  onLogout,
  onRefresh,
}: Readonly<AdminDashboardProps>) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const filteredResponses = useMemo(() => {
    if (!data?.responses) return [];
    if (!searchQuery.trim()) return data.responses;

    const query = searchQuery.toLowerCase();
    return data.responses.filter((r) =>
      r.family_name.toLowerCase().includes(query)
    );
  }, [data?.responses, searchQuery]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await onRefresh();
    } finally {
      setIsRefreshing(false);
    }
  };

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream">
        <p className="text-text-light">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b border-champagne-dark bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <h1 className="font-playfair text-2xl font-bold text-burgundy md:text-3xl">
              Wedding RSVP Monitoring
            </h1>
            <div className="flex gap-2">
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="flex items-center gap-2 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-text-dark transition-colors hover:bg-yellow-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <RefreshCw
                  className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`}
                />
                Refresh
              </button>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 rounded-lg bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 transition-colors hover:bg-red-200"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Statistics Grid */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatisticCard
            title="Total Families"
            value={data.statistics.total_families}
            color="bg-blue-50 text-blue-700"
          />
          <StatisticCard
            title="Responses"
            value={data.statistics.total_responses}
            color="bg-green-50 text-green-700"
          />
          <StatisticCard
            title="Church Attendees"
            value={data.statistics.church_attendees}
            color="bg-purple-50 text-purple-700"
          />
          <StatisticCard
            title="Restaurant Attendees"
            value={data.statistics.restaurant_attendees}
            color="bg-orange-50 text-orange-700"
          />
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-light" />
            <input
              type="text"
              placeholder="Search by family name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-champagne-dark bg-white pl-12 pr-4 py-3 text-text-dark placeholder:text-text-light/60 focus:border-burgundy focus:outline-none focus:ring-1 focus:ring-burgundy"
            />
          </div>
        </div>

        {/* Responses List */}
        <div className="space-y-4">
          <h2 className="font-playfair text-xl font-bold text-text-dark">
            Responses ({filteredResponses.length})
          </h2>

          {filteredResponses.length === 0 ? (
            <div className="rounded-lg border border-champagne-dark bg-white p-8 text-center text-text-light">
              {searchQuery ? "No families found matching your search." : "No responses yet."}
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredResponses.map((response) => (
                <ResponseCard key={response.id} response={response} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface StatisticCardProps {
  title: string;
  value: number;
  color: string;
}

function StatisticCard({ title, value, color }: Readonly<StatisticCardProps>) {
  return (
    <div className={`rounded-lg p-6 ${color}`}>
      <p className="text-sm font-medium opacity-75">{title}</p>
      <p className="mt-2 font-playfair text-3xl font-bold">{value}</p>
    </div>
  );
}
