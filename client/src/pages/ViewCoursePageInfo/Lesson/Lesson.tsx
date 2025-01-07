import { MdOutlineOndemandVideo } from "react-icons/md";
import { GoLightBulb } from "react-icons/go";

const Lesson = ({ isQuizzLesson = false }) => {
  return (
    <div className="flex flex-row justify-between items-center bg-white w-[550px] p-[0.5em] text-[0.9em]">
      <div className="flex gap-[1em] items-center">
        {isQuizzLesson ? (
          <GoLightBulb className="text-[#2d2f31]" />
        ) : (
          <MdOutlineOndemandVideo className="text-[#2d2f31]" />
        )}
        <p className="text-[#5022c3] underline">Semiconductor : Introduction</p>
      </div>
      <div className="flex gap-[1em]">
        {isQuizzLesson ? (
          <p className="text-[#6a6f73]">5 questions</p>
        ) : (
          <div className="flex gap-[1em]">
            <p className="text-[#5022c3] underline">Preview</p>
            <p className="text-[#6a6f73] underline">03:36</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lesson;
