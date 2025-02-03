import { SearchResultProps } from "@/types/types";
import { MdOutlineSearch } from "react-icons/md";

const SearchResultRow: React.FC<SearchResultProps> = ({
  algoWord,
  courseId,
}) => {
  return (
    <div
      id={courseId}
      className="p-[0.5em] flex flex-row items-start justify-start gap-[1em] font-bold hover:bg-purpleHoverBtn cursor-pointer"
    >
      <MdOutlineSearch className="w-6 h-6 text-black opacity-200" />
      <p>{algoWord}</p>
    </div>
  );
};

export default SearchResultRow;
