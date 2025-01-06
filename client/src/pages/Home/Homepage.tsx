import Banner from "./Banner";
<<<<<<< HEAD
=======
import Header from "../../components/Navbar/Navbar";
>>>>>>> 948e8a6d6c2e60fb7bc02faa8cd028efaa5cca69
import TrustedBySection from "./TrustedBySection";
import LearnersAreViewing from "./LearnersAreViewing";
import SearchResult from "./SearchResult";
import LearningGoals from "./LearningGoals";
import PlansSection from "./PansSection";
import Testimonials from "./Testimonials";
import TrendsReport from "./TopTrends";
import TrendingNow from "./TrendingNow";
import Carousel from "./Carousel";
import Section from "./Sections";

const Homepage = () => {
  return (
    <div>
      <div className="container mx-auto px-6 lg:px-24">
        <Banner />
        <Section />
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
      {/* <Login />
      <SignUp /> */}
      {/* <Banner />
      <Categories />
      <CourseList />
      <Footer /> */}
    </div>
  );
};

export default Homepage;
