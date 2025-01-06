import { Section } from "lucide-react";
import Banner from "./Home/Banner";
import Header from "./Home/Header";
import TrustedBySection from "./Home/TrustedBySection";
import LearnersAreViewing from "./Home/LearnersAreViewing";
import SearchResult from "./Home/SearchResult";
import LearningGoals from "./Home/LearningGoals";
import PlansSection from "./Home/PansSection";
import Testimonials from "./Home/Testimonials";
import TrendingNow from "./Home/TrendingNow";
import Footer from "@/pages/Home/Footer";
import TrendsReport from "./Home/TopTrends";
import Carousel from "./Home/Carousel";

const HomePage = () => {
  return (
    <div>
      <Header />
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
      <Footer />
      {/* <Login />
      <SignUp /> */}
      {/* <Banner />
      <Categories />
      <CourseList />
      <Footer /> */}
    </div>
  );
};

export default HomePage;
