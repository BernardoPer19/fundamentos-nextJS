"use client";
import Link from "next/link";
import React from "react";
import { FaHome, FaShoppingCart, FaInfoCircle, FaPen } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">MyApp</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-indigo-400 flex items-center space-x-2">
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/tienda" className="hover:text-indigo-400 flex items-center space-x-2">
              <FaShoppingCart />
              <span>Tienda</span>
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-indigo-400 flex items-center space-x-2">
              <FaInfoCircle />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link href="/post" className="hover:text-indigo-400 flex items-center space-x-2">
              <FaPen />
              <span>Posts</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
