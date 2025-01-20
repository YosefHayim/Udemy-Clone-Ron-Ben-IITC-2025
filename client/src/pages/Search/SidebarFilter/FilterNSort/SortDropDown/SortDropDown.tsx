import { useContext } from "react";
import { filterContext } from "@/routes/AppRoutes";

const SortDropDown = () => {
  const [filterData, setFilterData] = useContext(filterContext);

  return (
    <div className="flex flex-col items-center w-full ">
      <div className="relative w-full">
        <b className="absolute text-[0.7em] left-[10%] top-[12%] cursor-pointer">
          Sort by
        </b>
        <select className="block w-full h-[4em] border border-gray-900 rounded-[0.2em] bg-white text-gray-900 font-normal text-base px-[1em] pt-[1em] cursor-pointer focus:outline-none focus:ring-2 focus:none appearance-none mr-[2em] hover:bg-hoverDivGray">
          <option value="most-relevant">Most Relevant</option>
          <option value="most-reviewed">Most Reviewed</option>
          <option value="highest-rated">Highest Rated</option>
          <option value="newest">Newest</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500"
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
