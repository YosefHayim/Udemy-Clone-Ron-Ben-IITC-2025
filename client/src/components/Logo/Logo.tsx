import logo from "/images/logo-udemy.svg";

const Logo = ({ CustomCssSize = "" }) => {
  return (
    <div>
      <div className="flex items-center cursor-pointer">
        <img
          src={logo}
          alt="Udemy Logo"
          className={`${CustomCssSize} w-[10em]`}
        />
      </div>
    </div>
  );
};

export default Logo;
