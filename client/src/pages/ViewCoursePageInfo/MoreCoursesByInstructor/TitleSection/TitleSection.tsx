const TitleSection: React.FC<{ instructorName: string }> = ({
  instructorName,
}) => {
  return (
    <div className="flex flex-row items-center justify-start gap-[0.5em] text-[1.2em]">
      <h2 className="font-bold">More Courses by</h2>
      <span className="text-[#5022c3] font-bold">{instructorName}</span>
    </div>
  );
};

export default TitleSection;
