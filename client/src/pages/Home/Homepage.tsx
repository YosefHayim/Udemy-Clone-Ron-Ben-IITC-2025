import Menu from "@/components/Menu/Menu";
import DropdownMenu from "@/components/Navbar/DropDownMenu/DropDownMenu";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import {
  setBio,
  setCookie,
  setCoursesBought,
  setEmailAddress,
  setFullName,
  setHeadline,
  setProfilePic,
  setRole,
  setUdemyCredits,
} from "@/redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { DecodedTokenProps } from "@/types/types";
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

const Homepage = () => {
  document.title = "Online Courses - Learn Anything, On Your Schedule | Udemy";
  const dispatch = useDispatch();
  const cookie = Cookies.get("cookie");

  useEffect(() => {
    if (cookie) {
      const decoded = jwtDecode<DecodedTokenProps>(cookie);
      dispatch(setCookie(cookie));
      dispatch(setFullName(decoded.fullName));
      dispatch(setProfilePic(decoded.profilePic));
      dispatch(setHeadline(decoded.headline));
      dispatch(setEmailAddress(decoded.email));
      dispatch(setBio(decoded.bio));
      dispatch(setRole(decoded.role));
      dispatch(setCoursesBought(decoded.coursesBought));
      dispatch(setUdemyCredits(decoded.udemyCredits));
    }
  }, [cookie]);
  return (
    <div className={styles.homepage}>
      {!cookie ? (
        <>
          <div className="container mx-auto px-[5.7rem]">
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
      ) : (
        <div>
          <DropdownMenu />
          <Menu />
          <div className="container mx-auto px-[5.7rem]">
            <Welcome />
            <Banner />
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
