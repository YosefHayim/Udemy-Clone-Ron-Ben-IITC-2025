import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Layout from "./Layout";
import LessonRoutes from "../../routes/LessonRoutes";
import VideoPlayer from "./VideoPlayer";
import Footer from "../../pages/Home/Footer/Footer";
import fetchCourseById from "@/services/courseService";
import TopNavBar from "./TopNavBar";

const LessonPage: React.FC = () => {
  const { courseId, id } = useParams<{ courseId: string; id: string }>();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["course", courseId],
    queryFn: () => fetchCourseById(courseId || ""),
    enabled: !!courseId,
  });

  if (isLoading) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  if (error || !data) {
    return (
      <Layout>
        <div>
          <h1>Error</h1>
          <p>Failed to load course data.</p>
        </div>
      </Layout>
    );
  }

  const courseData = data;
  const lessons = courseData.sections.flatMap(
    (section: any) => section.lessons
  );
  const lessonIndex = lessons.findIndex((lesson: any) => lesson._id === id);

  if (lessonIndex === -1) {
    navigate(`/course/${courseId}/lesson/${lessons[0]._id}/overview`);
    return null;
  }

  const currentLesson = lessons[lessonIndex];
  const nextLesson = lessons[lessonIndex + 1] || null;
  const prevLesson = lessons[lessonIndex - 1] || null;

  return (
    <Layout>
      <VideoPlayer
        courseId={courseId}
        currentLesson={currentLesson}
        lessonIndex={lessonIndex + 1}
        videoUrl={currentLesson.videoUrl}
        nextLesson={nextLesson}
        prevLesson={prevLesson}
        onNavigate={(lessonId) =>
          navigate(`/course/${courseId}/lesson/${lessonId}/overview`)
        }
      />
      <div className="px-0">
        <LessonRoutes />
      </div>
      <Footer />
    </Layout>
  );
};

export default LessonPage;
