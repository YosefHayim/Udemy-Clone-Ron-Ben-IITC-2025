import { Button } from "@/components/ui/button";
import emptyCartImg from "/images/empty-cart.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const EmptyCart: React.FC = () => {
  const totalCoursesInCart = useSelector(
    (state: RootState) => state.cart.amountOfCourses
  );

  return (
    <div className="w-full">
      <h1 className="font-bold mb-4">Shopping Cart</h1>
      <h2 className="font-bold">{totalCoursesInCart} Courses in Cart</h2>
      <div className="flex flex-col items-center justify-center border border-b-gray-100 p-[2em] w-full">
        <div>
          <img src={emptyCartImg} alt="" className="h-[200px]" />
        </div>
        <div className="flex flex-col items-center justify-center gap-[1em]">
          <p>Your cart is empty. Keep shopping to find a course!</p>
          <Button className="text-white focus:outline-none bg-btnColor hover:bg-btnHoverColor rounded-[0.2em] text-[1.2em] font-bold py-[1.6em] cursor-pointer">
            <Link to="/">Keep shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
