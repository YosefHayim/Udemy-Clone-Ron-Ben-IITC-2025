

import React, { useState, useEffect } from "react";
import CourseTag from "@/components/CourseCard/CourseTag/CourseTag";
import CourseHoverCard from "./CourseHoverCard";
import { Course } from "@/types/types";
import { MdOutlineStarHalf } from "react-icons/md";
import { IoIosStar, IoIosStarOutline, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CoursesCarousel: React.FC<{ searchTerm: string }> = ({ searchTerm = "" }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [hoveredCourse, setHoveredCourse] = useState<Course | null>(null);
  const [hoverCardPosition, setHoverCardPosition] = useState({ top: 0, left: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 5; // Número de itens visíveis no carrossel

  // Função para buscar cursos
  const fetchCourses = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/course/?search=${encodeURI(searchTerm)}`);
      const data = await response.json();
      if (data.status === "Success") {
        const updatedCourses = data.response.map((course: any) => ({
          ...course,
          isNew: course.totalRatings < 10,
          isBestseller: course.totalRatings > 50,
        }));

        setCourses(updatedCourses);
      } else {
        console.error("Erro ao buscar cursos:", data);
      }
    } catch (error) {
      console.error("Erro ao carregar cursos:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Função para ir ao próximo conjunto de cursos no carrossel
  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < Math.ceil(courses.length / visibleItems)) {
      setCurrentIndex(nextIndex);
    }
  };

  // Função para voltar ao conjunto anterior no carrossel
  const handlePrev = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
    }
  };

  // Função ao passar o mouse sobre um curso
  const handleMouseEnter = (course: Course, event: React.MouseEvent<HTMLDivElement>) => {
    const courseRect = event.currentTarget.getBoundingClientRect();

    setHoverCardPosition({
      top: courseRect.height / 2, // Centraliza verticalmente
      left: courseRect.width + 10, // Adiciona 10px à direita
    });

    setHoveredCourse(course);
  };

  // Função para remover o hover
  const handleMouseLeave = () => {
    // setHoveredCourse(null);
  };

  const navigate = useNavigate();
  
  const handleCardClick = (courseId: string) => {
    navigate(`/course-view/${courseId}`);
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex items-center justify-between">
        {Array.from({ length: 5 }, (_, i) => {
          if (i < fullStars) {
            return <IoIosStar key={i} className="text-[#c4710d] ml-[1px]" />;
          } else if (i === fullStars && hasHalfStar) {
            return <MdOutlineStarHalf key={i} className="text-[#c4710d] ml-[1px]" />;
          } else {
            return <IoIosStarOutline key={i} className="text-[#c4710d] ml-[1px]" />;
          }
        })}
      </div>
    );
  };

  return (
    <div className="relative w-full mx-auto py-6 overflow-visible">
      <h2 className="text-2xl font-bold mb-4 pl-2 text-[#303141] overflow-visible">
        Because you viewed{" "}
        <span className="text-[#6d28d2] font-bold underline hover:text-[#521e9f]">{searchTerm}</span>
      </h2>

      {courses.length > 0 && (
        <div className="overflow-y-visible relative">
          <div
            className="flex transition-transform duration-300 overflow-y-visible"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
              width: `${courses.length * (100 / visibleItems)}%`,
            }}
          >
            {courses.map((course) => (
              <div
                key={course._id}
                className="w-[calc(100%/5)] px-[0.5rem] box-border relative overflow-visible "
                onMouseEnter={(e) => handleMouseEnter(course, e)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  onClick={() => handleCardClick(course._id)}
                  className="cursor-pointer shadow-sm bg-white flex flex-col maxh-[18rem] overflow-visible"
                >
                  <div className="h-36 w-full">
                    <img
                      src={course.courseImg}
                      alt={course.courseName}
                      className="border border-gray-300 w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <h3 className="font-bold text-[1rem] text-[#303141] line-clamp-2 pt-[0.3rem] leading-5">
                      {course.courseName}
                    </h3>
                    <p className="text-xs text-[#595C73] truncate py-[0.2rem]">
                      {course.courseInstructor.fullName}
                    </p>
                    <div className="flex items-center text-sm text-[#8B4309] font-bold">
                      <span className="mr-1 text-[#8B4309]">
                        {course.averageRating.toFixed(1)}
                      </span>
                      <div className="flex">{renderStars(course.averageRating)}</div>
                      <span className="ml-2 text-gray-500 text-xs">
                        ({course.totalRatings.toLocaleString()})
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between py-[0.15rem]">
                      <span className="font-[700] text-[#303141] text-[1rem]">
                        ₪{course.courseDiscountPrice.toFixed(2)}
                      </span>
                      {course.courseFullPrice && (
                        <span className="line-through text-gray-500 text-xs ml-2">
                          ₪{course.courseFullPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <span className="inline-block pt-[0.3rem]">
                      <CourseTag tagName={course.courseTag} />
                    </span>
                  </div>
                </div>

                {hoveredCourse?._id === course._id && (
                  <div
                    className="absolute !z-[9999] overflow-visible"
                    style={{
                      top: `${hoverCardPosition.top}px`,
                      left: `${hoverCardPosition.left}px`,
                      transform: "translateY(-50%)", // Centraliza verticalmente
                    }}
                  >
                    <CourseHoverCard course={hoveredCourse} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={handlePrev}
        className="absolute left-[-1rem] top-[9.2rem] w-[3.2rem] h-[3.2rem] transform -translate-y-1/2 bg-white text-[#303141] p-3 rounded-full z-10 shadow-md hover:bg-[#E9EAF2]"
        aria-label="Scroll Left"
      >
        <IoIosArrowBack className="text-[1.4rem]" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-[-1rem] top-[9.2rem] w-[3.2rem] h-[3.2rem] transform -translate-y-1/2 bg-white text-[#303141] p-3 rounded-full z-10 shadow-md hover:bg-[#E9EAF2]"
        aria-label="Scroll Right"
      >
        <IoIosArrowForward className="text-[1.4rem]" />
      </button>
    </div>
  );
};

export default CoursesCarousel;
