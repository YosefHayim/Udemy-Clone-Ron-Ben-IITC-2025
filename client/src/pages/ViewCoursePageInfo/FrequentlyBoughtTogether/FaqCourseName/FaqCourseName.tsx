const FaqCourseName: React.FC<{ courseName: string }> = ({ courseName }) => {
  return (
    <div className="flex w-full flex-row">
      <b>{courseName}</b>
    </div>
  );
};

export default FaqCourseName;
