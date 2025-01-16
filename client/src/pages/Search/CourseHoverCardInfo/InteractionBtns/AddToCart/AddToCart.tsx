import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  coursesAddedToCart,
  setAmountOfCourses,
  totalCoursesPrice,
} from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import Loader from "@/components/Loader/Loader";

const AddToCart = ({ textBtn = "Add to cart", courseId, discountPrice }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const handleClick = (e, courseId) => {
    setIsLoading(true); // Show loader

    // Simulate a 2-second delay for loading
    setTimeout(() => {
      dispatch(setAmountOfCourses());
      dispatch(totalCoursesPrice(discountPrice));
      dispatch(coursesAddedToCart(courseId));
      setIsLoading(false); // Hide loader after 2 seconds
    }, 1000);
  };

  return (
    <Button
      onClick={(e) => handleClick(e, courseId)}
      id={courseId}
      disabled={isLoading} // Disable button during loading
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
