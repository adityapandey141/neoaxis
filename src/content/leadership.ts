export interface Leader {
  name: string;
  title: string;
  shortBio: string;
  photo: string;
  photoAlt: string;
}

export const leadership: Leader[] = [
  {
    name: "Lokesh Manikonda",
    title: "Founder & CEO",
    shortBio:
      "28+ years in pharma; led Arogya Parivar at Novartis across 18 states and 23,000+ villages.",
    photo: "/assets/neoaxis/leadership/portrait-1.jpg",
    photoAlt: "Lokesh Manikonda, Founder and CEO of NeoAxis Health",
  },
  {
    name: "Prashant Deshpande",
    title: "Co-Founder & COO",
    shortBio:
      "20+ years in pharma; Head of Global Health Markets (Asia) at Novartis.",
    photo: "/assets/neoaxis/leadership/portrait-2.jpeg",
    photoAlt: "Prashant Deshpande, Co-Founder and COO of NeoAxis Health",
  },
  {
    name: "Dr Payal Sharma (Laad)",
    title: "Co-Founder & CMO",
    shortBio:
      "Public health leader; M.D. and D.N.B. in Community Medicine; led Arogya Parivar initiatives.",
    photo: "/assets/neoaxis/leadership/portrait-3.jpg",
    photoAlt: "Dr Payal Sharma, Co-Founder and CMO of NeoAxis Health",
  },
];
