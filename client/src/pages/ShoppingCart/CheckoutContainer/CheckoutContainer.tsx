import { Button } from "@/components/ui/button";
import CouponArea from "@/pages/ViewCoursePageInfo/CoursePreviewCard/CouponArea/CouponArea";
import { useSelector } from "react-redux";

const CheckoutContainer = () => {
  const totalToPay = useSelector((state) => state.cart.totalCoursesPrice);

  return (
    <div className="flex flex-col items-start justify-start gap-[1em]">
      <div className="text-start w-full mb-[0.5em]">
        <h3 className="text-[#6a6f73] text-[1.2em] font-bold">Total:</h3>
        <h2 className="font-bold text-[2em]">₪{totalToPay}</h2>
        <Button className="w-full rounded-[0.3em] bg-btnColor hover:bg-btnHoverColor">
          Checkout
        </Button>
      </div>
      <hr className="border border-gray-100 w-full" />
      <b>Promotions</b>
      <CouponArea btnBgDesign={"bg-btnColor hover:bg-btnHoverColor"} />
    </div>
  );
};

export default CheckoutContainer;
