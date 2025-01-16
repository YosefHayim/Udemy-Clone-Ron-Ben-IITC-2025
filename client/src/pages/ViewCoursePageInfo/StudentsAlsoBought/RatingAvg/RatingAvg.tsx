import { MdOutlineStarPurple500 } from "react-icons/md";

const RatingAvg: React.FC<{
  textSize?: string;
  flexChosen?: string;
  avgRating?: number;
}> = ({
  textSize = "1em",
  flexChosen = "flex flex-row items-center",
  avgRating,
}) => {
  return (
    <div className={`text-[${textSize}] ${flexChosen} gap-[0.1em]`}>
      <b>{avgRating}</b>
      <MdOutlineStarPurple500 className="text-[1.3em] text-[#b4690e]" />
    </div>
  );
};

export default RatingAvg;
