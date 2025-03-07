import { useDispatch, useSelector } from "react-redux";

import { setShowCart } from "@/redux/slices/cartSlice";
import React from "react";

const CartCoursesNumber = () => {
  const dispatch = useDispatch();
  const countOfCourses = useSelector(
    (state: any) => state.cart.amountOfCourses
  );

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
    <div className="bg-purple-500 rounded-full p-[0.5em] text-white absolute top-[0.01em] left-[0.9em] right-[9.3%] text-center">
      <p className="text-[0.5em] absolute left-[0.7em] top-[0.2em]">
        {countOfCourses}
      </p>
    </div>
  );
};

export default CartCoursesNumber;
