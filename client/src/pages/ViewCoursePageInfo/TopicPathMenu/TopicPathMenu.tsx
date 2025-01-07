import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const TopicPathMenu = () => {
  return (
    <div className="flex flex-row items-center gap-[1em] text-[#5022c3] text-[0.8em]">
      <b>Teaching & Academics</b>
      <MdOutlineKeyboardArrowRight />
      <b>Engineering</b>
      <MdOutlineKeyboardArrowRight />
      <b>Electronics</b>
    </div>
  );
};

export default TopicPathMenu;
