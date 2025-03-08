import { Button } from "@/components/ui/button";
import ItemInCart from "../ItemInCart/ItemInCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";
import { RootState } from "@/redux";

const HoverCart = () => {
  const [isLoading, setIsLoading] = useState(true);

  const totalToPay = useSelector(
    (state: RootState) => state.cart.totalCourseDiscountPrices
  );
  const coursesIdAdded = useSelector(
    (state: RootState) => state.cart.coursesAddedToCart
  );

  useEffect(() => {
    // Simulate a loading delay to mimic data fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, [totalToPay, coursesIdAdded]);

  return (
    <div>
      <div className="rounded-[1em] text-[0.5em] flex flex-col justify-center items-start border border-gray-300 w-[300px] bg-white z-[1000] absolute right-[0em] top-[1em] shadow-alertAlgoInfo cursor-pointer">
        <div className="w-full">
          {coursesIdAdded.length > 0 ? (
            coursesIdAdded.map((courseId: string) => (
              <ItemInCart
                key={courseId}
                courseImgSize={`h-[5em] w-[5em] rounded-[0.5em]`}
                courseId={courseId}
                hide={false}
                showDisPrice={true}
                showFullPrice={false}
                shortCutInstructor={true}
                shortcutTitle={true}
                chooseFlex={"flex flex-col"}
                itemsPosition="start"
                textColor="text-bg-black"
                textSize="text-[1em]"
                gapPrice="gap-[0em]"
              />
            ))
          ) : (
            <div className="text-[2em] flex flex-col items-center justify-center w-full text-center mt-[1em]">
              <p className="text-grayNavbarTxt font-light mb-[1em]">
                Your cart is empty.
              </p>
              <b className="text-purpleStatic hover:text-purpleHover cursor-pointer">
                <Link to="/">Keep shopping</Link>
              </b>
            </div>
          )}
        </div>
        <div className="w-full p-[1em] flex flex-col">
          {totalToPay && coursesIdAdded ? (
            <div>
              <b className="text-[1.5em]">
                Total: ₪{totalToPay ? totalToPay.toFixed(2) : "0.00"}
              </b>
              <Button className="focus:outline-none mt-[1em] w-full rounded-[0.3em] bg-btnColor hover:bg-btnHoverColor py-[1.7em] font-bold">
                <Link to="/cart" className="cursor-pointer">
                  Go to cart
                </Link>
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default HoverCart;
