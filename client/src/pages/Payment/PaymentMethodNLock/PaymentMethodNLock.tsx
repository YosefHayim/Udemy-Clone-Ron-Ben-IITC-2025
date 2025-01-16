import { IoMdLock } from "react-icons/io";

const PaymentMethodNLock = () => {
  return (
    <div className="flex flex-row items-start justify-between w-[400px]">
      <h3 className="font-bold">Payment method</h3>
      <div className="flex flex-row gap-[0.5em] items-center">
        <p className="underline text-[#595c73]">Secure and encrypted</p>
        <IoMdLock />
      </div>
    </div>
  );
};

export default PaymentMethodNLock;
