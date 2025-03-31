import { createContext, useState, ReactNode } from "react";

export const filterContext = createContext([
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
    page: 1,
    limit: 20,
  },
]);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filterData, setFilterData] = useState({
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
