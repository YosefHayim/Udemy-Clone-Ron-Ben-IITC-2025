import InstructorRatings from "../InstructorRatings/InstructorRatings";
import instructorImgProfile from "/images/instructor-profile.png";

const InstructorProfileImg = () => {
  return (
    <div className="flex flex-row items-center justify-start gap-[2em]">
      <div>
        <img
          src={instructorImgProfile}
          alt="Instructor profile"
          className="rounded-[100em] h-[10em]"
        />
      </div>
      <InstructorRatings />
    </div>
  );
};

export default InstructorProfileImg;
