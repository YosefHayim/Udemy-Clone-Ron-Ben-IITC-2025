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
    <div className="px-2 flex items-center border border-gray-400 rounded-full overflow-hidden w-1/2 h-[3rem] hover:bg-gray-50 z-[1800]">
      <MdOutlineSearch
        className={`w-6 h-6 ${
          isTyping ? "text-gray-900" : "text-gray-400 opacity-200"
        }`}
      />
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search for anything"
          className="pb-[0.7rem] flex-1 bg-transparent text-gray-700 focus:outline-none text-sm ml-3 placeholder-gray-600 placeholder:text-sm placeholder:font-Sans placeholder:font-normal bg-gray-50"
          onChange={handleOnChange}
        />
      </form>
      <SearchResults isTyping={isTyping} data={data} />
    </div>
  );
};

export default SearchInput;
