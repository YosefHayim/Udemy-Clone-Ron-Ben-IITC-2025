import React from 'react';
import logo from '../../../assets/images/logo.png';
import { ShoppingCartIcon, GlobeAltIcon } from "@heroicons/react/outline";


const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow-md w-screen">
      {/* Logo */}
      <div className="logo flex items-center gap-2">
        <img src={logo} alt="Udemy Logo" className="h-12 w-auto max-w-full align-middle" />

      </div>

      {/* Navegação */}
      <nav className="flex gap-6 text-sm text-gray-700">
        <a href="#" className="hover:text-black">Explore</a>
      </nav>

      {/* Barra de Busca */}
      <div className="flex items-center border border-gray-300 rounded-full bg-gray-100 overflow-hidden px-4 py-2 w-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx={11} cy={11} r={8} />
          <line x1={21} y1={21} x2={16.65} y2={16.65} />
        </svg>
        <input
          type="text"
          placeholder="Search for anything"
          className="flex-1 bg-transparent focus:outline-none text-sm ml-2"
        />
      </div>

      <a href="#" className="hover:text-black">Udemy Business</a>
      <a href="#" className="hover:text-black">Teach on Udemy</a>

      {/* Ações */}
      <div className="flex items-center gap-4">
        <button className="text-purple-600 hover:text-purple-800">
          <ShoppingCartIcon className="w-6 h-6" />
        </button>

        {/* Idioma */}
        <button className="text-gray-700 hover:text-black">
          <GlobeAltIcon className="w-6 h-6" />
        </button>

        <a href="#" className="text-gray-700 text-sm hover:text-black">
          Log in
        </a>
        <a
          href="#"
          className="text-white bg-black px-4 py-1.5 rounded hover:bg-gray-800 text-sm"
        >
          Sign up
        </a>
        <button className="text-gray-700 hover:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2ZM12 2V0M12 24v-2M0 12h2m22 0h-2M12 24v-2M0 12h2m22 0h-2M12 24v-2M0 12h2m22 0h-2" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
