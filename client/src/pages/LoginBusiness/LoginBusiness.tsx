import BG from "/images/businessBG.jpg";
import Logo from "/images/BusinessLogo.png";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
const navigatePrivacy = () => {
  navigate("/terms/ub-privacy/");
};

const LoginBusiness = () => {
  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${BG})`,
      }}
    >
      {/* Componente central */}
      <div className="mb-[15.7rem] w-full max-w-md bg-white p-6 shadow-lg">
        {/* Logo */}
        <div className="mb-[1.8rem] text-center">
          <img
            src={Logo}
            alt="Udemy Business Logo"
            className="mx-auto h-[2.35rem]"
          />
        </div>

        {/* Formulário */}
        <form className="space-y-4">
          {/* Input do email */}
          <div>
            <input
              type="email"
              id="email"
              placeholder="Enter your work email address"
              className="h-[3.8rem]  w-full rounded-sm border border-gray-400 bg-white px-4 py-2 placeholder:font-bold placeholder:text-black placeholder:text-opacity-80 focus:border-btnColor focus:bg-[#E8F0FE] focus:outline-none"
              required
            />
          </div>

          {/* Botão de envio */}
          <button
            type="submit"
            className="h-12 w-full rounded-sm bg-btnColor py-2 text-[1rem] font-bold text-white transition hover:bg-[#892de1]"
          >
            Continue
          </button>
        </form>

        {/* Links auxiliares */}
        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-btnColor hover:text-[#521E9F]">
            Need help with logging in or signing up?
          </a>
          <p className="mt-7 text-xs text-grayNavbarTxt">
            <button onClick={navigatePrivacy}>
              Read our Privacy Statement
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginBusiness;
