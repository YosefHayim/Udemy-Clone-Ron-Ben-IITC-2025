import { CiHeart } from "react-icons/ci";

const HeartBtn: React.FC<{
  iconSize?: string;
  courseId?: string;
  showHeart?: boolean;
}> = ({ iconSize = "2em", courseId, showHeart = false }) => {
  if (!courseId) {
    return;
  }

  return (
    <div
      className={`${
        showHeart ? "block" : "hidden"
      } rounded-[100em] p-[0.5em] border border-black cursor-pointer hover:bg-hoverDivGray`}
    >
      <CiHeart className={`text-[${iconSize}]`} id={courseId} />
    </div>
  );
};

export default HeartBtn;
