import { Button } from "@/components/ui/button";
import ItemInCart from "../ItemInCart/ItemInCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { RootState } from "@/redux/store";

const HoverCart = () => {
  const [isLoading, setIsLoading] = useState(true);

  const totalToPay = useSelector((state: RootState) => state?.cart?.totalCourseDiscountPrices);
  const coursesIdAdded = useSelector((state: RootState) => state?.cart?.coursesAddedToCart);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [totalToPay, coursesIdAdded]);

  return (
    <div>
      <div
        style={{ scrollbarColor: "#8B8B8B #FCFCFC" }}
        className={`${coursesIdAdded.length >= 5 && "h-[550px] overflow-y-scroll"} absolute right-[-30px] top-4 z-[1000] flex w-[300px] cursor-pointer flex-col items-start justify-center rounded-[1em] border border-gray-300 bg-white shadow-alertAlgoInfo`}
      >
        <div className="w-full">
          {coursesIdAdded.length > 0 ? (
            coursesIdAdded.map((courseId: string) => (
              <ItemInCart
                isFBT={false}
                widthChosen={`w-[5em]`}
                key={courseId}
                courseImgSize={`h-[5em] w-[5em] rounded-[0.5em]`}
                courseId={courseId}
                hide={false}
                isMyLearning={false}
                showDisPrice={true}
                showFullPrice={false}
                shortCutInstructor={true}
                shortcutTitle={true}
                chooseFlex={"w-full flex flex-col justify-start"}
                itemsPosition="items-start"
                textColor="text-bg-black"
                gapPrice="gap-[0em]"
              />
            ))
          ) : (
            <div className="mt-3 flex w-full flex-col items-center justify-center text-center">
              <p className="mb-3 text-base font-light text-grayNavbarTxt">Your cart is empty.</p>
              <b className="mb-3 cursor-pointer text-base text-purpleStatic hover:text-purpleHover">
                <Link to="/">Keep shopping</Link>
              </b>
            </div>
          )}
        </div>
        {totalToPay > 0 && coursesIdAdded.length < 5 && (
          <div className="flex w-full flex-col p-3">
            <div>
              <b className="text-[1.5em]">Total: ₪{totalToPay > 0 && totalToPay.toFixed(2)}</b>
              <Button className="mt-[1em] w-full rounded-[0.3em] bg-btnColor py-[1.7em] font-sans font-extrabold hover:bg-btnHoverColor focus:outline-none">
                <Link to="/cart" className="cursor-pointer">
                  Go to cart
                </Link>
              </Button>
            </div>
          </div>
        )}
        {totalToPay > 0 && coursesIdAdded.length > 5 && (
          <div className="z-10 flex w-full cursor-text items-start justify-start border-gray-800 px-3 py-5 shadow-personalizedFooterShadow">
            <b className="text-[1.5em]">Total: ₪{totalToPay && totalToPay.toFixed(2)}</b>
          </div>
        )}
      </div>
    </div>
  );
};

export default HoverCart;
