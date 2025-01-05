const CourseTag = ({
  tagName = "Bestseller",
  bgColorTag = "bg-bestSellerTag",
}) => {
  return (
    <b
      className={`${bgColorTag} bg-bestSellerTag text-[0.7em] py-[0.2em] px-[0.3em] rounded-[0.5em]`}
    >
      {tagName}
    </b>
  );
};

export default CourseTag;
