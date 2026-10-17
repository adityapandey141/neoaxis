export const assets = {
  logo: {
    src: "/assets/neoaxis/logo/neoaxis-logo.png",
    alt: "NeoAxis Health Private Limited logo",
    width: 1420,
    height: 320,
  },
  heroPhoto: {
    src: "/assets/neoaxis/hero/hero-top-image.jpg",
    alt: "NeoAxis Health team at a community health event",
    width: 4032,
    height: 2688,
  },
  peopleWalking: {
    src: "/assets/neoaxis/community/people-walking.jpg",
    alt: "Community members walking together",
    width: 6000,
    height: 4000,
  },
  whoAreWe: {
    src: "/assets/neoaxis/team/who-are-we.jpg",
    alt: "NeoAxis Health team working in the community",
    width: 4032,
    height: 2688,
  },
  productsOverview: {
    src: "/assets/neoaxis/team/products-overview.jpg",
    alt: "Overview of NeoAxis Health pharmaceutical products",
    width: 4032,
    height: 2688,
  },
  prePillarsImage: {
    src: "/assets/neoaxis/community/pre-pillars-image.jpg",
    alt: "NeoAxis Health community health camp in action",
    width: 4032,
    height: 2688,
  },
} as const;

export interface CarouselSlide {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const carouselSlides: CarouselSlide[] = [
  {
    src: "/assets/neoaxis/carousel/carousel-1.jpeg",
    alt: "NeoAxis Health team at an outdoor community engagement event",
    width: 3072,
    height: 2304,
  },
  {
    src: "/assets/neoaxis/carousel/carousel-2.jpg",
    alt: "NeoAxis Health team members at a corporate meeting",
    width: 2757,
    height: 1620,
  },
  {
    src: "/assets/neoaxis/carousel/carousel-3.jpeg",
    alt: "NeoAxis Health team at a field healthcare event",
    width: 3072,
    height: 2304,
  },
  {
    src: "/assets/neoaxis/carousel/carousel-4.jpg",
    alt: "NeoAxis Health team group photograph at a conference",
    width: 3000,
    height: 2250,
  },
  {
    src: "/assets/neoaxis/carousel/carousel-5.jpg",
    alt: "NeoAxis Health large team gathering at a company event",
    width: 3000,
    height: 2250,
  },
  {
    src: "/assets/neoaxis/carousel/carousel-6.jpg",
    alt: "NeoAxis Health team with product banners at a launch event",
    width: 3000,
    height: 2250,
  },
];
