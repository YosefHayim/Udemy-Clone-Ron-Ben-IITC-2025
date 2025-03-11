import React, { useState } from "react";
import { Button } from "../ui/button";

const AtagBtn: React.FC<{ aTagName: string }> = ({ aTagName }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="relative inline-block mx-[0.2em] text-[1.4em]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <p
        className="text-[#020202] font-normal text-sm font-Sans rounded-md px-3
        py-3 hover:bg-purple-100 hover:text-purple-700 focus:outline-none cursor-pointer
        focus:ring-2 focus:ring-purple-300"
      >
        {aTagName}
      </p>

      {isHovering && aTagName !== "Categories" && (
        <div>
          <div className="flex flex-col items-center justify-center gap-[0.5em] shadow-alertAlgoInfo border border-gray-300 absolute top-[3.1em] right-0 w-[290px] bg-white rounded-lg p-4 text-center z-50">
            <p className="font-bold leading-tight text-gray-800">
              {aTagName === "Udemy Business"
                ? "Get your team access to over 27,000 top Udemy courses, anytime, anywhere."
                : "Turn what you know into an opportunity and reach millions around the world."}
            </p>
            <Button className="font-bold transition duration-150 text-sm font-Sans py-[1.2rem] bg-btnColor hover:bg-[#892DE1] text-white rounded-[0.2rem] px-14 focus:outline-none">
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