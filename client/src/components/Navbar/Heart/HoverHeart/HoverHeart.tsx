import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemInCart from "../../Cart/ItemInCart/ItemInCart";
import AddToCart from "@/pages/Search/CourseHoverCardInfo/InteractionBtns/AddToCart/AddToCart";
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

const HoverHeart = () => {
  const dispatch = useDispatch();
  const totalCourses = useSelector((state: RootState) => state.cart.coursesAddedToWishList);
  const discountPrice = useSelector((state: RootState) => state.cart.totalCourseDiscountPrices);
  const fullPriceCourse = useSelector((state: RootState) => state.cart.totalCoursesOriginalPrices);
  useEffect(() => {}, [totalCourses]);

  const handleWishlistCart = () => {
    dispatch(setAmountOfCourses()); // Increment the amount of courses
    dispatch(setTotalCourseDiscountPrices(Number(discountPrice)));
    dispatch(setTotalOriginalCoursePrices(Number(fullPriceCourse)));
    dispatch(calculateTotalSavings());
    dispatch(calculateDiscountPercentage());
    dispatch(setAddCourseToCart(totalCourses[0])); // Add course to the cart
  };

  return (
    <div>
      <div className="absolute right-[0em] top-[1em] z-[1000] flex w-[300px] cursor-pointer flex-col items-start justify-center rounded-t-lg border border-gray-300 bg-white shadow-alertAlgoInfo">
        {totalCourses.length > 0 ? (
          totalCourses.map((courseId: string) => (
            <div>
              <ItemInCart
                key={courseId}
                isFontThick={true}
                courseImgSize={`h-[5em] w-[10em] rounded-[0.5em]`}
                courseId={courseId}
                hide={false}
                showHR={false}
                showDisPrice={true}
                showFullPrice={true}
                shortCutInstructor={true}
                shortcutTitle={true}
                chooseFlex={"flex flex-col"}
                itemsPosition="start"
                textColor="text-bg-black"
                gapPrice="gap-[0em]"
              />
              <div className="w-full p-3" onClick={handleWishlistCart}>
                <AddToCart
                  isWhite={true}
                  courseId={totalCourses[0]}
                  discountPrice={2}
                  fullPriceCourse={2}
                  doYouWantPurpleLoading={true}
                />
              </div>
              <hr />
            </div>
          ))
        ) : (
          <div className="absolute right-[0em] z-[1000] mt-[3.5em] flex w-[300px] cursor-pointer flex-col items-start justify-center rounded-[0.8em] bg-white p-[1em] shadow-alertAlgoInfo">
            <div className="w-full">
              <div className="flex w-full flex-col items-center justify-center text-center">
                <p className="mb-[1em] font-medium">Your wishlist is empty.</p>
                <b className="cursor-pointer text-purpleStatic hover:text-purpleHover">
                  <Link to="/">Explore courses</Link>
                </b>
              </div>
            </div>
          </div>
        )}
        <div className="w-full p-[1em]">
          {totalCourses.length >= 1 && (
            <Button className="w-full rounded-[0.2em] bg-btnColor py-[1.5em] font-sans font-extrabold hover:bg-btnHoverColor focus:outline-none">
              Go to wishlist
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HoverHeart;
