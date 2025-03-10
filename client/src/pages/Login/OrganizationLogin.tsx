import loginUdemyBusinessOrganizationImg from "/images/login-udemy-business-organization.jpg";
import udemyBusinessLogo from "/images/udemy-business-logo.png";

const OrganizationLogin = () => {
  return (
    <div>
      <img src={udemyBusinessLogo} alt="Udemy business logo" />
      <img
        src={loginUdemyBusinessOrganizationImg}
        alt="Udemy business organization image"
      />
    </div>
  );
};

export default OrganizationLogin;
