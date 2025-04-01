import ErrorImg from "./ErrorImg/ErrorImg";
import ParagraphError from "./ParagraphError/ParagraphError";
import TitleError from "./TitleError.tsx/TitleError";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  document.title = "Online Courses - Learn Anything, On Your Schedule | Udemy";

  setTimeout(() => {
    navigate("/");
  }, 1500);

  return (
    <div className="flex flex-col items-center justify-center gap-[1em] p-[2em]">
      <ErrorImg />
      <TitleError />
      <ParagraphError />
    </div>
  );
};

export default NotFound;
