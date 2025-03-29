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
    <div className="border-right border-left flex w-[550px]  items-center justify-between   border bg-white p-[0.5em]">
      <div className="flex items-center gap-[1em]">
        {isQuizzLesson ? (
          <GoLightBulb className="text-languageText" />
        ) : (
          <MdOutlineOndemandVideo className="text-languageText" />
        )}
        <a className="cursor-pointer text-purpleStatic underline" href={videoUrl}>
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
