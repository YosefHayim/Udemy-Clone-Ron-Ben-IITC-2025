import { Button } from "@/components/ui/button";
import ReviewSectionTitle from "./ReviewSectionTitle/ReviewSectionTitle";
import UserCourseReview from "./UserCourseReview/UserCourseReview";

const ReviewsSection = ({ totalRated, avgRating }) => {
  return (
    <div>
      <ReviewSectionTitle totalRated={totalRated} avgRating={avgRating} />
      <div className="grid grid-cols-2 gap-4 w-[700px] mb-[2em]">
        <UserCourseReview />
        <UserCourseReview />
        <UserCourseReview />
        <UserCourseReview />
      </div>
      <div>
        <Button className="hover:bg-hoverDivGray bg-white border border-black text-black font-bold rounded-[0.2em] focus:outline-none">
          Show all reviews
        </Button>
      </div>
    </div>
  );
};

export default ReviewsSection;
