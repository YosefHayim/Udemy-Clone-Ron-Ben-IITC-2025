import { MdOutlineStarPurple500 } from "react-icons/md";

const RatingAvg = ({
  textSize = "1em",
  flexChosen = "flex flex-row items-center",
}) => {
  return (
    <div className={`text-[${textSize}] ${flexChosen} gap-[0.1em]`}>
      <b>4.3</b>
      <MdOutlineStarPurple500 className="text-[1.3em] text-[#b4690e]" />
    </div>
  );
};

export default RatingAvg;
