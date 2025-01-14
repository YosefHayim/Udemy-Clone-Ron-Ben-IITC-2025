import { SlOptionsVertical } from "react-icons/sl";
import UserDescriptionReview from "./UserDescriptionReview/UserDescriptionReview";
import HelpfulContainer from "../HelpfulContainer/HelpfulContainer";
import UserReviewRating from "./UserReviewRating/UserReviewRating";
import UserProfile from "./UserProfile/UserProfile";

const UserCourseReview = ({ review, widthOfReview = "w-[300px]" }) => {
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
        <div
          id={review._id}
          className="p-[0.5em] cursor-pointer rounded-[100em]"
        >
          <SlOptionsVertical />
        </div>
      </div>
      <UserDescriptionReview description={review.comment} />
      <HelpfulContainer idOfReview={review._id} />
    </div>
  );
};

export default UserCourseReview;
