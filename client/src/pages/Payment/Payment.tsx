import { IoMdLock } from "react-icons/io";
import SelectCountry from "./SelectCountry/SelectCountry";
import SelectPayment from "./SelectPayment/SelectPayment";
import googleIcon from "/images/google-icon.svg";
import { AiFillCreditCard } from "react-icons/ai";

const Payment = () => {
  return (
    <div className="p-[10em] pt-[2em]">
      <div className="">
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
          <div>
            <SelectPayment
              // paymentOptionName=""
              showVisa={true}
              providedIcon={<AiFillCreditCard className="text-[2em]" />}
            />
            <SelectPayment
              showVisa={false}
              showProvideCardInfo={true}
              paymentOptionName="Cards"
              providedIcon={<AiFillCreditCard className="text-[2em]" />}
            />
            <SelectPayment
              showVisa={false}
              isGooglePay={true}
              paymentOptionName="Google Pay"
              providedIcon={<AiFillCreditCard className="text-[2em]" />}
            />
            <SelectPayment
              showVisa={false}
              isPayPal={true}
              paymentOptionName="PayPal"
              providedIcon={<AiFillCreditCard className="text-[2em]" />}
            />
          </div>
        </div>
      </div>
      <div className="w-[45%] bg-[#f6f7f9]"></div>
    </div>
  );
};

export default Payment;
