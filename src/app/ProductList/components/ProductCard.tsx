"use client";
import React from "react";

function ProductCard({ product }: any) {
  return (
    <div className="bg-white shadow-lg rounded-lg flex flex-col mb-4 overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-56 object-cover object-center"
      />

      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-gray-600 mt-1">${product.price}</p>
      </div>

      <button
        className=" w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        onClick={() => {
          console.log("adding to cart");
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
