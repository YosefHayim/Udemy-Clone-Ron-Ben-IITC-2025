import { Button } from "@/components/ui/button";
import ItemInCart from "../ItemInCart/ItemInCart";

const HoverCart = () => {
  return (
    <div className="flex flex-col justify-center items-start rounded-[0.5em] border border-gray-200 w-[300px]">
      <div>
        <ItemInCart />
        <ItemInCart />
      </div>
      <div className="w-full p-[1em] flex flex-col gap-[0.5em]">
        <b>Total: ₪1,009.90</b>
        <Button className="rounded-[0.2em] font-bold">Go to cart</Button>
      </div>
    </div>
  );
};

export default HoverCart;
