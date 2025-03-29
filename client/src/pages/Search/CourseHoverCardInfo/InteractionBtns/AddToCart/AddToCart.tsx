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
import { useDispatch, useSelector } from "react-redux";
import Loader from "@/components/Loader/Loader";
import { useNavigate, Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { RootState } from "@/redux/store";
import buyCourseById from "@/api/users/buyCourseId";

const AddToCart: React.FC<{
  discountSum?: number;
  isWhite?: boolean;
  textBtn?: string;
  courseId?: string;
  discountPrice?: number;
  fullPriceCourse?: number;
  courseIds?: string[];
  extraCustomCss?: string;
  onAddToCartSuccess?: () => void;
  doYouWantPurpleLoading?: boolean;
  BtnText?: string;
}> = ({
  isWhite = false,
  extraCustomCss = "",
  textBtn = "Add to cart",
  courseId = "",
  discountPrice = 0,
  fullPriceCourse = 0,
  discountSum = 0,
  courseIds = [],
  onAddToCartSuccess = () => {},
  doYouWantPurpleLoading = false,
  BtnText,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const coursesInCart = useSelector((state: RootState) => state.cart.coursesAddedToCart);

  const isAddedToCart = courseId ? coursesInCart.includes(courseId) : false;

  const buyCourseMutation = useMutation({
    mutationFn: buyCourseById,
    onSuccess: () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        onAddToCartSuccess();
        navigate(`/cart/subscribe/course/:${courseId}`);
      }, 2000);
    },
    onError: (error) => {
      console.error("Error during buying course:", error);
    },
  });

  const handleClick = (courseId: string) => {
    if (textBtn === "Add to cart" && courseId && discountPrice && fullPriceCourse) {
      setIsLoading(true);
      setTimeout(() => {
        dispatch(setAmountOfCourses());
        dispatch(setTotalCourseDiscountPrices(Number(discountPrice)));
        dispatch(setTotalOriginalCoursePrices(Number(fullPriceCourse)));
        dispatch(calculateTotalSavings());
        dispatch(calculateDiscountPercentage());
        dispatch(setAddCourseToCart(courseId));
        setIsLoading(false);
        onAddToCartSuccess();
      }, 2000);
    } else if (textBtn === "Enroll Now" && courseId) {
      buyCourseMutation.mutate(courseId);
    } else if (textBtn === "Add all to cart" && Array.isArray(courseIds)) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  // Decide final button text
  let finalText = BtnText || textBtn;
  if (discountPrice === 0 || fullPriceCourse === 0) finalText = "Enroll Now";
  if (discountSum > 0) finalText = "Add all to cart";
  if (isAddedToCart) finalText = "Go to cart";

  const ButtonElement = (
    <Button
      onClick={() => handleClick(courseId)}
      id={`btn-${courseId || "unknown"}`}
      disabled={isLoading}
      className={`${extraCustomCss} w-full rounded-[0.2em] py-[1.5em] font-sans font-extrabold ${
        isLoading
          ? "cursor-not-allowed bg-gray-400 focus:outline-none"
          : "bg-btnColor hover:bg-purpleStatic focus:outline-none"
      } ${isWhite && "border border-purple-800 bg-white text-purple-800 hover:bg-purple-100"}`}
    >
      {isLoading ? (
        <div
          className={`absolute ${
            doYouWantPurpleLoading &&
            `right-[3%] flex w-full items-center justify-center text-center`
          }`}
        >
          <Loader useSmallLoading={true} hSize="" purpleLightSmallStyle={doYouWantPurpleLoading} />
        </div>
      ) : (
        finalText
      )}
    </Button>
  );

  return (
    <div className="w-full">
      {finalText === "Go to cart" ? <Link to="/cart">{ButtonElement}</Link> : ButtonElement}
    </div>
  );
};

export default AddToCart;
