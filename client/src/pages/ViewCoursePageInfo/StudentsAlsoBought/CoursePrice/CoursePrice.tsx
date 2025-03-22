const CoursePrice: React.FC<{
  courseFullPrice?: number;
  courseDiscountPrice?: number;
}> = ({ courseFullPrice = 0, courseDiscountPrice = 0 }) => {
  return (
    <div className="flex w-full flex-col items-end justify-end">
      <p>
        ₪<b>{courseDiscountPrice}</b>
      </p>
      <p className="ml-[0.5em] line-through">₪{courseFullPrice}</p>
    </div>
  );
};

export default CoursePrice;
