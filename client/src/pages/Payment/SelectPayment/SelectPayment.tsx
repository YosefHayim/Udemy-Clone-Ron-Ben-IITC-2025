import { AiFillCreditCard } from "react-icons/ai";
import visaIcon from "/images/visa-icon.svg";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

const PaymentOption = ({
  paymentOptionName = "Visa***0912",
  providedIcon = <AiFillCreditCard className="text-[2em]" />,
  showVisa = true,
  showProvideCardInfo = false,
  isGooglePay = false,
  isPayPal = false,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const visaOwnerName = formData.get("card-owner");
    const creditCardNumber = formData.get("card-number");
    const date = formData.get("date");
    const cvv = formData.get("cvv");
    console.log(visaOwnerName, creditCardNumber, date, cvv);
  };

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
        {showVisa && (
          <div className="flex flex-row items-start justify-around gap-[0.5em] w-full">
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
        )}
        {showProvideCardInfo && (
          <div className="w-full">
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col items-start justify-start"
            >
              <div className="w-full px-[1em] flex flex-col items-start justify-start gap-[1em]">
                <div className="w-full">
                  <label htmlFor="card-number" className="font-bold mb-[0.3em]">
                    Credit number
                  </label>
                  <Input
                    name="card-number"
                    placeholder="1234 5678 9012 3456"
                    className="border border-black rounded-[0.2em] w-full"
                  ></Input>
                </div>
                <div className="w-full flex flex-row items-start justify-start gap-[1em]">
                  <div>
                    <label htmlFor="date" className="font-bold">
                      Expiry date
                    </label>
                    <Input
                      placeholder="MM/DD"
                      name="date"
                      className="border border-black rounded-[0.2em] w-full"
                    ></Input>
                  </div>
                  <div>
                    <label htmlFor="cvv" className="font-bold">
                      CVV / CVC
                    </label>
                    <Input
                      placeholder="CVC"
                      name="cvv"
                      className="border border-black rounded-[0.2em] w-full"
                    ></Input>
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="card-owner" className="font-bold">
                    Name on card
                  </label>
                  <Input
                    placeholder="Name on card"
                    name="card-owner"
                    className="border border-black rounded-[0.2em] w-full"
                  ></Input>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0.5em]">
                  <Checkbox name="save-card" className="rounded-[0em]" />
                  <label htmlFor="save-card">
                    Securely save this card for my later purchase
                  </label>
                </div>
              </div>
            </form>
          </div>
        )}
        {isGooglePay && (
          <div className="w-full px-[1em]">
            <Button className="w-full rounded-[0.3em]">
              <FcGoogle />
              Pay
            </Button>
          </div>
        )}
        {isPayPal && (
          <div className="w-full px-[1em]">
            <p>
              In order to complete your transaction, we will transfer you over
              to PayPal's secure servers.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentOption;
