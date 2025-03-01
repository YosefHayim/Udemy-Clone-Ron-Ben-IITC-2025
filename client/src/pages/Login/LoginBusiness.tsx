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
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${BG})`,
      }}
    >
      {/* Componente central */}
      <div className="w-full max-w-md bg-white p-6 shadow-lg mb-[15.7rem]">
        {/* Logo */}
        <div className="mb-[1.8rem] text-center">
          <img
            src={Logo}
            alt="Udemy Business Logo"
            className="h-[2.35rem] mx-auto"
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
              className="w-full  h-[3.8rem] px-4 py-2 border border-gray-400 rounded-sm bg-white placeholder:text-black placeholder:text-[0.9rem] placeholder:font-bold placeholder:text-opacity-80 focus:outline-none focus:bg-[#E8F0FE] focus:border-btnColor"
              required
            />
          </div>

          {/* Botão de envio */}
          <button
            type="submit"
            className="w-full h-12 py-2 bg-btnColor hover:bg-[#892de1] text-white text-[1rem] font-bold rounded-sm transition"
          >
            Continue
          </button>
        </form>

        {/* Links auxiliares */}
        <div className="text-center mt-6">
          <a href="#" className="text-sm text-btnColor hover:text-[#521E9F]">
            Need help with logging in or signing up?
          </a>
          <p className="text-xs text-grayNavbarTxt mt-7">
            <button onClick={navigatePrivacy} className="">
              Read our Privacy Statement
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginBusiness;
