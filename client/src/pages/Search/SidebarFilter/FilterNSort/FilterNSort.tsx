import { FilterDataProps } from "@/types/types";
import FilterBtn from "./FilterBtn/FilterBtn";
import SortDropDown from "./SortDropDown/SortDropDown";

const FilterNSort: React.FC<{
  totalResults: number;
  filterData: FilterDataProps;
}> = ({ totalResults, filterData }) => {
  return (
    <div className="flex  w-[1200px] items-center justify-between mb-[2.4em]">
      <div className="flex flex-row items-center gap-[0.5em]">
        <div>
          <FilterBtn />
        </div>
        <div>
          <SortDropDown filterData={filterData} />
        </div>
        <span className="text-purpleStatic hover:text-purpleHover font-bold cursor-pointer">
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
