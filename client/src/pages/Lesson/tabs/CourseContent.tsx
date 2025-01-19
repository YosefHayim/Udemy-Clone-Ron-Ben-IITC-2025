import React, { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

interface CourseContentProps {
  sections: Array<any>; // Replace `any` with the exact structure of your sections if known
}
const CourseContent: React.FC<CourseContentProps> = ({ sections }) => {
  const { courseId } = useParams<{ courseId: string }>();
  const location = useLocation();

  // Sanitize courseId to remove any leading colon or whitespace
  const sanitizedCourseId = courseId?.trim().replace(/^:/, "");

  const [completedLessons, setCompletedLessons] = useState<
    Record<string, boolean>
  >({});

  // Track completed lessons

  // Toggle completion state for a lesson
  const toggleLessonCompletion = (lessonId: string) => {
    setCompletedLessons((prev) => ({
      ...prev,
      [lessonId]: !prev[lessonId],
    }));
  };

  // Handle loading and error states
  if (!sections) {
    return <div>No sections available for this course.</div>;
  }

  let lessonCounter = 0;

  return (
    <div className="flex justify-center py-10 min-h-screen">
      <div className="">
        {sections.map((section: any, idx: number) => (
          <Collapsible
            key={section._id}
            defaultOpen
            className="min-w-[800px] border-y group/collapsible"
          >
            <div className="flex items-center justify-between p-4 bg-[#F7F9FA]">
              <CollapsibleTrigger asChild>
                <button className="flex items-center w-full text-left focus:outline-none focus-visible:outline-none">
                  <span className="text-lg font-medium">
                    Section {idx + 1}: {section.title}
                  </span>
                  <FaChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <ul className="mt-2 pl-4">
                {section.lessons.map((lesson: any) => {
                  const isCurrentLesson =
                    location.pathname ===
                      `/course/${sanitizedCourseId}/lesson/${lesson._id}/course-content` ||
                    location.pathname ===
                      `/course/${sanitizedCourseId}/lesson/${lesson._id}`;

                  lessonCounter += 1;
                  return (
                    <li
                      key={lesson._id}
                      className={`flex items-center gap-3 mb-2 p-2 ${
                        isCurrentLesson
                          ? "bg-slate-400 text-white"
                          : "hover:bg-slate-400"
                      }`}
                    >
                      <Checkbox
                        checked={!!completedLessons[lesson._id]}
                        onCheckedChange={() =>
                          toggleLessonCompletion(lesson._id)
                        }
                        className={`hover:border-black focus:outline-none ${
                          isCurrentLesson ? "border-white" : ""
                        }`}
                      />
                      <div className="flex flex-col">
                        <Link
                          to={`/course/${sanitizedCourseId}/lesson/${lesson._id}`}
                          state={{ courseId: sanitizedCourseId }}
                          className="flex-col  ml-2"
                        >
                          <span>
                            {lessonCounter}. {lesson.title}
                          </span>
                          <span
                            className={`flex items-center text-xs ${
                              isCurrentLesson ? "text-white" : "text-black"
                            }`}
                          >
                            <MdOndemandVideo />
                            <span>
                              {lesson.duration ? `${lesson.duration} min` : ""}
                            </span>
                          </span>
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;
