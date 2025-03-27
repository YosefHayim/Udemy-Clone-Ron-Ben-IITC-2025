const CourseRecap = ({ recapInfo }: { recapInfo: string }) => {
  return (
    <div className="flex w-auto">
      <p>{recapInfo}</p>
    </div>
  );
};

export default CourseRecap;
