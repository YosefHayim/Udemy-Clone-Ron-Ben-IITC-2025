import { MdOutlineOndemandVideo } from "react-icons/md";
import { GoLightBulb } from "react-icons/go";
import { Link } from "react-router-dom";

const Lesson: React.FC<{
  isQuizzLesson: boolean;
  title: string;
  videoUrl: string;
  duration: number;
}> = ({ isQuizzLesson = false, title, videoUrl, duration }) => {
  return (
    <div className="flex flex-row justify-between items-center bg-white w-[550px] p-[0.5em]   border-right border border-left">
      <div className="flex gap-[1em] items-center">
        {isQuizzLesson ? (
          <GoLightBulb className="text-languageText" />
        ) : (
          <MdOutlineOndemandVideo className="text-languageText" />
        )}
        <a
          className="text-purpleStatic underline cursor-pointer"
          href={videoUrl}
        >
          {title}
        </a>
      </div>

      <div className="flex gap-[1em]">
        {isQuizzLesson ? (
          <p className="text-weakGray">5 questions</p>
        ) : (
          <div className="flex gap-[1em]">
            <Link
              to={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purpleStatic underline"
            >
              Preview
            </Link>
            <p className="text-weakGray">{`${Math.floor(duration / 60)}:${
              duration % 60 < 10 ? "0" : ""
            }${duration % 60}`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lesson;
