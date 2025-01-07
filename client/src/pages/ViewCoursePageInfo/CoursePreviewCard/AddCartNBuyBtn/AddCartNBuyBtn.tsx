import AddToCart from "@/pages/Search/CourseHoverCardInfo/InteractionBtns/AddToCart/AddToCart";
import BuyNowBtn from "./BuyNowBtn";

const AddCartNBuyBtn = () => {
  return (
    <div className="flex flex-col gap-[0.5em] mb-[0.5em]">
      <AddToCart />
      <BuyNowBtn />
    </div>
  );
};

export default AddCartNBuyBtn;
