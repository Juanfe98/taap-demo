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
    setShoppingCart((prevState) => {
      const isProductInCart = prevState.some((item) => item.id === product.id);

      if (isProductInCart) {
        return prevState.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item,
        );
      } else {
        return [...prevState, { ...product, quantity: 1 }];
      }
    });
  };

  const removeProductFromCart = ({ productId }: { productId: number }) => {
    const newCart = shoppingCart.filter((item) => item.id !== productId);
    setShoppingCart(newCart);
  };

  return (
    <>
      <Navbar
        shoppingCart={shoppingCart}
        removeProductFromCart={removeProductFromCart}
      />
      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <aside className="w-full md:w-1/4">
            <div className="flex flex-col space-y-2 items-start gap-2">
              <h2 className="text-2xl italic text-gray-800">Categories</h2>
              {categoriesData.map((categoryName) => (
                <Badge
                  name={categoryName}
                  filterProductByCategory={filterProductByCategory}
                  key={categoryName}
                />
              ))}
            </div>
          </aside>
          <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productsData.map((product) => (
              <ProductCard
                addProductToCart={addProductToCart}
                product={product}
                key={product.id}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
export default ProductList;
