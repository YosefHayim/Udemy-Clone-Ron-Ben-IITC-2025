import logo from '../../../assets/images/logo.png';
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineLanguage } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";

// declare module '@heroicons/react/outline' {
//   export const ShoppingCartIcon: React.FC<React.SVGProps<SVGSVGElement>>;
//   export const GlobeAltIcon: React.FC<React.SVGProps<SVGSVGElement>>;
// }



const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow-md w-screen" style={{ height: "4.5rem" }}>
      {/* Logo */}
      <div className="logo flex items-center h-auto w-auto">
        <img src={logo} alt="Udemy Logo" style={{ height: '2.65rem' }} className="w-auto max-w-full align-middle" />


      </div>

      {/* Navegação */}
      <nav>
        <a href="#" className="text-[#020202] hover:text-purple-800 font-normal text-sm">Explore</a>
      </nav>

      {/* Search bar */}
      <div className="flex items-center border border-gray-700 rounded-full overflow-hidden w-1/2 h-12 px-3 py-2 bg-gray-50">
        <MdOutlineSearch className="w-6 h-6 text-gray-400" />
        <input
          type="text"
          placeholder="Search for anything"
          className="flex-1 bg-transparent text-gray-700 focus:outline-none text-lg ml-3 placeholder-gray-500 placeholder:text-sm bg-gray-50"
        />
      </div>


      <a href="#" className=" text-[#020202]  font-normal text-sm hover:text-purple-800 ">Udemy Business</a>
      <a href="#" className=" text-[#020202]  font-normal text-sm hover:text-purple-800 ">Teach on Udemy</a>

      {/* Ações */}
      <div className="flex items-center gap-4">
        <button className="text-black font-bold hover:text-purple-800">
          <MdOutlineShoppingCart className="w-6 h-6" />
        </button>


        <a href="#" className="text-gray-700 text-sm px-4 py-2 font-bold hover:text-black hover:bg-gray-200  rounded border border-solid border-[#2d2f31]">Log in</a>
        <a href="#" className="text-white bg-black  font-bold px-4 py-2 rounded hover:opacity-80 text-sm">Sign up</a>

        {/* Idioma */}
        <button className="text-gray-700 hover:text-black">
          <MdOutlineLanguage className="w-8 h-8 p-1 rounded border border-solid border-[#2d2f31]" />
        </button>

      </div>
    </header>
  );
};

export default Header;
