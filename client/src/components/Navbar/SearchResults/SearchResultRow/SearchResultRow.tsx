import { SearchResultProps } from "@/types/types";
import { MdOutlineSearch } from "react-icons/md";

const SearchResultRow: React.FC<SearchResultProps> = ({
  algoWord,
  courseId,
}) => {
  return (
    <div
      id={courseId}
      className="p-[1em] flex flex-row items-center justify-start gap-[1em] font-bold hover:bg-gray-100 cursor-pointer"
    >
      <MdOutlineSearch className="w-6 h-6 text-gray-600 opacity-200" />
      <p id={courseId}>{algoWord}</p>
    </div>
  );
};

export default SearchResultRow;
