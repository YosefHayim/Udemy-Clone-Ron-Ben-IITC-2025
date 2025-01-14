import { SlOptionsVertical } from "react-icons/sl";
import UserDescriptionReview from "./UserDescriptionReview/UserDescriptionReview";
import HelpfulContainer from "../HelpfulContainer/HelpfulContainer";
import UserReviewRating from "./UserReviewRating/UserReviewRating";
import UserProfile from "./UserProfile/UserProfile";

const UserCourseReview = ({ review }) => {
  console.log(review);

  return (
    <div className="flex flex-col gap-[1em] w-[300px]" id={review._id}>
      <hr className="my-[0.5em]" />
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-start justify-start gap-[1em]">
          <UserProfile />
          <div className="flex flex-col items-start justify-start">
            <UserReviewRating />
          </div>
        </div>
        <div>
          <SlOptionsVertical />
        </div>
      </div>
      <UserDescriptionReview />
      <HelpfulContainer />
    </div>
  );
};

export default UserCourseReview;
