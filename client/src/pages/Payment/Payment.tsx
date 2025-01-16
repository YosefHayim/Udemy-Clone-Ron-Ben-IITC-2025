import { IoMdLock } from "react-icons/io";
import SelectCountry from "./SelectCountry/SelectCountry";
import SelectPayment from "./SelectPayment/SelectPayment";
import { AiFillCreditCard } from "react-icons/ai";
import GPayIcon from "./GPayIcon/GPayIcon";
import PayPalIcon from "./PayPalIcon/PayPalIcon";
import Checkout from "./Checkout/Checkout";
import courseImg from "/images/order-detail-course-img.png";
import Logo from "@/components/Logo/Logo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Payment = () => {
  const totalToPay = useSelector(
    (state) => state.cart.totalCoursesPrice
  ).toFixed(2);

  return (
    <div>
      <div className="p-[1em] flex flex-col items-start justify-between w-full mb-[2em] shadow-md">
        <div className="flex flex-row items-center justify-between w-full">
          <Logo />
          <b className="text-[#6d28d2] hover:text-[#521e9f] cursor-pointer">
            <Link to="/cart">Cancel</Link>
          </b>
        </div>
      </div>
      <div className="flex flex-row justify-around">
        <div className="p-[10em] pt-[2em]">
          <div className=" flex flex-col items-start justify-start gap-[1em]">
            <h2 className="font-bold text-[1.5em]">Checkout</h2>
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
                providedIcon={
                  <GPayIcon extraDesign={`p-[0.1em] gap-[0.05em]`} />
                }
              />
              <SelectPayment
                showVisa={false}
                isPayPal={true}
                radioName="paypal"
                paymentOptionName="PayPal"
                providedIcon={<PayPalIcon extraDesign={``} />}
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[1em] w-[400px]">
              <div className="flex flex-row items-start justify-start gap-[0.2em]">
                <b>Order details</b>
                <p>(1 Course)</p>
              </div>
              <div className="flex flex-row items-start justify-start gap-[0.2em]">
                <div>
                  <img src={courseImg} alt="" className="h-[4em]" />
                </div>
                <b>
                  LLM Engineering: Master AI, Large Language Models & Agents
                </b>
                <p>₪{totalToPay}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[45%] bg-[#f6f7f9]">
          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default Payment;
