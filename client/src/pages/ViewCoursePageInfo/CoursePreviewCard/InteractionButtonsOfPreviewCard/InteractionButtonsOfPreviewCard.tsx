import SharePopup from "@/pages/EnrollFreeCourse/SharePopup/SharePopup";
import "./styles.css";
import { useState } from "react";
import DialogPopup from "@/components/DialogPopup/DialogPopup";

const InteractionButtonsOfPreviewCard: React.FC = () => {
  const [isClicked, setClicked] = useState(false);
  const [clickEmailDialog, setEmailDialog] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div>
      <div className="relative mb-[1em] flex  w-full flex-wrap justify-between text-[0.75rem]">
        <div
          onClick={handleClick}
          className="w-min-max flex cursor-pointer items-center justify-center rounded-sm text-center font-extrabold hover:bg-gray-200"
        >
          <b className=".share">Share</b>
        </div>
        <div className=".gift w-min-max flex cursor-pointer items-center justify-center rounded-sm text-center font-extrabold hover:bg-gray-200">
          <b>Gift this course</b>
        </div>
        <div className=".apply w-min-max flex cursor-pointer items-center justify-center rounded-sm text-center font-extrabold hover:bg-gray-200">
          <b>Apply Coupon</b>
        </div>
      </div>
      <SharePopup isClicked={isClicked} setClicked={setClicked} />
    </div>
  );
};

export default InteractionButtonsOfPreviewCard;
