import { IoClose } from 'react-icons/io5';
import SearchInputSearchButton from '../SearchInputSearchButton/SearchInputSearchButton';
import SearchResults from '../../SearchResults/SearchResults';

const SearchInputMobile = ({
  searchTerm,
  handleSubmit,
  handleOnChange,
  extraCSS,
  isTyping,
  data,
}) => {
  return (
    <div className="flex w-full items-center justify-center gap-1">
      <SearchInputSearchButton searchTerm={searchTerm} />
      <form onSubmit={handleSubmit} className={`w-full ${extraCSS}`}>
        <input
          type="text"
          className="w-full border-b bg-white p-2 text-base hover:bg-gray-100 focus:outline-none"
          placeholder="Search for anything"
          onChange={handleOnChange}
        />
      </form>
      <div className="cursor-pointer rounded-[0.2em] p-2 text-gray-500 hover:bg-purpleHoverBtn">
        <IoClose size={20} />
      </div>
      <SearchResults isTyping={isTyping} data={data} />
    </div>
  );
};

export default SearchInputMobile;
