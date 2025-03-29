import { AiFillCreditCard } from "react-icons/ai";
import AddCardInfo from "../AddCardInfo/AddCardInfo";
import DefaultVisa from "../DefaultVisa/DefaultVisa";
import GooglePay from "../GooglePay/GooglePay";
import PayPal from "../PayPal/PayPal";
import { PaymentOptionProps } from "@/types/types";
import masterCardSvg from "/svgs/card-mastercard.svg";
import amexCardSvg from "/svgs/card-amex.svg";
import jcbCardSvg from "/svgs/card-jcb.svg";
import dinersCardSvg from "/svgs/card-dinersclub.svg";
import visaCardSvg from "/svgs/card-visa.svg";

const PaymentOption: React.FC<PaymentOptionProps> = ({
  paymentOptionName = "Visa***9042",
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
    <div className="w-full rounded-[0.2em] border border-gray-100 bg-[#f6f7f9]">
      <div
        className="flex cursor-pointer items-center justify-between gap-[1em] border-[1px] border-borderCommercial"
        onClick={onToggle} // Trigger toggle when clicked
      >
        <div className="flex items-center justify-start gap-[0.5em]">
          <input type="radio" className="ml-[0.5em] h-[3em]" name={`${radioName}`} />
          <div className="rounded-[0.2em] border-[1px] border-borderCommercial bg-white p-[0.2em]">
            {providedIcon}
          </div>
          <b>{paymentOptionName}</b>
        </div>
        <div className="flex items-center">
          <div>
            <img
              src={visaCardSvg}
              alt="Visa card"
              className={`${
                showVisa ? "block" : "hidden"
              } mr-[0.5em] h-[2em] rounded-[0.2em] border border-gray-300 bg-white`}
            />
          </div>
          <div>
            <img
              src={masterCardSvg}
              alt="Master card"
              className={`${
                showVisa ? "block" : "hidden"
              } mr-[0.5em] h-[2em] rounded-[0.2em] border border-gray-300 bg-white`}
            />
          </div>
          <div>
            <img
              src={amexCardSvg}
              alt="Amex card"
              className={`${
                showVisa ? "block" : "hidden"
              } mr-[0.5em] h-[2em] w-[3em] rounded-[0.2em] bg-[#246dd0]`}
            />
          </div>
          <div>
            <img
              src={jcbCardSvg}
              alt="JCB card"
              className={`${
                showVisa ? "block" : "hidden"
              } mr-[0.5em] h-[2em] w-[3em] rounded-[0.2em] bg-white`}
            />
          </div>
          <div>
            <img
              src={dinersCardSvg}
              alt="Diners card"
              className={`${
                showVisa ? "block" : "hidden"
              } mr-[0.5em] h-[2em] w-[3em] rounded-[0.2em] bg-white`}
            />
          </div>
        </div>
      </div>
      {isOpen && ( // Conditionally render content based on `isOpen`
        <div
          className={`flex w-full  items-start justify-around rounded-[0.2em] border-[1px] border-borderCommercial bg-white px-[0.2em] py-[1em]`}
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
