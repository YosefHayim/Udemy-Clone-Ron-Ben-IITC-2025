import CourseInstructor from "@/components/CourseCard/CourseInstructor/CourseInstructor";
import CourseRatings from "@/components/CourseCard/CourseRatings/CourseRatings";
import CoursePrice from "@/components/CourseCard/CoursePrice/CoursePrice";
import CourseImg from "./CourseImg/CourseImg";

const CourseCard = () => {
  return (
    <div>
      <CourseImg />
      <div>
        <CourseInstructor instructor="Sumanta kumar Pal" />
      </div>
      <div>
        <CourseRatings avgRatings="4.3" totalRatings="(106)" />
      </div>
      <CoursePrice
        chooseFlex="flex flex-row items-center"
        discountPrice="39.90"
        fullPrice="79.90"
      />
    </div>
  );
};

export default CourseCard;
