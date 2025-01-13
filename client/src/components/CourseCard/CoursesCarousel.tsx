// import React, { useState, useEffect } from "react";
// import CourseCard from "@/components/CourseCard/CourseCard";

// interface Course {
//   _id: string;
//   courseName: string;
//   courseImg: string;
//   courseDescription: string;
//   courseFullPrice: number;
//   courseDiscountPrice: number;
// }

// const CoursesCarousel: React.FC = () => {
//   const [courses, setCourses] = useState<Course[]>([]); // State to store courses
//   const [currentIndex, setCurrentIndex] = useState(0); // Current index in the carousel
//   const visibleItems = 5; // Number of visible courses in the carousel

//   // Function to fetch courses from the backend
//   const fetchCourses = async () => {
//     try {
//       const response = await fetch("https://udemy-clone-ron-ben.onrender.com/api/course"); // Backend API URL
//       const data = await response.json();
//       if (data.status === "Success") {
//         setCourses(data.response); // Update state with fetched courses
//       } else {
//         console.error("Error fetching courses:", data);
//       }
//     } catch (error) {
//       console.error("Error loading courses:", error);
//     }
//   };

//   // useEffect to fetch courses when the component mounts
//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   // Function to handle navigation in the carousel
//   const handleNext = () => {
//     const nextIndex = currentIndex + visibleItems;
//     if (nextIndex < courses.length) {
//       setCurrentIndex(nextIndex); // Move to the next set of courses
//     } else {
//       setCurrentIndex(0); // Reset to the beginning if there are no more courses
//     }
//   };

//   return (
//     <div className="py-8 relative">
//       <div className="flex items-center">
//         {/* Carousel container */}
//         <div className="overflow-hidden flex-1">
//           <div
//             className="flex transition-transform duration-300"
//             style={{
//               transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
//               width: `${(courses.length * 100) / visibleItems}%`,
//             }}
//           >
//             {courses.map((course) => (
//               <div
//                 key={course._id}
//                 className="flex-shrink-0 w-[20%] px-2 box-border" // Ensures each course takes 20% of the total width
//               >
//                 {/* Passing course data to the CourseCard component */}
//                 <CourseCard
//                   title={course.courseName}
//                   image={course.courseImg}
//                   description={course.courseDescription}
//                   fullPrice={course.courseFullPrice}
//                   discountPrice={course.courseDiscountPrice}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Button to scroll to the next set of courses */}
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


import React, { useState, useEffect } from "react";
import CourseCard from "@/components/CourseCard/CourseCard";

interface Course {
  _id: string;
  courseName: string;
  courseImg: string;
  courseDescription: string;
  courseFullPrice: number;
  courseDiscountPrice: number;
  courseTag: string;
}

const CoursesCarousel: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]); // State para armazenar cursos
  const [currentIndex, setCurrentIndex] = useState(0); // Índice atual do carousel
  const visibleItems = 5; // Número de itens visíveis no carousel

  // Função para buscar cursos da API
  const fetchCourses = async () => {
    try {
      const response = await fetch("https://your-backend-url.com/api/course"); // Substitua pela URL correta
      const data = await response.json();
      if (data.status === "Success" && data.response) {
        setCourses(data.response); // Atualiza o estado com os cursos
      } else {
        console.error("Erro ao buscar os cursos:", data);
      }
    } catch (error) {
      console.error("Erro ao carregar os cursos:", error);
    }
  };

  // useEffect para buscar cursos ao montar o componente
  useEffect(() => {
    fetchCourses();
  }, []);

  // Função para navegar para o próximo grupo de cursos
  const handleNext = () => {
    const nextIndex = currentIndex + visibleItems;
    if (nextIndex < courses.length) {
      setCurrentIndex(nextIndex);
    } else {
      setCurrentIndex(0); // Volta ao início se não houver mais cursos
    }
  };

  // Função para navegar para o grupo anterior
  const handlePrev = () => {
    const prevIndex = currentIndex - visibleItems;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
    } else {
      setCurrentIndex(Math.max(0, courses.length - visibleItems));
    }
  };

  return (
    <div className="py-8 relative">
      <div className="flex items-center">
        {/* Botão para voltar */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10 shadow-md hover:bg-gray-600"
        >
          &#9664;
        </button>

        {/* Container do carousel */}
        <div className="overflow-hidden flex-1">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
              width: `${(courses.length * 100) / visibleItems}%`,
            }}
          >
            {courses.map((course) => (
              <div
                key={course._id}
                className="flex-shrink-0 w-[20%] px-2 box-border" // Cada curso ocupa 20% da largura total
              >
                {/* Componente CourseCard */}
                <CourseCard
                  title={course.courseName}
                  image={course.courseImg}
                  description={course.courseDescription}
                  fullPrice={course.courseFullPrice.toFixed(2)} // Preço formatado
                  discountPrice={course.courseDiscountPrice.toFixed(2)} // Preço formatado
                  tag={course.courseTag}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Botão para avançar */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10 shadow-md hover:bg-gray-600"
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default CoursesCarousel;
