import { MdOutlineStarPurple500 } from "react-icons/md";

const RatingAvg = () => {
  return (
    <div className="flex flex-row items-center gap-[0.1em]">
      <b>4.3</b>
      <MdOutlineStarPurple500 className="text-[1.3em] text-[#b4690e]" />
    </div>
  );
};

export default RatingAvg;
