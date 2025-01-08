import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const TopicPathMenu = () => {
  return (
    <div className="flex flex-row items-center gap-[1em] text-[#c0c4fc] z-10">
      <b>Teaching & Academics</b>
      <MdOutlineKeyboardArrowRight />
      <b>Engineering</b>
      <MdOutlineKeyboardArrowRight />
      <b>Electronics</b>
    </div>
  );
};

export default TopicPathMenu;
