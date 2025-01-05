import { IoFilterOutline } from "react-icons/io5";

const FilterBtn = () => {
  return (
    <div className="flex items-center px-[0.5em] py-[1em] border border-black rounded-md w-min cursor-pointer gap-[0.1em]">
      <div>
        <IoFilterOutline />
      </div>
      <div>
        <b className="font-bold text-base leading-[1.2] ml-[0.4em]">Filter </b>
      </div>
      <div>
        <b>(4)</b>
      </div>
    </div>
  );
};

export default FilterBtn;
