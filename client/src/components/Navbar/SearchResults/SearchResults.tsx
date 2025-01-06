import SearchResultRow from "./SearchResultRow/SearchResultRow";
import SearchResultsCourseImg from "./SearchResultsCourseImg/SearchResultsCourseImg";

const SearchResults = () => {
  return (
    <div className="absolute top-[8%] left-[13%] z-[1000] w-[700px] h-[600px] border border-gray-100 bg-white ">
      <SearchResultRow algoWord={"react"} />
      <SearchResultRow algoWord={"react native"} />
      <SearchResultRow algoWord={"react js"} />
      <SearchResultRow algoWord={"reactjs"} />
      <SearchResultRow algoWord={"typescript react"} />
      <SearchResultRow algoWord={"react typescript"} />
      <SearchResultRow algoWord={"advanced react"} />
      <SearchResultRow algoWord={"react course"} />
      <SearchResultsCourseImg
        courseName={"React - The Complete Guide 2024 (incl. Next.js, Redux)"}
        instructorName={"Academind by Maximilian Schwarzmüller"}
      />
      <SearchResultsCourseImg
        courseName={"React - The Complete Guide 2024 (incl. Next.js, Redux)"}
        instructorName={"Academind by Maximilian Schwarzmüller"}
      />
    </div>
  );
};

export default SearchResults;
