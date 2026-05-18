import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      <h1 className="font-playfair text-4xl font-bold text-text-dark md:text-5xl">
        Marie & Dante
      </h1>
      <p className="mt-4 max-w-md text-lg text-text-light">
        Please use your personalized invitation link to access the wedding
        details and RSVP.
      </p>
      <Link
        href="/rsvp/Mosleh"
        className="mt-8 text-sm text-burgundy underline underline-offset-4 hover:text-burgundy-dark"
      >
        Example: Mosleh Family
      </Link>
    </div>
  );
}
