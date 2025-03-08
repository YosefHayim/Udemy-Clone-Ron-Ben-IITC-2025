import { RootState } from "@/redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemInCart from "../../Cart/ItemInCart/ItemInCart";

const HoverHeart = () => {
  const totalCourses = useSelector(
    (state: RootState) => state.cart.coursesAddedToWishList
  );

  useEffect(() => {}, [totalCourses]);

  return (
    <div>
      {totalCourses.length > 0 ? (
        totalCourses.map((courseId: string) => (
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
        <div className="p-[1em] rounded-[0.8em] flex flex-col justify-center items-start border border-gray-300 w-[300px] bg-white z-[1000] absolute right-[0em] top-[1em] shadow-alertAlgoInfo cursor-pointer">
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
    </div>
  );
};

export default HoverHeart;
