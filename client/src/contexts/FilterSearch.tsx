import { createContext, useState, ReactNode } from "react";
import { FilterDataProps } from "@/types/types";

export const filterContext = createContext<
  [FilterDataProps, React.Dispatch<React.SetStateAction<FilterDataProps>>]
>([
  {
    sortBy: "",
    handsOnPractice: new Set(),
    language: new Set(),
    levels: new Set(),
    price: "",
    ratings: 0,
    subtitles: new Set(),
    topics: new Set(),
    videosDurations: new Set(),
    certificateOnly: false,
    searchTerm: "",
  },
  () => {},
]);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filterData, setFilterData] = useState<FilterDataProps>({
    sortBy: "",
    handsOnPractice: new Set(),
    language: new Set(),
    levels: new Set(),
    price: "",
    ratings: 0,
    subtitles: new Set(),
    topics: new Set(),
    videosDurations: new Set(),
    certificateOnly: false,
    searchTerm: "",
  });

  return (
    <filterContext.Provider value={[filterData, setFilterData]}>{children}</filterContext.Provider>
  );
};
