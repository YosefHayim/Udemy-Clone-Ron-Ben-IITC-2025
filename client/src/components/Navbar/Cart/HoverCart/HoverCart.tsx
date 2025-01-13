import { Button } from "@/components/ui/button";
import ItemInCart from "../ItemInCart/ItemInCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HoverCart = () => {
  const totalToPay = useSelector((state) => state.cart.totalCoursesPrice);
  const coursesIdAdded = useSelector((state) => state.cart.coursesAddedToCart);

  return (
    <div className="flex flex-col justify-center items-start rounded-[0.5em] border border-gray-300 w-[300px] bg-white z-[1000] absolute right-[0em] top-[1em] shadow-previewCourseCardShadow p-[1em]">
      <div className="p-[1em]">
        {coursesIdAdded.map((courseId: string) => (
          <ItemInCart
            key={courseId}
            courseId={courseId}
            hide={false}
            shortCutInstructor={true}
            shortcutTitle={true}
          />
        ))}
      </div>
      <div className="w-full p-[1em] py-[0.5em] flex flex-col gap-[0.5em]">
        <b>Total: ₪{totalToPay.toLocaleString()}</b>
        <Link to="/cart">
          <Button className="rounded-[0.2em] font-bold w-full">
            Go to cart
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HoverCart;
