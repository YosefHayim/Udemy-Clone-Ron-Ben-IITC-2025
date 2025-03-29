import SearchInputSearchButton from '@/components/Navbar/SearchInput/SearchInputSearchButton/SearchInputSearchButton';
import SearchResults from '@/components/Navbar/SearchResults/SearchResults';
import CloseMobileSearchButton from '../CloseMobileSearchButton/CloseMobileSearchButton';

const SearchInputMobile = ({
  searchTerm,
  handleSubmit,
  handleOnChange,
  extraCSS,
  isTyping,
  data,
  setShowSearchMobile,
}) => {
  return (
    <div className="flex w-full items-center justify-center gap-1">
      <form
        onSubmit={handleSubmit}
        className={`w-full ${extraCSS} items-cen flex w-full justify-center`}
      >
        <SearchInputSearchButton searchTerm={searchTerm} />
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
