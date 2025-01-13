
// import CourseCard from "@/components/CourseCard/CourseCard";

// const CoursesCarousel: React.FC = () => {
//   const courses = Array.from({ length: 20 }); // Simula 20 cursos
//   const visibleItems = 5; // Número de cursos visíveis no carrossel

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     const nextIndex = currentIndex + visibleItems;
//     if (nextIndex < courses.length) {
//       setCurrentIndex(nextIndex);
//     } else {
//       setCurrentIndex(0); // Volta ao início se não houver mais cursos
//     }
//   };

//   return (
//     <div className="py-8 relative">
//       <div className="flex items-center">
//         {/* Contêiner do carrossel */}
//         <div className="overflow-hidden flex-1">
//           <div
//             className="flex transition-transform duration-300"
//             style={{
//               transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
//               width: `${(courses.length * 100) / visibleItems}%`,
//             }}
//           >
//             {courses.map((_, idx) => (
//               <div
//                 key={idx}
//                 className="flex-shrink-0 w-[20%] px-2 box-border" // Garante que cada curso ocupa 20% da largura total
//               >
//                 <CourseCard />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Botão para rolar para a direita */}
//         <button
//           onClick={handleNext}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10 shadow-md hover:bg-gray-600"
//         >
//           &#9654;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CoursesCarousel;
import React from "react";

interface CourseCardProps {
  title: string;
  image: string;
  description: string;
  fullPrice: number;
  discountPrice: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  image,
  description,
  fullPrice,
  discountPrice,
}) => {
  return (
    <div className="border rounded-lg shadow-sm overflow-hidden">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-600 truncate">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-400 line-through">${fullPrice}</span>
          <span className="text-green-600 font-bold">${discountPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
