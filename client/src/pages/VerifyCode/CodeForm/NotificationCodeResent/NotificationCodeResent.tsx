import { IoCheckmarkCircle } from 'react-icons/io5';

const NotificationCodeResent = () => {
  return (
    <div className="mb-2 flex w-full items-center justify-start gap-3 rounded-2xl bg-[#ebfaf4] p-4">
      <IoCheckmarkCircle size={30} className="text-[#206241]" />
      <b className="text-base font-bold">Code resent!</b>
    </div>
  );
};

export default NotificationCodeResent;
