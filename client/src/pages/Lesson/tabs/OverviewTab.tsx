import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCourseById } from "@/services/courseService";
import { FaStar } from "react-icons/fa";

const OverviewTab: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();

  // Log courseId for debugging
  console.log("Raw courseId from useParams:", courseId);

  const sanitizedCourseId = courseId?.trim().replace(/^:/, "");

  const { data, isLoading, error } = useQuery({
    queryKey: ["course", sanitizedCourseId],
    queryFn: () => {
      console.log("Calling fetchCourseById with:", sanitizedCourseId);
      return fetchCourseById(sanitizedCourseId);
    },
    enabled: !!sanitizedCourseId,
  });

  console.log("React Query status:", { isLoading, error, data });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading course data.</div>;
  if (!data) return <div>No course data found.</div>;

  const course = data.data;

  console.log("Fetched course data:", course);

  return (
    <div id="overview" className="p-20 pt-5">
      <h2 className="text-xl mb-4">{course.courseDescription || "No Description"}</h2>
      <div className="flex items-start gap-10 text-xl py-4">
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="text-[#4d3105] text-xl font-bold mr-2">
              {course.averageRating.toFixed(1) || "0.0"}
            </span>
            <span className="text-[#b4690e] text-xl font-bold">
              <FaStar />
            </span>
          </div>
          <span className="text-gray-500 text-sm">{course.totalRatings || 0} ratings</span>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
