import { IoFilterOutline } from "react-icons/io5";
import SearchCourseCard from "@/pages/Search/SearchCourseCard/SearchCourseCard";
import RatingsFilter from "./SidebarFilter/Ratings/Ratings";
import LanguageFilter from "./SidebarFilter/Language/LanguageFilter";
import SidebarFilter from "./SidebarFilter/SidebarFilter";

const SearchPage = () => {
  return (
    <div>
      <h1>10,000 results for "react"</h1>
      <div className="flex">
        <div className="flex items-center px-[0.5em] py-[1em] border border-black rounded-md w-min cursor-pointer">
          <IoFilterOutline />
          <b className="font-bold text-base leading-[1.2] ml-[0.4em]">Filter</b>
        </div>
        <div className="flex flex-col items-center">
          <select className="block w-full h-12 border border-gray-900 rounded-md bg-white text-gray-900 font-normal text-base leading-[1.4] px-4 pr-12 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="most-relevant">Most Relevant</option>
            <option value="most-reviewed">Most Reviewed</option>
            <option value="highest-rated">Highest Rated</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
      <SidebarFilter />
      {/* <SearchCourseCard />
      <SearchCourseCard />
      <SearchCourseCard />
      <SearchCourseCard />
      <SearchCourseCard /> */}
    </div>
  );
};

export default SearchPage;
