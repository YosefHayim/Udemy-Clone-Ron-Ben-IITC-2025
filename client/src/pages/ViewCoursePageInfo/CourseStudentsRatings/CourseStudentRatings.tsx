const CourseStudentRatings: React.FC<{
  totalRated: number;
  totalStudents: number;
}> = ({ totalRated = 106, totalStudents = 7511 }) => {
  const scrollToReviewsSection = () => {
    window.scrollTo({ top: 3000 });
  };

  return (
    <div className="flex gap-[0.5em] text-white">
      <p className="cursor-pointer text-[#c0c4fc] underline" onClick={scrollToReviewsSection}>
        ({totalRated} ratings)
      </p>
      <p>{totalStudents} students</p>
    </div>
  );
};

export default CourseStudentRatings;
