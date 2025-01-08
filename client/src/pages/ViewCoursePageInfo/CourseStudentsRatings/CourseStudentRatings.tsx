const CourseStudentRatings = ({
  totalRated = 106,
  totalStudents = "7,511",
}) => {
  return (
    <div className="flex gap-[0.5em] z-10 text-white">
      <p className="underline text-[#c0c4fc]">({totalRated} ratings)</p>
      <p>{totalStudents} students</p>
    </div>
  );
};

export default CourseStudentRatings;
