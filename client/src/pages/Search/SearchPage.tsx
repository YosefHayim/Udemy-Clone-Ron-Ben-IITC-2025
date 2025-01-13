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

  const handleClick = (e) => {
    const courseElement = e.target.closest("div").id;
    console.log(courseElement);

    if (courseElement) {
      const courseId = courseElement.id;
      console.log(courseId);
      navigate(`/course-view/:${courseId}`);
    } else {
      return;
    }
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
              <div key={course._id}>
                <SearchCourseCard course={course} id={course._id} />
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
