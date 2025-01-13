import SearchCourseCard from "@/pages/Search/SearchCourseCard/SearchCourseCard";
import SidebarFilter from "./SidebarFilter/SidebarFilter";
import FilterNSort from "./SidebarFilter/FilterNSort/FilterNSort";
import Pagination from "./PaginationPages/PaginationPages";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getAllCourses from "@/api/courses/getAllCourses";
import Loader from "@/components/Loader/Loader";
import Commercial from "./Commercial/Commercial";
import HotFreshCourses from "./HotFreshCourses/HotFreshCourses";
import { useState } from "react";
import CourseHoverCardInfo from "./CourseHoverCardInfo/CourseHoverCardInfo";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");
  const [currentPage, setCurrentPage] = useState(1);
  const [filterData, setFilterData] = useState({
    rating: 0.0,
    language: [],
    handsOnPractice: "",
    videoDuration: 0,
    topics: "",
    level: "All Levels",
    subtitles: "",
    price: "",
    certificate: true,
  });
  const navigate = useNavigate();

  const limit = null;

  const { data, isLoading, error } = useQuery({
    queryKey: ["courses", searchTerm, currentPage],
    queryFn: () => getAllCourses(searchTerm, limit, currentPage), // Ensure correct page and limit
    enabled: !!searchTerm,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const courseElement = target.closest("div[id]") as HTMLElement;

    if (courseElement && courseElement.tagName === "DIV") {
      const courseId = courseElement.id;
      if (courseId) {
        navigate(`/course-view/${courseId}`);
      } else {
        console.error("No ID found on the div");
      }
    } else if (
      target.tagName === "BUTTON" &&
      target.textContent === "Add to Cart"
    ) {
      console.log("Add to Cart button clicked");
      // Perform "Add to Cart" action here
    } else {
      console.log("Unhandled click target");
    }
  };

  const handleMouseEnter = (e: React.DOMAttributes<HTMLDivElement>) => {
    // const hoverDiv = e.target.closest("div[id]");
    // if (hoverDiv) {
    //   const courseId = hoverDiv.id;
    //   console.log(courseId);
    // } else {
    //   console.log("Hovered over an unrelated element.");
    // }
  };

  return (
    <div
      className="flex flex-col w-full gap-[1em] px-6 py-[3em]"
      onClick={handleClick}
    >
      <h1 className="font-bold text-[1.8em] w-full mb-[0.8em]">
        {data?.totalCourses} results for "{searchTerm}"
      </h1>
      <FilterNSort totalResults={data.totalCourses} filterData={filterData} />
      <div className="flex flex-row justify-start w-full gap-[1.5em]">
        <div>
          <SidebarFilter
            filterData={filterData}
            setFilterData={setFilterData}
          />
        </div>
        <div>
          <div>
            {data?.response?.slice(0, 18).map((course, index) => [
              <div
                key={course._id}
                id={course._id}
                onMouseEnter={handleMouseEnter}
              >
                <SearchCourseCard course={course} />
                <CourseHoverCardInfo
                  whatYouWillLearn={course.whatYouWillLearn}
                  courseId={course._id}
                />
              </div>,
              index === 2 && <Commercial key="commercial" />,
              index === 6 && <HotFreshCourses key="hotfreshcourses" />,
            ])}
          </div>
        </div>
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default SearchPage;
