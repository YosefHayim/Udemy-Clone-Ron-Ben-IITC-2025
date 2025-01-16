const InstructorName: React.FC<{ instructorName: string }> = ({
  instructorName = "Sumanta kumar Pal",
}) => {
  return (
    <div>
      <b className="text-[1.2em] underline text-[#5022c3] cursor-pointer">
        {instructorName}
      </b>
    </div>
  );
};

export default InstructorName;
