const DefaultVisa = () => {
  return (
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
  );
};

export default DefaultVisa;
