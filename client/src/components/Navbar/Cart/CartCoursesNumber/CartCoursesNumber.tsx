import { useDispatch, useSelector } from 'react-redux';

import { setShowCart } from '@/redux/slices/cartSlice';
import React, { useEffect } from 'react';
import { RootState } from '@/redux/store';

const CartCoursesNumber = () => {
  const dispatch = useDispatch();
  const countOfCourses = useSelector((state: RootState) => state.cart.amountOfCourses);

  useEffect(() => {
    if (countOfCourses >= 1) {
      dispatch(setShowCart(true));
    } else {
      dispatch(setShowCart(false));
    }
  }, [countOfCourses, dispatch]);

  if (countOfCourses < 1) return null;

  return (
    <div className="absolute right-[0%] top-[11%]  z-10 flex  h-[1rem] w-[1rem] items-center justify-center rounded-full bg-[#A435F0] text-[0.6rem] leading-none text-white">
      {countOfCourses}
    </div>
  );
};

export default CartCoursesNumber;
