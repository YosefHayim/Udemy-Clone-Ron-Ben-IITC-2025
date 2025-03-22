import { IoFilterOutline } from "react-icons/io5";

const FilterBtn = () => {
  return (
    <div className="flex h-[5em] w-min cursor-pointer items-center gap-[0.1em] rounded-[0.2em] border border-black px-[0.5em] py-[1em] hover:bg-hoverDivGray">
      <div>
        <IoFilterOutline />
      </div>
      <div>
        <b className="ml-[0.4em] font-sans text-base font-extrabold leading-[1.2]">
          Filter{" "}
        </b>
      </div>
      <div>
        <b></b>
      </div>
    </div>
  );
};

export default FilterBtn;
