import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const PaginationPages = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-[1em]">
      <div>
        <button className="border border-black rounded-[100em] p-[0.5em] hover:bg-hoverDivGray focus:outline-none">
          <MdKeyboardArrowLeft size={24} />
        </button>
      </div>
      <div className="flex flex-row items-center gap-[0.5em] text-purpleStatic">
        <b className="underline">1</b>
        <b className="underline">2</b>
        <b className="underline">3</b>
        <b className="text-black">...</b>
        <b className="text-black">500</b>
      </div>
      <div>
        <button className="border border-black rounded-[100em] p-[0.5em] hover:bg-hoverDivGray focus:outline-none">
          <MdKeyboardArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default PaginationPages;
