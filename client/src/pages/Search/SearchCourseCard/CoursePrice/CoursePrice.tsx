const CoursePrice = ({
  discountPrice = "49.90",
  fullPrice = "369.90",
  chooseFlex = "flex-col",
}) => {
  return (
    <div className={`${chooseFlex} gap-[0.5em]`}>
      <div>
        <b>{`₪` + discountPrice}</b>
      </div>
      <div>
        <p className="line-through text-gray-500 text-[0.9em]">
          {`₪` + fullPrice}
        </p>
      </div>
    </div>
  );
};

export default CoursePrice;
