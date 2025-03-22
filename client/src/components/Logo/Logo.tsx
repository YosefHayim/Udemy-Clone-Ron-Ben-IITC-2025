import logo from "/images/logo-udemy.svg";

const Logo = ({ CustomCssSize = "" }) => {
  return (
    <div>
      <div className="flex cursor-pointer items-center">
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
