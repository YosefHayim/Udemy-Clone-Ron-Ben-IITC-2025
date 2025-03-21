const CourseBigTitle: React.FC<{ courseTitle: string }> = ({ courseTitle }) => {
  return (
    <div className="z-[10] w-[700px]  font-bold text-white">
      <h1 className="text-[2em]">{courseTitle}</h1>
    </div>
  );
};

export default CourseBigTitle;
