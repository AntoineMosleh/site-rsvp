"use client";

import { useState } from "react";
import { Lock } from "lucide-react";

interface AdminLoginProps {
  onLogin: (password: string) => Promise<void>;
  error?: string | null;
}

export function AdminLogin({ onLogin, error }: Readonly<AdminLoginProps>) {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onLogin(password);
      setPassword("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Lock className="h-6 w-6 text-burgundy" />
          <h1 className="font-playfair text-2xl font-bold text-burgundy">
            Admin Panel
          </h1>
        </div>

        <p className="mb-6 text-center text-text-light">
          Wedding RSVP Monitoring Dashboard
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="password"
              className="mb-2 block font-playfair text-sm font-semibold text-text-dark"
            >
              Admin Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full rounded-lg border border-champagne-dark bg-champagne px-4 py-3 text-text-dark placeholder:text-text-light/50 focus:border-burgundy focus:outline-none focus:ring-1 focus:ring-burgundy"
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || !password}
            className="w-full rounded-lg bg-burgundy py-3 font-playfair font-semibold text-white transition-colors hover:bg-burgundy-dark disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? "Authenticating..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-text-light">
          © 2026 Marie & Dante Wedding
        </p>
      </div>
    </div>
  );
}
