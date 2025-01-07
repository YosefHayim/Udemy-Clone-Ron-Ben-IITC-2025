const CourseStudentRatings = ({
  amountRated = 106,
  totalStudents = "7,511",
}) => {
  return (
    <div>
      <p>({amountRated}) ratings</p>
      <p>{totalStudents}</p>
    </div>
  );
};

export default CourseStudentRatings;
