import React, { useState } from 'react';
import Loader from '../Loader/Loader';
import { AiOutlineMail } from 'react-icons/ai';
import { regFullButtonPurpleHover } from '@/utils/stylesStorage';

const ButtonLoader: React.FC<{ isLoading: boolean; text: string; showIcon: boolean }> = ({
  isLoading,
  text = `Continue with email`,
  showIcon = true,
}) => {
  return (
    <div>
      <button type="submit" className={`${regFullButtonPurpleHover} w-full`}>
        {isLoading ? (
          <Loader useSmallLoading={true} hSize="" />
        ) : (
          <p className="flex w-full items-center justify-center gap-2 text-base">
            {showIcon && <AiOutlineMail size={20} />}
            {text}
          </p>
        )}
      </button>
    </div>
  );
};

export default ButtonLoader;
