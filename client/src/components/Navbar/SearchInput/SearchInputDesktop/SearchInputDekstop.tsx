import SearchResults from "../../SearchResults/SearchResults";
import SearchInputSearchButton from "../SearchInputSearchButton/SearchInputSearchButton";

const SearchInputDesktop = ({
  handleSubmit,
  extraCSS,
  searchTerm,
  handleOnChange,
  isTyping,
  data,
}) => {
  return (
    <div className="relative flex flex-col items-center px-[0.25rem]">
      <form
        onSubmit={handleSubmit}
        className={`${extraCSS} flex w-full items-center overflow-hidden rounded-full border border-gray-400 bg-transparent 
    focus-within:border-[#6D28D2] focus-within:bg-white focus-within:ring-1 focus-within:ring-btnColor hover:bg-gray-100`}
      >
        <SearchInputSearchButton searchTerm={searchTerm} />
        <input
          type="text"
          value={searchTerm}
          placeholder="Search for anything"
          className={`ml-[-0.2em] flex-grow bg-transparent text-sm text-[#595C84] placeholder:text-[0.85rem] placeholder:text-[#595C84] focus:outline-none`}
          onChange={handleOnChange}
        />
      </form>
      <SearchResults isTyping={isTyping} data={data} />
    </div>
  );
};

export default SearchInputDesktop;
