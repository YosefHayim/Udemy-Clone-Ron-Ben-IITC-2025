import InteractionBtn from "../InteractionBtn/InteractionBtn";

const CommercialRecap = () => {
  return (
    <div className="flex flex-row items-center justify-start">
      <div className="flex flex-col p-[1em]">
        <span className="font-sans font-extrabold">Get Udemy at work</span>
        <p className="w-[500px]">
          Udemy Business is an all-in-one learning platform perfect for
          companies of all sizes.
        </p>
        <InteractionBtn />
      </div>
    </div>
  );
};

export default CommercialRecap;
