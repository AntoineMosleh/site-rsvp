import { createHash } from "crypto";

const SALT = "wedding-rsvp-admin";

export function generateToken(): string {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) throw new Error("ADMIN_PASSWORD not configured");
  return createHash("sha256").update(password + SALT).digest("hex");
}

export function verifyToken(token: string): boolean {
  try {
    return token === generateToken();
  } catch {
    return false;
  }
}
