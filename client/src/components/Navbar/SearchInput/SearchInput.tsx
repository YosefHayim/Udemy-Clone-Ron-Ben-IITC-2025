import getAllCourses from "@/api/courses/getAllCourses";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import SearchResults from "../SearchResults/SearchResults";

const SearchInput = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  // Debounce effect to delay API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300); // Adjust delay as needed (300ms here)

    return () => {
      clearTimeout(handler); // Clear timeout if the user types again
    };
  }, [searchTerm]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setSearchTerm(input);

    if (input.length > 3) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  };

  const { data } = useQuery({
    queryKey: ["courses", debouncedTerm], // Use the debounced term
    queryFn: () => getAllCourses(debouncedTerm),
    enabled: !!debouncedTerm && debouncedTerm.length > 3, // Only fetch when valid term exists
  });

  return (
    <div className="flex items-center border border-gray-700 rounded-full overflow-hidden w-1/2 h-12 px-3 py-2 bg-gray-50">
      <MdOutlineSearch
        className={`w-6 h-6 ${
          isTyping ? "text-gray-900" : "text-gray-400 opacity-200"
        }`}
      />
      <input
        type="text"
        placeholder="Search for anything"
        className="flex-1 bg-transparent text-gray-700 focus:outline-none text-sm ml-3 placeholder-gray-700 placeholder:text-sm placeholder:font-Sans placeholder:font-normal bg-gray-50"
        onChange={handleOnChange}
      />
      <SearchResults isTyping={isTyping} data={data} />
    </div>
  );
};

export default SearchInput;
