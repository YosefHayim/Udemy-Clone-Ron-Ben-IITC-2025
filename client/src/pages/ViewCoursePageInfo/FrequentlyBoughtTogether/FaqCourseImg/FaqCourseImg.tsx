const FaqCourseImg: React.FC<{ courseImg: string }> = ({ courseImg }) => {
  return (
    <div>
      <img src={courseImg} alt="" className="h-[8em] border border-b-gray-300" />
    </div>
  );
};

export default FaqCourseImg;
