import { SearchResultsProps } from "@/types/types";
import SearchResultRow from "./SearchResultRow/SearchResultRow";
import SearchResultsCourseImg from "./SearchResultsCourseImg/SearchResultsCourseImg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SearchResults: React.FC<SearchResultsProps> = ({ isTyping, data }) => {
  if (!data) {
    return;
  }

  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const courseId = (e.target as HTMLElement).closest("div")?.id;
    navigate(`/course-view/${courseId}`);
  };

  useEffect(() => {
    if (data) {
    }
  }, [data]);

  return (
    <div
      onClick={handleClick}
      className={`${
        isTyping ? "block" : "hidden"
      } absolute top-[8%] left-[13%] z-[1000] w-[700px] border border-gray-100 bg-white `}
    >
      {data.response.slice(0, 13).map((result, index) => (
        <div key={result._id}>
          {index < 9 ? (
            <SearchResultRow
              algoWord={result.courseName}
              courseId={result._id}
            />
          ) : (
            <SearchResultsCourseImg
              courseName={result.courseName}
              instructorName={result.courseInstructor.fullName}
              courseImg={result.courseImg}
              courseId={result._id}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
