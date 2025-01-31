import DescriptionOfInstructor from "./DescriptionOfInstructor/DescriptionOfInstructor";
import Header from "./Header/Header";
import InstructorCourses from "./InstructorCourses/InstructorCourses";
import SocialLinks from "./SocialLinks/SocialLinks";

const InstructorProfile = () => {
  return (
    <div>
      <Header />
      <DescriptionOfInstructor />
      <SocialLinks />
      <InstructorCourses />
    </div>
  );
};

export default InstructorProfile;
