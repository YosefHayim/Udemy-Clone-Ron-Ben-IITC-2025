import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  calculateDiscountPercentage,
  calculateTotalSavings,
  setAddCourseToCart,
  setAmountOfCourses,
  setTotalCourseDiscountPrices,
  setTotalOriginalCoursePrices,
} from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import Loader from "@/components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import byCourseByCourseId from "@/api/users/buyCourseByCourseId";
import styles from "./AddToCart.module.css";

const AddToCart: React.FC<{
  textBtn?: string;
  courseId?: string;
  discountPrice?: number;
  fullPriceCourse?: number;
}> = ({
  textBtn = "Add to cart",
  courseId = "",
  discountPrice = 0,
  fullPriceCourse = 0,
}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const buyCourseMutation = useMutation({
    mutationFn: byCourseByCourseId,
    onSuccess: () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      navigate(`/cart/subscribe/course/:${courseId}`);
    },
    onError: (error) => {
      console.error("Error during buying course:", error);
    },
  });

  const handleClick = (courseId: string) => {
    if (textBtn === "Add to cart") {
      setIsLoading(true);
      setTimeout(() => {
        dispatch(setAmountOfCourses()); // Increment the amount of courses
        dispatch(setTotalCourseDiscountPrices(Number(discountPrice)));
        dispatch(setTotalOriginalCoursePrices(Number(fullPriceCourse)));
        dispatch(calculateTotalSavings());
        dispatch(calculateDiscountPercentage());
        dispatch(setAddCourseToCart(courseId)); // Add course to the cart
        setIsLoading(false); // Stop loading indicator
      }, 2000);
    } else if (textBtn === "Enroll Now") {
      // if course is free and we pressed Enroll now
      buyCourseMutation.mutate(courseId);
    }
  };

  if (discountPrice === 0 || fullPriceCourse === 0) {
    textBtn = "Enroll Now";
  }

  return (
    <Button
      styles={styles.addToCart}
      onClick={() => handleClick(courseId)}
      id={`btn-${courseId || "unknown"}`} // Add prefix for clarity
      disabled={isLoading}
      className={`font-bold ${
        isLoading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-btnColor hover:bg-btnHoverColor"
      } rounded-[0.2em] w-full py-[1.5em] text-[1em]`}
    >
      {isLoading ? <Loader useSmallLoading={true} hSize="" /> : textBtn}
    </Button>
  );
};

export default AddToCart;
