import logo from '/images/logo-udemy.svg';

const Logo = ({ CustomCssSize = 'w-[12rem]' }) => {
  return <img src={logo} alt="Udemy Logo" className={`${CustomCssSize} px-[0.25rem]`} />;
};

export default Logo;
