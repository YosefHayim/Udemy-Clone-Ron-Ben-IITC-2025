const TitleSection: React.FC<{ instructorName: string }> = ({
  instructorName,
}) => {
  return (
    <div className="flex flex-row items-center justify-start gap-[0.5em] text-[1.2em]">
      <h2 className="font-sans font-extrabold">More Courses by</h2>
      <span className="font-sans font-extrabold text-purpleStatic">
        {instructorName}
      </span>
    </div>
  );
};

export default TitleSection;
