import getAllCourses from "@/api/courses/getAllCourses";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { searchAlgoLocalStorage } from "@/utils/searchesOfUser";
import { useMediaQuery } from "react-responsive";
import SearchInputDesktop from "./SearchInputDesktop/SearchInputDekstop";
import SearchInputMobile from "@/components/MobileNavbar/SearchInputMobile/SearchInputMobile";
import { filterContext } from "@/contexts/filterSearch";

const SearchInput: React.FC<{
  isTyping: boolean;
  setIsTyping: (value: boolean) => void;
  extraCSS?: string;
  setShowSearchMobile;
  showSearchMobile;
}> = ({ isTyping, setIsTyping, extraCSS, setShowSearchMobile, showSearchMobile }) => {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  const [filterData, setFilterData] = useContext(filterContext);

  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedTerm, setDebouncedTerm] = useState<string>("");
  const [searchParams] = useSearchParams();
  const urlSearchTerm: string = searchParams.get("q")?.toLowerCase();

  // Sync URL query with `searchTerm` on page load or navigation
  useEffect(() => {
    setSearchTerm(urlSearchTerm);
  }, [urlSearchTerm]);

  // Debounce effect to delay API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 200); // Adjust debounce delay as needed
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setSearchTerm(input);
    setIsTyping(input && input.length > 0);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm && searchTerm.trim().length > 0) {
      navigate(`/courses/search?src=ukw&q=${encodeURIComponent(searchTerm)}`);
      searchAlgoLocalStorage(searchTerm);
      setIsTyping(false);
    }
  };

  // Hide results when navigating to a new page
  useEffect(() => {
    setIsTyping(false);
  }, [location.pathname]);

  const { data } = useQuery({
    queryKey: ["courses", debouncedTerm],
    queryFn: () => {
      if (!debouncedTerm) {
        console.log("Search term is undefined");
      }
      return getAllCourses(debouncedTerm, filterData);
    },
    enabled: !!debouncedTerm,
  });

  return (
    <div className="w-full">
      {!isMobile && (
        <SearchInputDesktop
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          extraCSS={""}
          searchTerm={searchTerm}
          isTyping={isTyping}
          data={data}
        />
      )}
      {isMobile && showSearchMobile && (
        <SearchInputMobile
          setShowSearchMobile={setShowSearchMobile}
          showSearchMobile={showSearchMobile}
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          extraCSS={""}
          searchTerm={searchTerm}
          isTyping={isTyping}
          data={data}
        />
      )}
    </div>
  );
};

export default SearchInput;
