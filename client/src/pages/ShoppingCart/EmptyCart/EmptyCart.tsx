import { Button } from "@/components/ui/button";
import emptyCartImg from "/images/empty-cart.png";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center border border-b-gray-100 p-[0.5em] w-full">
      <div>
        <img src={emptyCartImg} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center gap-[1em]">
        <p>Your cart is empty. Keep shopping to find a course!</p>
        <Button className="bg-btnColor hover:bg-btnHoverColor rounded-[0.2em] text-[1.2em] font-bold p-[1.3em]">
          Keep shopping
        </Button>
      </div>
    </div>
  );
};

export default EmptyCart;
