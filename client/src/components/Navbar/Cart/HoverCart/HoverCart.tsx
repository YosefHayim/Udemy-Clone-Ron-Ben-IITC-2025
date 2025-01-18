import { Button } from "@/components/ui/button";
import ItemInCart from "../ItemInCart/ItemInCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";

const HoverCart = () => {
  const [isLoading, setIsLoading] = useState(true);

  const totalToPay = useSelector(
    (state: any) => state.cart.totalCourseDiscountPrices
  );
  const coursesIdAdded = useSelector(
    (state: any) => state.cart.coursesAddedToCart
  );

  useEffect(() => {
    // Simulate a loading delay to mimic data fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, [totalToPay, coursesIdAdded]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <Loader hSize="1000px" useSmallLoading={false} />
      </div>
    );
  }

  return (
    <Link to="/cart" className="cursor-pointer">
      <div>
        <div className="flex flex-col justify-center items-start rounded-[0.5em] border border-gray-300 w-[300px] bg-white z-[1000] absolute right-[0em] top-[1em] shadow-previewCourseCardShadow cursor-pointer">
          <div className="w-full">
            {coursesIdAdded.length > 0 ? (
              coursesIdAdded.map((courseId: string) => (
                <ItemInCart
                  key={courseId}
                  courseId={courseId}
                  hide={false}
                  showDisPrice={true}
                  shortCutInstructor={true}
                  shortcutTitle={true}
                  chooseFlex={"flex flex-col"}
                  itemsPosition="start"
                  textColor="text-bg-black"
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center w-full text-center mt-[1em]">
                <p>Your cart is empty.</p>
                <b className="text-purpleStatic hover:text-purpleHover cursor-pointer">
                  <Link to="/">Keep shopping</Link>
                </b>
              </div>
            )}
          </div>
          <div className="w-full p-[1em] flex flex-col gap-[0.5em]">
            {totalToPay && coursesIdAdded ? (
              <div>
                <b>Total: ₪{totalToPay ? totalToPay.toFixed(2) : "0.00"}</b>
                <Button className="rounded-[0.2em] font-bold w-full">
                  Go to cart
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HoverCart;
