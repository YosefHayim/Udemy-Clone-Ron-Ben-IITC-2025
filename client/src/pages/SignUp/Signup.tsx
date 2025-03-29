import registerUser from '@/api/users/registerUser';
import { emailContext } from '@/routes/AppRoutes';
import { RegisterUserPayload } from '@/types/types';
import { useMutation } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSolidErrorAlt } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import OtherLoginOptions from '../Login/OtherLoginOptions/OtherLoginOptions';
import WebsiteLoginOptions from '../Login/OtherLoginOptions/WebsiteLoginOptions/WebsiteLoginOptions';
import TermsOfUseP from './TermsOfUseP/TermsOfUseP';
import SignUpForm from './SignUpForm/SignUpForm';
import SignUpImg from './SignUpImg/SignUpImg';

const SignUp: React.FC = () => {
  document.title = 'Sign Up and Start Learning | Udemy';

  return (
    <div className="flex h-screen w-full items-center justify-center bg-cover bg-center">
      <SignUpImg />
      <div className="mt-36 flex h-full w-1/2 items-start justify-center bg-white">
        <div className="w-3/4 max-w-[27rem]">
          <h2 className="mb-6 w-full text-center font-sans text-[2rem] font-extrabold text-courseNameColorTxt">
            Sign up with email
          </h2>
          <SignUpForm />
          <OtherLoginOptions />
          <TermsOfUseP />
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
