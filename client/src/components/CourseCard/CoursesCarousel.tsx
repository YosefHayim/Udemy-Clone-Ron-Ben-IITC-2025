import React, { useState, useEffect, useRef } from "react";
import CourseTag from "@/components/CourseCard/CourseTag/CourseTag";
import CourseHoverCard from "./CourseHoverCard";
import { Course } from "@/types/types";
import { MdOutlineStarHalf } from "react-icons/md";
import { IoIosStar, IoIosStarOutline, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CoursesCarousel: React.FC<{ searchTerm: string }> = ({
  searchTerm = "",
}) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [hoveredCourse, setHoveredCourse] = useState<Course | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const hoverCardRef = useRef<HTMLDivElement | null>(null); // Reference for the hover card
  const visibleItems = 5; // Number of visible items

  const fetchCourses = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/course/?search=${encodeURI(searchTerm)}`
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
        console.error("Error fetching courses:", data);
      }
    } catch (error) {
      console.error("Error loading courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
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

  const navigate = useNavigate();
  const handleCardClick = (courseId: string) => {
    // console.log(`Navigating to course: ${courseId}`);
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
            return (
              <MdOutlineStarHalf key={i} className="text-[#c4710d] ml-[1px]" />
            );
          } else {
            return (
              <IoIosStarOutline key={i} className="text-[#c4710d] ml-[1px]" />
            );
          }
        })}
      </div>
    );
  };

  return (
    <div className="relative w-full max-w-[80rem] mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4 pl-2 text-[#303141]">
        Because you viewed{" "}
        <span className="text-[#6d28d2] font-bold underline hover:text-[#521e9f]">
          {searchTerm}
        </span>
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
                onMouseEnter={() => setHoveredCourse(course)}
                onMouseLeave={(e) => {
                  const relatedTarget = e.relatedTarget as Node;
                  if (
                    hoverCardRef.current &&
                    hoverCardRef.current.contains(relatedTarget)
                  ) {
                    return; // Don't clear hover state if moving to hover card
                  }
                  setHoveredCourse(null);
                }}
              >
                <div
                  onClick={() => handleCardClick(course._id)}
                  className="cursor-pointer shadow-sm overflow-hidden bg-white flex flex-col maxh-[18rem]"
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
                      <div className="flex">
                        {renderStars(course.averageRating)}
                      </div>
                      <span className="ml-2 text-gray-500 text-xs">
                        ({course.totalRatings.toLocaleString()})
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between py-[0.15rem]">
                      <div>
                        <span className="font-[700] text-[#303141] text-[1rem]">
                          ₪{course.courseDiscountPrice.toFixed(2)}
                        </span>
                        {course.courseFullPrice && (
                          <span className="line-through text-gray-500 text-xs ml-2">
                            ₪{course.courseFullPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="inline-block pt-[0.3rem]">
                      <CourseTag tagName={course.courseTag} />
                    </span>
                  </div>
                </div>

                {hoveredCourse?._id === course._id && (
                  <div
                    ref={hoverCardRef}
                    className="absolute top-0 left-full ml-2"
                    onMouseLeave={() => setHoveredCourse(null)}
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
