import { useState } from "react";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useContext } from "react";
import { filterContext } from "@/routes/AppRoutes";
import { FilterDataProps } from "../../types/types";
import { useEffect } from "react";

const RatingsFilter = () => {
  const [isClicked, setClicked] = useState(true);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [filterData, setFilterData] =
    useContext<FilterDataProps>(filterContext);

  // Sync selectedRating with filterData on mount
  useEffect(() => {
    setSelectedRating(filterData.ratings || null);
  }, [filterData.ratings]);

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
    setFilterData((prev: any) => ({
      ...prev,
      ratings: rating,
    }));
    console.log("Selected Rating:", rating);
  };

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setClicked((prev) => !prev);
  };

  // modify ratings to be based on the result received from the backend
  const ratings = [
    { rating: "★★★★½", value: 4.5, count: "4,394" },
    { rating: "★★★★☆", value: 4.0, count: "8,757" },
    { rating: "★★★½☆", value: 3.5, count: "9,900" },
    { rating: "★★★☆☆", value: 3, count: "10,000" },
  ];

  return (
    <div>
      <hr />
      <div
        className={`transition-all overflow-hidden ${
          isClicked ? "h-auto" : "h-[50px]"
        }`}
      >
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          <p className="font-bold text-lg py-[0.5em]">Ratings</p>
          {isClicked ? (
            <MdKeyboardArrowUp size={17} />
          ) : (
            <MdOutlineKeyboardArrowDown size={17} />
          )}
        </div>
        <div className={`${isClicked ? "block" : "hidden"}`}>
          {ratings.map(({ rating, value, count }) => (
            <label
              key={value}
              className="flex items-center cursor-pointer space-x-2 py-2"
            >
              <span
                onClick={() => handleRatingClick(value)}
                className={`w-4 h-4 flex items-center justify-center border-2 rounded-full ${
                  selectedRating === value ? "border-black" : "border-gray-400"
                }`}
              >
                {selectedRating === value && (
                  <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
                )}
              </span>
              <div className="flex flex-row">
                <span className="flex items-center">
                  <span className="text-yellow-500 text-sm">{rating}</span>
                  <span className="text-gray-600 text-sm ml-1">
                    {value} & up
                  </span>
                </span>
                <span className="text-gray-500 text-sm ml-2">{`(${count})`}</span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingsFilter;
