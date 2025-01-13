import { MdOutlineShoppingCart } from "react-icons/md";
import CartCoursesNumber from "./CartCoursesNumber/CartCoursesNumber";

const Cart = () => {
  return (
    <button className="text-black font-bold hover:text-purple-800">
      <MdOutlineShoppingCart className="w-6 h-6" />
      <CartCoursesNumber />
    </button>
  );
};

export default Cart;
