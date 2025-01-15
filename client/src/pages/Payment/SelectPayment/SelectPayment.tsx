import { AiFillCreditCard } from "react-icons/ai";
import visaIcon from "/images/visa-icon.svg";

const SelectPayment = () => {
  return (
    <div className="bg-[#f6f7f9] border border-gray-100 rounded-[0.2em] w-[400px]">
      <div className="flex items-center justify-between gap-[1em]">
        <div className="flex items-center justify-start gap-[1em]">
          <input type="radio" className=" h-[3em]" />
          <div className="bg-white rounded-[0.2em] border border-gray-100 ">
            <AiFillCreditCard className="text-[2em]" />
          </div>
          <b>Visa***0912</b>
        </div>
        <div className="bg-white rounded-[0.2em] border border-gray-300 ">
          <img src={visaIcon} alt="visa icon" className="h-[2em]" />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start w-full bg-white border border-gray-100 rounded-[0.2em]">
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
    </div>
  );
};

export default SelectPayment;
