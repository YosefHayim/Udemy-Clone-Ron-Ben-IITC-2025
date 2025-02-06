// import React, { useEffect, useRef, useState } from "react";
// import { createPortal } from "react-dom";

// interface CourseHoverCardProps {
//   course: {
//     courseName?: string;
//     updatedAt?: string;
//     courseDescription?: string;
//     totalCourseDuration?: number;
//     courseLevel?: string;
//     whatYouWillLearn?: string[];
//     isNew?: boolean;
//   };
// }

// const truncateText = (text: string, maxLength: number) => {
//   return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
// };

// const truncateList = (list: string[], maxItems: number) => {
//   return list.length > maxItems ? [...list.slice(0, maxItems), "..."] : list;
// };

// const CourseHoverCard: React.FC<CourseHoverCardProps> = ({ course }) => {
//   const hoverCardRef = useRef<HTMLDivElement>(null);
//   const [position, setPosition] = useState<{ left: number; top: number }>({
//     left: 0,
//     top: 0,
//   });

//   useEffect(() => {
//     const calculatePosition = (event: MouseEvent) => {
//       if (hoverCardRef.current) {
//         const hoverCard = hoverCardRef.current;
//         const cardWidth = hoverCard.offsetWidth;
//         const cardHeight = hoverCard.offsetHeight;
//         const windowWidth = window.innerWidth;
//         const windowHeight = window.innerHeight;

//         let left = event.clientX + 20;
//         let top = event.clientY - cardHeight / 2;

//         // Evita ultrapassar as bordas da tela
//         if (left + cardWidth > windowWidth) {
//           left = event.clientX - cardWidth - 20;
//         }

//         if (top < 10) {
//           top = 10;
//         }

//         if (top + cardHeight > windowHeight) {
//           top = windowHeight - cardHeight - 10;
//         }

//         setPosition({ left, top });
//       }
//     };

//     document.addEventListener("mousemove", calculatePosition);

//     return () => document.removeEventListener("mousemove", calculatePosition);
//   }, []);

//   const formattedDate = new Date(course.updatedAt || "").toLocaleDateString(
//     "en-US",
//     {
//       year: "numeric",
//       month: "long",
//     }
//   );

//   return createPortal(
//     <div
//       ref={hoverCardRef}
//       className="fixed bg-white shadow-lg rounded-lg p-4 border z-[99999] overflow-visible pointer-events-auto"
//       style={{
//         left: `${position.left}px`,
//         top:  `${position.top}px`,
//         width: "350px",
//         maxHeight: "none",
//       }}
//       onMouseEnter={() => console.log("Entrou no hover card")}
//       onMouseLeave={() => console.log("Saiu do hover card")}
//     >
//       <h3 className="font-bold text-lg">
//         {truncateText(course.courseName || "", 50)}
//       </h3>
//       {course.isNew && (
//         <span className="text-xs text-white bg-green-500 px-2 py-1 rounded-full mt-1 inline-block">
//           New
//         </span>
//       )}
//       <p className="text-xs text-gray-500 mt-1">Updated {formattedDate}</p>
//       <p className="text-xs text-gray-500 mt-1">
//         {course.totalCourseDuration?.toFixed(1)} total hours •{" "}
//         {course.courseLevel}
//       </p>
//       <p className="text-xs text-gray-600 mt-2">
//         {truncateText(course.courseDescription || "", 500)}
//       </p>
//       <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
//         {truncateList(course.whatYouWillLearn || [""], 10).map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//       <div className="flex items-center justify-between mt-4">
//         <button className="w-[80%] bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600">
//           Add to cart
//         </button>
//         <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full hover:border-red-500 cursor-pointer">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-6 h-6 text-gray-400 hover:text-red-500"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78v0z"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>,
//     document.body // Renderiza no body para evitar limitações de div pai
//   );
// };

// export default CourseHoverCard;


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
    <div className="bg-white shadow-lg rounded-lg p-4 border z-[9999] w-[350px]">
      <h3 className="font-bold text-lg">{truncateText(course.courseName || "", 50)}</h3>
      {course.isNew && (
        <span className="text-xs text-white bg-green-500 px-2 py-1 rounded-full mt-1 inline-block">
          New
        </span>
      )}
      <p className="text-xs text-gray-500 mt-1">
        Updated {new Date(course.updatedAt || "").toLocaleDateString("en-US", { year: "numeric", month: "long" })}
      </p>
      <p className="text-xs text-gray-500 mt-1">
        {course.totalCourseDuration?.toFixed(1)} total hours • {course.courseLevel}
      </p>
      <p className="text-xs text-gray-600 mt-2">{truncateText(course.courseDescription || "", 500)}</p>
      <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
        {truncateList(course.whatYouWillLearn || [""], 10).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="flex items-center justify-between mt-4">
        <button className="w-[80%] bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600">
          Add to cart
        </button>
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
