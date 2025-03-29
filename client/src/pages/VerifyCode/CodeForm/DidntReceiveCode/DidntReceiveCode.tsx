import React from 'react';

const DidntReceiveCode = ({ countdown, handleResendCode }) => {
  return (
    <div className="mb-7 mt-3 w-full text-center text-sm">
      {countdown < 30 && (
        <p>
          Didn't receive the code? <b className="font-bold">Resend code in {countdown}</b>
        </p>
      )}

      {countdown === 30 && (
        <button
          className="font-bold text-purple-800 underline focus:outline-none"
          onClick={handleResendCode}
        >
          Resend code
        </button>
      )}
    </div>
  );
};

export default DidntReceiveCode;
