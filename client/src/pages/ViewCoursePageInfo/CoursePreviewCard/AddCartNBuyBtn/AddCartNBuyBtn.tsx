import AddToCart from "@/pages/Search/CourseHoverCardInfo/InteractionBtns/AddToCart/AddToCart";
import BuyNowBtn from "./BuyNowBtn";

const AddCartNBuyBtn = ({ courseId, discountPrice, fullPrice }) => {
  return (
    <div className="flex flex-col gap-[0.5em] mb-[0.5em]">
      <AddToCart
        courseId={courseId}
        discountPrice={discountPrice}
        fullPrice={fullPrice}
      />
      <BuyNowBtn
        courseId={courseId}
        discountPrice={discountPrice}
        fullPrice={fullPrice}
      />
    </div>
  );
};

export default AddCartNBuyBtn;
