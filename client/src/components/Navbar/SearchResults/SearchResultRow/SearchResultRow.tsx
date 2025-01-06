import { MdOutlineSearch } from "react-icons/md";

const SearchResultRow = ({ algoWord }) => {
  return (
    <div className="p-[1em] flex flex-row items-start justify-start gap-[1em] font-bold hover:bg-bgCommercial cursor-pointer">
      <MdOutlineSearch className="w-6 h-6 text-black opacity-200" />
      <p>{algoWord}</p>
    </div>
  );
};

export default SearchResultRow;
