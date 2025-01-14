import CourseRating from "@/pages/ViewCoursePageInfo/CourseRating/CourseRating";

const UserReviewRating = ({ reviewRating, reviewUserName }) => {
  return (
    <div>
      <b>Prakash K.</b>
      <div className="flex flex-row items-center justify-start gap-[0.5em]">
        <CourseRating amountOfStars={reviewRating} />
        <p className="font-bold text-gray-400 text-[0.8em]">4 years ago</p>
      </div>
    </div>
  );
};

export default UserReviewRating;
