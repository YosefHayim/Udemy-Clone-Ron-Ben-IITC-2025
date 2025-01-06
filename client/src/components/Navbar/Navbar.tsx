import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineLanguage } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { useState } from "react";
import logo from "/images/logo.png";
import SearchInput from "./SearchInput/SearchInput";
import LoginBtn from "./Login/LoginBtn";
import SignupBtn from "./SignupBtn/SignupBtn";
import Cart from "./Cart/Cart";
import Language from "./Language/Language";

const Navbar = () => {
  return (
    <header
      className="flex items-center justify-between px-6 py-3 bg-white shadow-md w-screen"
      style={{ height: "4.5rem" }}
    >
      {/* Logo */}
      <div className="logo flex items-center h-auto w-auto">
        <img
          src={logo}
          alt="Udemy Logo"
          style={{ height: "2.65rem" }}
          className="w-auto max-w-full align-middle"
        />
      </div>

      <nav>
        <a
          href="#"
          className="text-[#020202] font-normal text-sm hover:text-purple-800 font-Sans"
        >
          Explore
        </a>
      </nav>

      <SearchInput />

      <a
        href="#"
        className="text-[#020202] font-normal text-sm hover:text-purple-800 font-Sans"
      >
        Udemy Business
      </a>
      <a
        href="#"
        className="text-[#020202] font-normal text-sm hover:text-purple-800 font-Sans"
      >
        Teach on Udemy
      </a>

      <div className="flex items-center gap-4">
        <Cart />
        <LoginBtn />
        <SignupBtn />
        <Language />
      </div>
    </header>
  );
};

export default Navbar;
