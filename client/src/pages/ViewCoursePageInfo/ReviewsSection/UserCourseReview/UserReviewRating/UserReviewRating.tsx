import CourseRating from "@/pages/ViewCoursePageInfo/CourseRating/CourseRating";
import { calculateTimeDifference } from "@/utils/whenCreated";

const UserReviewRating: React.FC<{
  reviewRating: number;
  reviewUserName: string;
  createCommentAt: Date;
}> = ({ reviewRating, reviewUserName, createCommentAt }) => {
  return (
    <div>
      <b>{reviewUserName}</b>
      <div className="flex flex-row items-center justify-start gap-[0.5em]">
        <CourseRating
          amountOfStars={reviewRating}
          courseRating={reviewRating}
        />
        <p className="font-bold text-gray-400 text-[0.8em]">
          {calculateTimeDifference(createCommentAt)}
        </p>
      </div>
    </div>
  );
};

export default UserReviewRating;
