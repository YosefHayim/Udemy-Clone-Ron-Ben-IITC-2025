const CourseBigTitle: React.FC<{ courseTitle: string }> = ({ courseTitle }) => {
  return (
    <div className="w-full font-sans font-extrabold text-white">
      <h1 className="text-3xl">{courseTitle}</h1>
    </div>
  );
};

export default CourseBigTitle;
