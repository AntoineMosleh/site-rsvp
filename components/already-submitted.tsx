import { CheckCircle } from "lucide-react";
import Link from "next/link";

export function AlreadySubmitted() {
  return (
    <div className="mx-auto max-w-md text-center">
      <CheckCircle className="mx-auto h-16 w-16 text-green-600" />
      <h2 className="mt-4 font-playfair text-2xl font-bold text-text-dark">
        Response Already Submitted
      </h2>
      <p className="mt-4 text-text-light">
        Thank you! Your response has already been recorded. If you need to
        change your response, please contact Marie or Dante directly.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-full bg-burgundy px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-burgundy-dark"
      >
        Back to Home
      </Link>
    </div>
  );
}
