import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import loginUser from "@/api/users/loginUser";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { emailContext } from "@/routes/AppRoutes";
import { BiSolidErrorAlt } from "react-icons/bi";
import { useGoogleLogin } from "@react-oauth/google";
import googleLogin from "@/api/users/googleLogin";

const Login = () => {
  const navigate = useNavigate();
  const [isError, setShowIsError] = useState(false);

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      navigate("/verify-code");
    },
    onError: (error) => {
      console.error("Error during login process:", error);
      setShowIsError(true);
    },
  });

  const googleMutationLogin = useMutation({
    mutationFn: googleLogin,
    onSuccess: () => {
      navigate("/");
    },
    onError: (error) => {
      console.error("Error during google login process:", error);
      setShowIsError(true);
    },
  });

  const emailCtx = useContext(emailContext);
  if (!emailCtx) throw new Error("emailContext is not provided");
  const [emailUser, setEmailUser, userFullName, setUserFullName] = emailCtx;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    setEmailUser(email);
    loginMutation.mutate({ email });
  };

  const navigateBusiness = () => {
    navigate("/login-Business");
  };

  const handleGoogle = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      googleMutationLogin.mutate(credentialResponse.code);
    },
    onError: (error) => {
      console.log(`Error occurred durning login via google: `, error);
    },
    onNonOAuthError: (nonAuthError) => {
      console.log(nonAuthError);
    },
    flow: "auth-code",
    ux_mode: "popup",
    redirect_uri: "http://localhost:5137",
  });

  return (
    <div className="h-screen bg-cover bg-center">
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/images/loginImg.png"
          alt="Login Illustration"
          className="w-[100%] h-auto max-w-[620px] max-h-[100%] object-contain p-12 mr-[2.7rem]"
        />
        <div className="w-full max-w-[29rem] p-6 bg-white  rounded-lg ml-[3rem] mr-[5rem]">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
            Log in to continue your learning journey
          </h2>
          <div
            className={
              isError
                ? `gap-[1em] w-full border border-red-700 p-[1em] py-[1.5em] font-bold rounded-[1.5em] mb-[1em] flex flex-row items-start justify-center`
                : "hidden"
            }
          >
            <div>
              <BiSolidErrorAlt className="text-[2.5em] text-red-600" />
            </div>
            <div>
              <p className="text-[1.8em]">
                There was a problem logging in. Check your email or create an
                account.
              </p>
            </div>
          </div>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full p-[1em] bg-white text-black focus:bg-white focus:text-black focus:outline-none border border-[#9194ac] rounded-[0.3em] py-[1.5em] placeholder:font-bold placeholder:text-[#303141] focus:border-purple-800"
              />
              <div className={isError ? "block" : "hidden"}>
                <span className="text-red-600 absolute font-bold top-[10%] right-[87%]">
                  Email
                </span>
                <BiSolidErrorAlt className="text-[1.5em] text-red-600 absolute top-[10%] right-[82%]" />
              </div>
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
            <span className="mx-4 text-sm text-[#595C73]">
              Other log in options
            </span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex justify-center space-x-5">
            <button
              onClick={handleGoogle}
              className="p-2 border border-[#6D28D2] rounded-sm hover:bg-gray-100"
            >
              <FcGoogle className="w-7 h-7" />
            </button>
            <button className="p-2 border border-[#6D28D2] rounded-sm hover:bg-gray-100">
              <FaFacebook className="w-7 h-7 text-blue-600" />
            </button>
            <button className="p-2 border border-[#6D28D2] rounded-sm hover:bg-gray-100">
              <FaApple className="w-7 h-7 opacity-85" />
            </button>
          </div>

          <div className="mt-16 space-y-3 text-center text-base font-medium text-[#303141] bg-gray-100">
            <div className="border-b-2 py-3">
              Don’t have an account?
              <a
                href="/signup"
                className="text-[#6d28d2] underline ml-1 font-bold underline-offset-[5px]"
              >
                Sign up
              </a>
            </div>
            <button
              onClick={navigateBusiness}
              className="text-[#6d28d2] underline font-bold underline-offset-[5px] pb-5 pt-0"
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
