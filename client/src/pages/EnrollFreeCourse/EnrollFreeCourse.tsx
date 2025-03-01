import CoursesCarousel from "@/components/CourseCard/CoursesCarousel";
import CourseJumpRightIn from "./CourseJumpRightIn/CourseJumpRightIn";
import NotificationJoinFreeCourse from "./NotificationJoinFreeCourse/NotificationJoinFreeCourse";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getCourseById from "@/api/courses/getCourseById";
import { Loader } from "lucide-react";
import { useState } from "react";
import SharePopup from "./SharePopup/SharePopup";

const EnrollFreeCourse: React.FC = () => {
  const navigate = useNavigate();
  const { courseId } = useParams<{ courseId: string; id: string }>(); // Get courseId and lessonId from route params
  const sanitizedCourseId = courseId?.trim().replace(/^:/, "");

  const [isClicked, setClicked] = useState(false);

  const { data, error, isPending } = useQuery({
    queryKey: ["course", sanitizedCourseId],
    queryFn: () => {
      if (!sanitizedCourseId) {
        throw new Error("Course ID is undefined");
      }
      return getCourseById(sanitizedCourseId);
    },
    staleTime: 5 * 60 * 1000,
  });

  if (error) {
    navigate("/not/found");
    return null;
  }

  if (isPending) {
    return (
      <div>
        <Loader hSize="" useSmallLoading={false} />
      </div>
    );
  }

  return (
    <div>
      <NotificationJoinFreeCourse
        isClicked={isClicked}
        setClicked={setClicked}
      />
      <CourseJumpRightIn
        courseImg={data?.courseImg}
        instructor={data?.courseInstructor?.fullName}
        sanitizedCourseId={data?._id}
      />
      <CoursesCarousel searchTerm={data?.category} />
      <SharePopup isClicked={isClicked} setClicked={setClicked} />
    </div>
  );
};

export default EnrollFreeCourse;
