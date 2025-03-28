import getAllCourses from '@/api/courses/getAllCourses';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';
import SearchResults from '../SearchResults/SearchResults';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { isRootPathOnly } from '@/utils/isRootPathOnly';
import { searchAlgoLocalStorage } from '@/utils/searchesOfUser';
import { useWindowWidth } from '@/utils/getCurrentWindowWidth';

const SearchInput = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isTyping, setIsTyping] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [debouncedTerm, setDebouncedTerm] = useState<string>('');
  const [searchParams] = useSearchParams();
  const urlSearchTerm: string = searchParams.get('q')?.toLowerCase() || '';
  const width = useWindowWidth();

  // Sync URL query with `searchTerm` on page load or navigation
  useEffect(() => {
    setSearchTerm(urlSearchTerm);
  }, [urlSearchTerm]);

  // Debounce effect to delay API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 100); // Adjust debounce delay as needed
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setSearchTerm(input);
    setIsTyping(input.length > 0);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim().length > 0) {
      navigate(`/courses/search?src=ukw&q=${encodeURIComponent(searchTerm)}`);
      searchAlgoLocalStorage(searchTerm);
      setIsTyping(false);
    }
  };

  // Hide results when navigating to a new page
  useEffect(() => {
    setIsTyping(false);
  }, [location.pathname]);

  let page = null;
  let limit = null;

  const { data } = useQuery({
    queryKey: ['courses', debouncedTerm, page],
    queryFn: () => {
      if (!debouncedTerm) {
        throw new Error('Search term is undefined');
      }
      return getAllCourses(debouncedTerm);
    },
    enabled: !!debouncedTerm,
  });

  useEffect(() => {}, [isRootPathOnly]);

  return (
    <div
    // style={{ width: `${width / 2}px` }} 
    className="relative flex flex-col items-center">
  <form
    onSubmit={handleSubmit}
    className={`${
      isRootPathOnly() ? 'mt-[1.5em] mb-[0.2em]' : 'mt-[0.3em]'
    } hover:bg-gray-100 flex w-full items-center overflow-hidden rounded-full border border-gray-400 
    bg-transparent focus-within:bg-white focus-within:border-[#6D28D2] focus-within:ring-1 focus-within:ring-btnColor`}
  >
    <button
      className={`${searchTerm.length === 0 ? 'cursor-not-allowed' : ''} bg-none p-[0.8rem] focus:outline-none`}
    >
      <MdOutlineSearch
        className={`${
          isRootPathOnly() ? 'hidden' : `text-[#595C84] focus:outline-non ml-[0.2em] h-5 w-5 bg-none`
        }`}
      />
    </button>
    <input
      type="text"
      value={searchTerm}
      placeholder="Search for anything"
      className={`${
        isRootPathOnly() ? 'p-[1em]' : 'p-[0rem]'
      } flex-grow bg-transparent text-sm text-[#595C84] placeholder:text-[0.85rem] placeholder:text-[#595C84] focus:outline-none`}
      onChange={handleOnChange}
    />
    <button
      type="submit"
      className={`mr-[0.2em] rounded-full bg-purple-600 p-[0.85em] transition-opacity focus:outline-none 
      ${!isRootPathOnly() ? 'hidden' : 'block'} 
      ${searchTerm ? 'opacity-100' : 'cursor-not-allowed opacity-50'}`}
      disabled={!searchTerm}
    >
      <MdOutlineSearch className="h-6 w-6 text-white " />
    </button>
  </form>

  <SearchResults isTyping={isTyping} data={data} width={width / 2} />
</div>

  );
};

export default SearchInput;
