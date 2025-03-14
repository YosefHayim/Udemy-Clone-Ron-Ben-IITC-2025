import { useSelector } from "react-redux";
import AddToCart from "./AddToCart/AddToCart";
import HeartBtn from "./HeartBtn/HeartBtn";
import { RootState } from "@/redux";
import DialogFrequentlyBoughtTogether from "./DialogFrequentlyBoughtTogether/DialogFrequentlyBoughtTogether";

const InteractionsBtns: React.FC<{
  courseId: string;
  coursePrice: number;
  fullPriceCourse: number;
  courseName: string;
  instructorId: string;
}> = ({ courseId, coursePrice, fullPriceCourse, courseName, instructorId }) => {
  const cookie = useSelector((state: RootState) => state.user.cookie);

  if (!courseId && !coursePrice && courseName) {
    console.log("No courseId, coursePrice and courseName provided.");
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
      <div>
        <DialogFrequentlyBoughtTogether
          instructorId={instructorId}
          courseName={courseName}
          courseId={courseId}
        />
      </div>
    </div>
  );
};

export default InteractionsBtns;
