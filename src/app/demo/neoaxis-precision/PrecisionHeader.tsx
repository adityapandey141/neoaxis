"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { navigation, contact } from "@/content/navigation";
import { assets } from "@/content/assets";
import MobileMenu from "@/components/shared/MobileMenu";

export default function PrecisionHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
        <a href="#hero" aria-label="NeoAxis Health — go to top">
          <Image
            src={assets.logo.src}
            alt={assets.logo.alt}
            width={160}
            height={36}
            className={scrolled ? "" : "brightness-0 invert"}
          />
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-8"
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.sectionId ? `#${item.sectionId}` : item.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-gray-dark hover:text-navy"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-semibold px-5 py-2 rounded-lg bg-orange text-white hover:bg-orange-dark transition-colors"
          >
            Contact us
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(true)}
          aria-expanded={mobileOpen}
          aria-label="Open menu"
          className={`lg:hidden p-2 ${scrolled ? "text-navy-dark" : "text-white"}`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)}>
        <div className="flex flex-col gap-4">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.sectionId ? `#${item.sectionId}` : item.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium text-navy-dark hover:text-orange transition-colors py-2"
            >
              {item.label}
            </a>
          ))}
          <hr className="my-2 border-gray-200" />
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center px-5 py-3 bg-orange text-white font-semibold rounded-lg hover:bg-orange-dark transition-colors"
          >
            Contact us
          </a>
          <div className="mt-4 space-y-2 text-sm text-gray-medium">
            <a href={contact.phoneTel} className="block hover:text-navy">
              {contact.phone}
            </a>
            <a href={contact.emailHref} className="block hover:text-navy">
              {contact.email}
            </a>
          </div>
        </div>
      </MobileMenu>
    </header>
  );
}
