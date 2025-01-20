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
import { MdOutlineStarHalf } from "react-icons/md";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

const CoursesCarousel: React.FC<{ searchTerm: string }> = ({
  searchTerm = "",
}) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [hoveredCourse, setHoveredCourse] = useState<Course | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 5; // Número de itens visíveis por vez

  // Função para buscar cursos da API
  const fetchCourses = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/course/?search=${encodeURI(searchTerm)}`
      );
      const data = await response.json();
      console.log(data)
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

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex items-center justify-between ">
        {Array.from({ length: 5 }, (_, i) => {
          if (i < fullStars) {
            return <IoIosStar key={i} className="text-[#c4710d] ml-[1px]" />;
          } else if (i === fullStars && hasHalfStar) {
            return (
              <MdOutlineStarHalf key={i} className="text-[#c4710d] ml-[1px]" />
            );
          } else {
            return <IoIosStarOutline key={i} className="text-[#c4710d] ml-[1px]" />;
          }
        })}
      </div>
    );
  };

  return (
    <>


      <div className="relative w-full max-w-7xl mx-auto py-8">
        <h2 className="text-xl font-semibold mb-4">
          Because you viewed{" "}
          <span className="text-purple-600 font-bold">{searchTerm}</span>
        </h2>

        {courses.length > 0 && (
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-300"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
                width: `${courses.length * (100 / visibleItems)}%`,
              }}
            >
              {courses.map((course) => (
                <div
                  key={course._id}
                  className="w-[calc(100%/5)] px-[0.5rem] box-border relative"
                >
                  <div className="shadow-sm overflow-hidden bg-white flex flex-col h-[350px]">
                    <div className="h-40 w-full">
                      <img
                        src={course.courseImg}
                        alt={course.courseName}
                        className="border border-gray-300 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-1 flex flex-col justify-between flex-grow">
                      {/* Título */}
                      <h3 className="font-bold text-sm text-gray-900 line-clamp-2">
                        {course.courseName}
                      </h3>

                      {/* Nome do Instrutor */}
                      <p className="text-xs text-gray-600 truncate">
                        {course.courseInstructor.fullName}
                      </p>

                      {/* Rating Section */}
                      <div className="flex items-center text-sm text-[#c4710d] font-bold">
                        {/* Rating Score */}
                        <span className="mr-1">{course.averageRating.toFixed(1)}</span>

                        {/* Stars */}
                        <div className="flex">
                          {renderStars(course.averageRating)}
                        </div>

                        {/* Total Ratings */}
                        <span className="ml-2 text-gray-500 text-xs">
                          ({course.totalRatings.toLocaleString()})
                        </span>
                      </div>


                      {/* Price */}
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="font-bold text-gray-900">
                            ₪{course.courseDiscountPrice.toFixed(2)}
                          </span>
                          {course.courseFullPrice && (
                            <span className="line-through text-gray-500 text-xs ml-2">
                              ₪{course.courseFullPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Tag */}
                      <span className="inline-block">
                        <CourseTag tagName={course.courseTag} />
                      </span>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Botões de navegação */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10 shadow-md hover:bg-gray-600"
          aria-label="Scroll Left"
        >
          &#9664;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10 shadow-md hover:bg-gray-600"
          aria-label="Scroll Right"
        >
          &#9654;
        </button>
      </div>
    </>

  );
};

export default CoursesCarousel;
