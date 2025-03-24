import InstructorRatings from "../InstructorRatings/InstructorRatings";

const InstructorProfileImg: React.FC<{
  instructorImg: string;
  instructorId: string;
}> = ({ instructorImg, instructorId }) => {
  return (
    <div className="flex  items-center justify-start gap-[2em]">
      <div>
        <img
          id={instructorId}
          src={instructorImg}
          alt="Instructor profile"
          className="h-[10em] rounded-[100em]"
        />
      </div>
      <InstructorRatings />
    </div>
  );
};

export default InstructorProfileImg;
