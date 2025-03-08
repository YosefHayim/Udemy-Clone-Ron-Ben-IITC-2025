import FilterBtn from "./FilterBtn/FilterBtn";
import SortDropDown from "./SortDropDown/SortDropDown";
import { useContext } from "react";
import { filterContext } from "@/routes/AppRoutes";

const FilterNSort: React.FC<{
  totalResults: number;
}> = ({ totalResults }) => {
  const [filterData, setFilterData] = useContext(filterContext);
  const handleClick = () => {
    const resetState = {
      sortBy: "",
      handsOnPractice: new Set(),
      language: new Set(),
      levels: new Set(),
      price: "",
      ratings: 0,
      subtitles: new Set(),
      topics: new Set(),
      videosDurations: new Set(),
      certificateOnly: false,
    };
    setFilterData(resetState);
    console.log("Filters reset to:", resetState);
  };

  return (
    <div className="flex w-full items-center justify-between mb-[2.4em]">
      <div className="flex flex-row items-center gap-[0.5em]">
        <div>
          <FilterBtn />
        </div>
        <div>
          <SortDropDown />
        </div>
        <span
          className="text-purpleStatic hover:text-purpleHover font-bold cursor-pointer"
          onClick={handleClick}
        >
          Clear filters
        </span>
      </div>
      <div>
        <span className="font-bold text-grayResults">
          {totalResults} results
        </span>
      </div>
    </div>
  );
};

export default FilterNSort;
