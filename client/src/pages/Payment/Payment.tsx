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
        <Loader hSize="1000px" useSmallLoading={false} />
      ) : (
        <div>
          <div className="flex w-full flex-col items-start justify-between p-[1em] shadow-alertAlgoInfo">
            <PaymentNavbar />
          </div>
          <div className="flex h-full w-full flex-row items-start justify-around">
            <div className="w-3/5 p-[10em] pt-[2em]">
              <div className=" flex w-full flex-col items-start justify-start gap-[1em]">
                <h2 className="font-sans text-[1.5em] font-extrabold">
                  Checkout
                </h2>
                <h2 className="font-sans font-extrabold">Billing address</h2>
                <SelectCountry />
                <PaymentMethodNLock />
                <PaymentOptionsRadio />
                <OrderDetails />
              </div>
            </div>
            <div className="h-[100vh] w-2/5 bg-[#f6f7f9]">
              <Checkout isPaypal={options?.isPaypal} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
