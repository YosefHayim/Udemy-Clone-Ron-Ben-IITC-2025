import DropdownMenu from "@/components/Navbar/DropDownMenu/DropDownMenu";
import Banner from "../Home/Banner";
import TrustedBySection from "../Home/TrustedBySection";
import LearnersAreViewing from "../Home/LearnersAreViewing";
import Sections from "../Home/Sections";
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
