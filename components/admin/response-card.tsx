"use client";

import { Check, X } from "lucide-react";
import type { DashboardResponse } from "@/lib/types/database";
import { formatDate } from "@/lib/utils";

interface ResponseCardProps {
  response: DashboardResponse;
}

export function ResponseCard({ response }: Readonly<ResponseCardProps>) {
  const churchAttending = response.members.filter((m) => m.church).length;
  const churchTotal = response.members.length;
  const restaurantAttending = response.members.filter(
    (m) => m.restaurant
  ).length;
  const restaurantTotal = response.members.length;

  return (
    <div className="overflow-hidden rounded-lg border border-champagne-dark bg-white shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="border-b border-champagne-dark bg-gradient-to-r from-champagne to-champagne-dark px-6 py-4">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <h3 className="font-playfair text-xl font-bold text-burgundy">
            {response.family_name}
          </h3>
          <p className="text-sm text-text-light">
            Submitted: {formatDate(new Date(response.submitted_at))}
          </p>
        </div>
      </div>

      {/* Body - Mobile Stack, Desktop Grid */}
      <div className="px-6 py-4">
        {/* Summary Cards */}
        <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          <SummaryBadge
            label="Church Attending"
            value={churchAttending}
            total={churchTotal}
            color="bg-purple-50 text-purple-700"
          />
          <SummaryBadge
            label="Not Attending Church"
            value={churchTotal - churchAttending}
            total={churchTotal}
            color="bg-red-50 text-red-600"
          />
          <SummaryBadge
            label="Restaurant Attending"
            value={restaurantAttending}
            total={restaurantTotal}
            color="bg-green-50 text-green-700"
          />
          <SummaryBadge
            label="Not Attending Restaurant"
            value={restaurantTotal - restaurantAttending}
            total={restaurantTotal}
            color="bg-red-50 text-red-600"
          />
        </div>

        {/* Members Table */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-text-dark">Family Members</h4>

          {/* Desktop Table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-champagne">
                  <th className="px-3 py-2 text-left font-semibold text-text-dark">
                    Name
                  </th>
                  <th className="px-3 py-2 text-center font-semibold text-text-dark">
                    Church
                  </th>
                  <th className="px-3 py-2 text-center font-semibold text-text-dark">
                    Restaurant
                  </th>
                </tr>
              </thead>
              <tbody>
                {response.members.map((member) => (
                  <tr
                    key={member.id}
                    className="border-b border-champagne last:border-b-0"
                  >
                    <td className="px-3 py-2 text-text-dark">
                      {member.first_name}
                    </td>
                    <td className="px-3 py-2 text-center">
                      <AttendanceIndicator attending={member.church} />
                    </td>
                    <td className="px-3 py-2 text-center">
                      <AttendanceIndicator attending={member.restaurant} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stack */}
          <div className="space-y-2 md:hidden">
            {response.members.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between rounded-lg border border-champagne-dark bg-cream px-3 py-2"
              >
                <span className="font-medium text-text-dark">
                  {member.first_name}
                </span>
                <div className="flex gap-3">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs text-text-light">Church</span>
                    <AttendanceIndicator attending={member.church} />
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs text-text-light">Restaurant</span>
                    <AttendanceIndicator attending={member.restaurant} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface AttendanceIndicatorProps {
  attending: boolean;
}

function AttendanceIndicator({ attending }: Readonly<AttendanceIndicatorProps>) {
  return attending ? (
    <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
      <Check className="h-4 w-4 text-green-700" />
      <span className="text-xs font-semibold text-green-700">Yes</span>
    </div>
  ) : (
    <div className="flex items-center gap-1 rounded-full bg-red-100 px-2 py-1">
      <X className="h-4 w-4 text-red-600" />
      <span className="text-xs font-semibold text-red-600">No</span>
    </div>
  );
}

interface SummaryBadgeProps {
  label: string;
  value: number;
  total: number;
  color: string;
}

function SummaryBadge({
  label,
  value,
  total,
  color,
}: Readonly<SummaryBadgeProps>) {
  const percentage = ((value / total) * 100).toFixed(0);
  return (
    <div className={`rounded-lg p-3 ${color}`}>
      <p className="text-xs font-medium opacity-75">{label}</p>
      <p className="mt-1 text-lg font-bold">
        {value}/{total}
      </p>
      <p className="text-xs opacity-60">{percentage}%</p>
    </div>
  );
}
