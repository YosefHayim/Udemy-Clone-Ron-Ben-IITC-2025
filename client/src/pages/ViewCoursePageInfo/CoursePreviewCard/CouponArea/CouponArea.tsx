import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HiOutlineXMark } from "react-icons/hi2";

const CouponArea: React.FC<{ btnBgDesign?: string; couponText?: string }> = ({
  btnBgDesign = "",
  couponText = "NEWYEARCAREER",
}) => {
  const handleCouponSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const couponCode = formData.get("coupon-code");
    console.log(couponCode);

    couponMutation.mutate(couponCode);
  };

  const couponMutation = useMutation({
    mutationFn: activateCouponCode,
  });

  return (
    <div>
      <div className="flex flex-row border-dashed border border-gray-500 p-[0.3em] mb-[1em]">
        <div className="flex flex-row items-center justify-between mb-[0.5em] w-full">
          <div className="relative w-full flex flex-col items-start gap-[0.2em]">
            <div className="flex flex-row w-full">
              <div className="flex flex-row gap-[0.2em] w-full">
                <b className="text-[#6a6f73]">{couponText}</b>
                <p>is applied</p>
              </div>
            </div>
            <div>
              <p className="text-[#6a6f73]">Udemy coupon</p>
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
        ></Input>
        <Button
          type="submit"
          className={`${btnBgDesign} rounded-[0.2em] font-bold`}
        >
          Apply
        </Button>
      </form>
    </div>
  );
};

export default CouponArea;
