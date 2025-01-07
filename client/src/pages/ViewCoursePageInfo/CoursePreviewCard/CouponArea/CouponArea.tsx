import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoMdClose } from "react-icons/io";

const CouponArea = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between mb-[0.5em]">
        <div className="w-[320px] border-dashed border border-gray-500 p-[0.5em] flex flex-col items-start  gap-[0.2em]">
          <div className="flex flex-row gap-[0.2em]">
            <b className="text-[#6a6f73]">NEWYEARCAREER</b>
            <p>is applied</p>
            <div className="flex items-center">
              <IoMdClose className="text-[#a435f0] text-[1.4em]" />
            </div>
          </div>
          <p className="text-[#6a6f73]">Udemy coupon</p>
        </div>
      </div>
      <form className="flex flex-row items-center gap-[0.5em]">
        <Input className="rounded-[0.2em]" placeholder="Enter Coupon"></Input>
        <Button className="rounded-[0.2em]">Apply</Button>
      </form>
    </div>
  );
};

export default CouponArea;
