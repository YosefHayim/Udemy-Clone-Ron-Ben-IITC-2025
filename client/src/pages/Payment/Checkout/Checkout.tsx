import buyCourseById from "@/api/users/buyCourseId";
import refreshMe from "@/api/users/refreshMe";
import Loader from "@/components/Loader/Loader";
import { Button } from "@/components/ui/button";
import { RootState } from "@/redux/store";
import { ReactPayPalScriptOptions } from "@paypal/react-paypal-js";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { IoMdLock } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserInformation } from "@/utils/setUserInformation";

const Checkout: React.FC<{ isPaypal: ReactPayPalScriptOptions }> = ({
  isPaypal,
}) => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookie = useSelector((state: RootState) => state?.user?.cookie);

  const totalToPay = useSelector(
    (state: RootState) => state.cart?.totalCourseDiscountPrices,
  );
  const totalCourses = useSelector(
    (state: RootState) => state.cart?.amountOfCourses,
  );
  const originalPrice = useSelector(
    (state: RootState) => state.cart?.totalCoursesOriginalPrices,
  );
  const coursesIds = useSelector(
    (state: RootState) => state.cart?.coursesAddedToCart,
  );

  useEffect(() => {}, [originalPrice, totalCourses, totalToPay, cookie]);

  const checkOutMutation = useMutation({
    mutationFn: buyCourseById,
    onSuccess: () => {
      setTimeout(() => {
        refreshUserDataMutation.mutate();
      }, 500);
    },
  });

  const refreshUserDataMutation = useMutation({
    mutationFn: refreshMe,
    onSuccess: (cookie) => {
      setUserInformation(cookie, dispatch);
      navigate(`/course-view/${coursesIds[0]}`);
    },
  });

  const handleClick = () => {
    if (!coursesIds.length) {
      console.log("No courses available for checkout.");
      return;
    }

    setLoading(true);
    setTimeout(() => setLoading(false), 2000);

    if (coursesIds.length === 1) {
      const courseId = coursesIds[0];
      if (!courseId) {
        console.log("Invalid courseId received.");
        return;
      }
      checkOutMutation.mutate(courseId);
    } else {
      checkOutMultiMutation.mutate(coursesIds);
    }
  };

  const checkOutMultiMutation = useMutation({
    mutationFn: (courseIds: string[]) => {
      console.log("Course ids going to purchase: ", courseIds);

      return Promise.all(courseIds.map((id) => buyCourseById(id)));
    },
    onSuccess: () => {
      console.log("Successfully purchased multiple courses");
      setTimeout(() => {
        refreshUserDataMutation.mutate();
      }, 500);
    },
  });

  return (
    <div className="w-min-max flex flex-col items-start justify-start p-[3em]">
      <div className="flex w-full flex-col items-start justify-start">
        <h2 className="mb-[1em] w-full font-sans text-[1.5em] font-extrabold">
          Order Summary
        </h2>
        <div className="flex w-[75%] flex-col items-start justify-start gap-[0.5em]">
          <div className="flex w-full  items-start justify-between gap-[5em]">
            <p>Original price:</p>
            <p>₪{originalPrice || 0}</p>
          </div>
          <hr className="w-full border border-b-gray-400" />
          <div className="mb-[3em] flex w-full  items-start justify-between">
            <div className="flex  gap-[0.3em]">
              <b>Total</b>
              <p>({totalCourses} course)</p>
            </div>
            {isPaypal ? <b>Proceed</b> : <b>₪{totalToPay?.toFixed(2) || 0}</b>}
          </div>
        </div>
        <div className="mb-[1em] w-[75%]">
          <p>
            By completing your purchase you agree to these{" "}
            <span className="text-btnColor">Terms of Service.</span>
          </p>
        </div>
        <div className="mb-[2em] w-[75%]">
          <Button
            onClick={handleClick}
            className="w-full rounded-[0.2em] bg-btnColor p-[1.7em] font-sans font-extrabold text-white hover:bg-[#892de1]"
          >
            {isLoading ? (
              <div>
                <Loader useSmallLoading={true} hSize="" />
              </div>
            ) : (
              <div className="flex  items-center">
                <IoMdLock />
                Pay ₪{totalToPay?.toFixed(2) || 0}
              </div>
            )}
          </Button>
        </div>
        <div className="mb-[3em] flex w-[75%] flex-col items-center justify-center gap-[1em]">
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
