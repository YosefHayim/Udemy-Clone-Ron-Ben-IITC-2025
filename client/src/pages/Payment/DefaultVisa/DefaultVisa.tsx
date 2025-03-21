const DefaultVisa: React.FC = () => {
  return (
    <div className="flex w-full flex-row items-start justify-around gap-[0.5em]">
      <div className="flex flex-col items-start justify-start gap-[0.5em]">
        <b>Name on card</b>
        <p>Yosef hayim sabag</p>
      </div>
      <div className="flex flex-col items-start justify-start gap-[0.5em]">
        <b>Card number</b>
        <p>*******0422</p>
      </div>
      <div className="flex flex-col items-start justify-start gap-[0.5em]">
        <b>Expiry date</b>
        <p>11/2028</p>
      </div>
    </div>
  );
};

export default DefaultVisa;
