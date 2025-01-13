import { useState } from "react";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";

const RatingsFilter = ({ filterData, setFilterData }) => {
  const [isClicked, setClicked] = useState(false);
  const [selectedRating, setSelectedRating] = useState<string | null>(null);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setClicked((prev) => !prev);
  };

  const handleRatingClick = (rating: string) => {
    setSelectedRating(rating);
    setFilterData((prevData) => ({
      ...prevData,
      rating: rating,
    }));
  };

  const ratings = [
    { rating: "★★★★½", value: "4.5", count: "4,394" },
    { rating: "★★★★☆", value: "4.0", count: "8,757" },
    { rating: "★★★½☆", value: "3.5", count: "9,900" },
    { rating: "★★★☆☆", value: "3.0", count: "10,000" },
  ];

  return (
    <div>
      <hr />
      <div
        className={`transition-all overflow-hidden ${
          isClicked ? "h-auto" : "h-[50px]"
        }`}
      >
        {/* Header */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          <p className="font-bold text-lg py-[0.5em]">Ratings</p>
          {isClicked ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
        </div>
        {/* Ratings */}
        <div className={`${isClicked ? "block" : "hidden"}`}>
          {ratings.map(({ rating, value, count }) => (
            <label
              key={value}
              className="flex items-center cursor-pointer space-x-2 py-2"
              onClick={() => handleRatingClick(value)}
            >
              {/* Custom Radio Button */}
              <span
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
