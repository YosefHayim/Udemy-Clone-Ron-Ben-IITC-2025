import React from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import NavBar from "../pages/Lesson/NavBar";
import { useQuery } from "@tanstack/react-query";
import OverviewTab from "../pages/Lesson/tabs/OverviewTab";
import QnATab from "../pages/Lesson/tabs/QnATab";
import NotesTab from "../pages/Lesson/tabs/NoteTab";
import AnnouncementsTab from "../pages/Lesson/tabs/AnnouncementsTab";
import ReviewsTab from "../pages/Lesson/tabs/ReviewTab";
import LearningToolsTab from "../pages/Lesson/tabs/LearningToolsTab";
import SearchTab from "../pages/Lesson/tabs/SearchTab";
import CourseContent from "../pages/Lesson/tabs/CourseContent";
import fetchCourseById from "@/services/courseService";

const LessonRoutes: React.FC = () => {
  const { id, courseId } = useParams<{ id: string; courseId: string }>();

  // Validate presence of courseId and id
  if (!courseId || !id) {
    console.error("Missing required parameters: courseId or id.");
    return <div>Error: Missing required parameters.</div>;
  }

  // Fetch course data dynamically using courseId
  const { data, isLoading, error } = useQuery({
    queryKey: ["course", courseId],
    queryFn: () => {
      if (!courseId) {
        throw new Error("Course ID is undefined");
      }
      return fetchCourseById(courseId);
    },
    enabled: !!courseId,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error loading course data.</div>;
  }

  const courseData = data;
  console.log(courseData);

  const sections = data.sections;

  // Construct the default route
  const defaultRoute = `/course/${courseId}/lesson/${id}/overview`;

  return (
    <>
      {/* Render NavBar with course name */}
      <NavBar />
      <div className=" px-20 flex justify-center items-center">
        <Routes>
          {/* Redirect to overview tab by default */}
          <Route index element={<Navigate to={defaultRoute} replace />} />

          {/* Define routes for lesson tabs */}
          <Route path={`overview`} element={<OverviewTab />} />
          <Route
            path="course-content"
            element={<CourseContent sections={sections} />}
          />
          <Route path="qna" element={<QnATab />} />
          <Route path="notes" element={<NotesTab />} />
          <Route path="announcements" element={<AnnouncementsTab />} />
          <Route
            path="reviews"
            element={<ReviewsTab avgRating={courseData.averageRating} />}
          />
          <Route path="learning-tools" element={<LearningToolsTab />} />
          <Route path="search" element={<SearchTab sections={sections} />} />

          {/* Redirect to defaultRoute for invalid paths */}
          <Route path="*" element={<Navigate to={defaultRoute} replace />} />
        </Routes>
      </div>
    </>
  );
};

export default LessonRoutes;
