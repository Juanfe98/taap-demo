"use client";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart";

interface NavbarProps {
  shoppingCart: any;
}

const Navbar = ({ shoppingCart }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="/" className="font-semibold text-xl">
          Triforce Team - Demo
        </a>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            Products List
          </a>
          <a href="#" className="hover:text-gray-300">
            My Orders ||
          </a>
          <ShoppingCart cartItemCount={shoppingCart.length} />
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="md:hidden absolute bg-gray-800 w-full px-6 py-3 flex flex-col space-y-2">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              My Orders
            </a>
            <ShoppingCart cartItemCount={shoppingCart.length} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
