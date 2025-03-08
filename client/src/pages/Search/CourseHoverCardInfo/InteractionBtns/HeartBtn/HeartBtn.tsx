import Loader from "@/components/Loader/Loader";
import { useEffect, useState } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

const HeartBtn: React.FC<{
  iconSize?: string;
  courseId?: string;
  showHeart?: boolean;
}> = ({ iconSize = "2em", courseId, showHeart = false }) => {
  if (!courseId) return null;

  const [isClickedFav, setClickedFav] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    if (isLoading) return;

    setLoading(true);
    setClickedFav((prev) => !prev);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div
      onClick={handleClick}
      id={`heart-btn-${courseId || "unknown"}`}
      className={`${
        showHeart ? "block" : "hidden"
      } p-[1em] flex items-center justify-center rounded-full border border-purple-700 cursor-pointer hover:bg-purpleHoverBtn transition-all duration-300`}
    >
      {isLoading ? (
        <Loader useSmallLoading={true} hSize="0em" paddingSetTo="0em" />
      ) : isClickedFav ? (
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
