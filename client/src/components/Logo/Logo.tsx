import logo from "/images/logo-udemy.svg";

const Logo = () => {
  return (
    <div>
      <div className="logo flex items-center h-auto w-auto cursor-pointer">
        <img
          src={logo}
          alt="Udemy Logo"
          style={{ height: "4em" }}
          className="w-auto max-w-full align-middle"
        />
      </div>
    </div>
  );
};

export default Logo;
