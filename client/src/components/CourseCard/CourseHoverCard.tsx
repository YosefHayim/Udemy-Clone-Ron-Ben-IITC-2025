import React from "react";

interface CourseHoverCardProps {
  course: {
    courseName?: string;
    updatedAt?: string;
    courseDescription?: string;
    totalCourseDuration?: number;
    courseLevel?: string;
    whatYouWillLearn?: string[];
    isNew?: boolean;
  };
}

const CourseHoverCard: React.FC<CourseHoverCardProps> = ({ course }) => {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  const truncateList = (list: string[], maxItems: number) => {
    return list.length > maxItems ? [...list.slice(0, maxItems), "..."] : list;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border z-[999] w-[350px]">
      <h3 className="font-bold text-xl text-courseNameColorTxt">
        {truncateText(course.courseName || "", 70)}
      </h3>

      {course.isNew && (
        <span className="text-xs text-white bg-green-500 px-2 py-1 rounded-full mt-2 inline-block">
          New
        </span>
      )}

      <p className="text-xs text-gray-500 mt-2">
        Updated{" "}
        <span className="text-green-600 font-medium">
          {new Date(course.updatedAt || "").toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
          })}
        </span>
      </p>
      <p className="text-xs text-gray-500 mt-1">
        {course.totalCourseDuration?.toFixed(1)} total hours •{" "}
        {course.courseLevel || "All Levels"}
      </p>

      <p className="text-sm text-gray-700 mt-4 leading-relaxed">
        {truncateText(course.courseDescription || "", 150)}
      </p>

      <ul className="list-inside list-disc text-sm text-gray-700 mt-4">
        {truncateList(course.whatYouWillLearn || [""], 3).map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-green-600 font-bold">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between mt-6">
        <button className="focus:outline-none w-[80%] bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition">
          Add to cart
        </button>

        <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full hover:border-purple-600 cursor-pointer transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-400 hover:text-purple-600 transition"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78v0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CourseHoverCard;
