import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import LoginForm from './LoginForm/LoginForm';
import OtherLoginOptions from './OtherLoginOptions/OtherLoginOptions';
import WebsiteLoginOptions from './OtherLoginOptions/WebsiteLoginOptions/WebsiteLoginOptions';
import GoogleBtn from './OtherLoginOptions/GoogleBtn/GoogleBtn';
import LoginImg from './LoginImg/LoginImg';

const Login = () => {
  const [isDifferentAccount, setDifferentAccount] = useState(false);
  const cookie = useSelector((state: RootState) => state?.user?.cookie);
  const prevWGoogle = useSelector((state: RootState) => state?.user?.isLoggedPreviouslyWithGoogle);

  return (
    <div className="h-screen bg-cover bg-center">
      <div className="flex w-full flex-1 items-center justify-center">
        <LoginImg />
        <div className="ml-[3rem] mr-[5rem] w-full max-w-[29rem]  rounded-lg bg-white p-6">
          <h2 className="mb-10 text-center font-sans text-3xl font-extrabold text-gray-800">
            Log in to continue your learning journey
          </h2>
          {!cookie && !prevWGoogle && (
            <div>
              <LoginForm />
              <OtherLoginOptions />
            </div>
          )}
          {prevWGoogle && (
            <div>
              <GoogleBtn />
            </div>
          )}
          <div className="items-center justify-center text-center">
            {prevWGoogle && isDifferentAccount && (
              <WebsiteLoginOptions text={`Log in to a different account`} to={`/login`} />
            )}
            <WebsiteLoginOptions text={`Don't have an account ? Sign up`} to={`/signup`} />
            <hr className="w-full" />
            <WebsiteLoginOptions
              text={`Log in with your organization`}
              to={`/organization/global-login/email`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
