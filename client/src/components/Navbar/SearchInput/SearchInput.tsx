import getAllCourses from "@/api/courses/getAllCourses";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import SearchResults from "../SearchResults/SearchResults";
import { useNavigate, useLocation } from "react-router-dom";

const SearchInput = () => {
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string | undefined>("");
  const [debouncedTerm, setDebouncedTerm] = useState<string | undefined>("");

  const navigate = useNavigate();
  const location = useLocation();

  // Debounce effect to delay API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 100); // Adjust delay as needed

    return () => {
      clearTimeout(handler); // Clear timeout if the user types again
    };
  }, [searchTerm]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    setSearchTerm(input);

    if (input.length > 0) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm || "".trim().length > 0) {
      navigate(
        `/courses/search?src=ukw&q=${encodeURIComponent(searchTerm || "")}`
      );
      setIsTyping(false);
    }
  };

  // Hide results when navigating to a new page
  useEffect(() => {
    setIsTyping(false);
  }, [location.pathname]);

  const limit = null;
  const page = null;

  const { data, error } = useQuery({
    queryKey: ["courses", searchTerm, page],
    queryFn: () => {
      if (!searchTerm) {
        throw new Error("Course ID is undefined");
      }
      return getAllCourses(searchTerm, limit, page);
    },
    enabled: !!searchTerm,
  });

  if (error) {
    return <div>Error occurred</div>;
  }

  return (
    <div className="px-2 flex items-center border border-gray-400 rounded-full overflow-hidden w-1/2 h-[3rem] hover:bg-gray-50 z-[1800] ">
      <MdOutlineSearch
        className={`w-6 h-6 ${
          isTyping ? "text-gray-900" : "text-gray-400 opacity-200"
        }`}
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for anything"
          className="pb-[0.6rem] flex-1 bg-transparent text-gray-700 focus:outline-none text-sm ml-3 placeholder-gray-600 placeholder:text-sm placeholder:font-Sans placeholder:font-normal bg-gray-50"
          onChange={handleOnChange}
        />
      </form>
      <SearchResults isTyping={isTyping} data={data && data} />
    </div>
  );
};

export default SearchInput;
