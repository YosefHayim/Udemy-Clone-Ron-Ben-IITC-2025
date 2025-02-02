import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const PaginationPages: React.FC<{
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}> = ({ currentPage, setCurrentPage, totalPages }) => {
  if (!currentPage || !setCurrentPage || totalPages < 1) {
    return <div></div>;
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Logic for displaying page numbers
  const getPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 3);
    const endPage = Math.min(totalPages, currentPage + 3);

    if (startPage > 1) pages.push(1);
    if (startPage > 2) pages.push("...");

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) pages.push("...");
    if (endPage < totalPages) pages.push(totalPages);

    return pages;
  };

  return (
    <div className="flex flex-row items-center justify-center gap-[1em] mt-[2em]">
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
        {getPageNumbers().map((page, index) => (
          <b
            key={index}
            className={`hover:bg-purpleHoverBtn p-[1em] px-[1.2em] rounded-[0.2em] ${
              currentPage === page ? "text-black underline font-bold" : ""
            } ${
              page === "..." ? "cursor-default text-gray-500" : "cursor-pointer"
            }`}
            onClick={() => typeof page === "number" && setCurrentPage(page)}
          >
            {page}
          </b>
        ))}
      </div>

      {/* Next Page Button */}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`border border-black rounded-[100em] p-[0.5em] hover:bg-hoverDivGray focus:outline-none ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <MdKeyboardArrowRight size={24} />
      </button>
    </div>
  );
};

export default PaginationPages;
