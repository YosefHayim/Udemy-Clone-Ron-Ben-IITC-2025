import { Button } from "@/components/ui/button";
import { MdArrowForward, MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const ProcCheckNGoToCart = () => {
  return (
    <div className="my-4 flex w-full items-center justify-between gap-5">
      <div className="flex w-full items-center justify-center">
        <Button className="w-full rounded-none border border-purple-700 bg-white px-[1em] py-[1.6em] font-sans font-bold text-purple-800 hover:bg-purple-100 focus:outline-none">
          Proceed to checkout
          <MdArrowForward className="h-5 w-5" />
        </Button>
      </div>
      <Link to="/cart" className="w-full">
        <div className="flex w-full items-center justify-center">
          <Button className="w-full rounded-none bg-btnColor px-[1em] py-[1.6em] font-sans font-bold text-white hover:bg-purpleStatic focus:outline-none">
            Go to cart
            <MdOutlineShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default ProcCheckNGoToCart;
