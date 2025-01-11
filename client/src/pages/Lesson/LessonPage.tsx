import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import LessonRoutes from "../../routes/LessonRoutes";
import VideoPlayer from "./VideoPlayer";
import Footer from "@/pages/Home/Footer";
import { fetchCourseById } from "@/services/courseService";

const LessonPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the lesson ID from the route params
  const navigate = useNavigate();
  const [lesson, setLesson] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nextLesson, setNextLesson] = useState<any>(null);
  const [prevLesson, setPrevLesson] = useState<any>(null);

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        setLoading(true);

        // Fetch the course data
        const courseData = await fetchCourseById("67800ee6c7d3d0bd68dceb66");

        // Flatten lessons from all sections
        const lessons = courseData.data.sections.flatMap((section: any) => section.lessons);

        // Find the current lesson and its index
        const lessonIndex = lessons.findIndex((lesson: any) => lesson._id === id);
        const foundLesson = lessonIndex !== -1 ? lessons[lessonIndex] : null;

        if (!foundLesson) {
          setError("Lesson not found");
        } else {
          setLesson(foundLesson);
          setNextLesson(lessons[lessonIndex + 1] || null);
          setPrevLesson(lessons[lessonIndex - 1] || null);
        }
      } catch (err) {
        setError("Failed to load lesson data.");
      } finally {
        setLoading(false);
      }
    };

    fetchLesson();
  }, [id]);

  const handleNavigate = (lessonId: string) => {
    navigate(`/lesson/${lessonId}`);
  };

  if (loading) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div>
          <h1>Error</h1>
          <p>{error}</p>
        </div>
      </Layout>
    );
  }

  if (!lesson) {
    return (
      <Layout>
        <div>
          <h1>Lesson Not Found</h1>
          <p>The requested lesson could not be found.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <VideoPlayer
        currentLesson={lesson}
        videoUrl={lesson.videoUrl}
        nextLesson={nextLesson}
        prevLesson={prevLesson}
        onNavigate={handleNavigate}
      />
      <div className="px-15">
        <LessonRoutes />
      </div>
      <Footer />
    </Layout>
  );
};

export default LessonPage;
