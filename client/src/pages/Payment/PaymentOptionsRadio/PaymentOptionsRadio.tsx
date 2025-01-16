import { AiFillCreditCard } from "react-icons/ai";
import PaymentOption from "../PaymentOption/PaymentOption";
import GPayIcon from "../GPayIcon/GPayIcon";
import PayPalIcon from "../PayPalIcon/PayPalIcon";

const PaymentOptionsRadio = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start">
      <PaymentOption
        // paymentOptionName=""
        radioName="reg-card"
        showVisa={true}
        providedIcon={<AiFillCreditCard className="text-[2em]" />}
      />
      <PaymentOption
        showVisa={false}
        showProvideCardInfo={true}
        radioName="add-card"
        paymentOptionName="Cards"
        providedIcon={<AiFillCreditCard className="text-[2em]" />}
      />
      <PaymentOption
        showVisa={false}
        isGooglePay={true}
        radioName="g-pay"
        paymentOptionName="Google Pay"
        providedIcon={<GPayIcon extraDesign={`p-[0.1em] gap-[0.05em]`} />}
      />
      <PaymentOption
        showVisa={false}
        isPayPal={true}
        radioName="paypal"
        paymentOptionName="PayPal"
        providedIcon={<PayPalIcon extraDesign={``} />}
      />
    </div>
  );
};

export default PaymentOptionsRadio;
