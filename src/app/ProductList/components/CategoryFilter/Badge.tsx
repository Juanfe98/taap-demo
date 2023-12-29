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
  const handleCheckboxChange = () => {
    filterProductsByCategory({ categoryName: name });
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={`checkbox-test`}
        name="test"
        onChange={handleCheckboxChange}
        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <label
        htmlFor={`checkbox-${name}`}
        className="ml-2 text-sm font-medium text-gray-700 cursor-pointer"
      >
        {name}
      </label>
    </div>
  );
}

export default Badge;
