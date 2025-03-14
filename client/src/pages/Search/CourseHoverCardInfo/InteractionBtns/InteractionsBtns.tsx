import { useSelector } from "react-redux";
import AddToCart from "./AddToCart/AddToCart";
import HeartBtn from "./HeartBtn/HeartBtn";
import { RootState } from "@/redux";

const InteractionsBtns: React.FC<{
  courseId: string;
  coursePrice: number;
  fullPriceCourse: number;
}> = ({ courseId, coursePrice, fullPriceCourse }) => {
  const cookie = useSelector((state: RootState) => state.user.cookie);

  if (!courseId && !coursePrice) {
    console.log("No courseId or coursePrice provided.");
    return;
  }

  return (
    <div className="flex items-center justify-start w-full gap-[0.5em] mt-[1em]">
      <AddToCart
        courseId={courseId}
        discountPrice={coursePrice}
        fullPriceCourse={fullPriceCourse}
      />
      {cookie && (
        <HeartBtn iconSize={"1.5em"} courseId={courseId} showHeart={true} />
      )}
    </div>
  );
};

export default InteractionsBtns;
