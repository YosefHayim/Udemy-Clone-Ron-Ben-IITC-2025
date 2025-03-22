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
import googleLogin from "@/api/users/googleLogin";
import { BiSolidErrorAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { setIsLoggedWithGoogle } from "@/redux/slices/userSlice";

const SignUp: React.FC = () => {
  document.title = "Sign Up and Start Learning | Udemy";
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isError, setShowIsError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const googleMutationLogin = useMutation({
    mutationFn: googleLogin,
    onSuccess: () => {
      dispatch(setIsLoggedWithGoogle(true));
      navigate("/");
    },
    onError: (error) => {
      console.log("Error during google login process:", error);
      setShowIsError(true);
    },
  });

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
    <div className="mt-[8em] flex">
      <div className="ml-[3rem] mr-[-6rem] mt-[-3rem] flex h-full w-1/2 items-center justify-center bg-white">
        <img
          src="/images/signup.png"
          alt="Sign Up Illustration"
          className="h-[90%] w-auto object-contain"
        />
      </div>
      <div className="flex h-full w-1/2 items-center justify-center bg-white">
        <div className="w-3/4 max-w-[27rem]">
          <h2 className="mb-6 w-full text-center text-[2rem] font-bold text-courseNameColorTxt">
            Sign up with email
          </h2>
          <div
            className={
              isError
                ? `mb-[1em] flex w-full flex-row items-start justify-center gap-[1em] rounded-[1.5em] border border-red-700 p-[1em] py-[1.5em] font-bold`
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
          <form
            className="flex flex-col items-center justify-start space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="flex cursor-pointer items-center justify-center gap-[0.5em]">
              <div className="w-full flex-col flex-wrap items-center justify-center">
                <Checkbox
                  id="offers"
                  required={true}
                  className="relative mr-[0.5em] h-4 w-4 rounded-[0.2em] border-2 border-black ring-0 focus:outline-none focus:ring-0"
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
              className="w-full rounded-[0.3em] border border-[#9194ac] bg-white p-[1em] py-[1.5em] placeholder:font-bold placeholder:text-courseNameColorTxt hover:bg-gray-100 focus:border-purple-800"
            />
            <input
              required={true}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full rounded-[0.3em] border border-[#9194ac] bg-white p-[1em] py-[1.5em] placeholder:font-bold placeholder:text-courseNameColorTxt hover:bg-gray-100 focus:border-purple-800"
            />
            <button
              type="submit"
              className="flex h-[50px] w-full items-center justify-center space-x-0 rounded-[0.4em] bg-btnColor py-3 font-medium text-white hover:bg-[#892de1] focus:outline-none"
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
          <div className="my-6 flex w-full items-center">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-sm text-grayNavbarTxt">
              Other sign up options
            </span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="flex justify-center space-x-5">
            <button
              onClick={handleGoogle}
              className={`rounded-sm border border-btnColor p-2 hover:bg-purpleHoverBtn focus:outline-none`}
            >
              <FcGoogle className="h-7 w-7" />
            </button>
            <button className="rounded-sm border border-btnColor p-2 hover:bg-purpleHoverBtn focus:outline-none">
              <FaFacebook className="h-7 w-7 text-blue-600" />
            </button>
            <button className="rounded-sm border border-btnColor p-2 hover:bg-purpleHoverBtn focus:outline-none">
              <FaApple className="h-7 w-7 opacity-85" />
            </button>
          </div>
          <div className="flex justify-center px-0">
            <p className="mt-2 text-courseNameColorTxt">
              By signing up, you agree to our{" "}
              <span className="inline">
                <a
                  className="mr-[0.3rem] cursor-pointer text-purple-600 underline"
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
          <div className="mt-6 flex w-full items-center justify-center space-x-0 bg-[#f6f7f9] py-[1.5em] text-center font-medium text-white">
            <Link to="/login" className="text-[1rem] text-courseNameColorTxt">
              Already have an account?{" "}
              <span className="font-bold text-btnColor underline">Log in</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
