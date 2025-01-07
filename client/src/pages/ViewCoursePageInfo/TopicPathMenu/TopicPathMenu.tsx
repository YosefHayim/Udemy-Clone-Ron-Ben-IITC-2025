import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const TopicPathMenu = () => {
  return (
    <div className="flex flex-row items-center gap-[1em] text-[#5022c3] ">
      <b>Teaching & Academics</b>
      <MdOutlineKeyboardArrowRight />
      <b>Engineering</b>
      <MdOutlineKeyboardArrowRight />
      <b>Electronics</b>
    </div>
  );
};

export default TopicPathMenu;
