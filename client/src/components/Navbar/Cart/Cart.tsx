import { MdOutlineShoppingCart } from "react-icons/md";
import CartCoursesNumber from "./CartCoursesNumber/CartCoursesNumber";
import { useState } from "react";
import HoverCart from "./HoverCart/HoverCart";

const Cart = () => {
  const [showCartHover, setShowCartHover] = useState(false);

  const handleMouseEnter = () => setShowCartHover(true);
  const handleMouseLeave = () => setShowCartHover(false);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-black font-bold hover:text-purple-800">
        <MdOutlineShoppingCart className="w-6 h-6" />
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
