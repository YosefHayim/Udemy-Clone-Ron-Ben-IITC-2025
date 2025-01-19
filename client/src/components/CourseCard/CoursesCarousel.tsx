import React, { useState, useEffect } from "react";
import CourseImg from "@/components/CourseCard/CourseImg/CourseImg";
import CourseTitle from "@/components/CourseCard/CourseTitle/CourseTitle";
import CourseInstructor from "@/components/CourseCard/CourseInstructor/CourseInstructor";
import CourseRatings from "@/components/CourseCard/CourseRatings/CourseRatings";
import CourseLength from "@/pages/ViewCoursePageInfo/MoreCoursesByInstructor/CourseLength/CourseLength";
import CourseTag from "@/components/CourseCard/CourseTag/CourseTag";
import CoursePrice from "@/components/CourseCard/CoursePrice/CoursePrice";
import CourseHoverCard from "./CourseHoverCard";
import { Course } from "@/types/types";

const CoursesCarousel: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [hoveredCourse, setHoveredCourse] = useState<Course | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 5; // Número de itens visíveis por vez

  // Função para buscar cursos da API
  const fetchCourses = async () => {
    try {
      const response = await fetch(
        "https://udemy-clone-ron-ben.onrender.com/api/course"
      );
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

  const handleNext = () => {
    const nextIndex = currentIndex + 1; // Mova um item por vez
    if (nextIndex < Math.ceil(courses.length / visibleItems)) {
      setCurrentIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <div className="py-8 relative w-full max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">
        Because you viewed{" "}
        <span className="text-purple-600">"Carousel Title"</span>
      </h2>

      {courses.length > 0 && (
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`, // Corrigido cálculo do transform
              width: `${courses.length * (100 / visibleItems)}%`, // Corrigida largura total
            }}
          >
            {courses.map((course) => (
              <div
                key={course._id}
                className="w-[20%] px-4 box-border relative"
                onMouseEnter={() => setHoveredCourse(course)} // Define o hover no curso
                onMouseLeave={() => setHoveredCourse(null)} // Remove o hover
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 p-4">
                  <CourseImg courseImg={course.courseImg} widthChosen="260px" />
                  <CourseTitle title={course.courseName} />
                  <CourseInstructor
                    instructor={course.courseInstructor.fullName}
                  />
                  <CourseRatings
                    totalRatings={course.totalRatings}
                    avgRatings={course.averageRating}
                  />
                  <CourseLength
                    courseLevel={course.courseLevel}
                    totalMinutes={course.totalCourseDuration}
                    totalLectures={course.totalCourseLessons}
                  />
                  {course.isBestseller && (
                    <CourseTag
                      tagName="Bestseller"
                      bgColorTag="bg-bestSellerTag"
                    />
                  )}
                  {course.isNew && (
                    <CourseTag tagName="New" bgColorTag="bg-green-500" />
                  )}
                  <CoursePrice
                    fullPrice={course.courseFullPrice}
                    discountPrice={course.courseDiscountPrice}
                  />
                </div>

                {/* Renderiza o hover card quando o curso está com hover */}
                {hoveredCourse?._id === course._id && (
                  <CourseHoverCard course={hoveredCourse} />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10 shadow-md hover:bg-gray-600"
      >
        &#9664;
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10 shadow-md hover:bg-gray-600"
      >
        &#9654;
      </button>
    </div>
  );
};

export default CoursesCarousel;
