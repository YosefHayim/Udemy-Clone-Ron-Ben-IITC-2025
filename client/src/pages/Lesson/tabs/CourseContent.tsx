import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { useSidebar } from "@/components/ui/sidebar";
import { fetchCourseById } from "@/services/courseService"; // Import API service

interface Lesson {
  _id: string; // Adjusted to match your backend data structure
  title: string;
  videoUrl: string;
  completed?: boolean;
}

interface Section {
  _id: string; // Adjusted to match your backend data structure
  title: string;
  lessons: Lesson[];
}

const CourseContent: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});
  const { open } = useSidebar(); // Get sidebar state
  const location = useLocation(); // Get current URL
  const navigate = useNavigate(); // For redirecting

  // Fetch course data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseData = await fetchCourseById("67800ee6c7d3d0bd68dceb66"); // Replace with dynamic ID if needed
        setSections(courseData.data.sections || []);
      } catch (err) {
        setError("Failed to load course data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleLessonCompletion = (lessonId: string) => {
    setCompletedLessons((prev) => ({
      ...prev,
      [lessonId]: !prev[lessonId],
    }));
  };

  // Redirect if sidebar is open and URL ends with /course-content
  useEffect(() => {
    if (open && location.pathname.endsWith("/course-content")) {
      navigate(location.pathname.replace("/course-content", "/overview"));
    }
  }, [open, location, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex justify-center p-10 min-h-screen">
      <div className="min-w-fit">
        {sections.map((section) => (
          <Collapsible key={section._id} defaultOpen className="min-w-96 border-y group/collapsible">
            <div className="flex items-center justify-between p-4 bg-[#F7F9FA]">
              <CollapsibleTrigger asChild>
                <button className="flex items-center w-full text-left focus:outline-none focus-visible:outline-none">
                  <span className="text-l font-medium">{section.title}</span>
                  <FaChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </button>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent>
              <ul className="mt-2 pl-4">
                {section.lessons.map((lesson) => (
                  <li
                    key={lesson._id}
                    className="flex items-center gap-3 mb-2 hover:bg-slate-400"
                  >
                    <Checkbox
                      checked={!!completedLessons[lesson._id]}
                      onCheckedChange={() => toggleLessonCompletion(lesson._id)}
                      className="hover:border-black focus:outline-none focus-visible:outline-none"
                    />
                    <Link
                      to={`/lesson/${lesson._id}`}
                      className={`${
                        completedLessons[lesson._id] ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      {lesson.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;
