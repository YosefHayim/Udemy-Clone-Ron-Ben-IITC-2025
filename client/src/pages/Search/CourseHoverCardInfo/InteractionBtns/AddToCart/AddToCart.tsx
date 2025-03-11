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
import buyCourseByCourseId from "@/api/users/buyCourseByCourseId";

const AddToCart: React.FC<{
  discountSum?: number;
  isWhite?: boolean;
  textBtn?: string;
  courseId?: string;
  discountPrice?: number;
  fullPriceCourse?: number;
  courseIds?: string[];
  extraCustomCss?: string;
}> = ({
  isWhite = false,
  extraCustomCss = "",
  textBtn = "Add to cart",
  courseId = "",
  discountPrice = 0,
  fullPriceCourse = 0,
  discountSum = 0,
  courseIds = [],
}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const buyCourseMutation = useMutation({
    mutationFn: buyCourseByCourseId,
    onSuccess: () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      navigate(`/cart/subscribe/course/:${courseId}`);
    },
    onError: (error) => {
      console.log("Error during buying course:", error);
    },
  });

  const handleClick = (courseId: string) => {
    if (
      textBtn === "Add to cart" &&
      courseId &&
      discountPrice > 0 &&
      fullPriceCourse > 0
    ) {
      setIsLoading(true);
      setTimeout(() => {
        dispatch(setAmountOfCourses()); // Increment the amount of courses
        dispatch(setTotalCourseDiscountPrices(Number(discountPrice)));
        dispatch(setTotalOriginalCoursePrices(Number(fullPriceCourse)));
        dispatch(calculateTotalSavings());
        dispatch(calculateDiscountPercentage());
        dispatch(setAddCourseToCart(courseId)); // Add course to the cart
        setIsLoading(false);
      }, 2000);
    } else if (textBtn === "Enroll Now" && courseId) {
      // if course is free and we pressed Enroll now
      buyCourseMutation.mutate(courseId);
    } else if (textBtn === "Add all to cart" && Array.isArray(courseIds)) {
      console.log(`works waiting to implement the logic`);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  if (discountPrice === 0 || fullPriceCourse === 0) {
    textBtn = "Enroll Now";
  }

  if (discountSum > 0) {
    textBtn = "Add all to cart";
  }

  return (
    <div className="w-full">
      <Button
        onClick={() => handleClick(courseId)}
        id={`btn-${courseId || "unknown"}`}
        disabled={isLoading}
        className={`${extraCustomCss} font-bold w-full rounded-[0.2em] py-[1.5em]${
          isLoading
            ? "focus:outline-none bg-gray-400 cursor-not-allowed"
            : "focus:outline-none bg-btnColor hover:bg-btnHoverColor"
        } ${isWhite && "bg-white text-purple-800 border border-purple-800"}`}
      >
        {isLoading ? (
          <div className="absolute">
            <Loader useSmallLoading={true} hSize="" />
          </div>
        ) : (
          textBtn
        )}
      </Button>
    </div>
  );
};

export default AddToCart;
