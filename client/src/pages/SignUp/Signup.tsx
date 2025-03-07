import registerUser from "@/api/users/registerUser";
import Loader from "@/components/Loader/Loader";
import { emailContext } from "@/routes/AppRoutes";
import { RegisterUserPayload } from "@/types/types";
import { Checkbox } from "@/components/ui/checkbox";
import { useGoogleLogin } from "@react-oauth/google";
import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  document.title = "Sign Up and Start Learning | Udemy";
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    redirect_uri: "http://127.0.0.1:5137",
  });

  const emailCtx = useContext(emailContext);
  if (!emailCtx) throw new Error("emailContext is not provided");
  const [emailUser, setEmailUser, userFullName, setUserFullName] = emailCtx;

  const mutation = useMutation<unknown, Error, RegisterUserPayload>({
    mutationFn: registerUser,
    onSuccess: () => {
      navigate("/verify-code");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    setEmailUser(email);
    setUserFullName(fullName);

    mutation.mutate({ fullName, email });
  };

  return (
    <div className="flex mt-[8em]">
      <div className="w-1/2 h-full mr-[-6rem] ml-[3rem] mt-[-3rem] flex items-center justify-center bg-white">
        <img
          src="/images/signup.png"
          alt="Sign Up Illustration"
          className="h-[90%] w-auto object-contain"
        />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center bg-white">
        <div className="w-3/4 max-w-[27rem]">
          <h2 className="text-[2rem] font-bold text-courseNameColorTxt mb-6 w-full text-center">
            Sign up with email
          </h2>
          <form
            className="flex flex-col items-center justify-start space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center justify-center gap-[0.5em] cursor-pointer">
              <div className="w-full flex-col flex-wrap justify-center items-center">
                <Checkbox
                  id="offers"
                  required={true}
                  className="relative h-4 w-4 mr-[0.5em] rounded-[0.2em] border-2 border-black focus:outline-none ring-0 focus:ring-0"
                />
                <label htmlFor="offers" className="mr-[0.5em]">
                  Send me special offers, personalized recommendations, and
                  learning tips.
                </label>
              </div>
            </div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required={true}
              placeholder="Full name"
              className="hover:bg-gray-100 w-full p-[1em] bg-white border border-[#9194ac] rounded-[0.3em] py-[1.5em] placeholder:font-bold placeholder:text-courseNameColorTxt focus:border-purple-800"
            />
            <input
              required={true}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="hover:bg-gray-100 w-full p-[1em] bg-white border border-[#9194ac] rounded-[0.3em] py-[1.5em] placeholder:font-bold placeholder:text-courseNameColorTxt focus:border-purple-800"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-[0.4em] bg-btnColor hover:bg-[#892de1] text-white font-medium flex items-center justify-center space-x-0 h-[50px]"
            >
              {isLoading ? (
                <Loader useSmallLoading={true} hSize="" />
              ) : (
                <div className="flex items-center">
                  <MdEmail size={25} />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12h-9m6 0l-3-3m3 3l-3 3"
                  />
                  <span className="text-[1rem] font-bold">
                    Continue with email
                  </span>
                </div>
              )}
            </button>
          </form>
          <div className="w-full flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-sm text-grayNavbarTxt">
              Other sign up options
            </span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="flex justify-center space-x-5">
            <button
              onClick={handleGoogle}
              className={` p-2 border border-btnColor rounded-sm hover:bg-purpleHoverBtn`}
            >
              <FcGoogle className="w-7 h-7" />
            </button>
            <button className="p-2 border border-btnColor rounded-sm hover:bg-purpleHoverBtn">
              <FaFacebook className="w-7 h-7 text-blue-600" />
            </button>
            <button className="p-2 border border-btnColor rounded-sm hover:bg-purpleHoverBtn">
              <FaApple className="w-7 h-7 opacity-85" />
            </button>
          </div>
          <div className="flex justify-center px-0">
            <p className="text-[0.8rem] text-courseNameColorTxt mt-2">
              By signing up, you agree to our{" "}
              <span className="inline">
                <a
                  className="text-purple-600 underline mr-[0.3rem] cursor-pointer"
                  onClick={() => navigate("/terms-of-use")}
                >
                  Terms of Use
                </a>
                and{" "}
                <a href="/privacy" className="text-purple-600 underline">
                  Privacy Policy
                </a>
              </span>
              .
            </p>
          </div>
          <div className="bg-[#f6f7f9] mt-6 text-center w-full py-[1.5em] text-white font-medium flex items-center justify-center space-x-0">
            <Link to="/login" className="text-courseNameColorTxt text-[1rem]">
              Already have an account?{" "}
              <span className="text-btnColor underline font-bold">Log in</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
