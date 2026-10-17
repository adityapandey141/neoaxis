import type { Metadata } from "next";
import Image from "next/image";
import { brand } from "@/content/brand";
import { navigation, contact } from "@/content/navigation";
import { productCategories, productDisclaimer } from "@/content/products";
import { pillars } from "@/content/pillars";
import { leadership } from "@/content/leadership";
import { publications, publicationsPageUrl } from "@/content/publications";
import { assets, carouselSlides } from "@/content/assets";
import CauseHeader from "./CauseHeader";
import ImpactCarousel from "@/components/shared/ImpactCarousel";

export const metadata: Metadata = {
  title: "Medicine with a Cause — Neo Axis Health Private Limited",
  description: brand.intro,
  openGraph: {
    title: "Medicine with a Cause — NeoAxis Health",
    description: brand.intro,
  },
};

export default function MedicineWithACausePage() {
  return (
    <div className="bg-ivory">
      <CauseHeader />

      <main id="main-content">
        {/* ── Hero: Editorial Split ── */}
        <section
          id="hero"
          aria-label="Hero"
          className="min-h-[90vh] lg:min-h-screen flex items-center pt-20"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1 py-10 lg:py-0">
                <p className="text-orange font-medium tracking-[0.2em] uppercase text-xs mb-6">
                  {brand.companyName}
                </p>
                <h1
                  className="text-[2.75rem] md:text-6xl lg:text-[4.25rem] font-bold text-navy-dark leading-[1.08] mb-8"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Medicine
                  <br />
                  <span className="text-orange">with a Cause</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-dark leading-relaxed max-w-md mb-10">
                  {brand.intro}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#products"
                    className="inline-flex items-center px-8 py-4 bg-navy text-white font-semibold rounded-full hover:bg-navy-dark transition-colors text-base"
                  >
                    Explore our products
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center px-8 py-4 border-2 border-navy-dark text-navy-dark font-semibold rounded-full hover:bg-navy-dark hover:text-white transition-colors text-base"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2 relative">
                <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-3xl overflow-hidden lg:ml-4">
                  <Image
                    src={assets.heroPhoto.src}
                    alt={assets.heroPhoto.alt}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
                <div className="absolute -bottom-4 left-4 lg:-bottom-6 lg:left-0 bg-white rounded-2xl shadow-xl p-6 max-w-[220px]">
                  <p
                    className="text-4xl font-bold text-orange"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    5 lakh+
                  </p>
                  <p className="text-sm text-gray-dark mt-1 leading-snug">
                    lives reached across communities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Company Story ── */}
        <section
          id="about"
          aria-label="About us"
          className="py-28 lg:py-36"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-7 relative aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image
                      src={assets.whoAreWe.src}
                      alt={assets.whoAreWe.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 60vw, 35vw"
                    />
                  </div>
                  <div className="col-span-5 mt-16 relative aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image
                      src={assets.prePillarsImage.src}
                      alt={assets.prePillarsImage.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 40vw, 25vw"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <p className="text-orange font-medium tracking-[0.2em] uppercase text-xs mb-5">
                  Who We Are
                </p>
                <h2
                  className="text-3xl md:text-4xl font-bold text-navy-dark mb-7 leading-tight"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Healthcare that reaches where it matters most
                </h2>
                <p className="text-gray-dark text-lg leading-relaxed mb-8">
                  {brand.whoWeAre}
                </p>
                <a
                  href="https://www.neoaxishealth.com/about-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-navy font-semibold hover:text-orange transition-colors text-base"
                >
                  Know more about us
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Purpose in Practice (NEW) ── */}
        <section
          aria-label="Purpose in practice"
          className="py-28 lg:py-36 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-16">
              <p className="text-orange font-medium tracking-[0.2em] uppercase text-xs mb-5">
                Our Purpose
              </p>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark leading-tight"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Purpose in Practice
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
              {[
                {
                  num: "01",
                  title: "Access to Essential Medicine",
                  text: "Expanding availability of quality pharmaceutical products to communities that need them most.",
                },
                {
                  num: "02",
                  title: "Health Literacy",
                  text: "Enhancing health literacy so individuals and communities can make informed decisions about their well-being.",
                },
                {
                  num: "03",
                  title: "Community Empowerment",
                  text: "Empowering underserved communities through impactful socio-commercial healthcare solutions that reinvest in social initiatives.",
                },
              ].map((item) => (
                <div key={item.num}>
                  <span
                    className="text-6xl lg:text-7xl font-bold text-orange/15 block mb-4"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {item.num}
                  </span>
                  <h3
                    className="text-xl font-bold text-navy-dark mb-3"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-medium text-base leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Vision Quote ── */}
        <section aria-label="Our vision" className="relative py-36 lg:py-44">
          <div className="absolute inset-0">
            <Image
              src={assets.peopleWalking.src}
              alt={assets.peopleWalking.alt}
              fill
              className="object-cover object-[center_40%]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy-dark/75" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <svg
              className="w-10 h-10 text-orange/60 mx-auto mb-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>
            <blockquote>
              <p
                className="text-2xl md:text-3xl lg:text-[2.5rem] text-white leading-relaxed"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {brand.visionQuote}
              </p>
            </blockquote>
          </div>
        </section>

        {/* ── Real Moments, Shared Purpose — Carousel (NEW) ── */}
        <section
          id="moments"
          aria-label="Real moments"
          className="py-28 lg:py-36"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-28">
                <p className="text-orange font-medium tracking-[0.2em] uppercase text-xs mb-5">
                  Our Story in Action
                </p>
                <h2
                  className="text-3xl md:text-4xl font-bold text-navy-dark leading-tight mb-6"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Real Moments, Shared Purpose
                </h2>
                <p className="text-gray-dark text-lg leading-relaxed mb-8">
                  From community health camps to team gatherings, these moments
                  capture the spirit of {brand.shortName} — a company built on
                  the conviction that healthcare can reach everyone.
                </p>
                <div className="flex items-center gap-5 pt-4 border-t border-gray-200">
                  <span
                    className="text-4xl font-bold text-orange"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    5 lakh+
                  </span>
                  <span className="text-gray-dark text-sm leading-snug">
                    lives reached across
                    <br />
                    communities
                  </span>
                </div>
              </div>
              <div className="lg:col-span-8">
                <ImpactCarousel
                  slides={carouselSlides}
                  variant="cause"
                  autoplay
                  autoplayInterval={7000}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Products — Chapter Layout ── */}
        <section
          id="products"
          aria-label="Product range"
          className="py-28 lg:py-36 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mb-16">
              <p className="text-orange font-medium tracking-[0.2em] uppercase text-xs mb-5">
                Our Portfolio
              </p>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark mb-5 leading-tight"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Product Range
              </h2>
              <p className="text-gray-medium text-base">
                {productDisclaimer}
              </p>
            </div>

            <div className="space-y-0">
              {productCategories.map((cat, i) => (
                <div
                  key={cat.category}
                  className="grid lg:grid-cols-12 gap-6 lg:gap-8 border-t border-gray-200 py-10 first:border-t-0 first:pt-0"
                >
                  <div className="lg:col-span-1">
                    <span
                      className="text-3xl font-bold text-orange/25"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3
                      className="text-xl font-bold text-navy-dark"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {cat.category}
                    </h3>
                  </div>
                  <div className="lg:col-span-7">
                    <ul className="space-y-4">
                      {cat.products.map((product) => (
                        <li key={product.name} className="flex flex-col">
                          <span className="font-semibold text-foreground text-base">
                            {product.name}
                          </span>
                          <span className="text-sm text-gray-medium mt-0.5">
                            {product.composition}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-14 pt-10 border-t border-gray-200">
              <a
                href="https://www.neoaxishealth.com/about-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-full border-2 border-navy text-navy font-semibold hover:bg-navy hover:text-white transition-colors text-base"
              >
                View full product range
              </a>
            </div>
          </div>
        </section>

        {/* ── Six Es — Numbered Editorial List ── */}
        <section
          id="pillars"
          aria-label="Mission pillars"
          className="py-28 lg:py-36"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <p className="text-orange font-medium tracking-[0.2em] uppercase text-xs mb-5">
                  Our Guiding Principles
                </p>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark leading-tight mb-6"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  The 6 Mission-Driven Pillars
                </h2>
                <p className="text-gray-dark text-lg leading-relaxed">
                  Together, these principles pave the way for a healthier, more
                  inclusive future.
                </p>
              </div>
              <div className="lg:col-span-7 space-y-0">
                {pillars.map((pillar, i) => (
                  <div
                    key={pillar.name}
                    className="flex gap-6 lg:gap-8 py-7 border-b border-gray-200 last:border-b-0 group"
                  >
                    <span
                      className="text-5xl lg:text-6xl font-bold text-orange/15 group-hover:text-orange/40 transition-colors leading-none shrink-0 w-16"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        className="text-xl font-bold text-navy-dark mb-1.5"
                        style={{ fontFamily: "var(--font-playfair), serif" }}
                      >
                        {pillar.name}
                      </h3>
                      <p className="text-gray-medium text-base leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Publications — Offset Image Grid ── */}
        <section
          id="publications"
          aria-label="Publications"
          className="py-28 lg:py-36 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
              <div>
                <p className="text-orange font-medium tracking-[0.2em] uppercase text-xs mb-5">
                  Knowledge Sharing
                </p>
                <h2
                  className="text-3xl md:text-4xl font-bold text-navy-dark"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Publications
                </h2>
              </div>
              <a
                href={publicationsPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-navy font-semibold hover:text-orange transition-colors text-base self-start md:self-auto"
              >
                View all 21 publications
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-7">
              {publications.slice(0, 6).map((pub, i) => (
                <a
                  key={pub.label}
                  href={publicationsPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-shadow ${
                    i % 3 === 1 ? "md:mt-10" : ""
                  }`}
                >
                  <Image
                    src={pub.image}
                    alt={pub.alt}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Leadership ── */}
        <section
          id="leadership"
          aria-label="Leadership"
          className="py-28 lg:py-36"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mb-16">
              <p className="text-orange font-medium tracking-[0.2em] uppercase text-xs mb-5">
                Our Team
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-navy-dark"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Leadership
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {leadership.map((leader) => (
                <div key={leader.name} className="group">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-sm group-hover:shadow-lg transition-shadow">
                    <Image
                      src={leader.photo}
                      alt={leader.photoAlt}
                      fill
                      className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3
                    className="text-xl font-bold text-navy-dark"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {leader.name}
                  </h3>
                  <p className="text-orange font-medium text-sm mb-2">
                    {leader.title}
                  </p>
                  <p className="text-gray-medium text-base leading-relaxed">
                    {leader.shortBio}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-14">
              <a
                href="https://www.neoaxishealth.com/about-us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-navy font-semibold hover:text-orange transition-colors text-base"
              >
                Know more
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section
          id="contact"
          aria-label="Contact"
          className="relative py-28 lg:py-36 overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src={assets.productsOverview.src}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy-dark/90" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center text-white">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Let&apos;s build a healthier future together
            </h2>
            <p className="text-white/70 text-lg mb-12 max-w-xl mx-auto">
              Reach out to learn more about how NeoAxis Health is making
              medicine accessible to communities that need it most.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={contact.phoneTel}
                className="inline-flex items-center gap-3 px-8 py-4 bg-orange text-white font-semibold rounded-full hover:bg-orange-dark transition-colors text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {contact.phone}
              </a>
              <a
                href={contact.emailHref}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-full hover:border-white hover:bg-white/10 transition-colors text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {contact.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div>
              <Image
                src={assets.logo.src}
                alt={assets.logo.alt}
                width={160}
                height={36}
                className="brightness-0 invert mb-4"
              />
              <p className="text-white/50 text-sm max-w-xs leading-relaxed">
                {brand.tagline} &mdash; expanding access to essential medicine
                and empowering communities.
              </p>
            </div>
            <nav aria-label="Footer navigation" className="flex flex-col gap-3">
              <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-1">
                Navigation
              </p>
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.external ? item.href : `#${item.sectionId}`}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div>
              <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-3">
                Contact
              </p>
              <div className="flex flex-col gap-2 text-sm">
                <a
                  href={contact.phoneTel}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {contact.phone}
                </a>
                <a
                  href={contact.emailHref}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/40 text-xs">
            Neo Axis Health Private Limited
          </div>
        </div>
      </footer>
    </div>
  );
}
