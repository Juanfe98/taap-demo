"use client";
import { FaShoppingCart } from "react-icons/fa";

interface ShoppingCartProps {
  cartItemCount: number;
  setIsCartOpen: (value: boolean) => void;
}

const ShoppingCart = ({ cartItemCount, setIsCartOpen }: ShoppingCartProps) => (
  <button
    onClick={() => setIsCartOpen(true)}
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
