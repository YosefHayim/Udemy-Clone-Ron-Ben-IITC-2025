import Banner from "./Banner";
import TrustedBySection from "./TrustedBySection";
import LearnersAreViewing from "./LearnersAreViewing";
import SearchResult from "./SearchResult";
import LearningGoals from "./LearningGoals";
import PlansSection from "./PansSection";
import Testimonials from "./Testimonials";
import TrendsReport from "./TopTrends";
import TrendingNow from "./TrendingNow";
import Carousel from "./Carousel";
import Sections from './Sections'
import Menu from "@/components/Menu/Menu";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/index"; // Import RootState type for Redux 
import Welcome from "@/components/LogedinHomePage/Welcome";
import TeamAcess from "./TeamAcess";
import CoursesCarousel from "@/components/CourseCard/CoursesCarousel";

const Homepage = () => {

  const user = useSelector((state: RootState) => state.user)

  return (
    <>
      {!user && (
        <>
          <div className="container mx-auto px-[5.6rem]">
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
        </>
      )}

      {user && (
        <>
          <Menu />
          <div className="container mx-auto px-[5.6rem]">
            <Welcome />
            <Banner />
            <TeamAcess />
            {/* <CoursesCarousel /> */}
          </div>
        </>
      )}

    </>
  );
};

export default Homepage;
