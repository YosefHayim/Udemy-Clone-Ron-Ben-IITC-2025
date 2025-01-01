import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Layout from "../components/leason/Layout";
import course from "@/db"; // Import your course data

const LessonPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the lesson ID from the route params

  // Find the lesson in the course database
  const lesson = course.sections
    .flatMap((section) => section.lessons) // Combine all lessons from all sections
    .find((lesson) => lesson.id === id); // Find the lesson with the matching ID

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
      <div>
        <h1>{lesson.title}</h1>
        <ReactPlayer
          url={lesson.videoUrl}
          controls={true}
          playing={false}
          width="100%"
          height="auto"
        />
      </div>
    </Layout>
  );
};

export default LessonPage;
