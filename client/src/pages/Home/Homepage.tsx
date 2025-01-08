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

const Homepage = () => {

  const user = useSelector((state: RootState) => state.user)

  return (
    <>
      {/* Guest Home Page */}
      <div className="container mx-auto px-6 lg:px-24">
        {user && <Menu />}
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

      {/* Loaged in Home Page */}
      <div>
      </div>
    </>
  );
};

export default Homepage;
