const CourseStudentRatings: React.FC<{
  totalRated: number;
  totalStudents: number;
}> = ({ totalRated = 106, totalStudents = 7511 }) => {
  return (
    <div className="flex gap-[0.5em] z-10 text-white">
      <p className="underline text-[#c0c4fc] cursor-pointer">
        ({totalRated} ratings)
      </p>
      <p>{totalStudents} students</p>
    </div>
  );
};

export default CourseStudentRatings;
