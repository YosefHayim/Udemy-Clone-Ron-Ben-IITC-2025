import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  setAddCourseToCart,
  setAmountOfCourses,
  updateTotalCoursesPrice,
} from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import Loader from "@/components/Loader/Loader";

const AddToCart = ({ textBtn = "Add to cart", courseId, coursePrice }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e, courseId: string) => {
    setIsLoading(true);

    setTimeout(() => {
      dispatch(setAmountOfCourses());

      if (!coursePrice || isNaN(coursePrice)) {
        console.error("Invalid discountPrice:", coursePrice);
        return;
      }
      dispatch(updateTotalCoursesPrice(Number(coursePrice)));

      dispatch(setAddCourseToCart(courseId));
      console.log("Course added:", courseId);
      setIsLoading(false);
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
