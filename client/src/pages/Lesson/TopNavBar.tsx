import React from "react";
import inverted from "../../../public/images/logo-udemy-inverted.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="border-b border-gray-700 absolute top-0 left-0 w-full bg-[#1C1D1F] text-white z-10">
      <div className=" mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left-aligned logo and title */}
        <div className="flex items-center justify-center space-x-4 ">
          <img src={inverted} alt="Logo" className="w-20 bg-transparent " />
          <span className="text-gray-500 min-h-4">
            |
          </span>
          <span className="text-lg font-semibold">
            React - The Complete Guide 2024 (incl. Next.js, Redux)
          </span>
        </div>

        {/* Right-aligned buttons */}
        <div className="flex  items-center space-x-4">
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
