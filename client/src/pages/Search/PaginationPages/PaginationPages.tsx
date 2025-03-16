// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// const PaginationPages: React.FC<{
//   currentPage: number;
//   setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
//   totalPages: number;
// }> = ({ currentPage, setCurrentPage, totalPages }) => {
//   if (!currentPage || !setCurrentPage || totalPages < 1) {
//     return <div></div>;
//   }

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//   };

//   // Logic for displaying page numbers
//   const getPageNumbers = () => {
//     const pages = [];
//     const totalPages = 283; // total number of pages
//     const maxVisiblePages = 3; // number of pages before "..." is shown

//     if (currentPage <= maxVisiblePages) {
//       // in the beginning
//       pages.push(1, 2, 3, "...", totalPages);
//     } else if (currentPage >= totalPages - maxVisiblePages + 1) {
//       // in the end
//       pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
//     } else {
//       // in the middle
//       pages.push(1, "...", currentPage, "...", totalPages);
//     }

//     return pages;
//   };


//   return (
//     <div className="flex flex-row items-center justify-center gap-[1em] mt-[2em]">
//       {/* Previous Page Button */}
//       <button
//         onClick={handlePreviousPage}
//         disabled={currentPage === 1}
//         className={`border border-[#6D28D2] rounded-[100em] p-[0.5em] hover:bg-hoverDivGray focus:outline-none ${
//           currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
//         }`}
//       >
//         <MdKeyboardArrowLeft size={24} className="text-[#6D28D2]"/>
//       </button>

//       {/* Page Numbers */}
//       <div className="flex flex-row items-center gap-[0.5em] text-[#6D28D2] cursor-pointer ">
//         {getPageNumbers().map((page, index) => (
//           <b
//             key={index}
//             className={`hover:bg-purpleHoverBtn text-[1rem] py-[1em] px-[0.7em] rounded-[0.2em] 
//               ${currentPage === page ? "relative font-bold text-[#6D28D2] before:absolute before:left-[0.4rem] before:right-[0.3rem] before:bottom-2 before:h-[2px] before:bg-black content-['']" : ""}
//               ${page === "..." ? "cursor-default text-gray-500" : "cursor-pointer"}
//             `}

//             onClick={() => typeof page === "number" && setCurrentPage(page)}
//           >
//             {page}
//           </b>
//         ))}
//       </div>

//       {/* Next Page Button */}
//       <button
//         onClick={handleNextPage}
//         disabled={currentPage === totalPages}
//         className={`border border-[#6D28D2] rounded-[100em] p-[0.5em] hover:bg-hoverDivGray focus:outline-none ${
//           currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
//         }`}
//       >
//         <MdKeyboardArrowRight size={24} className="text-[#6D28D2]"/>
//       </button>
//     </div>
//   );
// };

// export default PaginationPages;


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

  // 🔹 Lógica corrigida para exibir a paginação no formato desejado
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      // Se estiver nas primeiras páginas: 1 2 3 ...
      pages.push(1, 2, 3, "...", totalPages);
    } else if (currentPage >= totalPages - 2) {
      // Se estiver nas últimas páginas: ... 281 282 283
      pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else {
      // Se estiver no meio: ... 4 ...
      pages.push("...", currentPage, "...");
    }

    return pages;
  };

  return (
    <div className="flex flex-row items-center justify-center gap-[1em] mt-[2em]">
      {/* Botão de Página Anterior */}
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={`border border-[#6D28D2] rounded-[100em] p-[0.5em] hover:bg-hoverDivGray focus:outline-none ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <MdKeyboardArrowLeft size={24} className="text-[#6D28D2]" />
      </button>

      {/* Números das Páginas */}
      <div className="flex flex-row items-center gap-[0.5em] text-[#6D28D2] cursor-pointer">
        {getPageNumbers().map((page, index) => (
          <b
            key={index}
            className={`hover:bg-purpleHoverBtn text-[1rem] py-[1em] px-[0.5em] rounded-[0.2em] 
              ${
                currentPage === page
                  ? "relative font-bold text-[#6D28D2] before:absolute before:left-[0.25rem] before:right-[0.2rem] before:bottom-2 before:h-[0.15rem] before:bg-purple-900 content-['']"
                  : page === totalPages
                  ? "text-[#303141] font-bold" // 🔥 O total de páginas agora está preto
                  : ""
              }
              ${page === "..." ? "cursor-default text-gray-500" : "cursor-pointer"}
            `}
            onClick={() => typeof page === "number" && setCurrentPage(page)}
          >
            {page === "..." ? (
              <span className="tracking-[0.1em] text-[#303141] font-extrabold">...</span>
            ) : (
              page
            )}
          </b>
        ))}
      </div>

      {/* Botão de Próxima Página */}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`border border-[#6D28D2] rounded-[100em] p-[0.5em] hover:bg-hoverDivGray focus:outline-none ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <MdKeyboardArrowRight size={24} className="text-[#6D28D2]" />
      </button>
    </div>
  );
};

export default PaginationPages;

