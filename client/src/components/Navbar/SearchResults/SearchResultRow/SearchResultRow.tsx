import { SearchResultProps } from '@/types/types';
import { MdOutlineSearch } from 'react-icons/md';

const SearchResultRow: React.FC<SearchResultProps> = ({ algoWord, courseId }) => {
  return (
    <div
      id={courseId}
      className="flex cursor-pointer flex-row items-center justify-start gap-[1em] p-[1em] font-sans font-extrabold hover:bg-gray-100"
    >
      <MdOutlineSearch className="opacity-200 h-6 w-6 text-gray-600" />
      <p id={courseId}>{algoWord}</p>
    </div>
  );
};

export default SearchResultRow;
