import loginUdemyBusinessOrganizationImg from "/images/login-udemy-business-organization.jpg";

const OrganizationBackground = () => {
  return (
    <img
      src={loginUdemyBusinessOrganizationImg}
      alt="Udemy business organization image"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
};

export default OrganizationBackground;
