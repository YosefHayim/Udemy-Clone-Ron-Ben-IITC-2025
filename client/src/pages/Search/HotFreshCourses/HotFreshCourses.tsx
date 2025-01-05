import CourseImg from "../SearchCourseCard/CourseImg/CourseImg";
import CourseInstructor from "../SearchCourseCard/CourseInstructor/CourseInstructor";
import CoursePrice from "../SearchCourseCard/CoursePrice/CoursePrice";
import CourseRatings from "../SearchCourseCard/CourseRatings/CourseRatings";
import CourseTag from "../SearchCourseCard/CourseTag/CourseTag";
import CourseTitle from "../SearchCourseCard/CourseTitle/CourseTitle";
import hotFreshOne from "/images/hot-fresh-course-1.png";
import hotFreshTwo from "/images/hot-fresh-course-2.png";
import hotFreshThree from "/images/hot-fresh-course-3.png";

const HotFreshCourses = () => {
  return (
    <div className="flex flex-col items-start justify-start pb-[1.5em]">
      <h2 className="font-bold text-[1.5em] my-[0.5em]">
        Hot and Fresh Courses
      </h2>
      <div className="flex flex-row items-center justify-center gap-[2em]">
        <div>
          <CourseImg img={hotFreshOne} widthChosen={`width-[310px]`} />
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
      <hr />
    </div>
  );
};

export default HotFreshCourses;
