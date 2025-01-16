import { Button } from "@/components/ui/button";
import CouponArea from "@/pages/ViewCoursePageInfo/CoursePreviewCard/CouponArea/CouponArea";
import { setRole } from "@/redux/slices/userSlice";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckoutContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalToPay = useSelector(
    (state) => state.cart.totalCourseDiscountPrices
  );

  const totalSavings = useSelector((state) => state.cart.totalSavings);

  const totalDiscountPercent = useSelector(
    (state) => state.cart.totalDiscountPercentage
  );

  useEffect(() => {}, [totalToPay, totalDiscountPercent, totalSavings]);

  const handleCheckout = () => {
    const cookie = Cookies.get("cookie");
    const decoded = jwtDecode(cookie);
    const isLogged = dispatch(setRole(decoded.role));
    if (!cookie && cookie.length < 20 && !isLogged) {
      navigate("/login");
    }
    navigate("/payment/checkout/");
  };

  return (
    <div className="flex flex-col items-start justify-start gap-[1em]">
      <div className="text-start w-full mb-[0.5em]">
        <h3 className="text-[#6a6f73] text-[1.2em] font-bold">Total:</h3>
        <h2 className="font-bold text-[2em]">₪{totalToPay?.toFixed(2) || 0}</h2>
        <p className="line-through text-gray-600">
          {totalSavings?.toFixed(2) || 0}
        </p>
        <p className="text-gray-600">{totalDiscountPercent}% off</p>
        <Button
          className="w-full rounded-[0.3em] bg-btnColor hover:bg-btnHoverColor"
          onClick={handleCheckout}
        >
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
