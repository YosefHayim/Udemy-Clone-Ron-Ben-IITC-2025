import { MdOutlineSearch } from 'react-icons/md';

const SearchInputSearchButton = ({ searchTerm }) => {
  return (
    <button
      className={`${searchTerm.length === 0 ? 'cursor-not-allowed' : ''} bg-none p-[0.8rem] focus:outline-none`}
    >
      <MdOutlineSearch className={`focus:outline-non ml-[-0.5em] h-5 w-5 bg-none text-gray-400`} />
    </button>
  );
};

export default SearchInputSearchButton;
