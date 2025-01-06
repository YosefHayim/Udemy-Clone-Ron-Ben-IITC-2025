import { MdOutlineShoppingCart } from "react-icons/md";

const Cart = () => {
  return (
    <button className="text-black font-bold hover:text-purple-800">
      <MdOutlineShoppingCart className="w-6 h-6" />
    </button>
  );
};

export default Cart;
