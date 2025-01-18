import { useState } from "react";
import { AiFillCreditCard } from "react-icons/ai";
import PaymentOption from "../PaymentOption/PaymentOption";
import GPayIcon from "../GPayIcon/GPayIcon";
import PayPalIcon from "../PayPalIcon/PayPalIcon";

const PaymentOptionsRadio: React.FC = () => {
  const [activeOption, setActiveOption] = useState<string | null>(null); // Tracks the active option

  const handleToggle = (option: string | null): void => {
    setActiveOption((prev) => (prev === option ? null : option)); // Toggle open/close
  };

  return (
    <div className="w-full flex flex-col items-start justify-start">
      <PaymentOption
        radioName="reg-card"
        showVisa={true}
        providedIcon={<AiFillCreditCard className="text-[2em]" />}
        isOpen={activeOption === "reg-card"}
        onToggle={() => handleToggle("reg-card")}
      />
      <PaymentOption
        showVisa={false}
        showProvideCardInfo={true}
        radioName="add-card"
        paymentOptionName="Cards"
        providedIcon={<AiFillCreditCard className="text-[2em]" />}
        isOpen={activeOption === "add-card"}
        onToggle={() => handleToggle("add-card")}
      />
      <PaymentOption
        showVisa={false}
        isGooglePay={true}
        radioName="g-pay"
        paymentOptionName="Google Pay"
        providedIcon={<GPayIcon extraDesign={`p-[0.1em] gap-[0.05em]`} />}
        isOpen={activeOption === "g-pay"}
        onToggle={() => handleToggle("g-pay")}
      />
      <PaymentOption
        showVisa={false}
        isPayPal={true}
        radioName="paypal"
        paymentOptionName="PayPal"
        providedIcon={<PayPalIcon extraDesign={``} />}
        isOpen={activeOption === "paypal"}
        onToggle={() => handleToggle("paypal")}
      />
    </div>
  );
};

export default PaymentOptionsRadio;
