import { useState } from "react";
import { IoMdLock } from "react-icons/io";

const PaymentMethodNLock: React.FC = () => {
  const [isHoverLock, setHoverLock] = useState(false);
  return (
    <div
      className="flex w-full flex-row items-start justify-between"
      onMouseEnter={() => setHoverLock(true)}
      onMouseLeave={() => setHoverLock(false)}
    >
      <div className="flex w-full flex-row items-start justify-between">
        <h3 className="font-extrabold">Payment method</h3>
        <div className="flex flex-row items-center gap-[0.5em]">
          <p className="text-grayNavbarTxt underline decoration-dotted">
            Secure and encrypted
          </p>
          <IoMdLock size={20} />
        </div>
      </div>
      {isHoverLock && (
        <div className="absolute right-[45%] top-[33%] w-[18%] rounded-[0.3em] bg-black p-[0.8em] text-center text-white shadow-alertAlgoInfo">
          <p>
            We use 256-bit encryption to protect your payment method against
            unauthorized access.
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentMethodNLock;
