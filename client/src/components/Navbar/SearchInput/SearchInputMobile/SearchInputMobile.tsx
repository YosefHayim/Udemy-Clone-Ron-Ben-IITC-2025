import SearchInputSearchButton from '../SearchInputSearchButton/SearchInputSearchButton';
import SearchResults from '../../SearchResults/SearchResults';
import CloseMobileSearchButton from '../CloseMobileSearchButton/CloseMobileSearchButton';

const SearchInputMobile = ({
  searchTerm,
  handleSubmit,
  handleOnChange,
  extraCSS,
  isTyping,
  data,
  setShowSearchMobile,
  showSearchMobile,
}) => {
  return (
    <div className="flex w-full items-center justify-center gap-1">
      <SearchInputSearchButton searchTerm={searchTerm} />
      <form onSubmit={handleSubmit} className={`w-full ${extraCSS}`}>
        <input
          type="text"
          className="w-full bg-white p-2 text-base hover:bg-gray-100 focus:outline-none"
          placeholder="Search for anything"
          onChange={handleOnChange}
        />
      </form>
      <CloseMobileSearchButton setShowSearchMobile={setShowSearchMobile} />
      <SearchResults isTyping={isTyping} data={data} />
    </div>
  );
};

export default SearchInputMobile;
