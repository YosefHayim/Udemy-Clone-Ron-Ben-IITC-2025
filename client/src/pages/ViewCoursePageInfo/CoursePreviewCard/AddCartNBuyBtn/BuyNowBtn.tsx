import { Button } from "@/components/ui/button";

const BuyNowBtn = () => {
  return (
    <Button
      className={`font-bold bg-white text-black rounded-[0.2em] hover:bg-hoverDivGray w-full py-[1.5em] text-[1em] border border-black focus:outline-none`}
    >
      Go to cart
    </Button>
  );
};

export default BuyNowBtn;
