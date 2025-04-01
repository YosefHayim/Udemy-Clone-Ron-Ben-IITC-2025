import Menu from "@/components/Menu/Menu";
import Banner from "./Banner/Banner";
import TrustedBySection from "./TrustedBySection/TrustedBySection";
import LearnersAreViewing from "./LearnersAreViewing/LearnersAreViewing";
import SearchResult from "./SearchResult/SearchResult";
import LearningGoals from "./LearningGoals/LearningGoals";
import PlansSection from "./PansSection/PansSection";
import Testimonials from "./Testimonials/Testimonials";
import TrendsReport from "./TopTrends/TopTrends";
import TrendingNow from "./TrendingNow/TrendingNow";
import Carousel from "./Carousel/Carousel";
import Sections from "./Sections/Sections";
import Welcome from "@/components/LoggedInHome/Welcome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useMediaQuery } from "react-responsive";
import { searchAlgoLocalStorage } from "@/utils/searchesOfUser";
import LetsStartLearning from "./LetsStartLearning/LetsStartLearning";

const Homepage = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  searchAlgoLocalStorage("course");
  document.title = "Online Courses - Learn Anything, On Your Schedule | Udemy";
  const cookie = useSelector((state: RootState) => state.user.cookie);
  const rawSearches = localStorage.getItem("searchesOfUser");
  const parsedSearches: string[] = Array.isArray(JSON.parse(rawSearches || "[]"))
    ? JSON.parse(rawSearches || "[]").filter((s: unknown) => typeof s === "string")
    : [];

  const uniqueSearches = [...new Set(parsedSearches)];

  useEffect(() => {}, [cookie]);

  return (
    <div>
      {!isMobile && cookie && <Menu />}
      <div className="font-[lifeLtstd]">
        {!cookie ? (
          <div className="w-full">
            <Banner isLogin={false} />
            <div>
              <Sections />
              <TrustedBySection />
              <LearnersAreViewing randomAlgoWord={uniqueSearches[1]} />
              <SearchResult title={`placeholder`} randomAlgoWord={uniqueSearches[2]} />
              <LearningGoals />
              <PlansSection />
              <Testimonials />
              <TrendsReport />
              <TrendingNow />
              <Carousel />
            </div>
          </div>
        ) : (
          <div className="w-full">
            <div className="flex flex-col  gap-4 px-24 py-8">
              <Welcome />
              <Banner isLogin={true} />
              <LetsStartLearning />
              <h1 className="pl-4 font-extrabold">What to learn next</h1>
              <SearchResult title={`placeholder`} randomAlgoWord={uniqueSearches[3]} />
              <SearchResult title={`placeholder`} randomAlgoWord={uniqueSearches[4]} />
              <LearnersAreViewing randomAlgoWord={uniqueSearches[5]} />
              {uniqueSearches.slice(0, 5).map((search, index) => (
                <SearchResult
                  key={index}
                  title={`Top courses in "${search}"`}
                  randomAlgoWord={search}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
