"use client";
import productsJSON from "@/app/data/products.json";
import categoriesData from "@/app/data/products_categories.json";
import React from "react";
import ProductCard from "./components/ProductCard";
import Badge from "./components/CategoryFilter/Badge";
import { getProductsByCategory } from "../services/products";

export type FilterProductByCategory = ({
  categoryName,
}: {
  categoryName: string;
}) => void;

const ProductList = () => {
  const [productsData, setProductsData] = React.useState(productsJSON);

  const filterProductByCategory = async ({
    categoryName,
  }: {
    categoryName: string;
  }) => {
    const filteredProducts = await getProductsByCategory({ categoryName });
    setProductsData(filteredProducts);
  };

  return (
    <>
      <div className="mb-6">
        {categoriesData.map((categoryName) => (
          <Badge
            name={categoryName}
            filterProductByCategory={filterProductByCategory}
            key={categoryName}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productsData.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};
export default ProductList;
