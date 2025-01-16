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
import Sections from "./Sections";
import Menu from "@/components/Menu/Menu";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/index"; // Import RootState type for Redux
import Welcome from "@/components/LoggedInHome/Welcome";
import TeamAcess from "./TeamAcess";
import DropdownMenu from "@/components/DropDownMenu";
import CoursesCarousel from "@/components/CourseCard/CoursesCarousel";
import Cookies from "js-cookie";

const Homepage = () => {
  const cookie = Cookies.get("cookie");
  return (
    <>
      {!cookie && (
        <>
          <div className="container mx-auto px-[5.6rem]">
            <DropdownMenu />
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

      {cookie && (
        <>
          <DropdownMenu />
          <Menu />
          <div className="container mx-auto px-[5.6rem]">
            <Welcome />
            <Banner />
            <CoursesCarousel />
            <TeamAcess />
            {/* <CoursesCarousel /> */}
          </div>
        </>
      )}
    </>
  );
};

export default Homepage;
