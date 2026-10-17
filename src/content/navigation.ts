export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  sectionId?: string;
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/", sectionId: "hero" },
  { label: "About us", href: "https://www.neoaxishealth.com/about-us", external: true, sectionId: "about" },
  { label: "Publications", href: "https://www.neoaxishealth.com/publications", external: true, sectionId: "publications" },
  { label: "Product range", href: "https://www.neoaxishealth.com/about-1", external: true, sectionId: "products" },
] as const;

export const contact = {
  phone: "+91 9049993230",
  phoneTel: "tel:+919049993230",
  email: "customercare@neoaxishealth.com",
  emailHref: "mailto:customercare@neoaxishealth.com",
} as const;
