"use client";

import { useState, useEffect } from "react";
import { AdminLogin } from "@/components/admin/admin-login";
import { AdminDashboard } from "@/components/admin/admin-dashboard";
import type { AdminDashboardData } from "@/lib/types/database";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<AdminDashboardData | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  // Check if already logged in on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/admin/responses");
        if (res.ok) {
          setIsAuthenticated(true);
          const data = await res.json();
          setDashboardData(data);
        }
      } catch {
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogin = async (password: string) => {
    setError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        setError("Invalid password");
        return;
      }

      setIsAuthenticated(true);

      // Fetch dashboard data after login
      const dataRes = await fetch("/api/admin/responses");
      if (dataRes.ok) {
        const data = await dataRes.json();
        setDashboardData(data);
      }
    } catch {
      setError("Unable to connect to the server");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setDashboardData(null);
    // Clear cookie by calling logout endpoint if needed
    fetch("/api/admin/logout", { method: "POST" }).catch(() => {});
  };

  const handleRefresh = async () => {
    try {
      const res = await fetch("/api/admin/responses");
      if (res.ok) {
        const data = await res.json();
        setDashboardData(data);
      }
    } catch {
      setError("Failed to refresh data");
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-champagne-dark border-t-burgundy" />
          <p className="mt-4 font-playfair text-lg text-text-light">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} error={error} />;
  }

  return (
    <AdminDashboard
      data={dashboardData}
      onLogout={handleLogout}
      onRefresh={handleRefresh}
    />
  );
}
