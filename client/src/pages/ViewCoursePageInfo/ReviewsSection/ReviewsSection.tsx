import { Button } from "@/components/ui/button";
import ReviewSectionTitle from "./ReviewSectionTitle/ReviewSectionTitle";
import UserCourseReview from "./UserCourseReview/UserCourseReview";
import { useState } from "react";
import DialogOfAllReviews from "./UserCourseReview/DialogOfAllReviews/DialogOfAllReviews";
import { Review } from "../../types/types";

const ReviewsSection: React.FC<{
  totalRated?: number;
  avgRating: number;
  reviewsToRender: Review[];
}> = ({ avgRating, reviewsToRender }) => {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div>
      <ReviewSectionTitle
        totalRated={reviewsToRender.length}
        avgRating={avgRating}
      />
      <div className="grid grid-cols-2 gap-4 w-[700px] mb-[2em]">
        {reviewsToRender.slice(0, 4).map((review, index) => (
          <UserCourseReview review={review} key={index} />
        ))}
      </div>
      <div>
        <Button
          onClick={handleClick}
          className="hover:bg-hoverDivGray bg-white border border-black text-black font-bold rounded-[0.2em] focus:outline-none"
        >
          Show all reviews
        </Button>
      </div>
      <div>
        <DialogOfAllReviews
          avgRating={avgRating}
          isClicked={isClicked}
          setClicked={setClicked}
        />
      </div>
    </div>
  );
};

export default ReviewsSection;
