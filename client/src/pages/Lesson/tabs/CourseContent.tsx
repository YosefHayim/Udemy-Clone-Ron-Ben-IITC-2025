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
import courseData from "@/db"; // Import the course data

interface Lesson {
  id: string;
  title: string;
  videoUrl: string;
  completed?: boolean;
}

interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
}

interface CourseContentProps {
  sections?: Section[]; // Pass sections as a prop
}

const CourseContent: React.FC<CourseContentProps> = ({ sections }) => {
  const sectionsToRender = sections || courseData.sections;

  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});
  const { open } = useSidebar(); // Get sidebar state
  const location = useLocation(); // Get current URL
  const navigate = useNavigate(); // For redirecting

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

  return (
    <div className="flex justify-center p-10 min-h-screen">
      <div>
        {sectionsToRender.map((section) => (
          <Collapsible key={section.id} defaultOpen className=" min-w-80 border-y group/collapsible ">
            <div className="flex items-center justify-between p-4 bg-[#F7F9FA] ">
              <CollapsibleTrigger asChild>
                <button className="flex items-center w-full text-left focus-visible:bg-none">
                  <span className="text-l font-medium">{section.title}</span>
                  <FaChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </button>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent>
              <ul className="mt-2 pl-4   ">
                {section.lessons.map((lesson) => (
                  <li key={lesson.id} className="flex items-center gap-3 mb-2
                  hover:bg-slate-400  ">
                    <Checkbox
                      checked={!!completedLessons[lesson.id]}
                      onCheckedChange={() => toggleLessonCompletion(lesson.id)}
                      className="hover:border-black "
                    />
                    <Link
                      to={`/lesson/${lesson.id}`}
                      className={` ${
                        completedLessons[lesson.id] ? " text-gray-500" : "text-gray-500"
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
