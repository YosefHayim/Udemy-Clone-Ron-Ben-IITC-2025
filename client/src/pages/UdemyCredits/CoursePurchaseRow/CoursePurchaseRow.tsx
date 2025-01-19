import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

const CoursePurchaseRow = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-start gap-[6em]">
        <p>Aug 16, 2023</p>
        <p className="font-bold text-[#b32d0f]">-₪59.90</p>
        <div className="mt-[1em] ml-[4em] flex flex-col items-start justify-start gap-[0.5em]">
          <p>Course purchase</p>
          <div className="flex flex-row items-center justify-start gap-[0.2em]">
            <b className="text-[#3b198f] cursor-pointer">View 1 course</b>
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
      <hr className="w-full mt-[1em]" />
    </div>
  );
};

export default CoursePurchaseRow;
