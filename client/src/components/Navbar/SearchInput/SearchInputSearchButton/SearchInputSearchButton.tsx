import { MdOutlineSearch } from "react-icons/md";

const SearchInputSearchButton = ({ searchTerm }) => {
  return (
    <button
      type="submit"
      className={`${searchTerm && searchTerm.length > 1 && "cursor-not-allowed"} cursor-pointer rounded-md p-2 hover:bg-purple-100 focus:outline-none`}
    >
      <MdOutlineSearch size={20} />
    </button>
  );
};

export default SearchInputSearchButton;
