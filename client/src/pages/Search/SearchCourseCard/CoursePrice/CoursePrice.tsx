const CoursePrice = ({ discountPrice, fullPrice }) => {
  return (
    <div className="col">
      <b>{`₪` + discountPrice || "₪49.90"}</b>
      <p className="line-through text-gray-500 text-[0.9em]">
        {`₪` + fullPrice || "₪369.90"}
      </p>
    </div>
  );
};

export default CoursePrice;
