import SearchCourseCard from "@/pages/Search/SearchCourseCard/SearchCourseCard";
import SidebarFilter from "./SidebarFilter/SidebarFilter";
import FilterNSort from "./SidebarFilter/FilterNSort/FilterNSort";
import CourseHoverCardInfo from "./CourseHoverCardInfo/CourseHoverCardInfo";
import Commercial from "./Commercial/Commercial";
import HotFreshCourses from "./HotFreshCourses/HotFreshCourses";
import { RiInformationFill } from "react-icons/ri";
import RelatedSearchHoverCard from "./RelatedSearchesArea/RelatedSearchHoverCard/RelatedSearchHoverCard";
import RelatedSearchesFooterSearch from "./RelatedSearchesArea/RelatedSearchesFooterSearch/RelatedSearchesFooterSearch";
import RelatedSearchesArea from "./RelatedSearchesArea/RelatedSearchesArea";
import Pagination from "./Pagination/Pagination";

const SearchPage = () => {
  return (
    <div className="flex flex-col w-full gap-[1em] px-6 py-[3em]">
      <h1 className="font-bold text-[1.8em] w-full mb-[0.8em]">
        13 results for "react"
      </h1>
      <FilterNSort />
      <div className="flex flex-row justify-start w-full gap-[1.5em]">
        <div>
          <SidebarFilter />
        </div>

        <div>
          <div>{/* <CourseHoverCardInfo /> */}</div>

          <div>
            <SearchCourseCard />
            <SearchCourseCard />
            <SearchCourseCard />
          </div>

          <div>
            <Commercial />
          </div>
          <div>
            <SearchCourseCard />
            <SearchCourseCard />
            <SearchCourseCard />
          </div>
          <div>
            <HotFreshCourses />
          </div>
          <div>
            <SearchCourseCard />
            <SearchCourseCard />
            <SearchCourseCard />
          </div>
          <RelatedSearchesArea />
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default SearchPage;
