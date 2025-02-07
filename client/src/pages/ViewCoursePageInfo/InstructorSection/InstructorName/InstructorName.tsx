const InstructorName: React.FC<{
  instructorName: string;
  instructorId: string;
}> = ({ instructorName = "Sumanta kumar Pal", instructorId }) => {
  return (
    <div>
      <b
        className="text-[1.2em] underline text-[#5022c3] cursor-pointer"
        id={instructorId}
      >
        {instructorName}
      </b>
    </div>
  );
};

export default InstructorName;
