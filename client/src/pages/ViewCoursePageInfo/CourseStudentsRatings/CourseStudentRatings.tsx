const CourseStudentRatings: React.FC<{
  totalRated: number;
  totalStudents: number;
}> = ({ totalRated = 106, totalStudents = 7511 }) => {
  const scrollToReviewsSection = () => {
    window.scrollTo({ top: 3000 });
  };

  return (
    <div className="flex gap-[0.5em] z-10 text-white">
      <p
        className="underline text-[#c0c4fc] cursor-pointer"
        onClick={scrollToReviewsSection}
      >
        ({totalRated} ratings)
      </p>
      <p>{totalStudents} students</p>
    </div>
  );
};

export default CourseStudentRatings;
