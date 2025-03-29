import { useMediaQuery } from 'react-responsive';
import LoginImgDesktop from '../Login/LoginImg/LoginImg';
import MobileLoginImg from '../Login/MobileLoginImg/MobileLoginImg';
import OtherLoginOptions from '../Login/OtherLoginOptions/OtherLoginOptions';
import WebsiteLoginOptions from '../Login/OtherLoginOptions/WebsiteLoginOptions/WebsiteLoginOptions';
import SignUpForm from './SignUpForm/SignUpForm';
import TermsOfUseP from './TermsOfUseP/TermsOfUseP';

const SignUp = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  return (
    <div className="h-screen w-full bg-cover bg-center">
      <div
        className={`${isMobile ? 'w-full flex-col' : ''} flex w-full flex-1 items-center justify-center`}
      >
        {!isMobile && <LoginImgDesktop />}
        <div className="h-svh w-full max-w-[29rem] rounded-lg bg-white p-6">
          <MobileLoginImg />
          <h2 className="mb-10 mt-20 text-center font-sans text-3xl font-extrabold text-gray-800">
            Sign up with email
          </h2>
          <SignUpForm />
          <OtherLoginOptions />
          <TermsOfUseP />
          <div className="mt-4">
            <WebsiteLoginOptions
              extraToFatherDiv={`p-[0.5em]`}
              text="Already have an account?"
              to={'/login'}
              extraCSS={`text-center w-full text-base no-underline text-gray-950 font-normal`}
              textAfterSpace={`Log in`}
              textAfterSpaceCSS={`underline text-purple-600 font-extrabold`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
