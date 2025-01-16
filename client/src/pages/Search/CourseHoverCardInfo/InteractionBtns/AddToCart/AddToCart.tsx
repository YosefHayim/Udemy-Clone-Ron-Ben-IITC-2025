import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  setAddCourseToCart,
  setAmountOfCourses,
  setTotalCourseDiscountPrices,
  setTotalOriginalCoursePrices,
} from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import Loader from "@/components/Loader/Loader";
import { useNavigate } from "react-router-dom";

const AddToCart = ({
  textBtn = "Add to cart",
  courseId = "",
  coursePrice = 0,
  fullPriceCourse = 0,
}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e, courseId: string) => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(setAmountOfCourses()); // Increment the amount of courses
      dispatch(setTotalCourseDiscountPrices(Number(coursePrice)));
      dispatch(setTotalOriginalCoursePrices(Number(fullPriceCourse)));
      console.log(
        `Dispatching fullPrice:${fullPriceCourse} and discount price: ${coursePrice}`
      );

      dispatch(setAddCourseToCart(courseId)); // Add course to the cart
      setIsLoading(false); // Stop loading indicator
    }, 1000);
  };

  return (
    <Button
      onClick={(e) => handleClick(e, courseId)}
      id={`btn-${courseId || "unknown"}`} // Add prefix for clarity
      disabled={isLoading}
      className={`font-bold ${
        isLoading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-btnColor hover:bg-btnHoverColor"
      } rounded-[0.2em] w-full py-[1.5em] text-[1em]`}
    >
      {isLoading ? <Loader useSmallLoading={true} /> : textBtn}
    </Button>
  );
};

export default AddToCart;
