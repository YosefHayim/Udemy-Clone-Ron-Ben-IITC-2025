import { Button } from "@/components/ui/button";
import { CiHeart } from "react-icons/ci";

const InteractionsBtns = () => {
  return (
    <div className="flex items-center justify-start w-full gap-[0.5em] mt-[1em]">
      <Button className="font-bold bg-btnColor rounded-[0.2em] hover:bg-btnHoverColor w-full py-[1.5em] text-[1em]">
        Add to cart
      </Button>
      <div className="rounded-[100em] p-[0.5em] border border-black cursor-pointer hover:bg-hoverDivGray">
        <CiHeart className="text-[2em]" />
      </div>
    </div>
  );
};

export default InteractionsBtns;
