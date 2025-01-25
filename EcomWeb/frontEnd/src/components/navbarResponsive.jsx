Navbar.jsx:
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-600 text-white">
      {/* Top Bar */}
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-2">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold tracking-wide">PerfumesFor'em</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-8 max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search trusted brands"
              className="w-full py-2 pl-4 pr-12 rounded-lg text-gray-800"
            />
            <button className="absolute right-0 top-0 h-full px-4 bg-yellow-400 text-black rounded-r-lg">
              🔍
            </button>
          </div>
        </div>

        {/* Utility Links */}
        <div className="flex items-center space-x-4">
          <a href="/signin" className="hover:text-yellow-400 text-white">
            Sign In
          </a>
          <a href="/help" className="hover:text-yellow-400 text-white">
            Help
          </a>
          <div className="relative group">
            <span className="cursor-pointer">INR ▼</span>
          </div>
          <a href="/cart" className="relative flex items-center">
            <span>🛒</span>
            <span className="ml-1 text-white">Cart</span>
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-sm rounded-full px-2">
              0
            </span>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-2 bg-blue-600">
        {/* Left Content: Women, Men, Brands */}
        <div className="flex space-x-8">
          <a href="/women" className="hover:text-yellow-400 text-white">
            Women's Perfume
          </a>
          <a href="/men" className="hover:text-yellow-400 text-white">
            Men's Cologne
          </a>
          <a href="/brands" className="hover:text-yellow-400 text-white">
            Brands
          </a>
        </div>

        {/* Right Content: Free Shipping */}
        <div>
          <a href="/FreeShipping" className="hover:text-yellow-400 text-white">
            Free Shipping
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
