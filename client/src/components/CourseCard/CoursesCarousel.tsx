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
//   const [courses, setCourses] = useState<Course[]>([]); // Lista de cursos
//   const [currentIndex, setCurrentIndex] = useState(0); // Índice atual no carrossel
//   const visibleItems = 5; // Número de cursos visíveis no carrossel

//   // Função para buscar cursos da API
//   const fetchCourses = async () => {
//     try {
//       const response = await fetch(
//         "https://udemy-clone-ron-ben.onrender.com/api/course"
//       );
//       const data = await response.json();
//       if (data.status === "Success") {
//         setCourses(data.response); // Atualiza o estado com os cursos recebidos
//       } else {
//         console.error("Erro ao buscar cursos:", data);
//       }
//     } catch (error) {
//       console.error("Erro ao carregar cursos:", error);
//     }
//   };

//   // Buscar os cursos ao montar o componente
//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   // Função para avançar no carrossel
//   const handleNext = () => {
//     const nextIndex = currentIndex + visibleItems;

//     if (nextIndex < courses.length) {
//       setCurrentIndex(nextIndex); // Avança para o próximo conjunto
//     } else {
//       setCurrentIndex(0); // Reinicia o carrossel
//     }
//   };

//   return (
//     <div className="py-8 relative">
//       {/* Container principal do carrossel */}
//       <div className="overflow-hidden relative">
//         <div
//           className="flex transition-transform duration-300"
//           style={{
//             transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
//             width: `${(courses.length * 100) / visibleItems}%`,
//           }}
//         >
//           {/* Renderização dos cursos */}
//           {courses.map((course) => (
//             <div
//               key={course._id}
//               className="w-[20%] px-2 box-border"
//             >
//               <CourseCard
//                 title={course.courseName}
//                 image={course.courseImg}
//                 description={course.courseDescription}
//                 fullPrice={course.courseFullPrice}
//                 discountPrice={course.courseDiscountPrice}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Botão para avançar no carrossel */}
//       <button
//         onClick={handleNext}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10 shadow-md hover:bg-gray-600"
//       >
//         &#9654;
//       </button>
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
}

const TwoCourseCarousel: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 2; // Exibimos 2 itens por vez

  // Função para buscar cursos da API
  const fetchCourses = async () => {
    try {
      const response = await fetch(
        "https://udemy-clone-ron-ben.onrender.com/api/course"
      );
      const data = await response.json();
      if (data.status === "Success") {
        setCourses(data.response);
      } else {
        console.error("Erro ao buscar cursos:", data);
      }
    } catch (error) {
      console.error("Erro ao carregar cursos:", error);
    }
  };

  // Buscar cursos ao montar o componente
  useEffect(() => {
    fetchCourses();
  }, []);

  // Função para avançar no carrossel
  const handleNext = () => {
    const nextIndex = currentIndex + visibleItems;
    if (nextIndex < courses.length) {
      setCurrentIndex(nextIndex); // Avança para o próximo conjunto
    } else {
      setCurrentIndex(0); // Reinicia o carrossel
    }
  };

  // Função para voltar no carrossel
  const handlePrev = () => {
    const prevIndex = currentIndex - visibleItems;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex); // Volta para o conjunto anterior
    } else {
      setCurrentIndex(Math.max(0, courses.length - visibleItems)); // Vai para o final
    }
  };

  return (
    <div className="py-8 relative w-full max-w-4xl mx-auto">
      {/* Container principal do carrossel */}
      {courses.length > 0 && (
        <div className="overflow-hidden relative">
          {/* Container para transição dos cards atuais */}
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${(currentIndex / visibleItems)}%)`,
              width: `${(courses.length / visibleItems) * 100}%`, // Largura total proporcional ao número de cursos
            }}
          >
            {courses.map((course) => (
              <div
                key={course._id}
                className="w-[50%] px-4" // Cada item ocupa 50% do container
              >
                <CourseCard
                  title={course.courseName}
                  image={course.courseImg}
                  description={course.courseDescription}
                  fullPrice={course.courseFullPrice}
                  discountPrice={course.courseDiscountPrice}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Botão para voltar */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10 shadow-md hover:bg-gray-600"
      >
        &#9664;
      </button>

      {/* Botão para avançar */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10 shadow-md hover:bg-gray-600"
      >
        &#9654;
      </button>
    </div>
  );
};

export default TwoCourseCarousel;


