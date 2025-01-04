import logo from '../../../assets/images/logo.png';
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineLanguage } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [isTyping, setIsTyping] = useState(false); // Estado para controlar se o usuário está digitando

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow-md w-screen" style={{ height: "4.5rem" }}>
      {/* Logo */}
      <div className="logo flex items-center h-auto w-auto">
        <img src={logo} alt="Udemy Logo" style={{ height: '2.65rem' }} className="w-auto max-w-full align-middle" />
      </div>

      {/* Navegação */}
      <nav>
        <a href="#" className="text-[#020202] font-normal text-sm hover:text-purple-800 font-Sans">Explore</a>
      </nav>

      {/* Search bar */}
      <div className="flex items-center border border-gray-700 rounded-full overflow-hidden w-1/2 h-12 px-3 py-2 bg-gray-50">
        <MdOutlineSearch
          className={`w-6 h-6 ${isTyping ? "text-gray-900" : "text-gray-400 opacity-200"}`}
        />
        <input
          type="text"
          placeholder="Search for anything"
          className="flex-1 bg-transparent text-gray-700 focus:outline-none text-sm ml-3 placeholder-gray-700 placeholder:text-sm  placeholder:font-Sans placeholder:font-normal bg-gray-50"
          onInput={(e) => setIsTyping((e.target as HTMLInputElement).value !== "")} // Atualiza o estado baseado no texto digitado
        />
      </div>

      <a href="#" className="text-[#020202] font-normal text-sm hover:text-purple-800 font-Sans">Udemy Business</a>
      <a href="#" className="text-[#020202] font-normal text-sm hover:text-purple-800 font-Sans">Teach on Udemy</a>

      {/* Ações */}
      <div className="flex items-center gap-4">
        <button className="text-black font-bold hover:text-purple-800">
          <MdOutlineShoppingCart className="w-6 h-6" />
        </button>

        <a href="#" className="text-gray-700 text-sm px-4 py-2 font-bold hover:text-black hover:bg-gray-200 rounded border border-solid border-[#2d2f31] font-Sans">
          Log in
        </a>
        <a href="#" className="text-white bg-black font-bold px-4 py-2 rounded hover:opacity-70 transition duration-10 text-sm font-Sans">
          Sign up
        </a>

        {/* Idioma */}
        <button className="text-gray-700 p-[0.4rem] text-xl font-bold hover:text-black hover:bg-gray-200 rounded border border-solid border-[#2d2f31]">
          <MdOutlineLanguage />
        </button>
      </div>
    </header>
  );
};

export default Header;
