import { AiFillCreditCard } from "react-icons/ai";
import visaIcon from "/images/visa-icon.svg";
import AddCardInfo from "../AddCardInfo/AddCardInfo";
import DefaultVisa from "../DefaultVisa/DefaultVisa";
import GooglePay from "../GooglePay/GooglePay";
import PayPal from "../PaymentOptionsRadio/PayPal";

const PaymentOption = ({
  paymentOptionName = "Visa***0912",
  providedIcon = <AiFillCreditCard className="text-[2em]" />,
  showVisa = true,
  showProvideCardInfo = false,
  isGooglePay = false,
  isPayPal = false,
  radioName = "",
  isOpen,
  onToggle,
}) => {
  return (
    <div className="bg-[#f6f7f9] border border-gray-100 rounded-[0.2em] w-[400px]">
      <div
        className="flex items-center justify-between gap-[1em] border-[#d1d7dc] border-[1px] cursor-pointer"
        onClick={onToggle} // Trigger toggle when clicked
      >
        <div className="flex items-center justify-start gap-[0.5em]">
          <input
            type="radio"
            className="h-[3em] ml-[0.5em]"
            name={`${radioName}`}
          />
          <div className="bg-white rounded-[0.2em] border-[#d1d7dc] border-[1px] p-[0.2em]">
            {providedIcon}
          </div>
          <b>{paymentOptionName}</b>
        </div>
        <div className="bg-white rounded-[0.2em] border border-gray-300 mr-[0.5em]">
          <img
            src={visaIcon}
            alt="visa icon"
            className={`${showVisa ? "block" : "hidden"} h-[2em]`}
          />
        </div>
      </div>
      {isOpen && ( // Conditionally render content based on `isOpen`
        <div
          className={`px-[0.2em] py-[1em] flex flex-row items-start justify-around w-full bg-white border-[#d1d7dc] border-[1px] rounded-[0.2em]`}
        >
          {showVisa && <DefaultVisa />}
          {showProvideCardInfo && <AddCardInfo />}
          {isGooglePay && <GooglePay />}
          {isPayPal && <PayPal />}
        </div>
      )}
    </div>
  );
};

export default PaymentOption;
