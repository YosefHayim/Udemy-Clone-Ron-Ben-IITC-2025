import React, { useState } from "react";
import { btnStyleNHover } from "@/utils/stylesStorage";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import WrapperButtonParagraph from "./WrapperButtonParagraph/WrapperButtonParagraph";

const ButtonNavbar: React.FC<{
  buttonName: string;
  insideBtnText: string;
  paragraphText: string;
  to: string;
  coursesInProgress: number;
}> = ({ buttonName, insideBtnText, paragraphText, to, coursesInProgress }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="w-min-max relative mx-[0.2em]"
    >
      <p
        className={`${btnStyleNHover} flex-row overflow-hidden text-ellipsis whitespace-nowrap rounded-md font-sans text-[0.85rem] font-normal text-[#37474F]`}
      >
        {buttonName}
      </p>
      <div>
        {isHovering && (
          <div className="absolute right-0 top-[105%] z-50 flex w-[290px] flex-col items-center justify-center gap-[0.5em] rounded-lg border border-gray-300 bg-white p-4 text-center shadow-alertAlgoInfo">
            <WrapperButtonParagraph
              insideBtnText={insideBtnText}
              paragraphText={paragraphText}
              to={to}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonNavbar;
