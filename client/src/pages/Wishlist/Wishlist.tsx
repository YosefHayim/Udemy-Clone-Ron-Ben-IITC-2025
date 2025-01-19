import ItemInCart from "@/components/Navbar/Cart/ItemInCart/ItemInCart";
import { Button } from "@/components/ui/button";
import { RootState } from "@/redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Wishlist: React.FC = () => {
  document.title = "My learning | Udemy";

  const coursesBought = useSelector(
    (state: RootState) => state.user.coursesBought
  );

  return (
    <div className="flex flex-col items-start justify-start p-[1em] bg-[#1d1e27] text-white">
      <div className="px-[15em]">
        <h1 className="my-[1.5em] mb-[1em] ">My learning</h1>
        <div className="flex flex-row items-start justify-start gap-[1em]">
          <b>All courses</b>
          <b>My Lists</b>
          <b>Wishlist</b>
          <b>Archived</b>
          <b>Learning tools</b>
        </div>
      </div>
      <div
        className={`${
          coursesBought.length > 0
            ? `bg-white w-full text-center text-black flex flex-col items-center justify-center`
            : `bg-white w-full h-[400px] text-center text-black flex flex-col items-center justify-center`
        }`}
      >
        {coursesBought && coursesBought.length > 0 ? (
          <div className="grid grid-cols-4 gap-4 w-full text-center p-[5em]">
            {coursesBought.map((courseBought) => (
              <ItemInCart
                showInstructor={false}
                rowPrices={false}
                showHR={false}
                courseImgSize="w-full"
                key={courseBought.course}
                courseId={courseBought.course}
                showFullPrice={false}
                isColCourseBox={true}
                hide={false}
                showDisPrice={false}
                shortCutInstructor={true}
                shortcutTitle={false}
                chooseFlex={"flex flex-row"}
                itemsPosition="start"
                textColor="text-black"
              />
            ))}
          </div>
        ) : (
          <Button className="font-bold rounded-[0.2em] mt-[10em]">
            <Link to="/">Browse all courses</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
