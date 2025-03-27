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
    <div className="absolute -top-0 -right-[0.1rem] h-[0.9rem] w-[0.9rem] rounded-full bg-[#A435F0] flex items-center justify-center text-[0.6rem] text-white z-10 leading-none">
  {countOfCourses}
</div>

  );
};


export default CartCoursesNumber;
