import AddToCart from "@/pages/Search/CourseHoverCardInfo/InteractionBtns/AddToCart/AddToCart";

const FaqTotalCoursesPrice: React.FC<{ sum: number; discountSum: number }> = ({
  sum,
  discountSum,
}) => {
  return (
    <div className="flex flex-row ml-[0.7em] justify-between items-center">
      <div className="flex flex-row">
        <p>Total:</p>
        <p>
          ₪<b>{discountSum}</b>
        </p>
        <p className="line-through ml-[0.5em]">₪{sum}</p>
      </div>
      <div>
        <AddToCart textBtn={"Add all to cart"} discountSum={discountSum} />
      </div>
    </div>
  );
};

export default FaqTotalCoursesPrice;
