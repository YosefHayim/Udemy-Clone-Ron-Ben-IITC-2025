import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const PaginationPages: React.FC<{
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}> = ({ currentPage, setCurrentPage }) => {
  if (!currentPage && !setCurrentPage) {
    return <div></div>;
  }

  const handleNextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const handlePreviousPage = () =>
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <div className="flex flex-row items-center justify-center gap-[1em]">
      {/* Previous Page Button */}
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={`border border-black rounded-[100em] p-[0.5em] hover:bg-hoverDivGray focus:outline-none ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <MdKeyboardArrowLeft size={24} />
      </button>

      {/* Page Numbers */}
      <div className="flex flex-row items-center gap-[0.5em] text-purpleStatic cursor-pointer">
        <b className={currentPage === 1 ? "underline text-black" : "underline"}>
          1
        </b>
        <b className={currentPage === 2 ? "underline text-black" : "underline"}>
          2
        </b>
        <b className={currentPage === 3 ? "underline text-black" : "underline"}>
          3
        </b>
        <b className="text-black">...</b>
        <b className="text-black">500</b>
      </div>

      {/* Next Page Button */}
      <button
        onClick={handleNextPage}
        className="border border-black rounded-[100em] p-[0.5em] hover:bg-hoverDivGray focus:outline-none"
      >
        <MdKeyboardArrowRight size={24} />
      </button>
    </div>
  );
};

export default PaginationPages;
