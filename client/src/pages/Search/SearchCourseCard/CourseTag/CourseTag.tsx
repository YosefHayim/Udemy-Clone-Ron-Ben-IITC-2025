const CourseTag = ({ tagName }) => {
  return (
    <b className="text-[0.85em] bg-bestSellerTag py-[0.2em] px-[0.3em] rounded-[0.5em]">
      {tagName || "Bestseller"}
    </b>
  );
};

export default CourseTag;
