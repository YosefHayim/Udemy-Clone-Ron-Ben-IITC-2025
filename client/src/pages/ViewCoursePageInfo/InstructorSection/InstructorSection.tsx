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
  instructorHeadline: string;
}> = ({
  instructorHeadline,
  instructorImg,
  instructorName,
  descriptionInstructor,
  instructorId,
}) => {
  return (
    <div className="instructor flex flex-col items-start justify-start gap-[1em]">
      <div>
        <h2 className="font-sans text-[1.5em] font-extrabold">Instructor</h2>
        <Link to={`/user/instructor/${instructorId}`}>
          <InstructorName instructorName={instructorName} instructorId={instructorId} />
        </Link>
        <InstructorProfession instructorHeadline={instructorHeadline} />
      </div>
      <InstructorProfileImg instructorImg={instructorImg} instructorId={instructorId} />
      <InstructorDescription descriptionInstructor={descriptionInstructor} />
    </div>
  );
};

export default InstructorSection;
