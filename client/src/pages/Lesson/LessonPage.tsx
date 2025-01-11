import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "./Layout";
import LessonRoutes from "../../routes/LessonRoutes";
import VideoPlayer from "./VideoPlayer";
import Footer from "@/pages/Home/Footer";
import { fetchCourseById } from "@/services/courseService";

const LessonPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the lesson ID from the route params
  const [lesson, setLesson] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        setLoading(true);
        const courseData = await fetchCourseById("67800ee6c7d3d0bd68dceb66");
        const foundLesson = courseData.data.sections
          .flatMap((section: any) => section.lessons)
          .find((lesson: any) => lesson._id === id);
        if (!foundLesson) {
          setError("Lesson not found");
        } else {
          setLesson(foundLesson);
        }
      } catch (err) {
        setError("Failed to load lesson data.");
      } finally {
        setLoading(false);
      }
    };

    fetchLesson();
  }, [id]);

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
      <VideoPlayer videoUrl={lesson.videoUrl} />
      <div className="px-15">
        <LessonRoutes />
      </div>
      <Footer />
    </Layout>
  );
};

export default LessonPage;
