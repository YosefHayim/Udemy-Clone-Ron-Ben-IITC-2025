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
      } absolute top-[8%] left-[13%] z-[1000] w-[700px] h-[600px] border border-gray-100 bg-white `}
    >
      {data.map((result) => (
        <div key={result._id}>
          <SearchResultRow algoWord={result.courseName} />
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
