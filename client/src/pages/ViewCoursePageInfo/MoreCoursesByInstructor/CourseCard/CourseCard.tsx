import CourseInstructor from "@/components/CourseCard/CourseInstructor/CourseInstructor";
import CourseRatings from "@/components/CourseCard/CourseRatings/CourseRatings";
import CoursePrice from "@/components/CourseCard/CoursePrice/CoursePrice";
import CourseLength from "../CourseLength/CourseLength";
import CourseImg from "../CourseImg/CourseImg";

const CourseCard: React.FC = () => {
  return (
    <div>
      <CourseImg />
      <div>
        <CourseInstructor instructor="Sumanta kumar Pal" />
      </div>
      <div>
        <CourseRatings avgRatings="4.3" totalRatings="(106)" />
      </div>
      <CourseLength />
      <CoursePrice
        chooseFlex="flex flex-row items-center"
        discountPrice={39.9}
        fullPrice={79.9}
      />
    </div>
  );
};

export default CourseCard;
