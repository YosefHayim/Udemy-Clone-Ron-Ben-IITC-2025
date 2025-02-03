import SelectCountry from "./SelectCountry/SelectCountry";
import Checkout from "./Checkout/Checkout";
import PaymentNavbar from "./PaymentNavbar/PaymentNavbar";
import PaymentMethodNLock from "./PaymentMethodNLock/PaymentMethodNLock";
import PaymentOptionsRadio from "./PaymentOptionsRadio/PaymentOptionsRadio";
import OrderDetails from "./OrderDetails/OrderDetails";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";
import { usePayPalScriptReducer } from "@paypal/react-paypal-js";

const Payment: React.FC = () => {
  document.title = "Checkout | Udemy";
  const [loading, setLoading] = useState(true);
  const [{ options }] = usePayPalScriptReducer();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [options?.isPaypal]);

  return (
    <div>
      {loading ? (
        <Loader hSize="" useSmallLoading={false} />
      ) : (
        <div>
          <div className="p-[1em] flex flex-col items-start justify-between w-full mb-[2em] shadow-md">
            <PaymentNavbar />
          </div>
          <div className="flex flex-row justify-around">
            <div className="p-[10em] pt-[2em]">
              <div className=" flex flex-col items-start justify-start gap-[1em]">
                <h2 className="font-bold text-[1.5em]">Checkout</h2>
                <h2 className="font-bold">Billing address</h2>
                <SelectCountry />
                <PaymentMethodNLock />
                <PaymentOptionsRadio />
                <OrderDetails />
              </div>
            </div>
            <div className="w-[45%] bg-[#f6f7f9]">
              <Checkout isPaypal={options?.isPaypal} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
