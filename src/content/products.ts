export interface Product {
  name: string;
  composition: string;
}

export interface ProductCategory {
  category: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    category: "Gastrointestinal Care",
    products: [
      {
        name: "Gutkul\u2122",
        composition:
          "Rabeprazole Sodium Enteric Coated & Domperidone Sustained Release Capsules",
      },
      {
        name: "Zorfiz\u2122",
        composition: "ORS with Probiotic Effervescent Tablets",
      },
    ],
  },
  {
    category: "Pain & Inflammation Management",
    products: [
      {
        name: "Reliswift\u2122",
        composition: "Aceclofenac & Paracetamol Tablets",
      },
      {
        name: "Reliswift\u2122 SP",
        composition:
          "Aceclofenac, Paracetamol & Serratiopeptidase Tablets",
      },
    ],
  },
  {
    category: "Hematology & Nutritional Supplements",
    products: [
      {
        name: "Hemaxis\u2122",
        composition: "Ferrous Ascorbate & Folic Acid Tablets",
      },
    ],
  },
  {
    category: "Anti-Infectives & Antibiotics",
    products: [
      {
        name: "Moxneo\u2122",
        composition: "Amoxicillin & Potassium Clavulanate Tablets",
      },
      {
        name: "Ctaxim\u2122 DT",
        composition: "Cefixime Tablets",
      },
      {
        name: "Ctaxim\u2122 OF",
        composition: "Cefixime & Ofloxacin Tablets",
      },
      {
        name: "Neotaxim\u2122 CV",
        composition:
          "Cefpodoxime Proxetil & Potassium Clavulanate Tablets",
      },
      {
        name: "Neotaxim\u2122 DT",
        composition: "Cefpodoxime Dispersible Tablets",
      },
    ],
  },
  {
    category: "Respiratory & Allergy Management",
    products: [
      {
        name: "Nilcon\u2122",
        composition: "Montelukast & Levocetirizine Tablets",
      },
      {
        name: "Nilcon\u2122 L",
        composition: "Levocetirizine Tablets",
      },
      {
        name: "Nilcon\u2122 Kid",
        composition:
          "Levocetirizine & Montelukast Sodium Dispersible Tablets",
      },
    ],
  },
];

export const productDisclaimer =
  "Product information shown for corporate overview. Refer to approved prescribing information.";
