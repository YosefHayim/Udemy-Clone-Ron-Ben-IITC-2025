import Logo from "@/components/Logo/Logo";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import Burger from "./Burger/Burger";
import { btnStyleNHover } from "@/utils/stylesStorage";
import SearchInput from "../SearchInput/SearchInput";
import { isRootPathOnly } from "@/utils/extraGenerals";

const MobileNavbar = () => {
  return (
    <div className="z-50 fixed bg-white shadow-carouselShadowBtn flex flex-col items-center justify-center w-full px-2">
      <div className="w-full flex items-center justify-between">
        <div className={`${btnStyleNHover}`}>
          <Burger />
        </div>
        <div>
          <Logo CustomCssSize="h-[2.5em]" />
        </div>
        <div>
          <Link to="/cart">
            <Cart />
          </Link>
        </div>
      </div>
      <div
        className={isRootPathOnly() ? "flex my-[0.5em] w-full px-5" : "hidden"}
      >
        <SearchInput />
      </div>
    </div>
  );
};

export default MobileNavbar;
