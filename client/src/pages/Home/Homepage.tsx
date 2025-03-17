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
import CoursesCarousel from "@/components/CourseCard/CoursesCarousel";
import TeamAccess from "./TeamAccess/TeamAccess";
import { useEffect } from "react";
import styles from "./Homepage.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useMediaQuery } from "react-responsive";

const Homepage = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  document.title = "Online Courses - Learn Anything, On Your Schedule | Udemy";
  const cookie = useSelector((state: RootState) => state.user.cookie);

  useEffect(() => {}, [cookie]);

  return (
    <div className={styles.homepage}>
      {!cookie ? (
        <div>
          <div className="container mx-auto px-[1.7rem]">
            <Banner />
            <Sections />
            <TrustedBySection />
            <LearnersAreViewing />
            <SearchResult />
            <LearningGoals />
            <PlansSection />
            <Testimonials />
            <TrendsReport />
            <TrendingNow />
            <Carousel />
          </div>
        </div>
      ) : (
        <div>
          {!isMobile && <Menu />}
          <Welcome />
          <Banner />
          <div className="container mx-auto px-0 xl:px-[1.7rem]">
            <TeamAccess />
            <CoursesCarousel searchTerm={"JavaScript"} />
            <CoursesCarousel searchTerm={"Python"} />
            <CoursesCarousel searchTerm={"Books"} />
            <CoursesCarousel searchTerm={"Investing"} />
            <CoursesCarousel searchTerm={"Science"} />
            <CoursesCarousel searchTerm={"Amazon"} />
            <CoursesCarousel searchTerm={"Learning"} />
            <CoursesCarousel searchTerm={"Meditation"} />
            <CoursesCarousel searchTerm={"Web Development"} />
            <CoursesCarousel searchTerm={"Microsoft"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
