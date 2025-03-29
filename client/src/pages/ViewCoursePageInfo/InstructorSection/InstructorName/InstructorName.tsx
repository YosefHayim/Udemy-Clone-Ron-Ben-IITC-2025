const InstructorName: React.FC<{
  instructorName: string;
  instructorId: string;
}> = ({ instructorName = "Sumanta kumar Pal", instructorId }) => {
  return (
    <div>
      <b className="cursor-pointer text-[1.2em] text-purpleStatic underline" id={instructorId}>
        {instructorName}
      </b>
    </div>
  );
};

export default InstructorName;
