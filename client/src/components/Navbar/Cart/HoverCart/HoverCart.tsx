import { Button } from "@/components/ui/button";
import ItemInCart from "../ItemInCart/ItemInCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const HoverCart = () => {
  const totalToPay = useSelector((state) => state.cart.totalCoursesPrice);
  const coursesIdAdded = useSelector((state) => state.cart.coursesAddedToCart);

  useEffect(() => {}, [totalToPay]);

  return (
    <div className="flex flex-col justify-center items-start rounded-[0.5em] border border-gray-300 w-[300px] bg-white z-[1000] absolute right-[0em] top-[1em] shadow-previewCourseCardShadow cursor-pointer">
      <div className="w-full">
        {coursesIdAdded.length > 0 ? (
          coursesIdAdded.map((courseId: string) => (
            <ItemInCart
              key={courseId}
              courseId={courseId}
              hide={false}
              shortCutInstructor={true}
              shortcutTitle={true}
              chooseFlex={"flex flex-col"}
              itemsPosition="start"
              textColor="text-bg-black"
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center w-full text-center mt-[1em]">
            <p>Your cart is empty.</p>
            <b className="text-purpleStatic hover:text-purpleHover cursor-pointer">
              <Link to="/">Keep shopping</Link>
            </b>
          </div>
        )}
      </div>
      <div className="w-full p-[1em] flex flex-col gap-[0.5em]">
        {totalToPay > 1 ? (
          <div>
            <b>Total: ₪{totalToPay}</b>
            <Link to="/cart">
              <Button className="rounded-[0.2em] font-bold w-full">
                Go to cart
              </Button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default HoverCart;
