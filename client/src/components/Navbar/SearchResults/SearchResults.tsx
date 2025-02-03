import { SearchResultsProps } from "@/types/types";
import SearchResultRow from "./SearchResultRow/SearchResultRow";
import SearchResultsCourseImg from "./SearchResultsCourseImg/SearchResultsCourseImg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SearchResults: React.FC<SearchResultsProps> = ({ isTyping, data }) => {
  if (!data) {
    console.log(`No data provided`);

    return;
  }

  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const courseId = target.id || target.closest("div")?.id;

    if (courseId) navigate(`/course-view/${courseId}`);
  };

  useEffect(() => {
    if (data) {
    }
  }, [data]);

  console.log(data);

  return (
    <div
      onClick={handleClick}
      className={`${
        isTyping ? "block" : "hidden"
      } absolute top-[80%] left-[13%] z-[1000] w-[640px] border border-gray-100 bg-white text-[0.6em]`}
    >
      {data.response?.slice(0, 13).map((result, index: number) => (
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
