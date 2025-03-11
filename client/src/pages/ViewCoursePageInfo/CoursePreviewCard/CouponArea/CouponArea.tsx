import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoMdClose } from "react-icons/io";

const CouponArea: React.FC<{ btnBgDesign?: string; couponText?: string }> = ({
  btnBgDesign = "",
  couponText = "NEWYEARCAREER",
}) => {
  return (
    <div>
      <div className="flex flex-row border-dashed border border-gray-500 p-[1em] mb-[1em]">
        <div className="flex flex-row items-center justify-between mb-[0.5em] w-full">
          <div className="relative w-full flex flex-col items-start gap-[0.2em]">
            <div className="flex flex-row gap-[0.2em] w-full">
              <div className="flex flex-row gap-[0.2em] w-full">
                <b className="text-[#6a6f73]">{couponText}</b>
                <p>is applied</p>
              </div>
              <div>
                <IoMdClose className="text-[#a435f0] text-[2em] cursor-pointer" />
              </div>
            </div>
            <div>
              <p className="text-[#6a6f73]">Udemy coupon</p>
            </div>
          </div>
        </div>
      </div>
      <form className="flex flex-row items-center gap-[0.5em]">
        <Input className="rounded-[0.2em]" placeholder="Enter Coupon"></Input>
        <Button className={`${btnBgDesign} rounded-[0.2em]`}>Apply</Button>
      </form>
    </div>
  );
};

export default CouponArea;
