import ItemInCart from "@/components/Navbar/Cart/ItemInCart/ItemInCart";
import { Button } from "@/components/ui/button";
import CouponArea from "../ViewCoursePageInfo/CoursePreviewCard/CouponArea/CouponArea";

const ShoppingCart = () => {
  return (
    <div className="p-[1em]">
      <div className="w-[1200px] flex flex-row items-start justify-start">
        <div className="flex flex-row items-baseline justify-center gap-[2em] w-full">
          <div className="flex flex-col items-center justify-center gap-[1em]">
            <div className="font-bold w-full flex flex-col items-start justify-start gap-[1.5em] mt-[1em]">
              <h1>Shopping Cart</h1>
              <h2>2 Courses in Cart</h2>
            </div>
            <hr className="w-full" />
            <ItemInCart />
            <ItemInCart />
            <ItemInCart />
          </div>
          <div className="flex flex-col items-start justify-start gap-[1em]">
            <div className="text-start w-full mb-[0.5em]">
              <h3 className="text-[#6a6f73] text-[1.2em] font-bold">Total:</h3>
              <h2 className="font-bold text-[2em]">₪1,459.70</h2>
              <Button className="w-full rounded-[0.3em] bg-btnColor hover:bg-btnHoverColor">
                Checkout
              </Button>
            </div>
            <hr className="border border-gray-100 w-full" />
            <b>Promotions</b>
            <CouponArea btnBgDesign={"bg-btnColor hover:bg-btnHoverColor"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
