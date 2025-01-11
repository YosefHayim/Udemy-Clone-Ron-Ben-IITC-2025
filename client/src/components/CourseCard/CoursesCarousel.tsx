import React, { useState } from "react";
import CourseCard from "@/components/CourseCard/CourseCard";

const CoursesCarousel: React.FC = () => {
  const courses = Array.from({ length: 20 }); // Simula 20 cursos (substitua pelo seu array real no futuro)
  const visibleItems = 10; // Número de cursos visíveis ao mesmo tempo
  const [currentIndex, setCurrentIndex] = useState(0);

  // Manipulador para avançar no carrossel
  const handleNext = () => {
    if (currentIndex + visibleItems < courses.length) {
      setCurrentIndex((prev) => prev + 1); // Avança 1 curso
    }
  };

  // Manipulador para retroceder no carrossel
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1); // Retrocede 1 curso
    }
  };

  return (
    <div className="relative py-8">
      <div className="relative flex items-center">
        {/* Botão para rolar para a esquerda */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10 shadow-md hover:bg-gray-600"
          >
            &#9664;
          </button>
        )}

        {/* Contêiner do carrossel */}
        <div className="overflow-hidden flex-1">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
              width: `${(courses.length * 100) / visibleItems}%`,
            }}
          >
            {courses.map((_, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[10%] px-2 box-border" // 10% = 100% / 10 itens
              >
                <CourseCard />
              </div>
            ))}
          </div>
        </div>

        {/* Botão para rolar para a direita */}
        {currentIndex + visibleItems < courses.length && (
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10 shadow-md hover:bg-gray-600"
          >
            &#9654;
          </button>
        )}
      </div>
    </div>
  );
};

export default CoursesCarousel;
