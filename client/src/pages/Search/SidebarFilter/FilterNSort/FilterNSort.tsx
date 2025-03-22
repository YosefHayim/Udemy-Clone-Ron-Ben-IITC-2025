import { useContext } from "react";
import FilterBtn from "./FilterBtn/FilterBtn";
import SortDropDown from "./SortDropDown/SortDropDown";
import { filterContext } from "@/routes/AppRoutes";

const defaultFilters = {
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

const convertToComparable = (filters: any) =>
  JSON.stringify(
    Object.fromEntries(
      Object.entries(filters).map(([key, value]) => [
        key,
        value instanceof Set ? [...value] : value,
      ]),
    ),
  );

const FilterNSort = () => {
  const [filterData, setFilterData] = useContext(filterContext);

  const isFiltersDefault =
    convertToComparable(filterData) === convertToComparable(defaultFilters);

  return (
    <div className="mb-[2.4em] flex w-full items-center justify-between">
      <div className="flex items-center gap-[0.5em]">
        <FilterBtn />
        <SortDropDown />
        {!isFiltersDefault && (
          <span
            className="cursor-pointer font-extrabold text-purpleStatic hover:text-purpleHover"
            onClick={() => setFilterData(defaultFilters)}
          >
            Clear filters
          </span>
        )}
      </div>
    </div>
  );
};

export default FilterNSort;
