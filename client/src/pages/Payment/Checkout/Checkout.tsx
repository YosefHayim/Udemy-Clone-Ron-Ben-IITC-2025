import buyCourseById from "@/api/users/buyCourseId";
import { Button } from "@/components/ui/button";
import { RootState } from "@/redux";
import { setClearAll } from "@/redux/slices/cartSlice";
import { setCoursesBought } from "@/redux/slices/userSlice";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { BsFire } from "react-icons/bs";
import { IoMdLock } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalToPay = useSelector(
    (state: RootState) => state.cart.totalCourseDiscountPrices
  );

  const totalCourses = useSelector(
    (state: RootState) => state.cart.amountOfCourses
  );

  const originalPrice = useSelector(
    (state: RootState) => state.cart.totalCoursesOriginalPrices
  );

  const coursesIds = useSelector(
    (state: RootState) => state.cart.coursesAddedToCart
  );

  useEffect(() => {}, [originalPrice, totalCourses, totalToPay]);

  const checkOutMutation = useMutation({
    mutationFn: buyCourseById,
    onSuccess: () => {
      setTimeout(() => {
        dispatch(setClearAll());
        
        navigate(`/course-view/${coursesIds[0]}`);
      }, 5000);
    },
  });

  const handleClick = () => {
    const courseId = coursesIds[0];
    console.log(`course that has been added`, courseId);

    checkOutMutation.mutate(courseId);
  };

  return (
    <div className="flex flex-col items-start justify-start p-[3em] w-[340px]">
      <div className="flex flex-col items-start justify-start">
        <h2 className="font-bold mb-[1em] text-[1.5em]">Summary</h2>
        <div className="flex flex-col items-start justify-start gap-[0.5em] w-full">
          <div className="flex flex-row items-start justify-between w-full gap-[5em]">
            <p>Original price:</p>
            <p>₪{originalPrice || 0}</p>
          </div>
          <hr className="w-full border border-b-gray-400" />
          <div className="flex flex-row items-start justify-between w-full mb-[3em]">
            <div className="flex flex-row gap-[0.3em]">
              <b>Total</b>
              <p>({totalCourses} course)</p>
            </div>
            <b>₪{totalToPay?.toFixed(2) || 0}</b>
          </div>
        </div>
        <div className="mb-[1em]">
          <p>
            By completing your purchase you agree to these{" "}
            <span className="text-[#6d28d2]">Terms of Service.</span>
          </p>
        </div>
        <div className="mb-[2em] w-full">
          <Button
            onClick={handleClick}
            className="w-full rounded-[0.2em] bg-[#a435f0] hover:bg-[#8710d8] font-bold text-white p-[1.5em]"
          >
            <IoMdLock />
            Complete Checkout
          </Button>
        </div>
        <div className="w-[300px] flex flex-col items-center justify-center mb-[3em] gap-[1em]">
          <b>30-Day Money-Back Guarantee</b>
          <p className="text-center">
            Not satisfied? Get a full refund within 30 days. Simple and
            straightforward!
          </p>
        </div>
        <div className="bg-white rounded-[0.3em] p-[1em] flex flex-col items-center justify-center gap-[1em] border border-[#d1d7dc]">
          <div className="flex flex-row items-center justify-center gap-[0.5em]">
            <BsFire />
            <b>Tap into Success Now</b>
          </div>
          <p>
            Join 5 people in your country who've recently enrolled in this
            course within last 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
