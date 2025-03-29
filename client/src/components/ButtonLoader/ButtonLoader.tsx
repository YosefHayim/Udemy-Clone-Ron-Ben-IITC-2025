import React, { useState } from 'react';
import Loader from '../Loader/Loader';
import { AiOutlineMail } from 'react-icons/ai';
import { regFullButtonPurpleHover } from '@/utils/stylesStorage';

const ButtonLoader = ({ isLoading }) => {
  return (
    <div>
      <button type="submit" className={`${regFullButtonPurpleHover} w-full`}>
        {isLoading ? (
          <Loader useSmallLoading={true} hSize="" />
        ) : (
          <p className="flex w-full items-center justify-center gap-2 text-base">
            <AiOutlineMail size={20} />
            Continue with email
          </p>
        )}
      </button>
    </div>
  );
};

export default ButtonLoader;
