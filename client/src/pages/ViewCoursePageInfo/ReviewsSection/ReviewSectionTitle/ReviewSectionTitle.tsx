import RatingAvg from "../../StudentsAlsoBought/RatingAvg/RatingAvg";
import { LuDot } from "react-icons/lu";

const ReviewSectionTitle: React.FC<{
  totalRated: number;
  avgRating: number;
}> = ({ totalRated, avgRating }) => {
  return (
    <div className="flex  items-center justify-start gap-[0.2em] font-sans text-[1.5em] font-extrabold">
      <h2>
        <RatingAvg textSize="" flexChosen={"flex -reverse items-center"} avgRating={avgRating} />
      </h2>
      <h2>course rating</h2>
      <LuDot className="text-[1.5em] text-gray-500" />
      <h2>{totalRated} ratings</h2>
    </div>
  );
};

export default ReviewSectionTitle;
