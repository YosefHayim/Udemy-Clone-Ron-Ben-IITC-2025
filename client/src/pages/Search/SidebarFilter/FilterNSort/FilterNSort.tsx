import FilterBtn from "./FilterBtn/FilterBtn";
import SortDropDown from "./SortDropDown/SortDropDown";

const FilterNSort = () => {
  return (
    <div className="flex gap-[0.5em]">
      <div>
        <FilterBtn />
      </div>
      <div>
        <SortDropDown />
      </div>
      <button className="text-purpleStatic hover:text-purpleHover font-bold">
        Clear filters
      </button>
    </div>
  );
};

export default FilterNSort;
