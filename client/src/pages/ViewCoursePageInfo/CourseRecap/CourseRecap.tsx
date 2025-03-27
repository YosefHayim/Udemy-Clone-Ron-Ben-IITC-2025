const CourseRecap: React.FC<{ recapInfo: string }> = ({ recapInfo }) => {
  return (
    <div className=" text-white">
      <p>{recapInfo}</p>
    </div>
  );
};

export default CourseRecap;
