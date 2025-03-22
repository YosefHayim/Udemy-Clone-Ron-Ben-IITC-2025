const CourseRecap: React.FC<{ recapInfo: string }> = ({ recapInfo }) => {
  return (
    <div className="z-10 text-white">
      <p>{recapInfo}</p>
    </div>
  );
};

export default CourseRecap;
