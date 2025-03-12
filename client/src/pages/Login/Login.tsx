import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import Loader from "@/components/Loader/Loader";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import { Button } from "@/components/ui/button";

const Login = () => {
  const navigate = useNavigate();
  const [isError, setShowIsError] = useState(false);
  const [showRegularLogin, setShowRegularLogin] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const isLoggedPreviouslyWithGoogle = useSelector(
    (state: RootState) => state?.user.isLoggedPreviouslyWithGoogle
  );

  const handleRegularLogin = () => {
    setShowRegularLogin(true);
  };

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      navigate("/verify-code");
    },
    onError: (error) => {
      console.log("Error during login process:", error);
      setShowIsError(true);
      return;
    },
  });

  const googleMutationLogin = useMutation({
    mutationFn: googleLogin,
    onSuccess: () => {
      navigate("/");
    },
    onError: (error) => {
      console.log("Error during google login process:", error);
      setShowIsError(true);
    },
  });

  const emailCtx = useContext(emailContext);
  if (!emailCtx) throw new Error("emailContext is not provided");
  const [emailUser, setEmailUser, userFullName, setUserFullName] = emailCtx;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    setEmailUser(email);
    loginMutation.mutate({ email });
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
    redirect_uri: "http://127.0.0.1:5137",
  });

  useEffect(() => {}, [isLoggedPreviouslyWithGoogle]);

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
          {(!isLoggedPreviouslyWithGoogle || showRegularLogin) && (
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  required={true}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full p-[1em] bg-white text-black focus:bg-white focus:text-black focus:outline-none border border-[#9194ac] rounded-[0.3em] py-[1.5em] placeholder:font-bold placeholder:text-courseNameColorTxt focus:border-purple-800"
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
                className="focus:outline-none w-full py-3 rounded-[0.4em] bg-btnColor hover:bg-[#892de1] text-white font-medium flex items-center justify-center space-x-0 h-[50px]"
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
                    <button className="focus:outline-none text-[1rem] font-bold">
                      Continue with email
                    </button>
                  </div>
                )}
              </button>
            </form>
          )}
          {!isLoggedPreviouslyWithGoogle ||
            (showRegularLogin && (
              <>
                <div className="w-full flex items-center my-6">
                  <hr className="flex-grow border-gray-300" />
                  <span className="mx-4 text-sm text-grayNavbarTxt">
                    Other log in options
                  </span>
                  <hr className="flex-grow border-gray-300" />
                </div>
                <div className="flex justify-center space-x-5 mb-[5em]">
                  <button
                    onClick={handleGoogle}
                    className={`focus:outline-none p-2 border border-btnColor rounded-sm hover:bg-purpleHoverBtn`}
                  >
                    <FcGoogle className="w-7 h-7" />
                  </button>
                  <button className="focus:outline-none p-2 border border-btnColor rounded-sm hover:bg-purpleHoverBtn">
                    <FaFacebook className="w-7 h-7 text-blue-600" />
                  </button>
                  <button className="focus:outline-none p-2 border border-btnColor rounded-sm hover:bg-purpleHoverBtn">
                    <FaApple className="w-7 h-7 opacity-85" />
                  </button>
                </div>
              </>
            ))}
          {isLoggedPreviouslyWithGoogle && !showRegularLogin && (
            <Button
              onClick={handleGoogle}
              className="h-[3em] hover:bg-purpleHoverBtn mb-[0.5em] w-full rounded-[0.2em] font-bold bg-white text-purple-700 flex items-center border border-purple-600 justify-start px-[0.5em]"
            >
              <FcGoogle size={20} /> Continue with Google
            </Button>
          )}
          <div className="space-y-3 text-center text-base font-medium text-courseNameColorTxt bg-gray-100 p-[0.7em]">
            {isLoggedPreviouslyWithGoogle && !showRegularLogin && (
              <div>
                <button
                  onClick={handleRegularLogin}
                  className="focus:outline-none hover:text-purple-800 text-btnColor underline font-bold underline-offset-[5px] p-[0.7em]"
                >
                  Log in with different account
                </button>
                <hr />
              </div>
            )}
            <Link to="/signup">
              <button className="focus:outline-none underline-offset-[5px] p-[0.7em]">
                Don't have an account?{" "}
                <span className="text-btnColor font-bold underline">
                  Sign up
                </span>
              </button>
            </Link>
            <hr />
            <Link to="/organization/global-login/email">
              <button className="focus:outline-none text-btnColor underline font-bold underline-offset-[5px] p-[0.7em]">
                Log in with your organization
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
