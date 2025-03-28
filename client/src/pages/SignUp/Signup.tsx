import registerUser from '@/api/users/registerUser';
import Loader from '@/components/Loader/Loader';
import { emailContext } from '@/routes/AppRoutes';
import { RegisterUserPayload } from '@/types/types';
import { Checkbox } from '@/components/ui/checkbox';
import { useGoogleLogin } from '@react-oauth/google';
import { useMutation } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { FaApple, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import googleLogin from '@/api/users/googleLogin';
import { BiSolidErrorAlt } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { AiOutlineMail } from 'react-icons/ai';
import { setUserInformation } from '@/utils/setUserInformation';
import signUpImage from '/images/signup.png';
import OtherLoginOptions from '../Login/OtherLoginOptions/OtherLoginOptions';
import WebsiteLoginOptions from '../Login/OtherLoginOptions/WebsiteLoginOptions/WebsiteLoginOptions';

const SignUp: React.FC = () => {
  document.title = 'Sign Up and Start Learning | Udemy';
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isError, setShowIsError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const googleMutationLogin = useMutation({
    mutationFn: googleLogin,
    onSuccess: (cookie) => {
      setUserInformation(cookie, dispatch);
      navigate('/');
    },
    onError: (error) => {
      console.log('Error during google login process:', error);
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
    flow: 'auth-code',
    ux_mode: 'popup',
    redirect_uri: 'http://127.0.0.1:5137',
  });

  const emailCtx = useContext(emailContext);
  if (!emailCtx) throw new Error('emailContext is not provided');
  const [emailUser, setEmailUser, userFullName, setUserFullName] = emailCtx;

  const mutation = useMutation<unknown, Error, RegisterUserPayload>({
    mutationFn: registerUser,
    onSuccess: () => {
      navigate('/verify-code');
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
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    setEmailUser(email);
    setUserFullName(fullName);
    mutation.mutate({ fullName, email });
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-cover bg-center">
      <div className=" flex h-full w-1/2 items-start justify-center bg-white">
        <img
          src="/images/signup.png"
          alt={signUpImage}
          className="mr-[2.7rem] h-auto max-h-[100%] w-[100%] max-w-[620px] object-contain p-12"
        />
      </div>
      <div className="mt-36 flex h-full w-1/2 items-start justify-center bg-white">
        <div className="w-3/4 max-w-[27rem]">
          <h2 className="mb-6 w-full text-center font-sans text-[2rem] font-extrabold text-courseNameColorTxt">
            Sign up with email
          </h2>
          <div
            className={
              isError
                ? `mb-[1em] flex w-full  items-start justify-center gap-[1em] rounded-[1.5em] border border-red-700 p-[1em] py-[1.5em] font-sans font-extrabold`
                : 'hidden'
            }
          >
            <div>
              <BiSolidErrorAlt className="text-[2.5em] text-red-600" />
            </div>
            <div>
              <p className="text-[1.8em]">
                There was a problem logging in. Check your email or create an account.
              </p>
            </div>
          </div>
          <form
            className="flex flex-col items-center justify-start space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="flex cursor-pointer items-center justify-center gap-[0.5em]">
              <div className="w-full flex-col flex-wrap items-center justify-center gap-1">
                <Checkbox
                  id="offers"
                  required={true}
                  className="absolute mr-[0.5em] h-4 w-4 scale-90 rounded-[0.2em] border-2 border-black ring-0 focus:outline-none focus:ring-0"
                />
                <label htmlFor="offers" className="ml-5 text-sm">
                  Send me special offers, personalized recommendations, and learning tips.
                </label>
              </div>
            </div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required={true}
              placeholder="Full name"
              className="w-full rounded-[0.3em] border border-[#9194ac] bg-white p-[1em] py-[1.5em] font-sans placeholder:font-extrabold placeholder:text-courseNameColorTxt hover:bg-gray-100 focus:border-purple-800"
            />
            <input
              required={true}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full rounded-[0.3em] border border-[#9194ac] bg-white p-[1em] py-[1.5em] font-sans placeholder:font-extrabold placeholder:text-courseNameColorTxt hover:bg-gray-100 focus:border-purple-800"
            />
            <button
              type="submit"
              className="flex h-[50px] w-full items-center justify-center space-x-0 rounded-[0.4em] bg-btnColor py-3 font-medium text-white hover:bg-[#892de1] focus:outline-none"
            >
              {isLoading ? (
                <Loader useSmallLoading={true} hSize="" />
              ) : (
                <div className="flex items-center">
                  <AiOutlineMail size={20} />
                  <span className="font-sans text-[1rem] font-extrabold">Continue with email</span>
                </div>
              )}
            </button>
          </form>
          <OtherLoginOptions />
          <div className="flex justify-center px-0">
            <p className="mt-2 text-courseNameColorTxt">
              By signing up, you agree to our{' '}
              <Link
                className="mr-[0.3rem] cursor-pointer text-purple-600
                underline"
                to={`/terms-of-use`}
              >
                Terms of Use
              </Link>
              <span className="inline">
                and{' '}
                <Link
                  className="mr-[0.3rem] cursor-pointer text-purple-600
                underline"
                  to={`/terms-of-use`}
                >
                  Privacy Policy
                </Link>
              </span>
            </p>
          </div>
          <div className="mt-4">
            <WebsiteLoginOptions
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
