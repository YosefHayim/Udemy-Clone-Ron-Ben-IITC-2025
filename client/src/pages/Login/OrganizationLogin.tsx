import { Link } from "react-router-dom";
import loginUdemyBusinessOrganizationImg from "/images/login-udemy-business-organization.jpg";
import udemyBusinessLogo from "/images/udemy-business-logo.png";

const OrganizationLogin = () => {
  const handleSubmit = (e) => {};

  return (
    <div className="min-h-screen relative">
      <img
        src={loginUdemyBusinessOrganizationImg}
        alt="Udemy business organization image"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full flex flex-col items-center gap-6 bg-white p-8">
          <img
            src={udemyBusinessLogo}
            alt="Udemy business logo"
            className="h-[5em]"
          />
          <form className="w-full space-y-4">
            <input
              required={true}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your work email address"
              className="hover:bg-gray-100 w-full p-[1em] bg-white text-black focus:bg-white focus:text-black focus:outline-none border border-[#9194ac] rounded-[0.3em] py-[1.5em] placeholder:font-bold placeholder:text-courseNameColorTxt focus:border-purple-800"
            />
            <button
              type="submit"
              className="focus:outline-none w-full rounded-[0.4em] p-2 bg-btnColor hover:bg-[#892de1] text-white font-medium flex items-center justify-center space-x-0"
            >
              Continue
            </button>
          </form>
          <button className="focus:outline-none underline text-[#6d28d2]">
            Need help with logging in or signing up?
          </button>
          <Link to="/terms-of-use">
            <p>Read our Privacy Statement</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrganizationLogin;
