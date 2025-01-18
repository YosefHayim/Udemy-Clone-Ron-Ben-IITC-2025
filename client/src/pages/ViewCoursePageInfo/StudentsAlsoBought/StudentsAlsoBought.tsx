import CourseCard from "./CourseCard/CourseCard";
import ShowMore from "./ShowMore/ShowMore";

const StudentsAlsoBought: React.FC = () => {
  return (
    <div>
      <h2 className="font-bold py-[0.5em]">Students also bought</h2>
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
