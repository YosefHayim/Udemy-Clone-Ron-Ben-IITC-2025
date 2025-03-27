import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

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

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      pages.push(1, 2, 3, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push('...', currentPage, '...');
    }

    return pages;
  };

  return (
    <div className="mt-[2em] flex  items-center justify-center gap-[1em]">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={`rounded-[100em] border border-[#6D28D2] p-[0.5em] hover:bg-hoverDivGray focus:outline-none ${
          currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
        }`}
      >
        <MdKeyboardArrowLeft size={24} className="text-[#6D28D2]" />
      </button>

      <div className="flex cursor-pointer  items-center gap-[0.5em] text-[#6D28D2]">
        {getPageNumbers().map((page, index) => (
          <b
            key={index}
            className={`rounded-[0.2em] px-[0.5em] py-[1em] text-[1rem] hover:bg-purpleHoverBtn 
              ${
                currentPage === page
                  ? "relative font-sans font-extrabold text-[#6D28D2] content-[''] before:absolute before:bottom-2 before:left-[0.25rem] before:right-[0.2rem] before:h-[0.15rem] before:bg-purple-900"
                  : page === totalPages
                    ? 'font-sans font-extrabold text-[#303141]' // 🔥 O total de páginas agora está preto
                    : ''
              }
              ${page === '...' ? 'cursor-default text-gray-500' : 'cursor-pointer'}
            `}
            onClick={() => typeof page === 'number' && setCurrentPage(page)}
          >
            {page === '...' ? (
              <span className="font-sans font-extrabold tracking-[0.1em] text-[#303141]">...</span>
            ) : (
              page
            )}
          </b>
        ))}
      </div>

      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`rounded-[100em] border border-[#6D28D2] p-[0.5em] hover:bg-hoverDivGray focus:outline-none ${
          currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''
        }`}
      >
        <MdKeyboardArrowRight size={24} className="text-[#6D28D2]" />
      </button>
    </div>
  );
};

export default PaginationPages;
