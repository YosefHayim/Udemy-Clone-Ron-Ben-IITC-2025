import LogoutMessage from "../Home/LogoutMessage/LogoutMessage";
import logoutBanner from "/images/logout-banner.jpg";
const Logout: React.FC = () => {
  document.title = "udemy.com/logout/";
  return (
    <div className="px-[2em]">
      <LogoutMessage />
      <img src={logoutBanner} alt="Logout banner" />
      <div className="w-[260px] flex col items-center justify-start gap-[0.5em] absolute top-[50%] right-[7
      5%]">
        <div>
          <p className="">
            Your company can give you access to our top 27,000+ business and
            tech courses.
          </p>
          <div>
            <button className="font-bold transition duration-150 text-sm font-Sans py-[0.7em] bg-btnColor hover:bg-[#892DE1] text-white rounded-[0.2rem] px-[0.5em] focus:outline-none">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
