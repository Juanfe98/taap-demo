"use client";
import React from "react";
import { FilterProductByCategory } from "../../page";
interface BadgeProps {
  name: string;
  filterProductByCategory: FilterProductByCategory;
}
function Badge({
  name,
  filterProductByCategory: filterProductsByCategory,
}: BadgeProps) {
  return (
    <button
      className="px-2"
      onClick={() => filterProductsByCategory({ categoryName: name })}
    >
      <span className="px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-600 transition-colors text-white	">
        {name}
      </span>
    </button>
  );
}

export default Badge;
