import SearchCourseCard from "@/pages/Search/SearchCourseCard/SearchCourseCard";
import SidebarFilter from "./SidebarFilter/SidebarFilter";
import FilterNSort from "./SidebarFilter/FilterNSort/FilterNSort";

const SearchPage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-[1.5em]">13 results for "react"</h1>
      <FilterNSort />
      <div className="flex">
        <div>
          <SidebarFilter />
        </div>
        <div>
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
