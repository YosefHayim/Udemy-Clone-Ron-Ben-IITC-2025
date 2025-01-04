import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useParams,
} from "react-router-dom";
import NavBar from "../components/leason/NavBar";

// Import tab components
import OverviewTab from "../components/leason/tabs/OverviewTab";
import QnATab from "../components/leason/tabs/QnATab";
import NotesTab from "../components/leason/tabs/NoteTab";
import AnnouncementsTab from "../components/leason/tabs/AnnouncementsTab";
import ReviewsTab from "../components/leason/tabs/ReviewTab";
import LearningToolsTab from "../components/leason/tabs/LearningToolsTab";
import SearchTab from "../components/leason/tabs/SearchTab";

const LessonRoutes: React.FC = () => {
  const location = useLocation();
  const { id } = useParams<{ id: string }>(); // Get the lesson ID from the route params

  // Define valid paths for the lesson tabs
  const validPaths = [
    "overview",
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
      </Routes>
    </>
  );
};

export default LessonRoutes;
