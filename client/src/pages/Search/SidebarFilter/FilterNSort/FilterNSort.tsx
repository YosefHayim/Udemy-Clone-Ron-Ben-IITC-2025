import FilterBtn from "./FilterBtn/FilterBtn";
import SortDropDown from "./SortDropDown/SortDropDown";

const FilterNSort = () => {
  return (
    <div className="flex w-full items-center justify-between mb-[2.4em]">
      <div className="flex flex-row items-center gap-[0.5em]">
        <div>
          <FilterBtn />
        </div>
        <div>
          <SortDropDown />
        </div>
        <span className="text-purpleStatic hover:text-purpleHover font-bold cursor-pointer">
          Clear filters
        </span>
      </div>
      <div>
        <span className="font-bold text-grayResults">13 results</span>
      </div>
    </div>
  );
};

export default FilterNSort;
