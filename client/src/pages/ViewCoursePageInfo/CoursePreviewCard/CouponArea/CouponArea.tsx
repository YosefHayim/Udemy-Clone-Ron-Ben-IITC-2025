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
      <div className="mb-[1em] flex  border border-dashed border-gray-500 p-[0.3em]">
        <div className="mb-[0.5em] flex w-full  items-center justify-between">
          <div className="relative flex w-full flex-col items-start gap-[0.2em]">
            <div className="flex w-full ">
              <div className="flex w-full  gap-[0.2em]">
                <b className="text-weakGray">{couponText}</b>
                <p>is applied</p>
              </div>
            </div>
            <div>
              <p className="text-weakGray">Udemy coupon</p>
            </div>
          </div>
          <button className="cursor-pointer rounded-[0.2em] border-none bg-none p-[1em] hover:bg-purple-200 focus:outline-none">
            <HiOutlineXMark className="text-[1.5em]" />
          </button>
        </div>
      </div>
      <form className="flex  items-center gap-[0.5em]" onSubmit={handleCouponSubmit}>
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
          } rounded-[0.2em] font-sans font-extrabold`}
        >
          Apply
        </Button>
      </form>
      <div>
        {isError && (
          <p className="text-red-600">The coupon code entered is not valid for this course.</p>
        )}
      </div>
    </div>
  );
};

export default CouponArea;
