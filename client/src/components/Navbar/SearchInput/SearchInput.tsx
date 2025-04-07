import getAllCourses from "@/api/courses/getAllCourses";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { searchAlgoLocalStorage } from "@/utils/searchesOfUser";
import { useMediaQuery } from "react-responsive";
import SearchInputDesktop from "./SearchInputDesktop/SearchInputDekstop";
import SearchInputMobile from "@/components/MobileNavbar/SearchInputMobile/SearchInputMobile";
import { filterContext } from "@/Contexts/filterSearch";

const SearchInput: React.FC<{
  isTyping: boolean;
  setIsTyping: (value: boolean) => void;
  extraCSS?: string;
  setShowSearchMobile?: (val: boolean) => void;
  showSearchMobile?: boolean;
}> = ({ isTyping, setIsTyping, extraCSS = "", setShowSearchMobile, showSearchMobile }) => {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  const { filterData, setSearchTerm } = useContext(filterContext);
  const { searchTerm } = filterData;

  const navigate = useNavigate();
  const [debouncedTerm, setDebouncedTerm] = useState<string>("");
  const [searchParams] = useSearchParams();
  const urlSearchTerm: string = searchParams.get("q")?.toLowerCase() || "";

  // Sync URL search param with context's searchTerm
  useEffect(() => {
    if (urlSearchTerm && urlSearchTerm !== searchTerm) {
      setSearchTerm(urlSearchTerm);
    }
  }, [urlSearchTerm]);

  // Debounce effect to delay API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 200);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setSearchTerm(input);
    setIsTyping(input.length > 0);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/courses/search?src=ukw&q=${encodeURIComponent(searchTerm)}`);
    searchAlgoLocalStorage(searchTerm);
    setIsTyping(false);
  };

  const { data } = useQuery({
    queryKey: ["courses", debouncedTerm],
    queryFn: () => {
      if (!debouncedTerm) return;
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
          extraCSS={extraCSS}
          searchTerm={searchTerm}
          isTyping={isTyping}
          data={data}
        />
      )}
      {isMobile && showSearchMobile && (
        <SearchInputMobile
          setShowSearchMobile={setShowSearchMobile!}
          showSearchMobile={showSearchMobile}
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          extraCSS={extraCSS}
          searchTerm={searchTerm}
          isTyping={isTyping}
          data={data}
        />
      )}
    </div>
  );
};

export default SearchInput;
