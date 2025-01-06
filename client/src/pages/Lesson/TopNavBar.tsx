import React from "react";
import logo from "/images/logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full bg-gray-900 text-white shadow-md z-10">
      <div className=" mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left-aligned logo and title */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-20" />
          <span className="text-lg font-semibold">
            React - The Complete Guide 2024 (incl. Next.js, Redux)
          </span>
        </div>

        {/* Right-aligned buttons */}
        <div className="flex items-center space-x-4">
          <button className="hover:text-gray-300">Your Progress</button>
          <button className="bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600">
            Share
          </button>
          <button className="hover:text-gray-300">...</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
