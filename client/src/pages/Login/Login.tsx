import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import loginUser from "@/api/users/loginUser";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaRegUser } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { emailContext } from "@/routes/AppRoutes";
import { useGoogleLogin } from "@react-oauth/google";
import googleLogin from "@/api/users/googleLogin";
import Loader from "@/components/Loader/Loader";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Button } from "@/components/ui/button";
import {
  continueWGoogleBtn,
  diffLoginOptionBtn,
  divDiffOptionsLogin,
  iconSize,
  inputLoginWEmail,
  loginThirdPartyBtn,
  loginWDiffAccBtn,
  loginWithEmailBtn,
} from "@/utils/stylesStorage";
import { baseUrl, localhostUrl } from "@/api/configuration";
import { AiOutlineMail } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();
  // Change this to true when using in production.
  const [isDeployed, setDeployed] = useState(false);
  const [isError, setShowIsError] = useState(false);
  const [differentAccount, setDifferentAccount] = useState(false);
  const [showRegularLogin, setShowRegularLogin] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const isLoggedPreviouslyWithGoogle = useSelector(
    (state: RootState) => state?.user?.isLoggedPreviouslyWithGoogle
  );
  const cookie = useSelector((state: RootState) => state?.user?.cookie);
  const fullname = useSelector((state: RootState) => state?.user?.fullName);
  const email = useSelector((state: RootState) => state?.user?.email);
  const userProfileImage = useSelector(
    (state: RootState) => state?.user?.profilePic
  );

  const handleRegularLogin = () => {
    setShowRegularLogin(true);
  };

  const handleDifferentAccount = () => {
    setDifferentAccount(true);
    // setShowRegularLogin(false);
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
    redirect_uri: isDeployed ? `${baseUrl}` : `${localhostUrl}`,
  });

  useEffect(() => {
    if (fullname.length > 1 && email.length > 1 && !cookie) {
      setShowRegularLogin(true);
    }
  }, [isLoggedPreviouslyWithGoogle, showRegularLogin]);

  return (
    <div className="h-screen bg-cover bg-center">
      <div className="flex-1 flex items-center justify-center w-full">
        <img
          src="/images/loginImg.png"
          alt="Login Illustration"
          className="w-[100%] h-auto max-w-[620px] max-h-[100%] object-contain p-12 mr-[2.7rem]"
        />
        <div className="w-full max-w-[29rem] p-6 bg-white  rounded-lg ml-[3rem] mr-[5rem]">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Log in to continue your learning journey
          </h2>
          {showRegularLogin && (
            <div
              className={`"w-full" ${
                showRegularLogin && !differentAccount ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-col items-center justify-center w-full text-center mb-4">
                <div>
                  {userProfileImage.length > 1 ? (
                    <img
                      src={userProfileImage}
                      alt="user profile image"
                      className="rounded-[100em] bg-black w-[6em] h-[5rem]"
                    />
                  ) : (
                    <div className="bg-black p-6 rounded-full">
                      <FaRegUser size={24} className="text-white" />
                    </div>
                  )}
                </div>
                <b>Welcome back, {fullname}</b>
                <p>
                  We’ll email <b>{email}</b> a code for a secure passwordless
                  log-in.
                </p>
              </div>
              <form
                className="flex flex-col space-y-4 mb-4"
                onSubmit={handleSubmit}
              >
                <button type="submit" className={`${loginWithEmailBtn}`}>
                  {isLoading ? (
                    <Loader useSmallLoading={true} hSize="" />
                  ) : (
                    <div className="flex items-center">
                      <button
                        className={`focus:outline-none text-[1rem] font-bold flex items-center ${loginWithEmailBtn}`}
                        type="submit"
                      >
                        <AiOutlineMail size={20} />
                        Continue with email
                      </button>
                    </div>
                  )}
                </button>
              </form>
            </div>
          )}
          {differentAccount && (
            <>
              <div className="flex flex-col items-center gap-4">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className={`${inputLoginWEmail}`}
                />
                <button
                  className={`${loginWithEmailBtn} focus:outline-none text-[1rem] font-bold flex items-center`}
                  type="submit"
                >
                  <AiOutlineMail size={20} />
                  Continue with email
                </button>
              </div>
              <div className="w-full flex items-center my-6">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-4 text-sm text-grayNavbarTxt">
                  Other log in options
                </span>
                <hr className="flex-grow border-gray-300" />
              </div>
              <div className="flex justify-center space-x-5 mb-[2em]">
                <button
                  onClick={handleGoogle}
                  className={`${loginThirdPartyBtn}`}
                >
                  <FcGoogle className={`${iconSize}`} />
                </button>
                <button className={`${loginThirdPartyBtn}`}>
                  <FaFacebook className={`${iconSize} text-blue-600`} />
                </button>
                <button className={`${loginThirdPartyBtn}`}>
                  <FaApple className={`${iconSize}`} />
                </button>
              </div>
            </>
          )}
          {isLoggedPreviouslyWithGoogle && !showRegularLogin && (
            <Button onClick={handleGoogle} className={`${continueWGoogleBtn}`}>
              <FcGoogle size={20} /> Continue with Google
            </Button>
          )}
          <div className={`${divDiffOptionsLogin}`}>
            {showRegularLogin ||
              (isLoggedPreviouslyWithGoogle && (
                <div>
                  <button
                    onClick={handleRegularLogin}
                    className={`${loginWDiffAccBtn}`}
                  >
                    Log in with different account
                  </button>
                  <hr />
                </div>
              ))}
            {showRegularLogin && (
              <div>
                <button
                  onClick={handleDifferentAccount}
                  className={`${loginWDiffAccBtn}`}
                >
                  Log to a different account
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
              <button className={`${diffLoginOptionBtn}`}>
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
