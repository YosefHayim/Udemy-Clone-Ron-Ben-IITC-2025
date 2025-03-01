import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import HoverHeart from "./HoverHeart/HoverHeart";

const Heart = () => {
  const [showHeartHover, setShowHeartHover] = useState(false);

  const handleMouseEnter = () => setShowHeartHover(true);
  const handleMouseLeave = () => setShowHeartHover(false);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cursor-pointer text-black font-bold hover:text-purple-800 hover:bg-purple-100 py-[0.6rem] px-[0.6rem] rounded-md">
        <IoMdHeartEmpty className="w-6 h-6" />
      </div>
      {showHeartHover && (
        <div className="absolute top-full left-0 z-[5000] p-[2em]">
          <HoverHeart />
        </div>
      )}
    </div>
  );
};

export default Heart;
