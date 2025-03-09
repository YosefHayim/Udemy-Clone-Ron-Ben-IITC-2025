const CoursePrice: React.FC<{
  courseFullPrice?: number;
  courseDiscountPrice?: number;
}> = ({ courseFullPrice = 0, courseDiscountPrice = 0 }) => {
  return (
    <div className="flex flex-col justify-end items-end w-full">
      <p>
        ₪<b>{courseDiscountPrice}</b>
      </p>
      <p className="line-through ml-[0.5em]">₪{courseFullPrice}</p>
    </div>
  );
};

export default CoursePrice;
