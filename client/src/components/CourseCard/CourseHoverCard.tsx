import React, { useEffect, useRef, useState } from "react";

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

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

const truncateList = (list: string[], maxItems: number) => {
  if (list.length > maxItems) {
    return [...list.slice(0, maxItems), "..."];
  }
  return list;
};

const CourseHoverCard: React.FC<CourseHoverCardProps> = ({ course }) => {
  const hoverCardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{
    left: string;
    top: string;
    transform: string;
  }>({
    left: "100%",
    top: "50%",
    transform: "translateY(-50%)",
  });

  useEffect(() => {
    const calculatePosition = () => {
      if (hoverCardRef.current) {
        const hoverCardRect = hoverCardRef.current.getBoundingClientRect();
        const windowWidth = window.innerWidth;

        let leftPosition = "100%"; // Default para a direita
        if (hoverCardRect.right > windowWidth) {
          leftPosition = "-320px"; // Move para a esquerda se necessário
        }

        setPosition({
          left: leftPosition,
          top: "50%", // Sempre centralizado verticalmente
          transform: "translateY(-50%)",
        });
      }
    };

    calculatePosition();
    window.addEventListener("resize", calculatePosition);

    return () => window.removeEventListener("resize", calculatePosition);
  }, []);

  const formattedDate = new Date(course.updatedAt || "").toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
    }
  );

  return (
    <div
      ref={hoverCardRef}
      className="absolute bg-white shadow-lg rounded-lg p-4 border z-10"
      style={{
        left: position.left,
        top: position.top,
        transform: position.transform,
        width: "320px",
      }}
    >
      {/* Seta para conectar ao curso */}
      <div
        className="absolute w-4 h-4 bg-white transform rotate-45 shadow-md"
        style={{
          left: position.left === "100%" ? "-8px" : "calc(100% - 8px)",
          top: "50%",
          transform: "translateY(-50%) rotate(45deg)",
        }}
      ></div>

      <h3 className="font-bold text-lg">
        {truncateText(course.courseName || "", 50)}
      </h3>
      {course.isNew && (
        <span className="text-xs text-white bg-green-500 px-2 py-1 rounded-full mt-1 inline-block">
          New
        </span>
      )}
      <p className="text-xs text-gray-500 mt-1">Updated {formattedDate}</p>
      <p className="text-xs text-gray-500 mt-1">
        {course.totalCourseDuration?.toFixed(1)} total hours •{" "}
        {course.courseLevel}
      </p>
      <p className="text-xs text-gray-600 mt-2">
        {truncateText(course.courseDescription || "", 100)}
      </p>
      <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
        {truncateList(course.whatYouWillLearn || [""], 3).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="flex items-center justify-between mt-4">
        <button className="w-[80%] bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600">
          Add to cart
        </button>
        {/* Ícone do coração */}
        <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full hover:border-red-500 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-400 hover:text-red-500"
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
