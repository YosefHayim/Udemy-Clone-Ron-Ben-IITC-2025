import FooterUdemyBusiness from "./FooterUdemyBusiness/FooterUdemyBusiness";
import NavigatingPath from "./NavigatingPath/NavigatingPath";
import OpenTicketArea from "./OpenTicketArea/OpenTicketArea";
import OrganizationNavbar from "./OrganizationNavbar/OrganizationNavbar";

const SignUpOrganization = () => {
  return (
    <div>
      <OrganizationNavbar />
      <NavigatingPath />
      <form>
        <OpenTicketArea />
      </form>
      <footer>
        <FooterUdemyBusiness />
      </footer>
    </div>
  );
};

export default SignUpOrganization;
