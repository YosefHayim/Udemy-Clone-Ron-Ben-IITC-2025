import Menu from "@/components/Menu/Menu";
import DropdownMenu from "@/components/Navbar/DropDownMenu/DropDownMenu";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import {
  setBio,
  setEmailAddress,
  setFullName,
  setProfilePic,
  setRole,
} from "@/redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { DecodedTokenProps } from "@/types/types";
import AccountSecurity from "../ProfilePage/AccountSecurity";
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

const Homepage = () => {
  const dispatch = useDispatch();

  const cookie = Cookies.get("cookie");
  if (cookie) {
    const decoded = jwtDecode<DecodedTokenProps>(cookie);
    dispatch(setFullName(decoded.fullName));
    dispatch(setProfilePic(decoded.profilePic));
    dispatch(setEmailAddress(decoded.email));
    dispatch(setBio(decoded.bio));
    dispatch(setRole(decoded.role));
  }
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
            <AccountSecurity />
            {/* <Welcome />
            <Banner />
            <CoursesCarousel />
            <TeamAccess /> */}
            {/* <CoursesCarousel /> */}
          </div>
        </>
      )}
    </>
  );
};

export default Homepage;
