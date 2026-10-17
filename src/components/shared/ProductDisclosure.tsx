"use client";

import { useState } from "react";
import type { ProductCategory } from "@/content/products";

interface ProductDisclosureProps {
  category: ProductCategory;
  variant?: "precision" | "cause";
}

export default function ProductDisclosure({
  category,
  variant = "precision",
}: ProductDisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isPrecision = variant === "precision";

  return (
    <div
      className={
        isPrecision
          ? "border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow"
          : "border-b border-gray-200 last:border-b-0"
      }
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className={`w-full text-left flex items-center justify-between ${
          isPrecision ? "p-5" : "py-4 px-2"
        }`}
      >
        <span
          className={
            isPrecision
              ? "font-semibold text-navy-dark text-lg"
              : "font-serif text-xl text-navy-dark"
          }
        >
          {category.category}
        </span>
        <span className="flex items-center gap-2">
          <span className="text-sm text-gray-medium">
            {category.products.length}{" "}
            {category.products.length === 1 ? "product" : "products"}
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`transition-transform duration-200 text-navy ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <path d="M6 8l4 4 4-4" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={isPrecision ? "px-5 pb-5" : "px-2 pb-4"}>
          <ul className="space-y-3">
            {category.products.map((product) => (
              <li key={product.name} className="flex flex-col">
                <span
                  className={
                    isPrecision
                      ? "font-medium text-foreground"
                      : "font-medium text-navy-dark"
                  }
                >
                  {product.name}
                </span>
                <span className="text-sm text-gray-medium">
                  {product.composition}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
