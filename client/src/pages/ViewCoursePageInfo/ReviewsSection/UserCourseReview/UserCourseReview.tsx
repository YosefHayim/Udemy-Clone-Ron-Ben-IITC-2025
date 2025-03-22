import { SlOptionsVertical } from "react-icons/sl";
import UserDescriptionReview from "./UserDescriptionReview/UserDescriptionReview";
import HelpfulContainer from "../HelpfulContainer/HelpfulContainer";
import UserReviewRating from "./UserReviewRating/UserReviewRating";
import UserProfile from "./UserProfile/UserProfile";
import { useState } from "react";
import DialogReportReview from "../DialogReportReview/DialogReportReview";
import { Review } from "@/types/types";

const UserCourseReview: React.FC<{
  review?: Review;
  widthOfReview?: string;
}> = ({ review, widthOfReview = "w-[300px]" }) => {
  if (!review) {
    return;
  }

  const [activeReviewId, setActiveReviewId] = useState<string | null>(null);
  const [isOpenReportDrawer, setReportDrawer] = useState<boolean | undefined>(
    false,
  );

  const handleToggle = (id: string) => {
    // Toggle the clicked review or close if it's already active
    setActiveReviewId((prevId) => (prevId === id ? null : id));
  };

  const handleReportDrawer = () => {
    setReportDrawer((prev) => !prev); // `prev` is inferred as `boolean | undefined`
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
              reviewUserName={review?.user?.fullName || ""}
              createCommentAt={new Date(review.createdAt)}
            />
          </div>
        </div>
        <div className="relative">
          <div
            className="cursor-pointer rounded-[100em] p-[0.5em]"
            onClick={() => handleToggle(review._id)}
          >
            <SlOptionsVertical />
          </div>
          {activeReviewId === review._id && (
            <div className="absolute left-[-60px] top-full mt-[0.5em] flex h-[50px] w-[75px] items-center justify-center rounded-[0.5em] border border-gray-400 bg-white px-[0.5em] text-center shadow-previewCourseCardShadow">
              <button
                onClick={handleReportDrawer}
                className="font-sans font-extrabold text-[#521e9f] hover:text-[#6D28D5]"
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
