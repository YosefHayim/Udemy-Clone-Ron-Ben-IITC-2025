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
    <div className="bg-[#f6f7f9] border border-gray-100 rounded-[0.2em] w-[400px]">
      <div
        className="flex items-center justify-between gap-[1em] border-borderCommercial border-[1px] cursor-pointer"
        onClick={onToggle} // Trigger toggle when clicked
      >
        <div className="flex items-center justify-start gap-[0.5em]">
          <input
            type="radio"
            className="h-[3em] ml-[0.5em]"
            name={`${radioName}`}
          />
          <div className="bg-white rounded-[0.2em] border-borderCommercial border-[1px] p-[0.2em]">
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
              } h-[2em] bg-white rounded-[0.2em] border border-gray-300 mr-[0.5em]`}
            />
          </div>
          <div>
            <img
              src={masterCardSvg}
              alt="Master card"
              className={`${
                showVisa ? "block" : "hidden"
              } h-[2em] bg-white rounded-[0.2em] border border-gray-300 mr-[0.5em]`}
            />
          </div>
          <div>
            <img
              src={amexCardSvg}
              alt="Amex card"
              className={`${
                showVisa ? "block" : "hidden"
              } h-[2em] bg-[#246dd0] rounded-[0.2em] mr-[0.5em] w-[3em]`}
            />
          </div>
          <div>
            <img
              src={jcbCardSvg}
              alt="JCB card"
              className={`${
                showVisa ? "block" : "hidden"
              } h-[2em] bg-white rounded-[0.2em] mr-[0.5em] w-[3em]`}
            />
          </div>
          <div>
            <img
              src={dinersCardSvg}
              alt="Diners card"
              className={`${
                showVisa ? "block" : "hidden"
              } h-[2em] bg-white rounded-[0.2em] mr-[0.5em] w-[3em]`}
            />
          </div>
        </div>
      </div>
      {isOpen && ( // Conditionally render content based on `isOpen`
        <div
          className={`px-[0.2em] py-[1em] flex flex-row items-start justify-around w-full bg-white border-borderCommercial border-[1px] rounded-[0.2em]`}
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
