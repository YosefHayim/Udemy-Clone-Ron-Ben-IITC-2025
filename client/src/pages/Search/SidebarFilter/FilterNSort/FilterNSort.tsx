import FilterBtn from "./FilterBtn/FilterBtn";
import SortDropDown from "./SortDropDown/SortDropDown";

const FilterNSort = () => {
  return (
    <div className="flex gap-[0.5em]">
      <div>
        <FilterBtn />
      </div>
      <div>{/* <SortDropDown /> */}</div>
    </div>
  );
};

export default FilterNSort;
