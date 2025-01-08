import SearchCourseCard from "@/pages/Search/SearchCourseCard/SearchCourseCard";
import SidebarFilter from "./SidebarFilter/SidebarFilter";
import FilterNSort from "./SidebarFilter/FilterNSort/FilterNSort";
import Pagination from "./PaginationPages/PaginationPages";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getAllCourses from "@/api/courses/getAllCourses";
import Loader from "@/components/Loader/Loader";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const courseName = searchParams.get("q");

  const { data, isLoading, error } = useQuery({
    queryKey: ["courses", courseName],
    queryFn: () => getAllCourses(courseName),
    enabled: !!courseName,
  });

  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center h-[1000px]">
        <Loader />
      </div>
    );
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
          {data?.response?.map((course) => (
            <div key={course._id}>
              <SearchCourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default SearchPage;
