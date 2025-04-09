import React from "react";
import ParagraphInside from "../ParagraphInside/ParagraphInside";
import ButtonInsideHover from "../ButtonInsideHover/ButtonInsideHover";

const WrapperButtonParagraph = ({ paragraphText, to, insideBtnText }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <ParagraphInside paragraphText={paragraphText} />
      <ButtonInsideHover insideBtnText={insideBtnText} to={to} />
    </div>
  );
};

export default WrapperButtonParagraph;
