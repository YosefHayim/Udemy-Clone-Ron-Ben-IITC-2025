import React, { useEffect, useRef, useState } from "react";

interface CourseHoverCardProps {
  course: {
    courseName: string;
    updatedAt: string;
    courseDescription: string;
    totalCourseDuration: number;
    courseLevel: string;
    whatYouWillLearn: string[];
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
    left: "100%", // Default para exibir à direita
    top: "50%", // Centralizado verticalmente
    transform: "translateY(-50%)", // Ajusta o centro verticalmente
  });

  useEffect(() => {
    const calculatePosition = () => {
      if (hoverCardRef.current) {
        const hoverCardRect = hoverCardRef.current.getBoundingClientRect();
        const windowWidth = window.innerWidth;

        let leftPosition = "100%"; // Posição inicial à direita
        let transformValue = "translateY(-50%)"; // Centralizado verticalmente

        // Se o hover card ultrapassar a largura da tela, muda para a esquerda
        if (hoverCardRect.right > windowWidth) {
          leftPosition = "-320px"; // Move o card para a esquerda
        }

        setPosition({
          left: leftPosition,
          top: "50%", // Sempre centralizado verticalmente
          transform: transformValue,
        });
      }
    };

    calculatePosition();
    window.addEventListener("resize", calculatePosition); // Recalcular ao redimensionar a janela

    return () => window.removeEventListener("resize", calculatePosition);
  }, []);

  const formattedDate = new Date(course.updatedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

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
          left: position.left === "100%" ? "-8px" : "calc(100% - 8px)", // Ajusta a seta dependendo do lado
          top: "50%",
          transform: "translateY(-50%) rotate(45deg)",
        }}
      ></div>

      <h3 className="font-bold text-lg">{truncateText(course.courseName, 50)}</h3>
      {course.isNew && (
        <span className="text-xs text-white bg-green-500 px-2 py-1 rounded-full mt-1 inline-block">
          New
        </span>
      )}
      <p className="text-xs text-gray-500 mt-1">Updated {formattedDate}</p>
      <p className="text-xs text-gray-500 mt-1">
        {course.totalCourseDuration.toFixed(1)} total hours • {course.courseLevel}
      </p>
      <p className="text-xs text-gray-600 mt-2">
        {truncateText(course.courseDescription, 100)}
      </p>
      <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
        {truncateList(course.whatYouWillLearn, 3).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button className="mt-4 w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600">
        Add to cart
      </button>
    </div>
  );
};

export default CourseHoverCard;
