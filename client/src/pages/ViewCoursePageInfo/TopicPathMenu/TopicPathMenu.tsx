import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const TopicPathMenu = ({ category, subcategory, topic }) => {
  return (
    <div className="flex flex-row items-center gap-[1em] text-[#c0c4fc] z-10">
      <b className="cursor-pointer">{category}</b>
      <MdOutlineKeyboardArrowRight />
      <b className="cursor-pointer">{subcategory}</b>
      <MdOutlineKeyboardArrowRight />
      <b className="cursor-pointer">{topic}</b>
    </div>
  );
};

export default TopicPathMenu;
