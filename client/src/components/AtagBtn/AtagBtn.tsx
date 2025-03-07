import React, { useState } from "react";

const AtagBtn: React.FC<{ aTagName: string }> = ({ aTagName }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="relative inline-block mx-[0.2em]"
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
        <div className="absolute top-[3.5rem] right-0 w-[290px] bg-white shadow-lg rounded-lg p-4 text-center z-50">
          <p className="text-lg font-bold leading-tight text-gray-800">
            {aTagName === "Udemy Business"
              ? "Get your team access to over 27,000 top Udemy courses, anytime, anywhere."
              : "Turn what you know into an opportunity and reach millions around the world."}
          </p>
          <button className="focus:outline-none bg-purple-700 text-base text-white font-bold rounded-md mt-5 px-4 py-3 w-full hover:bg-purple-800">
            {aTagName === "Udemy Business"
              ? "Try Udemy Business"
              : "Learn more"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AtagBtn;
