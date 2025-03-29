import paypalImg from "/images/paypal-icon.svg";

const PayPalIcon: React.FC<{ extraDesign?: string }> = ({ extraDesign = "" }) => {
  return (
    <div className={`${extraDesign} flex  items-center gap-[0.5em]`}>
      <img src={paypalImg} alt="Paypal logo" className="h-[2em] w-[3em]" />
    </div>
  );
};

export default PayPalIcon;
