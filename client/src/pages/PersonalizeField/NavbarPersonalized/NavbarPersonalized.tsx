import Logo from "@/components/Logo/Logo";
import ChangeLanguage from "@/components/Navbar/DropDownMenu/ChangeLanguage/ChangeLanguage";
import { Link } from "react-router-dom";

const NavbarPersonalized = ({ progress = 25 }) => {
  return (
    <div>
      <div className="p-[1em] w-full flex flex-row items-center justify-between">
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div>
          <button className="text-[#6d28d2] font-bold">Save & Exit</button>
          <ChangeLanguage />
        </div>
      </div>
      <div className="relative w-full h-[0.3em] bg-gray-300 overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-[#6d28d2] transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default NavbarPersonalized;
