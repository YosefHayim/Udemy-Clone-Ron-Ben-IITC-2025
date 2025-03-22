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
    <div className="relative min-h-screen">
      <img
        src={loginUdemyBusinessOrganizationImg}
        alt="Udemy business organization image"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-2">
        <div className="mb-[30%] flex w-full max-w-md flex-col items-center gap-6 bg-white p-8 shadow-lg">
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
              className="w-full rounded-[0.3em] border border-[#9194ac] bg-white px-4 py-3 text-black
                transition-colors duration-200 ease-in-out placeholder:font-extrabold 
                placeholder:text-courseNameColorTxt hover:bg-gray-50 focus:border-purple-800 
                focus:bg-white focus:text-black 
                focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded-[0.3em] bg-btnColor px-4 py-3 
                text-center font-medium text-white transition-colors
                duration-200 ease-in-out hover:bg-[#892de1]"
            >
              Continue
            </button>
          </form>
          <Link
            to="/hc/en-us/requests/new/ticket_form_id"
            className="text-btnColor underline transition-colors duration-200 hover:text-[#892de1] focus:outline-none"
          >
            Need help with logging in or signing up?
          </Link>
          <Link
            to="/terms-of-use"
            className="text-gray-600 transition-colors duration-200 hover:text-gray-800"
          >
            Read our Privacy Statement
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrganizationLogin;
