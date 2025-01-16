import { Button } from "@/components/ui/button";
import {
  setAddCourseToCart,
  setAmountOfCourses,
  totalCoursesPrice,
} from "@/redux/slices/cartSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const BuyNowBtn = ({ courseId, discountPrice }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e, courseId) => {
    setIsLoading(true);
    console.log(`Course ID from button: ${courseId}`);

    setTimeout(() => {
      dispatch(setAmountOfCourses());
      dispatch(totalCoursesPrice(discountPrice));
      dispatch(setAddCourseToCart(courseId));
      setIsLoading(false);
    }, 3000);
    navigate("/cart");
  };
  return (
    <Button
      id={courseId}
      onClick={(e) => handleClick(e, courseId)}
      className={`font-bold bg-white text-black rounded-[0.2em] hover:bg-hoverDivGray w-full py-[1.5em] text-[1em] border border-black focus:outline-none`}
    >
      Buy now
    </Button>
  );
};

export default BuyNowBtn;
