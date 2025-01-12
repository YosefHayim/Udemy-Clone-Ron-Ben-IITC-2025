import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useParams,
} from "react-router-dom";
import NavBar from "../pages/Lesson/NavBar";
import { useSidebar } from "@/components/ui/sidebar"; // Import the useSidebar hook

// Import tab components
import OverviewTab from "../pages/Lesson/tabs/OverviewTab";
import QnATab from "../pages/Lesson/tabs/QnATab";
import NotesTab from "../pages/Lesson/tabs/NoteTab";
import AnnouncementsTab from "../pages/Lesson/tabs/AnnouncementsTab";
import ReviewsTab from "../pages/Lesson/tabs/ReviewTab";
import LearningToolsTab from "../pages/Lesson/tabs/LearningToolsTab";
import SearchTab from "../pages/Lesson/tabs/SearchTab";
import CourseContent from "../pages/Lesson/tabs/CourseContent";


const LessonRoutes: React.FC = () => {
  const location = useLocation();
  const { id } = useParams<{ id: string }>(); // Get the lesson ID from the route params
  const { open } = useSidebar(); // Get the sidebar state

  // Define valid paths for the lesson tabs
  const validPaths = [
    "overview",
    "course-content",
    "qna",
    "notes",
    "announcements",
    "reviews",
    "learning-tools",
    "search",
  ];

  // Extract the relevant part of the path after "/lesson/:id/"
  const basePathIndex = location.pathname.indexOf(`/lesson/${id}/`);
  const relevantPath = location.pathname.slice(
    basePathIndex + `/lesson/${id}/`.length
  );

  // Check if the relevant path is a valid tab
  const isValidPath = validPaths.includes(relevantPath);

  // Normalize the URL if it contains invalid segments
  if (!isValidPath) {
    return <Navigate to={`/lesson/${id}/overview`} replace />;
  }

  return (
    <>
      <NavBar />
      <Routes>
        {/* Redirect to overview by default if no specific route is provided */}
        <Route index element={<Navigate to="overview" replace />} />
        {/* Valid routes */}
        <Route path="overview" element={<OverviewTab />} />
        <Route path="qna" element={<QnATab />} />
        <Route path="notes" element={<NotesTab />} />
        <Route path="announcements" element={<AnnouncementsTab />} />
        <Route path="reviews" element={<ReviewsTab />} />
        <Route path="learning-tools" element={<LearningToolsTab />} />
        <Route path="search" element={<SearchTab />} />
        <Route path="course-content" element={<CourseContent />} />

      </Routes>
    </>
  );
};

export default LessonRoutes;
