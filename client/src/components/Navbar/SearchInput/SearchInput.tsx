import getAllCourses from "@/api/courses/getAllCourses";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import SearchResults from "../SearchResults/SearchResults";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { isRootPathOnly } from "@/utils/isRootPathOnly";

const SearchInput = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isTyping, setIsTyping] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedTerm, setDebouncedTerm] = useState<string>("");
  const [searchParams] = useSearchParams();
  const urlSearchTerm: string = searchParams.get("q")?.toLowerCase() || "";

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

  useEffect(() => {}, [isRootPathOnly]);

  return (
    <div
      className={`flex items-center rounded-full
      ${isRootPathOnly() ? " w-full" : "w-full"}
      `}
    >
      <form
        onSubmit={handleSubmit}
        className={`${
          isRootPathOnly() ? "my-[0.2em]" : ""
        } flex w-full items-center overflow-hidden rounded-full border border-gray-400 bg-gray-50 focus-within:border-btnColor focus-within:ring-1 focus-within:ring-btnColor`}
      >
        <button>
          <MdOutlineSearch
            className={`${
              isRootPathOnly()
                ? "hidden"
                : "text-gray ml-[0.2em] h-6 w-6 bg-gray-100"
            }`}
          />
        </button>
        <input
          type="text"
          value={searchTerm}
          placeholder="Search for anything"
          className={`${
            isRootPathOnly() ? "p-[1.2em]" : "p-[1em]"
          } flex-grow bg-transparent text-sm text-gray-700 placeholder:pl-[1em] placeholder:text-sm placeholder:font-light hover:bg-gray-100 focus:bg-white focus:outline-none`}
          onChange={handleOnChange}
        />
        <button
          type="submit"
          className={`mr-[0.2em] rounded-full bg-purple-600 p-[0.85em] transition-opacity 
          ${!isRootPathOnly() ? "hidden" : "block"} 
          ${searchTerm ? "opacity-100" : "cursor-not-allowed opacity-50"}`}
          disabled={!searchTerm}
        >
          <MdOutlineSearch className="h-6 w-6 text-white " />
        </button>
      </form>
      <div className="w-max">
        <SearchResults isTyping={isTyping} data={data} />
      </div>
    </div>
  );
};

export default SearchInput;
