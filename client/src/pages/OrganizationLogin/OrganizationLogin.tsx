import { Link } from "react-router-dom";
import loginUdemyBusinessOrganizationImg from "/images/login-udemy-business-organization.jpg";
import udemyBusinessLogo from "/images/udemy-business-logo.png";

const OrganizationLogin = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const formData = new FormData(target);
    const email = formData.get("email");
    console.log(email);
  };

  return (
    <div className="min-h-screen relative">
      <img
        src={loginUdemyBusinessOrganizationImg}
        alt="Udemy business organization image"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-2">
        <div className="max-w-md w-full flex flex-col items-center gap-6 bg-white p-8 shadow-lg mb-[30%]">
          <img
            src={udemyBusinessLogo}
            alt="Udemy business logo"
            className="h-[5em] object-contain"
          />
          <form className="w-full space-y-4" onSubmit={handleSubmit}>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter your work email address"
              className="w-full px-4 py-3 bg-white text-black transition-colors duration-200 ease-in-out
                hover:bg-gray-50 focus:bg-white focus:text-black focus:outline-none 
                border border-[#9194ac] rounded-[0.3em] 
                placeholder:font-bold placeholder:text-courseNameColorTxt 
                focus:border-purple-800"
            />
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-[0.3em] bg-btnColor 
                hover:bg-[#892de1] transition-colors duration-200 ease-in-out
                text-white font-medium text-center"
            >
              Continue
            </button>
          </form>
          <Link
            to="/hc/en-us/requests/new/ticket_form_id"
            className="text-[#6d28d2] hover:text-[#892de1] transition-colors duration-200 underline focus:outline-none"
          >
            Need help with logging in or signing up?
          </Link>
          <Link
            to="/terms-of-use"
            className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            Read our Privacy Statement
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrganizationLogin;
