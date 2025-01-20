import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import visaIcon from "/images/visa-icon.svg";

const PaymentMethods = () => {
  return (
    <div className="p-[5em]">
      <h1 className="mb-[1em] font-bold">Payment methods</h1>
      <div className="flex flex-row items-center justify-start w-full gap-[0.5em] bg-[#f6f7f9] p-[2em] shadow-sm">
        <Checkbox className="rounded-[0em]" name="save-payments" />
        <label
          htmlFor="save-payments"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Show my saved payment methods on the checkout step.
        </label>
      </div>
      <h2 className="font-bold text-[1.5em] my-[1em]">
        Your saved payment methods
      </h2>
      <div className="my-[1.5em] border flex flex-row items-start justify-normal w-full p-[1em]">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center justify-start gap-[1em]">
            <img src={visaIcon} alt="" className="h-[4em]" />
            <div className="flex flex-row items-start gap-[1em]">
              <p>**** **** **** 9042</p>
              <p>Expires on 11/28</p>
            </div>
          </div>
          <div>
            <Button className="hover:text-[#6d28d2] hover:bg-white bg-white shadow-none hover:hover-color-mix rounded-[0.2em] h-[3em] text-black w-full">
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
