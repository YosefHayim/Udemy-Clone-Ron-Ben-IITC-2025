import { useDispatch, useSelector } from "react-redux";

import { setShowCart } from "@/redux/slices/cartSlice";
import React, { useEffect } from "react";
import { RootState } from "@/redux/store";

const CartCoursesNumber = () => {
  const dispatch = useDispatch();
  const countOfCourses = useSelector(
    (state: RootState) => state.cart.amountOfCourses
  );

  useEffect(() => {
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
    <div className="bg-purple-500 rounded-full p-[1em] text-white absolute top-[-11%] left-[50%] right-[9.3%] text-center">
      <p className=" absolute left-[0.7em] top-[0.2em]">{countOfCourses}</p>
    </div>
  );
};

export default CartCoursesNumber;
