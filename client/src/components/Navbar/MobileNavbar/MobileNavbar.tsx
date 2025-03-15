import Logo from "@/components/Logo/Logo";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import Burger from "./Burger/Burger";
import { btnStyleNHover } from "@/utils/stylesStorage";

const MobileNavbar = () => {
  return (
    <div>
      <div className="p-2 w-full flex items-center bg-white relative shadow-carouselShadowBtn justify-between">
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
    </div>
  );
};

export default MobileNavbar;
