import Loader from "@/components/Loader/Loader";
import { RootState } from "@/redux/store";
import { setCoursesAddedToWishList } from "@/redux/slices/cartSlice";
import { useState } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeartBtn: React.FC<{
  iconSize?: string;
  courseId?: string;
  showHeart?: boolean;
  customHeartExtraCSS?: string;
}> = ({
  iconSize = "2em",
  courseId,
  showHeart = false,
  customHeartExtraCSS,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cookie = useSelector((state: RootState) => state.user.cookie);
  const coursesInWishlist = useSelector(
    (state: RootState) => state.cart.coursesAddedToWishList,
  );

  const isFavorite = courseId ? coursesInWishlist.includes(courseId) : false;

  const [isLoading, setLoading] = useState(false);

  if (!courseId) return null;

  const handleClick = () => {
    if (!cookie) {
      navigate("/signup");
      return;
    }

    if (isLoading) return;
    setLoading(true);
    dispatch(setCoursesAddedToWishList(courseId));

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div
      onClick={handleClick}
      id={courseId}
      className={`${
        showHeart ? "block" : "hidden"
      } flex cursor-pointer items-center justify-center rounded-full border border-purple-700 p-3 transition-all duration-300 hover:bg-purpleHoverBtn ${customHeartExtraCSS}`}
    >
      {isLoading ? (
        <Loader useSmallLoading={true} hSize="0em" paddingSetTo="0em" />
      ) : isFavorite ? (
        <IoHeartSharp
          size={24}
          className={`text-${iconSize} text-purple-700`}
        />
      ) : (
        <IoHeartOutline
          size={24}
          className={`text-${iconSize} text-purple-700`}
        />
      )}
    </div>
  );
};

export default HeartBtn;
