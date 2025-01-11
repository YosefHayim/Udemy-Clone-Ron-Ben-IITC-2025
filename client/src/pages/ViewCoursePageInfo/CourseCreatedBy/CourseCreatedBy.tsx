const CourseCreatedBy = ({ instructorName, instructorId }) => {
  return (
    <div className="z-[1000] flex flex-row items-center justify-start gap-[0.5em]">
      <p className="text-white">Created by</p>
      <span
        className="text-[#c0c4fc] underline cursor-pointer"
        id={instructorId}
      >
        {instructorName}
      </span>
    </div>
  );
};

export default CourseCreatedBy;
