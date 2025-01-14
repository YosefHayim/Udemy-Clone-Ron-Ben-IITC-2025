import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { useSidebar } from "@/components/ui/sidebar";

const NavBar: React.FC = () => {
  const location = useLocation();
  const { courseId, id } = useParams<{ courseId: string; id: string }>(); // Get courseId and lessonId from route params
  const { open } = useSidebar(); // Get the sidebar state

  const activePath = location.pathname.split("/").pop(); // Get the active tab

  const tabs = [
    { name: <IoIosSearch />, path: "search" }, // Icon for the search tab
    { name: "Overview", path: "overview" },
    { name: "Q&A", path: "qna" },
    { name: "Notes", path: "notes" },
    { name: "Announcements", path: "announcements" },
    { name: "Reviews", path: "reviews" },
    { name: "Learning Tools", path: "learning-tools" },
  ];

  // Conditionally add the "Course Content" tab when the sidebar is closed
  if (!open) {
    tabs.splice(1, 0, { name: "Course Content", path: "course-content" });
  }

  // Construct the base path dynamically
  const basePath = `/course/${courseId}/lesson/${id}`;

  return (
    <div className="w-full">
      <nav className="flex flex-wrap bg-white text-gray-500 px-4 sm:px-10 md:px-20 lg:px-40 border-b">
        {tabs.map((tab) => (
          <Link
            key={tab.path}
            to={`${basePath}/${tab.path}`} // Append tab path to the base path
            className={`py-2 sm:py-3 px-2 sm:px-4 md:px-6 lg:px-10 text-sm sm:text-base font-medium flex items-center ${
              activePath === tab.path
                ? "border-b-2 border-black text-black"
                : "hover:text-black"
            }`}
          >
            {typeof tab.name === "string" ? (
              tab.name
            ) : (
              <span className="text-lg">{tab.name}</span> // Render icon if name is not a string
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
