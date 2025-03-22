import "./styles.css";

const InteractionButtonsOfPreviewCard: React.FC = () => {
  return (
    <div className="relative mb-[1em] flex  w-full flex-wrap justify-between text-[0.75rem]">
      <div className="w-min-max flex cursor-pointer items-center justify-center rounded-sm text-center font-extrabold hover:bg-gray-200">
        <b className=".share">Share</b>
      </div>
      <div className=".gift w-min-max flex cursor-pointer items-center justify-center rounded-sm text-center font-extrabold hover:bg-gray-200">
        <b>Gift this course</b>
      </div>
      <div className=".apply w-min-max flex cursor-pointer items-center justify-center rounded-sm text-center font-extrabold hover:bg-gray-200">
        <b>Apply Coupon</b>
      </div>
    </div>
  );
};

export default InteractionButtonsOfPreviewCard;
