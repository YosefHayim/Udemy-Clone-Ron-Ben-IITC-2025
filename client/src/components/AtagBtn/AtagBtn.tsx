import React, { useState } from "react";
import { Button } from "../ui/button";
import { btnStyleNHover } from "@/utils/stylesStorage";

const AtagBtn: React.FC<{ aTagName: string }> = ({ aTagName }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="relative mx-[0.2em] inline-block text-[1.4em]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <p
        className={` ${btnStyleNHover} rounded-md px-3 py-3 font-sans text-sm font-normal
        text-[#020202]`}
      >
        {aTagName}
      </p>

      {isHovering && aTagName !== "Explore" && (
        <div>
          <div className="absolute right-0 top-[3.1em] z-50 flex w-[290px] flex-col items-center justify-center gap-[0.5em] rounded-lg border border-gray-300 bg-white p-4 text-center shadow-alertAlgoInfo">
            <p className="font-sans font-extrabold leading-tight text-gray-800">
              {aTagName === "Udemy Business"
                ? "Get your team access to over 27,000 top Udemy courses, anytime, anywhere."
                : "Turn what you know into an opportunity and reach millions around the world."}
            </p>
            <Button className="rounded-[0.2rem] bg-btnColor px-14 py-[1.2rem] font-sans font-sans text-sm font-extrabold text-white transition duration-150 hover:bg-[#892DE1] focus:outline-none">
              {aTagName === "Udemy Business"
                ? "Try Udemy Business"
                : "Learn more"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AtagBtn;
