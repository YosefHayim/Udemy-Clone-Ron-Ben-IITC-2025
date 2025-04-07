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
    <div className="relative mx-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`${btnStyleNHover}`}>
        <MdOutlineShoppingCart className="h-5 w-5" />
        <CartCoursesNumber />
      </div>
      {showCartHover && (
        <div className="absolute top-6 z-[5000]">
          <HoverCart />
        </div>
      )}
    </div>
  );
};

export default Cart;
