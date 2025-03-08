import AddToCart from "@/pages/Search/CourseHoverCardInfo/InteractionBtns/AddToCart/AddToCart";
import BuyNowBtn from "./BuyNowBtn";

const AddCartNBuyBtn: React.FC<{
  courseId: string;
  discountPrice: number;
  fullPrice: number;
}> = ({ courseId = "", discountPrice = 0, fullPrice = 0 }) => {
  return (
    <div className="w-full flex flex-col gap-[0.5em] mb-[0.5em]">
      <AddToCart
        courseId={courseId}
        discountPrice={discountPrice}
        fullPriceCourse={fullPrice}
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
