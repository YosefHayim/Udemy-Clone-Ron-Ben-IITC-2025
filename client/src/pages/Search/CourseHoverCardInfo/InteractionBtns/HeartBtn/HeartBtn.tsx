import { CiHeart } from "react-icons/ci";

const HeartBtn = ({ iconSize = "2em" }) => {
  return (
    <div className="rounded-[100em] p-[0.5em] border border-black cursor-pointer hover:bg-hoverDivGray">
      <CiHeart className={`text-[${iconSize}]`} />
    </div>
  );
};

export default HeartBtn;
