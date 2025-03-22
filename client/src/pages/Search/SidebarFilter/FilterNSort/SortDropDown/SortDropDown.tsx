import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { filterContext } from "@/routes/AppRoutes";

const SortDropDown = () => {
  const [filterData, setFilterData] = useContext(filterContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedSort, setSelectedSort] = useState<string>(
    filterData.sortBy || "most-relevant",
  );

  // Sync with URL and filterData on mount
  useEffect(() => {
    const sortFromURL = searchParams.get("sortBy");
    if (sortFromURL) {
      setSelectedSort(sortFromURL);
      setFilterData((prev) => ({
        ...prev,
        sortBy: sortFromURL,
      }));
    }
  }, [searchParams, setFilterData]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = event.target.value;
    setSelectedSort(newSort);
    setFilterData((prev: any) => ({
      ...prev,
      sortBy: newSort,
    }));

    // Update URL
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()), // Preserve other parameters
      sortBy: newSort,
    });
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative w-full">
        <b className="absolute  left-[10%] top-[12%] cursor-pointer">Sort by</b>
        <select
          value={selectedSort}
          onChange={handleSortChange}
          className="focus:none mr-[2em] block h-[4em] w-full cursor-pointer appearance-none rounded-[0.2em] border border-gray-900 bg-white px-[1em] pt-[1em] text-base font-normal text-gray-900 hover:bg-hoverDivGray focus:outline-none focus:ring-2"
        >
          <option value="most-relevant">Most Relevant</option>
          <option value="most-reviewed">Most Reviewed</option>
          <option value="highest-rated">Highest Rated</option>
          <option value="newest">Newest</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3A1 1 0 0110 12z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SortDropDown;
