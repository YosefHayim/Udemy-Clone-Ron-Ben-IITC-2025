import SearchResultRow from "./SearchResultRow/SearchResultRow";
import SearchResultsCourseImg from "./SearchResultsCourseImg/SearchResultsCourseImg";

const SearchResults = ({ isTyping, data }) => {
  console.log(data);
  if (!data) {
    return;
  }
  return (
    <div
      className={`${
        isTyping ? "block" : "hidden"
      } absolute top-[8%] left-[13%] z-[1000] w-[700px] border border-gray-100 bg-white `}
    >
      {data.slice(0, 13).map((result, index) => (
        <div key={result._id}>
          {index < 9 ? (
            <SearchResultRow algoWord={result.courseName} />
          ) : (
            <SearchResultsCourseImg
              courseName={result.courseName}
              instructorName={result.courseInstructor.fullName}
              courseImg={result.courseImg}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
