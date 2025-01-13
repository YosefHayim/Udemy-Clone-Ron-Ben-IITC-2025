import { MdOutlineShoppingCart } from "react-icons/md";
import CartCoursesNumber from "./CartCoursesNumber/CartCoursesNumber";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <Link to="/cart">
      <button className="text-black font-bold hover:text-purple-800">
        <MdOutlineShoppingCart className="w-6 h-6" />
        <CartCoursesNumber />
      </button>
    </Link>
  );
};

export default Cart;
