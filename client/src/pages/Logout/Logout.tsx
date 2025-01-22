import DropdownMenu from "@/components/Navbar/DropDownMenu/DropDownMenu";
import Banner from "../Home/Banner";
import TrustedBySection from "../Home/TrustedBySection";
import LearnersAreViewing from "../Home/LearnersAreViewing";
import Sections from "../Home/Sections";

const Logout: React.FC = () => {
  document.title = "udemy.com/logout/";
  return (
    <div>
      <DropdownMenu />
      <Banner />
      <Sections />
      <TrustedBySection />
      <LearnersAreViewing />
    </div>
  );
};

export default Logout;
