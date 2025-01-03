import React from "react";
import { useParams, Routes, Route, Navigate } from "react-router-dom";
import ReactPlayer from "react-player";
import Layout from "../components/leason/Layout";
import NavBar from "../components/leason/NavBar";
import course from "@/db";

// Import tab components
import OverviewTab from "../components/leason/tabs/OverviewTab";
import QnATab from "../components/leason/tabs/QnATab";
import NotesTab from "../components/leason/tabs/NoteTab";
import AnnouncementsTab from "../components/leason/tabs/AnnouncementsTab";
import ReviewsTab from "../components/leason/tabs/ReviewTab";
import LearningToolsTab from "../components/leason/tabs/LearningToolsTab";
import SearchTab from "../components/leason/tabs/SearchTab"
const LessonPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the lesson ID from the route params

  // Find the lesson in the course database
  const lesson = course.sections
    .flatMap((section) => section.lessons)
    .find((lesson) => lesson.id === id);

  if (!lesson) {
    return (
      <Layout>
        <div>
          <h1>Lesson Not Found</h1>
          <p>The requested lesson could not be found.</p>
        </div>
        <NavBar />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="w-full max-w-screen-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4">{lesson.title}</h1>
        <ReactPlayer
          url={lesson.videoUrl}
          controls={true}
          playing={false}
          width="100%"
          height="auto"
        />
      </div>
      <NavBar />
      <Routes>
        {/* Redirect to overview by default */}
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<OverviewTab />} />
        <Route path="qna" element={<QnATab />} />
        <Route path="notes" element={<NotesTab />} />
        <Route path="announcements" element={<AnnouncementsTab />} />
        <Route path="reviews" element={<ReviewsTab />} />
        <Route path="learning-tools" element={<LearningToolsTab />} />
        <Route path="search" element={<LearningToolsTab />} />
      </Routes>
    </Layout>
  );
};

export default LessonPage;
