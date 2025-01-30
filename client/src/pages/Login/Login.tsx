import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import loginUser from "@/api/users/loginUser";
import { FormErrors } from "@/types/types";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { emailContext } from "@/routes/AppRoutes";
import Login_Busniness_image from "/images/login.png";

const Login = () => {
  const [formErrors, setFormErrors] = useState<FormErrors>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onError: (error) => {
      console.error("Error during login process:", error);
    },
  });

  const emailCtx = useContext(emailContext);
  if (!emailCtx) throw new Error("emailContext is not provided");
  const [emailUser, setEmailUser] = emailCtx;

  console.log(emailUser);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    setEmailUser(email);
    loginMutation.mutate({ email });
    navigate("/verify-code");
  };

  const Navigate_Business = () => {
    navigate("/Login-Business");
  };

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `${Login_Busniness_image}` }}
    >
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/images/loginImg.png"
          alt="Login Illustration"
          className="w-[100%] h-auto max-w-[620px] max-h-[100%] object-contain p-12 mt-[8rem] mr-[2.7rem]"
        />

        <div className="w-full max-w-[29rem] p-6 bg-white  rounded-lg ml-[3rem] mr-[5rem]">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
            Log in to continue your learning journey
          </h2>

          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className={`w-full px-5 py-[20px] border rounded-sm bg-white text-gray-800 text-[15px] bold placeholder:text-black placeholder:font-semibold focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all duration-200 ${
                  formErrors.email ? "border-red-500" : "border-gray-500"
                }`}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-[#6d28d2] hover:bg-[#892de1] text-white font-medium flex items-center justify-center space-x-0"
            >
              <MdEmail className="w-5 h-5" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12h-9m6 0l-3-3m3 3l-3 3"
              />

              <span className="text-[1rem] font-bold">Continue with email</span>
            </button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-sm text-gray-500">
              Other log in options
            </span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex justify-center space-x-5">
            <button className="p-2 border border-[#6D28D2] rounded-sm hover:bg-gray-100">
              <FcGoogle className="w-7 h-7" />
            </button>
            <button className="p-2 border border-[#6D28D2] rounded-sm hover:bg-gray-100">
              <FaFacebook className="w-7 h-7 text-blue-600" />
            </button>
            <button className="p-2 border border-[#6D28D2] rounded-sm hover:bg-gray-100">
              <FaApple className="w-7 h-7 opacity-85" />
            </button>
          </div>

          <div className="mt-16 space-y-3 text-center text-base bold text-gray-900 bg-gray-100">
            <div className="border-b-2 py-3">
              Don’t have an account?{" "}
              <a
                href="/signup"
                className="text-purple-700 underline font-medium underline-offset-[5px]"
              >
                Sign up
              </a>
            </div>
            <button
              onClick={Navigate_Business}
              className="text-purple-700 underline font-medium underline-offset-[5px] pb-5 pt-0"
            >
              Log in with your organization
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
