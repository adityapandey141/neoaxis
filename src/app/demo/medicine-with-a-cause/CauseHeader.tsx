"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { navigation, contact } from "@/content/navigation";
import { assets } from "@/content/assets";
import MobileMenu from "@/components/shared/MobileMenu";

export default function CauseHeader() {
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
        scrolled ? "bg-ivory/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        <a href="#hero" aria-label="NeoAxis Health — go to top">
          <Image
            src={assets.logo.src}
            alt={assets.logo.alt}
            width={140}
            height={32}
          />
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-10"
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.sectionId ? `#${item.sectionId}` : item.href}
              className="text-sm font-medium text-navy-dark/80 hover:text-navy transition-colors tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-semibold px-5 py-2 rounded-full border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors"
          >
            Contact us
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(true)}
          aria-expanded={mobileOpen}
          aria-label="Open menu"
          className="lg:hidden p-2 text-navy-dark"
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
              className="text-lg text-navy-dark hover:text-orange transition-colors py-2"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {item.label}
            </a>
          ))}
          <hr className="my-2 border-gray-200" />
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center px-5 py-3 rounded-full border-2 border-navy text-navy font-semibold hover:bg-navy hover:text-white transition-colors"
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
