import AddToCart from '@/pages/Search/CourseHoverCardInfo/InteractionBtns/AddToCart/AddToCart';

const FaqTotalCoursesPrice: React.FC<{
  sum: number;
  discountSum: number;
  courseIds: string[];
}> = ({ sum, discountSum, courseIds }) => {
  return (
    <div className="ml-[0.7em] flex  items-center justify-between">
      <div className="flex ">
        <p>Total:</p>
        <p>
          ₪<b>{discountSum}</b>
        </p>
        <p className="ml-[0.5em] line-through">₪{sum}</p>
      </div>
      <div>
        <AddToCart textBtn={'Add all to cart'} discountSum={discountSum} courseIds={courseIds} />
      </div>
    </div>
  );
};

export default FaqTotalCoursesPrice;
