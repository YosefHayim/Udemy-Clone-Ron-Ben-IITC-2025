import { MdOutlineShoppingCart } from "react-icons/md";
import CartCoursesNumber from "./CartCoursesNumber/CartCoursesNumber";
import { useState } from "react";
import HoverCart from "./HoverCart/HoverCart";
import { btnStyleNHover } from "@/utils/stylesStorage";

const Cart = () => {
  const [showCartHover, setShowCartHover] = useState(false);

  const handleMouseEnter = () => setShowCartHover(true);
  const handleMouseLeave = () => setShowCartHover(false);

  return (
    <div
      className="relative mr-[0.8em]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${btnStyleNHover}`}>
        <MdOutlineShoppingCart className="w-5 h-5" />
        <CartCoursesNumber />
      </div>
      {showCartHover && (
        <div className="absolute top-full left-0 z-[5000] p-[2em]">
          <HoverCart />
        </div>
      )}
    </div>
  );
};

export default Cart;
