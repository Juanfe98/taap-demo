"use client";
import productsJSON from "@/app/data/products.json";
import categoriesData from "@/app/data/products_categories.json";
import React from "react";
import ProductCard from "./components/ProductCard";
import Badge from "./components/CategoryFilter/Badge";
import { getProductsByCategory } from "../services/products";
import Navbar from "../common/components/NavBar";

export type FilterProductByCategory = ({
  categoryName,
}: {
  categoryName: string;
}) => void;

const ProductList = () => {
  const [productsData, setProductsData] = React.useState(productsJSON);
  const [shoppingCart, setShoppingCart] = React.useState<any[] | []>([]);

  const filterProductByCategory = async ({
    categoryName,
  }: {
    categoryName: string;
  }) => {
    const filteredProducts = await getProductsByCategory({ categoryName });
    setProductsData(filteredProducts);
  };

  const addProductToCart = ({ product }: any) => {
    setShoppingCart((prevState) => [...prevState, product]);
  };

  return (
    <>
      <Navbar shoppingCart={shoppingCart} />
      <main className="container mx-auto px-4 py-8 flex-1">
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
            <ProductCard
              addProductToCart={addProductToCart}
              product={product}
              key={product.id}
            />
          ))}
        </div>
      </main>
    </>
  );
};
export default ProductList;
