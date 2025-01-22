import DropdownMenu from "@/components/Navbar/DropDownMenu/DropDownMenu";
import Banner from "../Home/Banner/Banner";
import TrustedBySection from "../Home/TrustedBySection/TrustedBySection";
import LearnersAreViewing from "../Home/LearnersAreViewing/LearnersAreViewing";
import Sections from "../Home/Sections/Sections";
import LogoutMessage from "../Home/LogoutMessage/LogoutMessage";

const Logout: React.FC = () => {
  document.title = "udemy.com/logout/";
  return (
    <div className="container mx-auto px-[9.6rem]">
      <DropdownMenu />
      <LogoutMessage />
      <Banner />
      <Sections />
      <TrustedBySection />
      <LearnersAreViewing />
    </div>
  );
};

export default Logout;
