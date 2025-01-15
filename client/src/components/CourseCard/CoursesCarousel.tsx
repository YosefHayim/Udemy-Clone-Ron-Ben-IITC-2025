import React, { useState, useEffect } from "react";
import CourseImg from "@/components/CourseCard/CourseImg/CourseImg";
import CourseTitle from "@/components/CourseCard/CourseTitle/CourseTitle";
import CourseInstructor from "@/components/CourseCard/CourseInstructor/CourseInstructor";
import CourseRatings from "@/components/CourseCard/CourseRatings/CourseRatings";
import CourseLength from "@/pages/ViewCoursePageInfo/MoreCoursesByInstructor/CourseLength/CourseLength";
import CourseTag from "@/components/CourseCard/CourseTag/CourseTag";
import CoursePrice from "@/components/CourseCard/CoursePrice/CoursePrice";

interface Course {
  _id: string;
  courseName: string;
  courseImg: string;
  courseDescription: string;
  courseFullPrice: number;
  courseDiscountPrice: number;
  averageRating: number;
  reviews: any[];
  totalRatings: number;
  courseLevel: string;
  totalCourseDuration: number;
  totalCourseLessons: number;
  courseInstructor: { fullName: string };
  isNew?: boolean;
  isBestseller?: boolean;
}

const CoursesCarousel: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 5; // Exibimos 5 itens por vez
  const moveItems = 4; // Movemos 4 itens por clique

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
    const nextIndex = currentIndex + moveItems;
    if (nextIndex + visibleItems <= courses.length) {
      setCurrentIndex(nextIndex); // Move 4 cursos para a direita
    } else {
      setCurrentIndex(0); // Reinicia o carrossel
    }
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - moveItems;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex); // Move 4 cursos para a esquerda
    } else {
      setCurrentIndex(Math.max(0, courses.length - visibleItems)); // Vai para o final
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
              transform: `translateX(-${(currentIndex / visibleItems)}%)`,
              width: `${(courses.length / visibleItems) * 100}%`,
            }}
          >
            {courses.map((course) => (
              <div
                key={course._id}
                className="w-[20%] px-4 box-border"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 p-4">
                  <CourseImg courseImg={course.courseImg} widthChosen="260px" />
                  <CourseTitle title={course.courseName} />
                  {/* <CourseRecap recapInfo={course.courseDescription} /> */}
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
                    <CourseTag tagName="Bestseller" bgColorTag="bg-bestSellerTag" />
                  )}
                  {course.isNew && (
                    <CourseTag tagName="New" bgColorTag="bg-green-500" />
                  )}
                  <CoursePrice
                    fullPrice={course.courseFullPrice}
                    discountPrice={course.courseDiscountPrice}
                  />
                </div>
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
