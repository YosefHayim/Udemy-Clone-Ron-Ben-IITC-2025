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
import React, { useContext, useState } from "react";
import CourseHoverCardInfo from "./CourseHoverCardInfo/CourseHoverCardInfo";

import { useEffect } from "react";
import RelatedSearches from "./RelatedSearches/RelatedSearches";
import { getTopValue } from "@/utils/geTopValues";
import { searchAlgoLocalStorage } from "@/utils/searchesOfUser";
import { filterContext } from "@/contexts/filterSearch";

const SearchPage: React.FC = () => {
  const [filterData, setFilterData] = useContext(filterContext);

  document.title = "Search results | Udemy";
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm: string | null = searchParams.get("q")?.toLowerCase() || "";
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);
  const limit = 20;

  // Update URL dynamically when filterData or page changes
  useEffect(() => {
    const params: Record<string, string> = {
      q: searchTerm || "",
      page: currentPage.toString(),
      limit: limit.toString(),
    };

    // Add valid filters from filterData
    if (filterData.language.size > 0) {
      params.courseLanguages = Array.from(filterData.language).join(",");
    }
    if (filterData.levels.size > 0) {
      params.courseLevel = Array.from(filterData.levels).join(",");
    }
    if (filterData.topics.size > 0) {
      params.courseTopic = Array.from(filterData.topics).join(",");
    }
    if (filterData.ratings) {
      params.averageRating = filterData.ratings.toString();
    }
    if (filterData.certificateOnly) {
      params.certificateOnly = "true";
    }

    if (filterData.price) {
      params.price = filterData.price; // Include price filter
    }

    setSearchParams(params);
  }, [filterData, currentPage, searchTerm, setSearchParams]);

  const { data, isLoading, error, isPending } = useQuery({
    queryKey: ["courses", searchTerm.toLowerCase(), currentPage, JSON.stringify(filterData)],
    queryFn: () => {
      if (!searchTerm && !currentPage && !limit) {
        throw new Error("Course ID is undefined");
      }
      searchAlgoLocalStorage(searchTerm);
      return getAllCourses(searchTerm || "", filterData || {}, limit, currentPage);
    },
    enabled: !!searchTerm,
  });

  if (isLoading || isPending) {
    return <Loader hSize="1000px" useSmallLoading={false} />;
  }

  if (error || !data) {
    navigate(`/not/search/not/found:${searchTerm.toLowerCase()}`);
  }

  return (
    <div className="w-full bg-white">
      {/* Central container */}
      <div className="mx-auto max-w-screen-xl py-8">
        {/* Filter */}
        <FilterNSort coursesResults={data?.totalCourses} searchTerm={searchTerm} />

        {/* Grid layout: Sidebar | Curses */}
        <div className="mt-4 flex gap-6">
          {/* Sidebar on the left */}
          <aside className="w-[320px] shrink-0">
            <SidebarFilter />
          </aside>

          {/* courses on the right */}
          <main className="flex flex-grow flex-col">
            <div className="flex flex-col gap-1">
              {data?.response?.slice(0, 18).map((course, index: number) => (
                <div
                  key={course?._id}
                  id={course?._id}
                  className="relative w-auto"
                  onMouseEnter={() => setHoveredCourse(course?._id)}
                  onMouseLeave={() => setHoveredCourse(null)}
                >
                  <SearchCourseCard course={course} />

                  {/* Hover card */}
                  {hoveredCourse === course?._id && (
                    <div
                      className={`absolute right-[60%] z-10 w-1/2 translate-x-1/2 ${getTopValue(index)}`}
                    >
                      <CourseHoverCardInfo
                        positionedLeft={false}
                        positionedRight={false}
                        instructorId={course?.courseInstructor?._id}
                        courseTopic={course?.courseTopic}
                        index={index}
                        whatYouWillLearn={course?.whatYouWillLearn}
                        courseId={course?._id}
                        fullPriceCourse={course?.courseFullPrice}
                        coursePrice={course?.courseDiscountPrice}
                      />
                    </div>
                  )}

                  {/* Anúncios intermediários */}
                  {index === 2 && <Commercial key="commercial" />}
                  {index === 6 && <HotFreshCourses key="hotfreshcourses" />}
                </div>
              ))}
            </div>

            {/* Pesquisas relacionadas */}
            <div>
              <RelatedSearches />
            </div>
          </main>
        </div>

        {/* Paginação */}
        <div className="mt-10">
          <Pagination
            totalPages={data?.totalPages}
            currentPage={currentPage || 1}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
