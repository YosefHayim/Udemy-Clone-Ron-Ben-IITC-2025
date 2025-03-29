import { useState, useEffect, useContext } from 'react';
import LoginImgDesktop from '../Login/LoginImg/LoginImg';
import WebsiteLoginOptions from '../Login/OtherLoginOptions/WebsiteLoginOptions/WebsiteLoginOptions';
import { emailContext } from '@/routes/AppRoutes';
import CodeForm from './CodeForm/CodeForm';
import DidntReceiveCode from './CodeForm/DidntReceiveCode/DidntReceiveCode';
import EnterCodeSendTo from './CodeForm/EnterCodeSendTo/EnterCodeSendTo';
import { useMediaQuery } from 'react-responsive';
import MobileLoginImg from '../Login/MobileLoginImg/MobileLoginImg';

const VerifyCode = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  const emailCtx = useContext(emailContext);
  if (!emailCtx) throw new Error('emailContext is not provided');
  const [emailUser, setEmailUser, userFullName, setUserFullName] = emailCtx;

  const [countdown, setCountdown] = useState(30);
  const [isClickedResend, setResend] = useState(false);

  const handleResendCode = () => {
    setCountdown(30);
    setResend(true);
  };

  useEffect(() => {
    let interval;
    if (isClickedResend) {
      interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev > 1) return prev - 1;
          clearInterval(interval);
          setResend(false);
          setCountdown(30);
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isClickedResend]);

  return (
    <div className="h-screen w-full bg-cover bg-center">
      <div
        className={`${isMobile ? 'w-full flex-col' : ''} flex w-full flex-1 items-center justify-center`}
      >
        {!isMobile && <LoginImgDesktop />}
        <div className="h-svh w-full max-w-[29rem] rounded-lg bg-white p-6">
          <MobileLoginImg />
          <h2 className="mb-10 mt-20 text-center font-sans text-3xl font-extrabold text-gray-800">
            Check your inbox
          </h2>
          <EnterCodeSendTo emailUser={emailUser} />
          <CodeForm
            emailUser={emailUser}
            userFullName={userFullName}
            isClickedResend={isClickedResend}
          />
          <DidntReceiveCode handleResendCode={handleResendCode} countdown={countdown} />
          <div className="mt-3 text-center">
            <WebsiteLoginOptions
              extraToFatherDiv={`p-[0.5em]`}
              text={`Log in to a different account`}
              to={`/login`}
              extraCSS={`text-sm font-extrabold`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
