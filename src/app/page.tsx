import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/content/assets";

export const metadata: Metadata = {
  title: "NeoAxis Health — Homepage Demo Concepts",
  description:
    "Two homepage redesign concepts for Neo Axis Health Private Limited. Choose between NeoAxis Precision and Medicine with a Cause.",
};

export default function DemoSelector() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        <div className="text-center mb-16">
          <Image
            src={assets.logo.src}
            alt={assets.logo.alt}
            width={260}
            height={58}
            className="mx-auto mb-10"
            priority
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark mb-4">
            Homepage Redesign Concepts
          </h1>
          <p className="text-gray-medium text-lg max-w-lg mx-auto leading-relaxed">
            Two distinct design directions for the NeoAxis Health website.
            Select a concept to preview.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl w-full">
          {/* Concept A */}
          <Link
            href="/demo/neoaxis-precision"
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="relative h-56 lg:h-64 bg-navy-dark overflow-hidden">
              <Image
                src={assets.heroPhoto.src}
                alt=""
                fill
                className="object-cover opacity-35 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <span className="text-white/60 text-xs font-semibold tracking-[0.3em] uppercase">
                  Concept A
                </span>
                <span className="text-white text-2xl lg:text-3xl font-bold tracking-wide">
                  NeoAxis Precision
                </span>
              </div>
            </div>
            <div className="p-7 lg:p-8">
              <h2 className="text-xl font-bold text-navy-dark mb-3 group-hover:text-navy transition-colors">
                Premium Corporate Design
              </h2>
              <p className="text-gray-medium text-base leading-relaxed mb-5">
                Contemporary pharmaceutical corporate site with clean geometric
                layouts, white surfaces, deep navy tones, structured product
                cards, and a disciplined colour palette.
              </p>
              <span className="inline-flex items-center text-navy font-semibold text-base group-hover:text-orange transition-colors">
                Preview this concept
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Concept B */}
          <Link
            href="/demo/medicine-with-a-cause"
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="relative h-56 lg:h-64 bg-ivory overflow-hidden">
              <Image
                src={assets.whoAreWe.src}
                alt=""
                fill
                className="object-cover opacity-35 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <span className="text-navy-dark/60 text-xs font-semibold tracking-[0.3em] uppercase">
                  Concept B
                </span>
                <span
                  className="text-navy-dark text-2xl lg:text-3xl font-bold tracking-wide"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Medicine with a Cause
                </span>
              </div>
            </div>
            <div className="p-7 lg:p-8">
              <h2
                className="text-xl font-bold text-navy-dark mb-3 group-hover:text-navy transition-colors"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Editorial Human-Centred Design
              </h2>
              <p className="text-gray-medium text-base leading-relaxed mb-5">
                Warm ivory backgrounds, expressive serif typography, asymmetric
                photo layouts, storytelling-led sections, and deliberate editorial
                composition throughout.
              </p>
              <span className="inline-flex items-center text-navy font-semibold text-base group-hover:text-orange transition-colors">
                Preview this concept
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </div>

      <footer className="text-center py-8 text-sm text-gray-medium border-t border-gray-100">
        <p>Neo Axis Health Private Limited &mdash; Medicine with a Cause</p>
      </footer>
    </main>
  );
}
