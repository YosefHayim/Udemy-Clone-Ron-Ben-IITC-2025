import loginUdemyBusinessOrganizationImg from "/images/login-udemy-business-organization.jpg";
import udemyBusinessLogo from "/images/udemy-business-logo.png";

const OrganizationLogin = () => {
  const handleSubmit = (e) => {};

  return (
    <div>
      <img
        src={udemyBusinessLogo}
        alt="Udemy business logo"
        className="h-[5em]"
      />
      <img
        src={loginUdemyBusinessOrganizationImg}
        alt="Udemy business organization image"
      />
      <form>
        <input
          required={true}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your work email address"
          className="w-full p-[1em] bg-white text-black focus:bg-white focus:text-black focus:outline-none border border-[#9194ac] rounded-[0.3em] py-[1.5em] placeholder:font-bold placeholder:text-courseNameColorTxt focus:border-purple-800"
        />
        <button
          type="submit"
          className="focus:outline-none w-full py-3 rounded-[0.4em] bg-btnColor hover:bg-[#892de1] text-white font-medium flex items-center justify-center space-x-0 h-[50px]"
        ></button>
      </form>
      <button className="focus:outline-none underline text-[#6d28d2]">
        Need help with logging in or signing up?
      </button>
    </div>
  );
};

export default OrganizationLogin;
