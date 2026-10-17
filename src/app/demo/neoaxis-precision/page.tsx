import type { Metadata } from "next";
import Image from "next/image";
import { brand } from "@/content/brand";
import { navigation, contact } from "@/content/navigation";
import { productCategories, productDisclaimer } from "@/content/products";
import { pillars } from "@/content/pillars";
import { leadership } from "@/content/leadership";
import { publications, publicationsPageUrl } from "@/content/publications";
import { assets, carouselSlides } from "@/content/assets";
import PrecisionHeader from "./PrecisionHeader";
import ProductDisclosure from "@/components/shared/ProductDisclosure";
import ImpactCarousel from "@/components/shared/ImpactCarousel";

export const metadata: Metadata = {
  title: "NeoAxis Precision — Neo Axis Health Private Limited",
  description: brand.intro,
  openGraph: {
    title: "NeoAxis Health — Medicine with a Cause",
    description: brand.intro,
  },
};

export default function NeoAxisPrecisionPage() {
  return (
    <>
      <PrecisionHeader />

      <main id="main-content">
        {/* ── Hero ── */}
        <section
          id="hero"
          aria-label="Hero"
          className="relative min-h-[85vh] flex items-center"
        >
          <div className="absolute inset-0">
            <Image
              src={assets.heroPhoto.src}
              alt={assets.heroPhoto.alt}
              fill
              className="object-cover object-[center_30%]"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/75 to-navy-dark/30" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-36 w-full">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-orange bg-orange/10 border border-orange/30 rounded-full mb-6">
                {brand.tagline}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] mb-6">
                Better Access to Essential Medicine.{" "}
                <span className="text-orange">Stronger Communities.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-xl">
                {brand.intro}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="inline-flex items-center px-7 py-3.5 bg-orange text-white font-semibold rounded-lg hover:bg-orange-dark transition-colors text-base"
                >
                  Explore product range
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-7 py-3.5 border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Impact Band ── */}
        <section id="impact" aria-label="Impact" className="bg-navy text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-center">
              <div className="md:border-r md:border-white/20 px-4">
                <p className="text-4xl lg:text-5xl font-bold text-orange mb-2">
                  5 lakh+
                </p>
                <p className="text-base text-white/80">Lives Reached</p>
              </div>
              <div className="md:border-r md:border-white/20 px-4">
                <p className="text-xl lg:text-2xl font-semibold text-white mb-2">
                  Community Health Camps
                </p>
                <p className="text-base text-white/70">
                  Bringing healthcare to underserved areas
                </p>
              </div>
              <div className="px-4">
                <p className="text-xl lg:text-2xl font-semibold text-white mb-2">
                  Growing Geographical Presence
                </p>
                <p className="text-base text-white/70">
                  Expanding our reach across communities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Who We Are + Vision ── */}
        <section
          id="about"
          aria-label="About us"
          className="py-24 lg:py-32 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={assets.whoAreWe.src}
                    alt={assets.whoAreWe.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden lg:block">
                  <Image
                    src={assets.prePillarsImage.src}
                    alt={assets.prePillarsImage.alt}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
              </div>
              <div>
                <span className="text-orange font-semibold text-sm tracking-widest uppercase">
                  About NeoAxis Health
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mt-3 mb-6 leading-tight">
                  Who We Are
                </h2>
                <p className="text-lg text-gray-dark leading-relaxed mb-8">
                  {brand.whoWeAre}
                </p>
                <blockquote className="border-l-4 border-orange pl-6 italic text-gray-dark/90 leading-relaxed text-base">
                  &ldquo;{brand.visionQuote}&rdquo;
                </blockquote>
                <a
                  href="https://www.neoaxishealth.com/about-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-8 text-navy font-semibold hover:text-orange transition-colors text-base"
                >
                  Learn more about us
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── How We Support Better Health (NEW) ── */}
        <section
          aria-label="How we support better health"
          className="py-24 lg:py-32 bg-gray-light"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-orange font-semibold text-sm tracking-widest uppercase">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mt-3 mb-4">
                How We Support Better Health
              </h2>
              <p className="text-gray-medium max-w-2xl mx-auto text-lg">
                Socio-commercial healthcare solutions designed to create lasting impact.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Access to Essential Medicine",
                  description:
                    "Expanding availability of quality pharmaceutical products to communities that need them most, ensuring no one is left behind.",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  ),
                },
                {
                  title: "Health Literacy",
                  description:
                    "Enhancing health literacy so individuals and communities can make informed decisions about their well-being.",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  ),
                },
                {
                  title: "Community-Focused Solutions",
                  description:
                    "Empowering underserved communities through impactful socio-commercial healthcare solutions that reinvest in social initiatives.",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-navy/10 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center text-navy group-hover:bg-orange/10 group-hover:text-orange transition-colors mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-medium leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Products ── */}
        <section
          id="products"
          aria-label="Product range"
          className="py-24 lg:py-32 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-4">
              <div>
                <span className="text-orange font-semibold text-sm tracking-widest uppercase">
                  Pharmaceutical Portfolio
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mt-3 mb-2">
                  Our Product Range
                </h2>
                <p className="text-gray-medium max-w-xl text-base">
                  {productDisclaimer}
                </p>
              </div>
              <a
                href="https://www.neoaxishealth.com/about-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-dark transition-colors text-sm whitespace-nowrap self-start lg:self-auto"
              >
                View full product range
              </a>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {productCategories.map((cat) => (
                <ProductDisclosure
                  key={cat.category}
                  category={cat}
                  variant="precision"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Healthcare in Action — Carousel (NEW) ── */}
        <section
          id="healthcare-action"
          aria-label="Healthcare in action"
          className="py-24 lg:py-32 bg-gray-light"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="text-orange font-semibold text-sm tracking-widest uppercase">
                  On the Ground
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mt-3 mb-6 leading-tight">
                  Healthcare in Action
                </h2>
                <p className="text-gray-dark text-lg leading-relaxed mb-6">
                  {brand.companyName} expands access to essential medicine,
                  enhances health literacy, and empowers underserved communities
                  through impactful socio-commercial healthcare solutions.
                </p>
                <a
                  href="https://www.neoaxishealth.com/about-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-navy font-semibold hover:text-orange transition-colors text-base"
                >
                  About our work
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="lg:col-span-8">
                <ImpactCarousel
                  slides={carouselSlides}
                  variant="precision"
                  autoplay
                  autoplayInterval={6000}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Full-width Impact Photo ── */}
        <section aria-label="Community impact" className="relative h-80 lg:h-[28rem]">
          <Image
            src={assets.peopleWalking.src}
            alt={assets.peopleWalking.alt}
            fill
            className="object-cover object-[center_40%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy-dark/40 to-transparent flex items-end">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12 w-full">
              <p className="text-white text-2xl md:text-3xl lg:text-4xl font-bold max-w-2xl">
                Empowering communities through accessible healthcare
              </p>
            </div>
          </div>
        </section>

        {/* ── Six Pillars ── */}
        <section
          id="pillars"
          aria-label="Mission pillars"
          className="py-24 lg:py-32 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-orange font-semibold text-sm tracking-widest uppercase">
                Our Foundation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mt-3 mb-4">
                The 6 Mission-Driven Pillars
              </h2>
              <p className="text-gray-medium max-w-2xl mx-auto text-lg">
                Guiding principles for a healthier, more inclusive future.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.name}
                  className="relative p-8 bg-gray-light rounded-2xl hover:bg-white hover:shadow-lg border border-transparent hover:border-navy/10 transition-all group"
                >
                  <div className="flex items-start gap-5">
                    <span className="text-4xl font-bold text-navy/10 group-hover:text-orange/30 transition-colors leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-navy-dark mb-2">
                        {pillar.name}
                      </h3>
                      <p className="text-gray-medium text-base leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Publications ── */}
        <section
          id="publications"
          aria-label="Publications"
          className="py-24 lg:py-32 bg-gray-light"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
              <div>
                <span className="text-orange font-semibold text-sm tracking-widest uppercase">
                  Knowledge &amp; Outreach
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mt-3">
                  Publications
                </h2>
              </div>
              <a
                href={publicationsPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-colors text-sm whitespace-nowrap self-start md:self-auto"
              >
                View all 21 publications
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {publications.slice(0, 8).map((pub) => (
                <a
                  key={pub.label}
                  href={publicationsPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[3/4] rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={pub.image}
                    alt={pub.alt}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
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
          className="py-24 lg:py-32 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-orange font-semibold text-sm tracking-widest uppercase">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mt-3">
                Leadership
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              {leadership.map((leader) => (
                <div key={leader.name} className="text-center group">
                  <div className="relative w-56 h-56 lg:w-64 lg:h-64 mx-auto mb-6 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
                    <Image
                      src={leader.photo}
                      alt={leader.photoAlt}
                      fill
                      className="object-cover object-top"
                      sizes="256px"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-navy-dark">
                    {leader.name}
                  </h3>
                  <p className="text-orange font-medium text-sm mb-2">
                    {leader.title}
                  </p>
                  <p className="text-sm text-gray-medium leading-relaxed max-w-xs mx-auto">
                    {leader.shortBio}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a
                href="https://www.neoaxishealth.com/about-us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-navy font-semibold hover:text-orange transition-colors text-base"
              >
                Meet the full team
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── Contact CTA ── */}
        <section
          id="contact"
          aria-label="Contact"
          className="relative py-20 lg:py-28 overflow-hidden"
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
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
              Get in Touch
            </h2>
            <p className="text-white/75 mb-10 text-lg max-w-xl mx-auto">
              Ready to learn more about how NeoAxis Health is making medicine
              accessible to communities that need it most?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={contact.phoneTel}
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-orange text-white font-semibold rounded-lg hover:bg-orange-dark transition-colors text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {contact.phone}
              </a>
              <a
                href={contact.emailHref}
                className="inline-flex items-center gap-3 px-7 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white transition-colors text-base"
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div>
              <Image
                src={assets.logo.src}
                alt={assets.logo.alt}
                width={180}
                height={40}
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
                  className="text-white/70 hover:text-white transition-colors text-sm"
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
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {contact.phone}
                </a>
                <a
                  href={contact.emailHref}
                  className="text-white/70 hover:text-white transition-colors"
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
    </>
  );
}
