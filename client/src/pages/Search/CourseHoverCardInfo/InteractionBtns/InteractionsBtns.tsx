import AddToCart from "./AddToCart/AddToCart";
import HeartBtn from "./HeartBtn/HeartBtn";
import DialogFrequentlyBoughtTogether from "./DialogFrequentlyBoughtTogether/DialogFrequentlyBoughtTogether";
import { useState } from "react";

const InteractionsBtns: React.FC<{
  courseId: string;
  coursePrice: number;
  fullPriceCourse: number;
  courseTopic: string;
  instructorId: string;
  isDisplayHeart: boolean;
  customHeartExtraCSS?: string;
  BtnText: string;
}> = ({
  courseId,
  coursePrice,
  fullPriceCourse,
  courseTopic,
  instructorId,
  isDisplayHeart = true,
  customHeartExtraCSS,
  BtnText,
}) => {
  const [showDialogOfFbt, setShowDialogOfFbt] = useState(false);

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
    <div className="w-full">
      <div className="mt-[1em] flex w-full items-center justify-start gap-[0.5em]">
        <AddToCart
          BtnText={BtnText}
          courseId={courseId}
          discountPrice={coursePrice}
          fullPriceCourse={fullPriceCourse}
          onAddToCartSuccess={handleCartSuccess}
        />
        {isDisplayHeart && (
          <div className="w-min">
            <HeartBtn
              iconSize={"1.5em"}
              courseId={courseId}
              showHeart={true}
              customHeartExtraCSS={customHeartExtraCSS}
            />
          </div>
        )}
      </div>
      {/* {showDialogOfFbt && ( */}
      <div>
        <DialogFrequentlyBoughtTogether
          showDialogOfFbt={showDialogOfFbt}
          setShowDialogOfFbt={setShowDialogOfFbt}
          instructorId={instructorId}
          courseTopic={courseTopic}
          courseId={courseId}
        />
      </div>
      {/* )} */}
    </div>
  );
};

export default InteractionsBtns;
