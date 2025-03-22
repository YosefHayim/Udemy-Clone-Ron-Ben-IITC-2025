const CourseBigTitle: React.FC<{ courseTitle: string }> = ({ courseTitle }) => {
  return (
    <div className="z-[10] w-[700px]  font-sans font-extrabold text-white">
      <h1 className="text-[2em]">{courseTitle}</h1>
    </div>
  );
};

export default CourseBigTitle;
