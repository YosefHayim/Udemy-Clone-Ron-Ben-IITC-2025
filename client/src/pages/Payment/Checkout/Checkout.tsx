import { Button } from "@/components/ui/button";
import { BsFire } from "react-icons/bs";
import { IoMdLock } from "react-icons/io";

const Checkout = () => {
  return (
    <div className="flex flex-col items-start justify-start p-[3em] w-full">
      <h2 className="font-bold">Summary</h2>
      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-col items-start justify-start gap-[0.5em]">
          <div className="flex flex-row items-start justify-between w-full gap-[5em]">
            <p>Original price:</p>
            <p>₪199.90</p>
          </div>
          <hr className="w-full border border-b-gray-400" />
          <div className="flex flex-row items-start justify-between w-full gap-[5em]">
            <b>Total (1 course)</b>
            <p>₪199.90</p>
          </div>
        </div>
        <div>
          <p>
            By completing your purchase you agree to these{" "}
            <span className="text-[#6d28d2]">Terms of Service.</span>
          </p>
        </div>
        <div>
          <Button className="rounded-[0.2em] bg-[#a435f0] hover:bg-[#8710d8] font-bold text-white p-[1.5em]">
            <IoMdLock />
            Complete Checkout
          </Button>
        </div>
        <div>
          <b>30-Day Money-Back Guarantee</b>
          <p>
            Not satisfied? Get a full refund within 30 days. Simple and
            straightforward!
          </p>
        </div>
        <div className="bg-white rounded-[0.3em] p-[1em] flex flex-col items-center justify-center gap-[1em] w-[220px] border border-[#d1d7dc]">
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
