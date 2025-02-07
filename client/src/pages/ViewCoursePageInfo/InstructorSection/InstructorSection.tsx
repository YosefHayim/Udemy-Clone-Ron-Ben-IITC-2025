import InstructorProfileImg from "./InstructorProfileImg/InstructorProfileImg";
import InstructorName from "./InstructorName/InstructorName";
import InstructorProfession from "./InstructorProfession/InstructorProfession";
import InstructorDescription from "./InstructorDescription/InstructorDescription";
import { Link } from "react-router-dom";

const InstructorSection: React.FC<{
  instructorImg: string;
  instructorName: string;
  descriptionInstructor: string;
  instructorId: string;
}> = ({
  instructorImg,
  instructorName,
  descriptionInstructor,
  instructorId,
}) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[1em]">
      <div>
        <h2 className="font-bold text-[1.5em]">Instructor</h2>
        <Link to="/user/instructor/">
          <InstructorName
            instructorName={instructorName}
            instructorId={instructorId}
          />
        </Link>
        <InstructorProfession />
      </div>
      <InstructorProfileImg
        instructorImg={instructorImg}
        instructorId={instructorId}
      />
      <InstructorDescription descriptionInstructor={descriptionInstructor} />
    </div>
  );
};

export default InstructorSection;
