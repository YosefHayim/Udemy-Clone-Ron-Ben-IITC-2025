import CourseCard from "./CourseCard/CourseCard";
import ShowMore from "./ShowMore/ShowMore";

const StudentsAlsoBought: React.FC = () => {
  return (
    <div className="w-full">
      <h2 className="w-full py-[0.5em] font-bold">Students also bought</h2>
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <div>
        <ShowMore />
      </div>
    </div>
  );
};

export default StudentsAlsoBought;
