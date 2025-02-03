import buyCourseById from "@/api/users/buyCourseId";
import refreshMe from "@/api/users/refreshMe";
import { Button } from "@/components/ui/button";
import { RootState } from "@/redux";
import { setClearAll } from "@/redux/slices/cartSlice";
import {
  setCookie,
  setCoursesBought,
  setUdemyCredits,
} from "@/redux/slices/userSlice";
import { DecodedTokenProps } from "@/types/types";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { BsFire } from "react-icons/bs";
import { IoMdLock } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout: React.FC = () => {
  const cookie = Cookies.get("cookie");

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
      }, 2000);
    },
  });

  const refreshUserDataMutation = useMutation({
    mutationFn: refreshMe,
    onSuccess: () => {
      const decoded = jwtDecode<DecodedTokenProps>(cookie || "");
      dispatch(setCookie(cookie || ""));
      dispatch(setCoursesBought(decoded.coursesBought));
      dispatch(setUdemyCredits(decoded.udemyCredits));
      setTimeout(() => {
        navigate(`/course-view/${coursesIds[0]}`);
      }, 5000);
    },
  });

  const handleClick = () => {
    const courseId = coursesIds[0];
    checkOutMutation.mutate(courseId);
    refreshUserDataMutation.mutate();
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
        <div className="mb-[1em] w-[350px]">
          <p>
            By completing your purchase you agree to these{" "}
            <span className="text-[#6d28d2]">Terms of Service.</span>
          </p>
        </div>
        <div className="mb-[2em] w-full">
          <Button
            onClick={handleClick}
            className="w-full rounded-[0.2em] bg-[#6d28d2] hover:bg-[#892de1] font-bold text-white p-[1.5em] py-[2em]"
          >
            <IoMdLock />
            Pay ₪{totalToPay?.toFixed(2) || 0}
          </Button>
        </div>
        <div className="w-[300px] flex flex-col items-center justify-center mb-[3em] gap-[1em]">
          <b>30-Day Money-Back Guarantee</b>
          <p className="text-center">
            Not satisfied? Get a full refund within 30 days. Simple and
            straightforward!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
