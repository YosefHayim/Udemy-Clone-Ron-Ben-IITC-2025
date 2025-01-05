import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const NavBar: React.FC = () => {
  const location = useLocation();
  const { id } = useParams<{ id: string }>(); // Get the lesson ID from the route params
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

  const basePath = `/lesson/${id}`; // Define the base path dynamically

  return (
    <div className="border-t border-gray-300">
      <nav className="flex justify-around bg-white text-black shadow-sm">
        {tabs.map((tab) => (
          <Link
            key={tab.path}
            to={`${basePath}/${tab.path}`} // Append tab path to the base path
            className={`py-3 px-4 text-sm font-medium flex items-center justify-center ${
              activePath === tab.path
                ? "border-b-2 border-blue-500 text-blue-500"
                : "hover:text-gray-600"
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
