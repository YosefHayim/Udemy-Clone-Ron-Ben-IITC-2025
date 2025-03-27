const FaqCourseName: React.FC<{ courseName: string }> = ({ courseName }) => {
  return (
    <div className="flex w-full ">
      <b>{courseName}</b>
    </div>
  );
};

export default FaqCourseName;
