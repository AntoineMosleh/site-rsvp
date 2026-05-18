import { Heart } from "lucide-react";

export function WeddingListSection() {
  const paypalLink = process.env.NEXT_PUBLIC_PAYPAL_LINK || "#";

  return (
    <section className="bg-champagne-dark px-6 py-16 md:py-24">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-vibes text-4xl text-burgundy md:text-5xl">
          Wedding List
        </h2>

        <p className="mt-6 leading-relaxed text-text-dark">
          Contribute to Our Happiness. We have created a special wedding
          registry so that you can contribute to our new chapter in life. Every
          gift is a blessing and a token of affection that we will cherish
          forever.
        </p>

        <a
          href={paypalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-burgundy px-8 py-3 font-medium text-white transition-colors hover:bg-burgundy-dark"
        >
          <Heart className="h-5 w-5" />
          Contribute via PayPal
        </a>
      </div>
    </section>
  );
}
