import { PiWarningOctagon } from 'react-icons/pi';

const DisplayErrorCode = () => {
  return (
    <div className="flex w-full items-center justify-start gap-2 rounded-2xl border border-red-600 p-4 text-base">
      <PiWarningOctagon size={22} className={`text-red-600`} />
      <b>Please enter a valid 6-digit code.</b>
    </div>
  );
};

export default DisplayErrorCode;
