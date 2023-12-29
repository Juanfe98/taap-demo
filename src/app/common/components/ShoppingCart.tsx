"use client";
import { FaShoppingCart } from "react-icons/fa";

interface ShoppingCartProps {
  cartItemCount: number;
}

const ShoppingCart = ({ cartItemCount }: ShoppingCartProps) => (
  <button
    onClick={() => console.log("Redirect to Cart")}
    className="flex items-center hover:text-gray-300"
  >
    <FaShoppingCart size={20} />
    {cartItemCount > 0 && (
      <span className="ml-1 text-sm bg-red-500 text-white rounded-full px-2 py-1">
        {cartItemCount}
      </span>
    )}
  </button>
);

export default ShoppingCart;
