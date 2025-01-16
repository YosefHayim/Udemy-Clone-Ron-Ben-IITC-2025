import paypalImg from "/images/paypal-icon.svg";

const PayPalIcon: React.FC<{ extraDesign?: string }> = ({
  extraDesign = "",
}) => {
  return (
    <div className={`${extraDesign} flex flex-row gap-[0.5em] items-center`}>
      <img src={paypalImg} alt="Paypal logo" className="h-[2em] w-[3em]" />
    </div>
  );
};

export default PayPalIcon;
