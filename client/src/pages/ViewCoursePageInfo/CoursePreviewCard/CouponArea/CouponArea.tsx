import getCouponByCouponCode from "@/api/courses/getCouponByCouponCode";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

const CouponArea: React.FC<{ btnBgDesign?: string; couponText?: string }> = ({
  btnBgDesign = "",
  couponText = "NEWYEARCAREER",
}) => {
  const [isError, setError] = useState(false);
  const [isCursorOff, setCursorClickOff] = useState(false);

  const handleCouponSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const couponCode = formData.get("coupon-code") as string;
    if (couponCode === "KEEPLEARNING") return undefined;
    couponMutation.mutate(couponCode);
  };

  const handleChange = (v: string) => {
    if (v === "KEEPLEARNING") {
      setCursorClickOff(true);
    } else {
      setCursorClickOff(false);
    }
  };

  const couponMutation = useMutation({
    mutationFn: getCouponByCouponCode,
    onSuccess: (data) => {
      if (data === false) {
        setError(true);
      }
    },
  });

  return (
    <div>
      <div className="flex flex-row border-dashed border border-gray-500 p-[0.3em] mb-[1em]">
        <div className="flex flex-row items-center justify-between mb-[0.5em] w-full">
          <div className="relative w-full flex flex-col items-start gap-[0.2em]">
            <div className="flex flex-row w-full">
              <div className="flex flex-row gap-[0.2em] w-full">
                <b className="text-weakGray">{couponText}</b>
                <p>is applied</p>
              </div>
            </div>
            <div>
              <p className="text-weakGray">Udemy coupon</p>
            </div>
          </div>
          <button className="focus:outline-none hover:bg-purple-200 p-[1em] rounded-[0.2em] cursor-pointer border-none bg-none">
            <HiOutlineXMark className="text-[1.5em]" />
          </button>
        </div>
      </div>
      <form
        className="flex flex-row items-center gap-[0.5em]"
        onSubmit={handleCouponSubmit}
      >
        <Input
          className="rounded-[0.2em] border-gray-500"
          placeholder="Enter Coupon"
          id="coupon-code"
          name="coupon-code"
          onChange={(e) => handleChange(e.target.value)}
        ></Input>
        <Button
          type="submit"
          className={`${btnBgDesign} ${
            isCursorOff ? "cursor-not-allowed opacity-10" : ""
          } rounded-[0.2em] font-bold`}
        >
          Apply
        </Button>
      </form>
      <div>
        {isError && (
          <p className="text-red-600">
            The coupon code entered is not valid for this course.
          </p>
        )}
      </div>
    </div>
  );
};

export default CouponArea;
