/**
 * Factual claims from the NeoAxis Health website.
 * Items with `needsClientConfirmation: true` should NOT be rendered
 * on the homepage until the client explicitly confirms them.
 */
export interface Fact {
  text: string;
  source: string;
  needsClientConfirmation: boolean;
}

export const facts: Fact[] = [
  {
    text: "5 lakh+ lives reached",
    source: "Homepage impact ticker",
    needsClientConfirmation: false,
  },
  {
    text: "Every Medicine has a story of Science and Quality",
    source: "Product range page",
    needsClientConfirmation: false,
  },
  {
    text: "Many are available, but only a few are WHO-GMP certified!",
    source: "Product range page",
    needsClientConfirmation: true,
  },
];
