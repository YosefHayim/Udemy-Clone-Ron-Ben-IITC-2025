import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import LoginForm from "./LoginForm/LoginForm";
import OtherLoginOptions from "./OtherLoginOptions/OtherLoginOptions";
import WebsiteLoginOptions from "./OtherLoginOptions/WebsiteLoginOptions/WebsiteLoginOptions";
import GoogleBtn from "./OtherLoginOptions/GoogleBtn/GoogleBtn";
import LoginImgDesktop from "./LoginImg/LoginImg";
import { useMediaQuery } from "react-responsive";
import MobileLoginImg from "./MobileLoginImg/MobileLoginImg";
import WelcomeBack from "./WelcomeBack/WelcomeBack";

const Login = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  const [isDifferentAccount, setDifferentAccount] = useState(false);
  const fullName = useSelector((state: RootState) => state.user?.fullName);
  const prevWGoogle = useSelector((state: RootState) => state?.user?.isLoggedPreviouslyWithGoogle);

  return (
    <div className="h-screen w-full bg-cover bg-center">
      <div
        className={`${isMobile ? "w-full flex-col" : ""} flex w-full flex-1 items-center justify-center`}
      >
        {!isMobile && <LoginImgDesktop />}
        <div className="h-svh w-full max-w-[29rem] rounded-lg bg-white p-6">
          {isMobile && <MobileLoginImg />}
          <h2
            className={`${isMobile && "text-[1.8em]"} mb-10 mt-20 text-center font-sans text-3xl font-extrabold text-gray-800`}
          >
            Log in to continue your learning journey
          </h2>
          {fullName && !isDifferentAccount && (
            <div>
              <WelcomeBack />
              <LoginForm showOnlyLoginButton={false} />
            </div>
          )}
          {!prevWGoogle && !fullName && (
            <div>
              <LoginForm />
              <OtherLoginOptions />
            </div>
          )}
          {isDifferentAccount && (
            <div>
              <LoginForm />
              <OtherLoginOptions />
            </div>
          )}
          {prevWGoogle && isDifferentAccount && (
            <div>
              <GoogleBtn />
            </div>
          )}
          <div className="flex flex-col items-center justify-center pt-6 text-center">
            {!isDifferentAccount && (
              <div
                onClick={() => setDifferentAccount(true)}
                className={`${isDifferentAccount ? "hidden" : "flex w-full"}`}
              >
                <WebsiteLoginOptions
                  text={`Log in to a different account`}
                  to={`/login`}
                  extraCSS={`font-extrabold text-sm`}
                />
              </div>
            )}
          </div>
          <hr className="h-[0.1em] w-full bg-gray-300" />
          <WebsiteLoginOptions
            text={`Don't have an account ?`}
            to={"/signup"}
            extraCSS={`w-full text-base no-underline text-gray-950 font-normal`}
            textAfterSpace={`Sign up`}
            textAfterSpaceCSS={`underline text-purple-700 font-extrabold text-sm`}
          />
          <hr className="h-[0.1em] w-full bg-gray-300" />
          <WebsiteLoginOptions
            text={`Log in with your organization`}
            to={`/organization/global-login/email`}
            extraCSS={`font-extrabold text-sm`}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
