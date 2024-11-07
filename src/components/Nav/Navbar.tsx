// components/Navbar.js
"use client"
import { useState } from "react";
import Link from "next/link";
import Log from "./Log"
import AddtoCart from "./AddtoCart";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [currency, setCurrency] = useState("USD");

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          MySite
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 px-4 rounded-l-md text-gray-800 focus:outline-none"
          />
          <button className="bg-blue-600 py-2 px-4 rounded-r-md hover:bg-blue-700">
            Search
          </button>
        </div>

       
        {/* Nav Links and Buttons */}
        <div className="hidden md:flex items-center space-x-4">
       
<Log/>
          {/* Wishlist and Cart */}
          <AddtoCart/>

      

      
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-700 py-1 px-2 rounded text-white focus:outline-none"
          >
            <option value="EN">EN</option>
            <option value="FR">FR</option>
            <option value="ES">ES</option>
          </select>

          {/* Currency Dropdown */}
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-gray-700 py-1 px-2 rounded text-white focus:outline-none"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
          </select>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 px-4 py-2 space-y-2">
          <Link href="/" className="block hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="block hover:text-gray-400">
            About
          </Link>
          <Link href="/services" className="block hover:text-gray-400">
            Services
          </Link>
          <button className="block hover:text-gray-400">Wishlist</button>
          <button className="block hover:text-gray-400">Add to Cart</button>
          <Link href="/login" className="block bg-blue-600 py-1 px-3 rounded hover:bg-blue-700 text-center">
            Login
          </Link>
          <Link href="/signup" className="block bg-green-600 py-1 px-3 rounded hover:bg-green-700 text-center">
            Signup
          </Link>

          {/* Mobile Search Bar */}
          <div className="py-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 rounded-md text-gray-800 focus:outline-none"
            />
          </div>

          {/* Language and Currency Dropdowns */}
          <div className="flex justify-between">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-800 py-1 px-2 rounded text-white focus:outline-none"
            >
              <option value="EN">EN</option>
              <option value="FR">FR</option>
              <option value="ES">ES</option>
            </select>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-gray-800 py-1 px-2 rounded text-white focus:outline-none"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="JPY">JPY</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
