import { Button } from "@/components/ui/button";
import commercialImg from "/images/commercial-img.png";

const Commercial = () => {
  return (
    <div className="flex flex-row items-start justify-center text-[0.8em] gap-[0.5em] border border-borderCommercial">
      <div>
        <img src={commercialImg} alt="" className="w-[260px]" />
      </div>
      <div className="flex flex-row p-[1em] items-center">
        <div className="flex flex-col">
          <span className="font-bold text-[1em]">Get Udemy at work</span>
          <p>
            Udemy Business is an all-in-one learning platform perfect for
            companies of all sizes.
          </p>
        </div>
        <div>
          <Button className="font-bold bg-btnColor rounded-[0.2em] hover:bg-btnHoverColor w-full py-[1.5em] text-[1em]">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Commercial;
