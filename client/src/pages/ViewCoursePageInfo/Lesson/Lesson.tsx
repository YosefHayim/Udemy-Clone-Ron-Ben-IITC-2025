import { MdOutlineOndemandVideo } from "react-icons/md";
import { GoLightBulb } from "react-icons/go";

const Lesson = ({ isQuizzLesson = false, title, videoUrl, duration }) => {
  return (
    <div className="flex flex-row justify-between items-center bg-white w-[550px] p-[0.5em] text-[0.9em] border border-right border border-left">
      <div className="flex gap-[1em] items-center">
        {isQuizzLesson ? (
          <GoLightBulb className="text-[#2d2f31]" />
        ) : (
          <MdOutlineOndemandVideo className="text-[#2d2f31]" />
        )}
        <a className="text-[#5022c3] underline cursor-pointer" href={videoUrl}>
          {title}
        </a>
      </div>

      <div className="flex gap-[1em]">
        {isQuizzLesson ? (
          <p className="text-[#6a6f73]">5 questions</p>
        ) : (
          <div className="flex gap-[1em]">
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5022c3] underline"
            >
              Preview
            </a>
            <p className="text-[#6a6f73]">{`${Math.floor(duration / 60)}:${
              duration % 60 < 10 ? "0" : ""
            }${duration % 60}`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lesson;
