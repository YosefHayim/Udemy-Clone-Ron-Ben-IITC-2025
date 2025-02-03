import DescriptionOfInstructor from "./DescriptionOfInstructor/DescriptionOfInstructor";
import SocialLinks from "./SocialLinks/SocialLinks";
import instructorImgPlaceholder from "/images/instructor-img-placeholder.png";

const InstructorProfile = () => {
  document.title = `
    Hussein Nasser | Software Engineer, Author
| Udemy`;

  return (
    <div className="p-[3em] pl-[10em] w-[1000px]">
      <div className="flex flex-row items-start justify-between w-full">
        <div>
          <h2 className="font-bold">INSTRUCTOR</h2>
          <h1 className="font-bold font-[lifeLtstd]">Hussein Nasser</h1>
          <h3 className="font-bold">Software Engineer, Author</h3>
          <div className="flex flex-row items-start justify-start gap-[2em] mt-[3em]">
            <div className=" flex flex-col items-start justify-start">
              <b className="text-[1.1em]">Total Students</b>
              <b className="text-[1.6em]">197,695</b>
            </div>
            <div className="flex flex-col items-start justify-start">
              <b className="text-[1.1em] ">Reviews</b>
              <b className="text-[1.6em] ">24,571</b>
            </div>
          </div>
          <div className="mt-[1.5em]">
            <DescriptionOfInstructor />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[2em]">
          <img
            src={instructorImgPlaceholder}
            alt=""
            className="rounded-[100em]"
          />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
