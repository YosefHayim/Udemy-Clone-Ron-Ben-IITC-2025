const TotalCourseLength: React.FC<{
  totalCourseLessons: number;
  totalCourseDuration: number;
  totalCourseSections: number;
}> = ({ totalCourseLessons, totalCourseDuration, totalCourseSections }) => {
  return (
    <div>
      <div className="mb-[0.5em] flex w-[550px] justify-between">
        <div className="flex flex-row gap-[0.5em]">
          <p>{totalCourseSections + 1} sections</p>
          <p>{totalCourseLessons} lectures</p>
          <p>{totalCourseDuration}h total length</p>
        </div>
        <button className="border-none font-sans font-extrabold text-purpleStatic focus:outline-none">
          Expand all sections
        </button>
      </div>
    </div>
  );
};

export default TotalCourseLength;
