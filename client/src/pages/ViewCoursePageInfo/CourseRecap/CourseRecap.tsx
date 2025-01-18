const CourseRecap: React.FC<{ recapInfo: string }> = ({ recapInfo }) => {
  return (
    <div className="text-white z-10">
      <p>{recapInfo}</p>
    </div>
  );
};

export default CourseRecap;
