import { IoMdLock } from "react-icons/io";
import SelectCountry from "./SelectCountry/SelectCountry";
import SelectPayment from "./SelectPayment/SelectPayment";
import googleIcon from "/images/google-icon.svg";
import { AiFillCreditCard } from "react-icons/ai";
import GPayIcon from "./GPayIcon/GPayIcon";
import PayPalIcon from "./PayPalIcon/PayPalIcon";
import Checkout from "./Checkout/Checkout";

const Payment = () => {
  return (
    <div className="flex flex-row justify-around">
      <div className="p-[10em] pt-[2em]">
        <div className=" flex flex-col items-start justify-start gap-[1em]">
          <h1 className="font-bold">Checkout</h1>
          <h2 className="font-bold">Billing address</h2>
          <div>
            <SelectCountry />
          </div>
          <div className="flex flex-row items-start justify-between w-[400px]">
            <h3 className="font-bold">Payment method</h3>
            <div className="flex flex-row gap-[0.5em] items-center">
              <p className="underline text-[#595c73]">Secure and encrypted</p>
              <IoMdLock />
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start">
            <SelectPayment
              // paymentOptionName=""
              radioName="reg-card"
              showVisa={true}
              providedIcon={<AiFillCreditCard className="text-[2em]" />}
            />
            <SelectPayment
              showVisa={false}
              showProvideCardInfo={true}
              radioName="add-card"
              paymentOptionName="Cards"
              providedIcon={<AiFillCreditCard className="text-[2em]" />}
            />
            <SelectPayment
              showVisa={false}
              isGooglePay={true}
              radioName="g-pay"
              paymentOptionName="Google Pay"
              providedIcon={<GPayIcon extraDesign={`p-[0.1em] gap-[0.05em]`} />}
            />
            <SelectPayment
              showVisa={false}
              isPayPal={true}
              radioName="paypal"
              paymentOptionName="PayPal"
              providedIcon={<PayPalIcon extraDesign={``} />}
            />
          </div>
        </div>
      </div>
      <div className="w-[45%] bg-[#f6f7f9]">
        <Checkout />
      </div>
    </div>
  );
};

export default Payment;
