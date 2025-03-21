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
    <div className="border-lg z-[999] w-[350px] rounded-lg border-[0.01rem] border-gray-300 bg-white p-6 shadow-lg">
      <h3 className="text-xl font-bold text-courseNameColorTxt">
        {truncateText(course.courseName || "", 70)}
      </h3>

      {course.isNew && (
        <span className="mt-2 inline-block rounded-full bg-green-500 px-2 py-1 text-xs text-white">
          New
        </span>
      )}

      <p className="mt-2 text-xs text-gray-500">
        Updated{" "}
        <span className="font-medium text-green-600">
          {new Date(course.updatedAt || "").toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
          })}
        </span>
      </p>
      <p className="mt-1 text-xs text-gray-500">
        {course.totalCourseDuration?.toFixed(1)} total hours •{" "}
        {course.courseLevel || "All Levels"}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-gray-700">
        {truncateText(course.courseDescription || "", 150)}
      </p>

      <ul className="mt-4 list-inside list-disc text-sm text-gray-700">
        {truncateList(course.whatYouWillLearn || [""], 3).map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="font-bold text-green-600">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between">
        <button className="w-full rounded-lg bg-purple-600 py-2 font-medium text-white transition hover:bg-purple-700 focus:outline-none">
          Add to cart
        </button>

        <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-gray-300 transition hover:border-purple-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 transition hover:text-purple-600"
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
