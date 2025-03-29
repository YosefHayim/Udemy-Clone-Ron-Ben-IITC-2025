import course from "@/db";
import CourseImg from "../../../../components/CourseCard/CourseImg/CourseImg";
import CourseInstructor from "../../../../components/CourseCard/CourseInstructor/CourseInstructor";
import CoursePrice from "../../../../components/CourseCard/CoursePrice/CoursePrice";
import CourseRatings from "../../../../components/CourseCard/CourseRatings/CourseRatings";
import CourseTag from "../../../../components/CourseCard/CourseTag/CourseTag";
import CourseTitle from "../../../../components/CourseCard/CourseTitle/CourseTitle";
import hotFreshOne from "/images/hot-fresh-course-1.png";

const HotCourseCard = ({ hotCourseAlgo }) => {
  console.log(hotCourseAlgo);

  return (
    <div className="flex w-[200px] cursor-pointer  items-center justify-center gap-[2em]">
      <div>
        <CourseImg courseImg={hotCourseAlgo.courseImg} />
        <div className="flex flex-col items-start justify-start gap-[0.3em]">
          <CourseTitle title={hotCourseAlgo.courseName} shortcutTitle={true} />
          <CourseInstructor instructor={hotCourseAlgo.courseInstructor.fullName} />
          <CourseRatings avgRatings={4} stars={"★★★★☆"} totalRatings={1} />
          <CoursePrice
            extraCSS={`text-sm font-bold`}
            displayPercent={false}
            showFullPrice={false}
            discountPrice={hotCourseAlgo.courseDiscountPrice}
            fullPrice={hotCourseAlgo.courseFullPrice}
            chooseFlex={"flex "}
          />
          <CourseTag tagName={hotCourseAlgo.courseTag} />
        </div>
      </div>
    </div>
  );
};

export default HotCourseCard;
