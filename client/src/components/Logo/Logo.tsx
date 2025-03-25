import logo from '/images/logo-udemy.svg';

const Logo = ({ CustomCssSize = 'w-[7em]' }) => {
  return <img src={logo} alt="Udemy Logo" className={`${CustomCssSize}`} />;
};

export default Logo;
