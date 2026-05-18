import Image from "next/image";
import { CreditCard, Heart, Mail, Smartphone } from "lucide-react";

export function WeddingListSection() {
  return (
    <section className="bg-champagne-dark px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-vibes text-4xl text-burgundy md:text-5xl">
          Wedding List
        </h2>

        <p className="mt-6 leading-relaxed text-text-dark">
          Contribute to Our Happiness. We have created a special wedding
          registry so that you can contribute to our new chapter in life. Every
          gift is a blessing and a token of affection that we will cherish
          forever.
        </p>

        <div className="mt-10 grid gap-6 text-left md:grid-cols-2">
          <div className="rounded-2xl border border-burgundy/20 bg-white/70 p-6 shadow-sm backdrop-blur-sm">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-burgundy/10 px-3 py-1">
              <CreditCard className="h-4 w-4 text-burgundy" />
              <span className="text-sm font-semibold text-burgundy">Whish Transfer</span>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl bg-champagne/70 p-4">
                <p className="text-xs uppercase tracking-wide text-text-light">Bride/Groom Phone</p>
                <p className="mt-1 font-playfair text-lg text-text-dark">+96176605676</p>
              </div>

              <div className="rounded-xl bg-champagne/70 p-4">
                <p className="text-xs uppercase tracking-wide text-text-light">Account ID</p>
                <p className="mt-1 break-all font-playfair text-lg text-text-dark">30758623-03</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-burgundy/20 bg-white/70 p-6 shadow-sm backdrop-blur-sm">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1">
              <Heart className="h-4 w-4 text-burgundy" />
              <span className="text-sm font-semibold text-burgundy">PayPal Details</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-xl bg-champagne/70 p-4">
                <Mail className="mt-0.5 h-4 w-4 text-burgundy" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-text-light">Email</p>
                  <p className="mt-1 break-all font-medium text-text-dark">dantehourani@icloud.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-champagne/70 p-4">
                <Smartphone className="mt-0.5 h-4 w-4 text-burgundy" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-text-light">Phone Number</p>
                  <p className="mt-1 font-medium text-text-dark">+33 7 66765891</p>
                </div>
              </div>

              <div className="rounded-xl bg-cream p-4">
                <p className="mb-3 text-center text-xs uppercase tracking-wide text-text-light">Scan PayPal QR Code</p>
                <div className="mx-auto w-full max-w-[180px] overflow-hidden rounded-lg border border-champagne-dark bg-white p-2 shadow-sm">
                  <Image
                    src="/photos/paypalDante.png"
                    alt="PayPal QR code for Dante"
                    width={180}
                    height={180}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
