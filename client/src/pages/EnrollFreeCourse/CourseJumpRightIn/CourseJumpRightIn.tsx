import { useNavigate } from "react-router-dom";

const CourseJumpRightIn = ({
  sanitizedCourseId = "",
  courseImg = "",
  instructor = "",
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/course/:${sanitizedCourseId}/lesson/:id/*`);
  };
  return (
    <div className="ml-[1.5em] p-[1em] text-white">
      <b className="mb-[1em]">Jump right in</b>
      <div className="flex w-full flex-row items-start gap-[1em] bg-grayUdemy p-[1em]">
        <div>
          <img src={courseImg} alt="" className="h-[200px] w-[200px]" />
        </div>
        <div className="flex flex-col items-start justify-start gap-[1em]">
          <b>Foundations of Front-End Web Development</b>
          <p>By {instructor}</p>
          <b>Your progress</b>
          <progress className="w-[800px]"></progress>
          <button
            className="mr-4 rounded-[0.2em] bg-purple-600 px-6 py-2 font-extrabold text-white shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onClick={handleNavigate}
          >
            Start course
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CourseJumpRightIn;
