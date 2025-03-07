import getAllCourses from "@/api/courses/getAllCourses";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import SearchResults from "../SearchResults/SearchResults";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

const SearchInput = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedTerm, setDebouncedTerm] = useState<string>("");

  const [searchParams] = useSearchParams();
  const urlSearchTerm: string = searchParams.get("q")?.toLowerCase() || "";

  const navigate = useNavigate();
  const location = useLocation();

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
    queryKey: ["courses", debouncedTerm, page],
    queryFn: () => {
      if (!debouncedTerm) {
        throw new Error("Search term is undefined");
      }
      return getAllCourses(debouncedTerm);
    },
    enabled: !!debouncedTerm,
  });

  return (
    <div className="flex items-center rounded-full w-5/6 z-[1800] mb-[0.7em]">
      <div className={location.pathname === "/" ? "hidden" : "block"}>
        <MdOutlineSearch
          className={`w-6 h-6 ${
            isTyping ? "text-gray-900" : "text-gray-400 opacity-200"
          }`}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full border border-gray-400 rounded-full overflow-hidden bg-gray-50 focus-within:border-[#6d28d2] focus-within:ring-1 focus-within:ring-[#6d28d2]"
      >
        <input
          type="text"
          value={searchTerm}
          placeholder="Search for anything"
          className="w-full hover:bg-gray-100 hover:border-[#9194ac] p-[1.2em] placeholder:pl-[1em] flex-grow bg-transparent text-gray-700 focus:outline-none text-sm placeholder-gray-600 placeholder:text-sm placeholder:font-light focus:bg-white"
          onChange={handleOnChange}
        />
        <button
          type="submit"
          className={`bg-purple-600 rounded-full p-[0.5em] transition-opacity mr-[0.2em] ${
            searchTerm ? "opacity-100" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!searchTerm}
        >
          <MdOutlineSearch className="w-6 h-6 text-white" />
        </button>
      </form>
      <SearchResults isTyping={isTyping} data={data} />
    </div>
  );
};

export default SearchInput;
