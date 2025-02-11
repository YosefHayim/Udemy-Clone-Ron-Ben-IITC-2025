import { Button } from "@/components/ui/button";
import {
  calculateDiscountPercentage,
  calculateTotalSavings,
  setAddCourseToCart,
  setAmountOfCourses,
  setTotalCourseDiscountPrices,
  setTotalOriginalCoursePrices,
} from "@/redux/slices/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const BuyNowBtn: React.FC<{
  courseId: string;
  discountPrice: number;
  fullPrice: number;
}> = ({ courseId, discountPrice, fullPrice }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookie = document.cookie;

  const handleClick = (courseId: string) => {
    if (cookie) {
      setTimeout(() => {
        dispatch(setAmountOfCourses());
        if (!discountPrice || isNaN(discountPrice)) {
          console.error("Invalid discountPrice:", discountPrice);
          return;
        }
        dispatch(setTotalCourseDiscountPrices(Number(discountPrice)));
        dispatch(setTotalOriginalCoursePrices(Number(fullPrice)));
        dispatch(calculateTotalSavings());
        dispatch(calculateDiscountPercentage());
        dispatch(setAddCourseToCart(courseId));
        navigate("/payment/checkout/");
      }, 1000);
    } else {
      navigate("/login");
    }
  };
  return (
    <Button
      id={courseId}
      onClick={() => handleClick(courseId)}
      className={`font-bold bg-white text-black rounded-[0.2em] hover:bg-hoverDivGray w-full py-[1.5em] text-[1em] border border-black focus:outline-none`}
    >
      Buy now
    </Button>
  );
};

export default BuyNowBtn;
