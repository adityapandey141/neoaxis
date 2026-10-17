export interface Publication {
  label: string;
  image: string;
  alt: string;
}

export const publications: Publication[] = Array.from({ length: 21 }, (_, i) => ({
  label: `Publication ${i + 1}`,
  image: `/assets/neoaxis/publications/publication-${i + 1}.png`,
  alt: `Publication ${i + 1} from NeoAxis Health`,
}));

export const publicationsPageUrl = "https://www.neoaxishealth.com/publications";
