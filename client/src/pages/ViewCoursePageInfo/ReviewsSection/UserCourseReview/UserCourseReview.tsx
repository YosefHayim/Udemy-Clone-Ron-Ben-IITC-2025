import { SlOptionsVertical } from "react-icons/sl";
import UserDescriptionReview from "./UserDescriptionReview/UserDescriptionReview";
import HelpfulContainer from "../HelpfulContainer/HelpfulContainer";
import UserReviewRating from "./UserReviewRating/UserReviewRating";
import UserProfile from "./UserProfile/UserProfile";
import { useState } from "react";
import DialogReportReview from "../DialogReportReview/DialogReportReview";

const UserCourseReview: React.FC<{
  review: string;
  widthOfReview?: string;
}> = ({ review, widthOfReview = "w-[300px]" }) => {
  if (!review) {
    return;
  }

  const [activeReviewId, setActiveReviewId] = useState(null);
  const [isOpenReportDrawer, setReportDrawer] = useState(null);

  const handleToggle = (id) => {
    // Toggle the clicked review or close if it's already active
    setActiveReviewId((prevId) => (prevId === id ? null : id));
  };

  const handleReportDrawer = () => {
    setReportDrawer((prevId) => !prevId);
  };

  return (
    <div className={`flex flex-col gap-[1em] ${widthOfReview}`} id={review._id}>
      <hr className="my-[0.5em]" />
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-start justify-start gap-[1em]">
          <UserProfile />
          <div className="flex flex-col items-start justify-start">
            <UserReviewRating
              reviewRating={review.rating}
              reviewUserName={review.user.fullName}
              createCommentAt={review.createdAt}
            />
          </div>
        </div>
        <div className="relative">
          <div
            className="p-[0.5em] cursor-pointer rounded-[100em]"
            onClick={() => handleToggle(review._id)}
          >
            <SlOptionsVertical />
          </div>
          {activeReviewId === review._id && (
            <div className="bg-white rounded-[0.5em] w-[75px] h-[50px] border border-gray-400 shadow-previewCourseCardShadow text-center flex items-center justify-center absolute top-full left-[-60px] mt-[0.5em] px-[0.5em]">
              <button
                onClick={handleReportDrawer}
                className="hover:text-[#6D28D5] text-[#521e9f] font-bold"
                id={review._id}
              >
                Report
              </button>
            </div>
          )}
          {isOpenReportDrawer ? (
            <DialogReportReview
              userId={review.user._id}
              reviewId={review._id}
              isOpenReportDrawer={isOpenReportDrawer}
              setReportDrawer={setReportDrawer}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <UserDescriptionReview description={review.comment} />
      <HelpfulContainer idOfReview={review._id} />
    </div>
  );
};

export default UserCourseReview;
