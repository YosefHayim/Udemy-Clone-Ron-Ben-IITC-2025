import { createContext, useState, ReactNode } from "react";

type FilterData = {
  sortBy: string;
  handsOnPractice: Set<string>;
  language: Set<string>;
  levels: Set<string>;
  price: string;
  ratings: number;
  subtitles: Set<string>;
  topics: Set<string>;
  videosDurations: Set<string>;
  certificateOnly: boolean;
  searchTerm: string;
  page: number;
  limit: number;
};

type FilterContextType = {
  filterData: FilterData;
  setFilterData: React.Dispatch<React.SetStateAction<FilterData>>;
  setSortBy: (val: string) => void;
  setSearchTerm: (val: string) => void;
  setRatings: (val: number) => void;
  setCertificateOnly: (val: boolean) => void;
  setPrice: (val: string) => void;
  setPage: (val: number) => void;
  setLimit: (val: number) => void;
  setTopics: (val: Set<string>) => void;
  setLanguage: (val: Set<string>) => void;
  setLevels: (val: Set<string>) => void;
  setHandsOnPractice: (val: Set<string>) => void;
  setVideosDurations: (val: Set<string>) => void;
  setSubtitles: (val: Set<string>) => void;
};

export const filterContext = createContext<FilterContextType>({} as FilterContextType);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filterData, setFilterData] = useState<FilterData>({
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
  });

  const setSortBy = (val: string) => setFilterData((prev) => ({ ...prev, sortBy: val }));
  const setSearchTerm = (val: string) => setFilterData((prev) => ({ ...prev, searchTerm: val }));
  const setRatings = (val: number) => setFilterData((prev) => ({ ...prev, ratings: val }));
  const setCertificateOnly = (val: boolean) =>
    setFilterData((prev) => ({ ...prev, certificateOnly: val }));
  const setPrice = (val: string) => setFilterData((prev) => ({ ...prev, price: val }));
  const setPage = (val: number) => setFilterData((prev) => ({ ...prev, page: val }));
  const setLimit = (val: number) => setFilterData((prev) => ({ ...prev, limit: val }));
  const setTopics = (val: Set<string>) => setFilterData((prev) => ({ ...prev, topics: val }));
  const setLanguage = (val: Set<string>) => setFilterData((prev) => ({ ...prev, language: val }));
  const setLevels = (val: Set<string>) => setFilterData((prev) => ({ ...prev, levels: val }));
  const setHandsOnPractice = (val: Set<string>) =>
    setFilterData((prev) => ({ ...prev, handsOnPractice: val }));
  const setVideosDurations = (val: Set<string>) =>
    setFilterData((prev) => ({ ...prev, videosDurations: val }));
  const setSubtitles = (val: Set<string>) => setFilterData((prev) => ({ ...prev, subtitles: val }));

  return (
    <filterContext.Provider
      value={{
        filterData,
        setFilterData,
        setSortBy,
        setSearchTerm,
        setRatings,
        setCertificateOnly,
        setPrice,
        setPage,
        setLimit,
        setTopics,
        setLanguage,
        setLevels,
        setHandsOnPractice,
        setVideosDurations,
        setSubtitles,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};
