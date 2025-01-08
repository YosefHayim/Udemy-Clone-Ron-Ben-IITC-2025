import TitleSection from "./TitleSection/TitleSection";
import CourseCard from "./CourseCard/CourseCard";

const MoreCoursesByInstructor = () => {
  return (
    <div>
      <TitleSection />
      <div className="w-[650px] flex flex-row items-start justify-start gap-[1em]">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <div className="my-[2em]">
        <hr />
      </div>
      <div className="border border-black rounded-[0.2em] p-[0.8em] text-center hover:bg-hoverDivGray cursor-pointer">
        <button>Show more</button>
      </div>
    </div>
  );
};

export default MoreCoursesByInstructor;
