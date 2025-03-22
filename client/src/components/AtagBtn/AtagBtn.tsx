import React, { useState } from "react";
import { Button } from "../ui/button";
import { btnStyleNHover } from "@/utils/stylesStorage";
import { Link } from "react-router-dom";

const AtagBtn: React.FC<{ aTagName: string }> = ({ aTagName }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="w-min-max relative mx-[0.2em] inline-block text-[1.4em]"
    >
      <p
        className={`${btnStyleNHover} rounded-md px-3 py-3 font-sans text-sm font-normal text-[#020202]`}
      >
        {aTagName}
      </p>
      <div>
        {isHovering && (
          <div className="absolute right-0 top-[3.1em] z-50 flex w-[290px] flex-col items-center justify-center gap-[0.5em] rounded-lg border border-gray-300 bg-white p-4 text-center shadow-alertAlgoInfo">
            {aTagName === "Udemy Business" && (
              <>
                <p className="font-sans font-extrabold leading-tight text-gray-800">
                  Get your team access to over 27,000 top Udemy courses,
                  anytime, anywhere.
                </p>
                <Button className="rounded-[0.2rem] bg-btnColor px-14 py-[1.2rem] font-sans text-sm font-extrabold text-white transition duration-150 hover:bg-[#892DE1] focus:outline-none">
                  <Link to="/not-found">Try Udemy Business</Link>
                </Button>
              </>
            )}
            {aTagName === "My learning" && (
              <>
                <p className="font-sans font-extrabold leading-tight text-gray-800">
                  Start learning from over 250,000 courses today.
                </p>
                <Button className="w-full rounded-[0.3em] border border-purple-800 bg-white px-2 py-3 font-sans font-extrabold text-purple-800 hover:bg-purple-100 focus:outline-none">
                  <Link to="/">Browse now</Link>
                </Button>
              </>
            )}
            {aTagName === "Teach on Udemy" && (
              <>
                <p className="font-sans font-extrabold leading-tight text-gray-800">
                  Turn what you know into an opportunity and reach millions
                  around the world.
                </p>
                <Button className="rounded-[0.2rem] bg-btnColor px-14 py-[1.2rem] font-sans text-sm font-extrabold text-white transition duration-150 hover:bg-[#892DE1] focus:outline-none">
                  <Link to="/teaching/?ref=teach_header">Learn more</Link>
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AtagBtn;
