import { RootState } from "@/redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemInCart from "../../Cart/ItemInCart/ItemInCart";
import AddToCart from "@/pages/Search/CourseHoverCardInfo/InteractionBtns/AddToCart/AddToCart";
import { Button } from "@/components/ui/button";

const HoverHeart = () => {
  const totalCourses = useSelector(
    (state: RootState) => state.cart.coursesAddedToWishList
  );

  useEffect(() => {}, [totalCourses]);

  return (
    <div>
      <div className="rounded-t-lg flex flex-col justify-center items-start border border-gray-300 w-[300px] bg-white z-[1000] absolute right-[0em] top-[1em] shadow-alertAlgoInfo cursor-pointer">
        {totalCourses.length > 0 ? (
          totalCourses.map((courseId: string) => (
            <div>
              <ItemInCart
                key={courseId}
                isFontThick={true}
                courseImgSize={`h-[5em] w-[10em] rounded-[0.5em]`}
                courseId={courseId}
                hide={false}
                showHR={false}
                showDisPrice={true}
                showFullPrice={true}
                shortCutInstructor={true}
                shortcutTitle={true}
                chooseFlex={"flex flex-col"}
                itemsPosition="start"
                textColor="text-bg-black"
                gapPrice="gap-[0em]"
              />
              <div className="w-full p-[1em]">
                <AddToCart
                  extraCustomCss="p-[1.5em]"
                  isWhite={true}
                  courseId={"courseId"}
                  discountPrice={2}
                  fullPriceCourse={2}
                />
              </div>
              <hr />
            </div>
          ))
        ) : (
          <div className="mt-[3.5em] p-[1em] rounded-[0.8em] flex flex-col justify-center items-start w-[300px] bg-white z-[1000] absolute right-[0em] shadow-alertAlgoInfo cursor-pointer">
            <div className="w-full">
              <div className="flex flex-col items-center justify-center w-full text-center">
                <p className="font-medium mb-[1em]">Your wishlist is empty.</p>
                <b className="text-purpleStatic hover:text-purpleHover cursor-pointer">
                  <Link to="/">Explore courses</Link>
                </b>
              </div>
            </div>
          </div>
        )}
        <div className="w-full p-[1em]">
          {totalCourses.length >= 1 && (
            <Button className="font-bold w-full rounded-[0.2em] py-[1.5em] focus:outline-none bg-btnColor hover:bg-btnHoverColor">
              Go to wishlist
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HoverHeart;
