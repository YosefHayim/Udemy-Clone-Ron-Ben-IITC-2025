import CourseImg from "../../../../components/CourseCard/CourseImg/CourseImg";
import CourseInstructor from "../../../../components/CourseCard/CourseInstructor/CourseInstructor";
import CoursePrice from "../../../../components/CourseCard/CoursePrice/CoursePrice";
import CourseRatings from "../../../../components/CourseCard/CourseRatings/CourseRatings";
import CourseTag from "../../../../components/CourseCard/CourseTag/CourseTag";
import CourseTitle from "../../../../components/CourseCard/CourseTitle/CourseTitle";
import hotFreshOne from "/images/hot-fresh-course-1.png";

const HotCourseCard = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-[2em] w-[200px]">
      <div>
        <CourseImg img={hotFreshOne} widthChosen={`w-[250px]`} />
        <div className="flex flex-col items-start justify-start gap-[0.3em]">
          <CourseTitle
            title={
              "Mastering Generative AI Tools: InVideo AI and MidJourney AI"
            }
          />
          <CourseInstructor instructor={"Manas Roy | GenAI Instructor"} />
          <CourseRatings
            avgRatings={"4.0"}
            stars={"★★★★☆"}
            totalRatings={"(1)"}
          />
          <CoursePrice
            discountPrice={"39.90"}
            fullPrice={"79.90"}
            chooseFlex={"flex flex-row"}
          />
          <CourseTag tagName={"New"} bgColorTag={"bg-newTag"} />
        </div>
      </div>
    </div>
  );
};

export default HotCourseCard;
