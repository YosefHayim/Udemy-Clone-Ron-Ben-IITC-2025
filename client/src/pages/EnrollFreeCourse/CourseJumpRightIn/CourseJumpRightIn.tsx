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
    <div className="p-[1em] ml-[1.5em] text-white">
      <b className="mb-[1em]">Jump right in</b>
      <div className="p-[1em] bg-[#1d1e27] w-full flex flex-row items-start gap-[1em]">
        <div>
          <img src={courseImg} alt="" className="w-[200px] h-[200px]" />
        </div>
        <div className="flex flex-col items-start justify-start gap-[1em]">
          <b>Foundations of Front-End Web Development</b>
          <p>By {instructor}</p>
          <b>Your progress</b>
          <progress className="w-[800px]"></progress>
          <button
            className="px-6 py-2 bg-purple-600 text-white rounded-[0.2em] shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 mr-4 font-bold"
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
