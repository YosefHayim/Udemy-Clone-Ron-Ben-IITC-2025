import { AiFillCreditCard } from "react-icons/ai";
import visaIcon from "/images/visa-icon.svg";

const PaymentOption = ({
  paymentOptionName = "Visa***0912",
  providedIcon = <AiFillCreditCard className="text-[2em]" />,
  showVisa = true,
}) => {
  return (
    <div className="bg-[#f6f7f9] border border-gray-100 rounded-[0.2em] w-[400px]">
      <div className="flex items-center justify-between gap-[1em] border-[#d1d7dc] border-[1px]">
        <div className="flex items-center justify-start gap-[1em]">
          <input type="radio" className=" h-[3em] ml-[0.5em]" />
          <div className="bg-white rounded-[0.2em] border-[#d1d7dc] border-[1px]">
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
      <div
        className={` px-[0.2em] py-[1em] flex flex-row items-start justify-around w-full bg-white border-[#d1d7dc] border-[1px] rounded-[0.2em]`}
      >
        {showVisa ? (
          <div className="flex flex-row items-start justify-start gap-[0.5em]">
            <div className="flex flex-col items-start justify-start gap-[0.5em]">
              <b>Name on card</b>
              <p>Yosef hayim sabag</p>
            </div>
            <div className="flex flex-col items-start justify-start gap-[0.5em]">
              <b>Card number</b>
              <p>****0912</p>
            </div>
            <div className="flex flex-col items-start justify-start gap-[0.5em]">
              <b>Expiry date</b>
              <p>11/2028</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <p>No Visa card information available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentOption;
