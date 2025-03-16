import { useSelector } from "react-redux";
import AddToCart from "./AddToCart/AddToCart";
import HeartBtn from "./HeartBtn/HeartBtn";
import { RootState } from "@/redux";
import DialogFrequentlyBoughtTogether from "./DialogFrequentlyBoughtTogether/DialogFrequentlyBoughtTogether";
import { useState } from "react";

const InteractionsBtns: React.FC<{
  courseId: string;
  coursePrice: number;
  fullPriceCourse: number;
  courseTopic: string;
  instructorId: string;
}> = ({
  courseId,
  coursePrice,
  fullPriceCourse,
  courseTopic,
  instructorId,
}) => {
  const [showDialogOfFbt, setShowDialogOfFbt] = useState(false);
  const cookie = useSelector((state: RootState) => state.user.cookie);

  const handleCartSuccess = () => {
    setTimeout(() => {
      setShowDialogOfFbt(true);
    }, 500);
  };

  if (!courseId && !coursePrice && courseTopic) {
    console.log("No courseId, coursePrice and courseTopic provided.");
    return;
  }

  return (
    <div>
      <div className="flex items-center justify-start w-full gap-[0.5em] mt-[1em]">
        <AddToCart
          courseId={courseId}
          discountPrice={coursePrice}
          fullPriceCourse={fullPriceCourse}
          onAddToCartSuccess={handleCartSuccess}
        />
        {cookie && (
          <HeartBtn iconSize={"1.5em"} courseId={courseId} showHeart={true} />
        )}
      </div>
      {showDialogOfFbt && (
        <div>
          <DialogFrequentlyBoughtTogether
            showDialogOfFbt={showDialogOfFbt}
            setShowDialogOfFbt={setShowDialogOfFbt}
            instructorId={instructorId}
            courseTopic={courseTopic}
            courseId={courseId}
          />
        </div>
      )}
    </div>
  );
};

export default InteractionsBtns;
