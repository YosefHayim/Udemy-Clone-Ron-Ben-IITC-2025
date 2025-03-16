import { useState } from "react";
import { IoMdLock } from "react-icons/io";

const PaymentMethodNLock: React.FC = () => {
  const [isHoverLock, setHoverLock] = useState(false);
  return (
    <div
      className="flex flex-row items-start justify-between w-full"
      onMouseEnter={() => setHoverLock(true)}
      onMouseLeave={() => setHoverLock(false)}
    >
      <div className="flex flex-row items-start justify-between w-full">
        <h3 className="font-bold">Payment method</h3>
        <div className="flex flex-row gap-[0.5em] items-center">
          <p className="text-grayNavbarTxt underline decoration-dotted">
            Secure and encrypted
          </p>
          <IoMdLock size={20} />
        </div>
      </div>
      {isHoverLock && (
        <div className="right-[45%] top-[33%] bg-black rounded-[0.3em] shadow-alertAlgoInfo p-[0.8em] text-white absolute w-[18%] text-center">
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
