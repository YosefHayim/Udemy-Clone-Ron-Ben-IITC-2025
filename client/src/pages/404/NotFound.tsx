import ErrorImg from "./ErrorImg/ErrorImg";
import ParagraphError from "./ParagraphError/ParagraphError";
import TitleError from "./TitleError.tsx/TitleError";

const NotFound: React.FC = () => {
  document.title = "Online Courses - Learn Anything, On Your Schedule | Udemy";

  return (
    <div className="flex flex-col items-center justify-center gap-[1em] p-[2em]">
      <ErrorImg />
      <TitleError />
      <ParagraphError />
    </div>
  );
};

export default NotFound;
