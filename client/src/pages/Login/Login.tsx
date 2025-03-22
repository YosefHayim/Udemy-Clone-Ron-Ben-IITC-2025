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
  regFullButtonPurpleHover,
} from "@/utils/stylesStorage";
import { baseUrl, localhostUrl } from "@/api/configuration";
import { AiOutlineMail } from "react-icons/ai";
import {
  setBio,
  setCookie,
  setCoursesBought,
  setEmailAddress,
  setFullName,
  setHeadline,
  setIsLoggedWithGoogle,
  setLanguage,
  setProfilePic,
  setRole,
  setUdemyCredits,
  setUserLinks,
} from "@/redux/slices/userSlice";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { DecodedTokenProps } from "@/types/types";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Change this to true when using in production.
  const [isDeployed, setDeployed] = useState(false);
  const [isError, setShowIsError] = useState(false);
  const [differentAccount, setDifferentAccount] = useState(false);
  const [showRegularLogin, setShowRegularLogin] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const isLoggedPreviouslyWithGoogle = useSelector(
    (state: RootState) => state?.user?.isLoggedPreviouslyWithGoogle,
  );
  const cookie = useSelector((state: RootState) => state?.user?.cookie);
  const fullname = useSelector((state: RootState) => state?.user?.fullName);
  const email = useSelector((state: RootState) => state?.user?.email);
  const userProfileImage = useSelector(
    (state: RootState) => state?.user?.profilePic,
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
    onSuccess: (cookie) => {
      const decoded = jwtDecode<DecodedTokenProps>(cookie);
      dispatch(setFullName(decoded.fullName));
      dispatch(setHeadline(decoded.headline));
      dispatch(setLanguage(decoded.language));
      dispatch(setUserLinks(decoded.userLinks));
      dispatch(setProfilePic(decoded.profilePic));
      dispatch(setEmailAddress(decoded.email));
      dispatch(setBio(decoded.bio));
      dispatch(setRole(decoded.role));
      dispatch(setCoursesBought(decoded.coursesBought));
      dispatch(setUdemyCredits(decoded.udemyCredits));
      dispatch(setIsLoggedWithGoogle(true));
      dispatch(setCookie(cookie));
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
    onSuccess: (cookie) => {
      const decoded = jwtDecode<DecodedTokenProps>(cookie);
      dispatch(setFullName(decoded.fullName));
      dispatch(setHeadline(decoded.headline));
      dispatch(setLanguage(decoded.language));
      dispatch(setUserLinks(decoded.userLinks));
      dispatch(setProfilePic(decoded.profilePic));
      dispatch(setEmailAddress(decoded.email));
      dispatch(setBio(decoded.bio));
      dispatch(setRole(decoded.role));
      dispatch(setCoursesBought(decoded.coursesBought));
      dispatch(setUdemyCredits(decoded.udemyCredits));
      dispatch(setIsLoggedWithGoogle(true));
      dispatch(setCookie(cookie));
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
      <div className="flex w-full flex-1 items-center justify-center">
        <img
          src="/images/loginImg.png"
          alt="Login Illustration"
          className="mr-[2.7rem] h-auto max-h-[100%] w-[100%] max-w-[620px] object-contain p-12"
        />
        <div className="ml-[3rem] mr-[5rem] w-full max-w-[29rem]  rounded-lg bg-white p-6">
          <h2 className="mb-10 text-center font-sans text-3xl font-extrabold text-gray-800">
            Log in to continue your learning journey
          </h2>
          {showRegularLogin && (
            <div
              className={`"w-full" ${
                showRegularLogin && !differentAccount ? "block" : "hidden"
              }`}
            >
              <div className="mb-4 flex w-full flex-col items-center justify-center text-center">
                <div>
                  {userProfileImage.length > 1 ? (
                    <img
                      src={userProfileImage}
                      alt="user profile image"
                      className="h-[5rem] w-[6em] rounded-[100em] bg-black"
                    />
                  ) : (
                    <div className="rounded-full bg-black p-6">
                      <FaRegUser size={24} className="text-white" />
                    </div>
                  )}
                </div>
                <div className="my-2 flex flex-col items-center justify-center gap-2">
                  <b className="font-extrabold">Welcome back, {fullname}</b>
                  <p>
                    We’ll email <b className="font-extrabold">{email}</b> a code
                    for a secure passwordless log-in.
                  </p>
                </div>
              </div>
              <form
                className="mb-4 flex flex-col space-y-4"
                onSubmit={handleSubmit}
              >
                <button
                  type="submit"
                  className={`${regFullButtonPurpleHover} flex w-full items-center justify-center font-extrabold`}
                >
                  {isLoading ? (
                    <Loader useSmallLoading={true} hSize="" />
                  ) : (
                    <div className="flex items-center">
                      <AiOutlineMail size={20} />
                      Continue with email
                    </div>
                  )}
                </button>
              </form>
            </div>
          )}
          {differentAccount && (
            <div>
              <form
                className="mb-4 flex flex-col space-y-4"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className={`${inputLoginWEmail}`}
                />
                <button
                  type="submit"
                  className={`${regFullButtonPurpleHover} flex w-full items-center justify-center font-extrabold`}
                >
                  {isLoading ? (
                    <Loader useSmallLoading={true} hSize="" />
                  ) : (
                    <div className="flex items-center">
                      <AiOutlineMail size={20} />
                      Continue with email
                    </div>
                  )}
                </button>
              </form>
              <div>
                <div className="my-6 flex w-full items-center">
                  <hr className="flex-grow border-gray-300" />
                  <span className="mx-4 text-sm text-grayNavbarTxt">
                    Other log in options
                  </span>
                  <hr className="flex-grow border-gray-300" />
                </div>
                <div className="mb-[2em] flex justify-center space-x-5">
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
              </div>
            </div>
          )}

          {differentAccount ||
            (!isLoggedPreviouslyWithGoogle && (
              <>
                <div className="flex flex-col items-center gap-4">
                  <form
                    className="flex w-full flex-col gap-4"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className={`${inputLoginWEmail}`}
                    />
                    <button
                      type="submit"
                      className={`${regFullButtonPurpleHover} flex w-full items-center justify-center font-extrabold`}
                    >
                      {isLoading ? (
                        <Loader useSmallLoading={true} hSize="" />
                      ) : (
                        <div className="flex items-center">
                          <AiOutlineMail size={20} />
                          Continue with email
                        </div>
                      )}
                    </button>
                  </form>
                </div>
                <div>
                  <div className="my-6 flex w-full items-center">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-4 text-sm text-grayNavbarTxt">
                      Other log in options
                    </span>
                    <hr className="flex-grow border-gray-300" />
                  </div>
                  <div className="mb-[2em] flex justify-center space-x-5">
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
                </div>
              </>
            ))}
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
              <button className="p-[0.7em] underline-offset-[5px] focus:outline-none">
                Don't have an account?{" "}
                <span className="font-bold text-btnColor underline">
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
