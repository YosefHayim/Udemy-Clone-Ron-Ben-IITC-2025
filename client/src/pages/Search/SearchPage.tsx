import SearchCourseCard from "@/pages/Search/SearchCourseCard/SearchCourseCard";
import SidebarFilter from "./SidebarFilter/SidebarFilter";
import FilterNSort from "./SidebarFilter/FilterNSort/FilterNSort";
import CourseHoverCardInfo from "./CourseHoverCardInfo/CourseHoverCardInfo";

const SearchPage = () => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="font-bold text-[1.8em] w-full mb-[0.8em]">
        13 results for "react"
      </h1>
      <FilterNSort />
      <div className="flex flex-row justify-between w-full gap-[1.5em]">
        <div>
          <SidebarFilter />
        </div>
        <div>
          <div>
            <CourseHoverCardInfo />
          </div>
          <SearchCourseCard />
          <SearchCourseCard />
          <SearchCourseCard />
          <SearchCourseCard />
          <SearchCourseCard />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
