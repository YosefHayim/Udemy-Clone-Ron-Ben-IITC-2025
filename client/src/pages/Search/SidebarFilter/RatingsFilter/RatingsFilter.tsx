import { useState } from "react";

const RatingsFilter = () => {
  const [selectedRating, setSelectedRating] = useState<string | null>(null);

  const handleRatingClick = (rating: string) => {
    setSelectedRating(rating);
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
      <div className="flex flex-col space-y-4">
        <p className="font-bold text-lg">Ratings</p>
        {ratings.map(({ rating, value, count }) => (
          <label
            key={value}
            className="flex items-center cursor-pointer space-x-2"
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
                <span className="text-gray-600 text-sm ml-1">{value} & up</span>
              </span>
              <span className="text-gray-500 text-sm">{`(${count})`}</span>
            </div>
          </label>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default RatingsFilter;
