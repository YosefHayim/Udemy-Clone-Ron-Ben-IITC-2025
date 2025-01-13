import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { setShowCart } from "@/redux/slices/cartSlice";

const CartCoursesNumber = () => {
  const dispatch = useDispatch();
  const countOfCourses = useSelector((state) => state.cart.amountOfCourses);

  // Use useEffect to manage cart visibility
  React.useEffect(() => {
    if (countOfCourses >= 1) {
      dispatch(setShowCart(true)); // Show the cart when at least 1 course is added
    } else {
      dispatch(setShowCart(false)); // Hide the cart if no courses are added
    }
  }, [countOfCourses, dispatch]);

  // Always render the div when countOfCourses >= 1
  if (countOfCourses < 1) {
    return null;
  }

  return (
    <div className="bg-purple-500 rounded-full p-[0.2em] text-white absolute top-[-1em] left-[1em] right-[9.3%] w-[2em] text-center">
      {countOfCourses}
    </div>
  );
};

export default CartCoursesNumber;
