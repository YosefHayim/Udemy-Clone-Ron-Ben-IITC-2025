import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const TopicPathMenu = () => {
  return (
    <div className="flex flex-row items-center gap-[1em] text-[#c0c4fc] z-10">
      <b className="cursor-pointer">Teaching & Academics</b>
      <MdOutlineKeyboardArrowRight />
      <b className="cursor-pointer">Engineering</b>
      <MdOutlineKeyboardArrowRight />
      <b className="cursor-pointer">Electronics</b>
    </div>
  );
};

export default TopicPathMenu;
