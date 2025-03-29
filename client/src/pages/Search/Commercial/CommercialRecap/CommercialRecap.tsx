import { Button } from "@/components/ui/button";
import { BtnStyleNHoverTypeTwo } from "@/utils/stylesStorage";

const CommercialRecap = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col p-[1em]">
        <span className="font-sans font-extrabold">Get Udemy at work</span>
        <p className="w-auto">
          Udemy Business is an all-in-one learning platform perfect for companies of all sizes.
        </p>
      </div>
      <div className="mr-4">
        <Button className={`${BtnStyleNHoverTypeTwo}`}>Learn more</Button>
      </div>
    </div>
  );
};

export default CommercialRecap;
