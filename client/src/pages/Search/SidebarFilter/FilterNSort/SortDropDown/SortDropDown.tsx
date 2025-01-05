const SortDropDown = () => {
  return (
    <div className="flex flex-col items-center">
      <select className="block w-full h-12 border border-gray-900 rounded-md bg-white text-gray-900 font-normal text-base leading-[1.4] px-4 pr-12 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="most-relevant">Most Relevant</option>
        <option value="most-reviewed">Most Reviewed</option>
        <option value="highest-rated">Highest Rated</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  );
};

export default SortDropDown;
