import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Layout from "./Layout";
import LessonRoutes from "../../routes/LessonRoutes";
import VideoPlayer from "./VideoPlayer";
import Footer from "../../pages/Home/Footer/Footer";
import { fetchCourseProgress } from "@/services/ProgressService";
import { CourseProgressResponse } from "@/types";
import { useState } from "react";

const LessonPage: React.FC = () => {
  const [currentSec, setCurrentSec] = useState(0); // Shared state for last watched time

  const { courseId, id } = useParams<{ courseId: string; id: string }>();
  
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery<CourseProgressResponse>({
    queryKey: ["courseProgress", courseId],
    queryFn: () => fetchCourseProgress(courseId || ""),
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
          <p>Failed to load course progress data.</p>
        </div>
      </Layout>
    );
  }

  const courseProgress = data.progress;
  
  const lessons = courseProgress.sections.flatMap((section) =>
    section.lessons.map((lesson) => ({
      ...lesson,
      ...lesson.lessonId,
      completed: lesson.completed,
    }))
  );
  
  const lessonIndex = lessons.findIndex((lesson) => lesson._id === id);

  if (lessonIndex === -1) {
    navigate(`/course/${courseId}/lesson/${lessons[0]._id}/overview`);
    return null;
  }

  const currentLesson = lessons[lessonIndex];
  
  
  const nextLesson = lessons[lessonIndex + 1] || null;
  const prevLesson = lessons[lessonIndex - 1] || null;
  const isNotesRoute = location.pathname.endsWith("/notes");

  return (
    <Layout>
      <VideoPlayer
        setCurrentSec={setCurrentSec} 
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
      <LessonRoutes currentSec={currentSec} />
      </div>
      <Footer />
    </Layout>
  );
};

export default LessonPage;
