import AddToCart from "@/pages/Search/CourseHoverCardInfo/InteractionBtns/AddToCart/AddToCart";

const FaqTotalCoursesPrice = () => {
  return (
    <div className="flex flex-row ml-[0.7em] justify-between items-center">
      <div className="flex flex-row">
        <p>Total:</p>
        <p>
          ₪<b>39.90</b>
        </p>
        <p className="line-through ml-[0.5em]">₪79.90</p>
      </div>
      <div>
        <AddToCart textBtn={"Add all to cart"} />
      </div>
    </div>
  );
};

export default FaqTotalCoursesPrice;
