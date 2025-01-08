import SearchCourseCard from "@/pages/Search/SearchCourseCard/SearchCourseCard";
import SidebarFilter from "./SidebarFilter/SidebarFilter";
import FilterNSort from "./SidebarFilter/FilterNSort/FilterNSort";
import Pagination from "./PaginationPages/PaginationPages";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getAllCourses from "@/api/courses/getAllCourses";
import Loader from "@/components/Loader/Loader";
import Commercial from "./Commercial/Commercial";
import HotFreshCourses from "./HotFreshCourses/HotFreshCourses";
import { useState } from "react";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const courseName = searchParams.get("q");
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 18;

  const { data, isLoading, error } = useQuery({
    queryKey: ["courses", courseName, currentPage],
    queryFn: () => getAllCourses(courseName, currentPage, limit),
    enabled: !!courseName,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }

  return (
    <div className="flex flex-col w-full gap-[1em] px-6 py-[3em]">
      <h1 className="font-bold text-[1.8em] w-full mb-[0.8em]">
        {data?.totalCourses} results for "{courseName}"
      </h1>
      <FilterNSort totalResults={data.totalCourses} />
      <div className="flex flex-row justify-start w-full gap-[1.5em]">
        <div>
          <SidebarFilter />
        </div>
        <div>
          <div>
            {data?.response?.slice(0, 18).flatMap((course, index) => [
              <div key={course._id}>
                <SearchCourseCard course={course} />
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
