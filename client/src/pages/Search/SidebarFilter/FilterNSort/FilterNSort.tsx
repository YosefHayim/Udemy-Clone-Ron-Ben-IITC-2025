import { useContext } from 'react';
import FilterBtn from './FilterBtn/FilterBtn';
import SortDropDown from './SortDropDown/SortDropDown';
import { filterContext } from '@/routes/AppRoutes';

const defaultFilters = {
  sortBy: '',
  handsOnPractice: new Set(),
  language: new Set(),
  levels: new Set(),
  price: '',
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
      ])
    )
  );

const FilterNSort = ({ coursesResults, searchTerm }) => {
  const [filterData, setFilterData] = useContext(filterContext);

  const isFiltersDefault = convertToComparable(filterData) === convertToComparable(defaultFilters);

  return (
    <div className="flex w-full flex-col-reverse items-start justify-start">
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full">
          <FilterBtn />
          <SortDropDown />
        </div>
        <div>
          <p className="w-max font-sans text-base font-bold">{coursesResults} results</p>
        </div>
        {!isFiltersDefault && (
          <span
            className="cursor-pointer font-sans font-extrabold text-purpleStatic hover:text-purpleHover"
            onClick={() => setFilterData(defaultFilters)}
          >
            Clear filters
          </span>
        )}
      </div>
      <div className="mb-2 flex w-auto flex-col items-start justify-center">
        <h1 className="my-3 text-start font-sans text-2xl font-extrabold">
          {coursesResults} results for "{searchTerm}"
        </h1>
      </div>
    </div>
  );
};

export default FilterNSort;
