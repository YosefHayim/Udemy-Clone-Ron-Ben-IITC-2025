import { useQuery } from "@tanstack/react-query";
import { fetchCourseProgress } from "../../services/ProgressService"; // Import your fetch function
import inverted from "/images/logo-udemy-inverted.svg?url";
import { AiOutlineTrophy } from "react-icons/ai";
import { IoIosArrowDown, IoMdShareAlt } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar: React.FC<{ courseName: string; courseId: string }> = ({
  courseName,
  courseId,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleTooltip = () => {
    setShowTooltip((prev) => !prev);
  };
  type CourseProgress = {
    totalLessons: number;
    completedLessons: number;
    percentageCompleted: number;
  };
  // Use React Query to fetch progress data
  const { data, isLoading, isError } = useQuery({
    queryKey: ["courseProgress", courseId], // Query key
    queryFn: () => fetchCourseProgress(courseId), // Query function
    enabled: !!courseId, // Fetch only if courseId exists
  });

  // Extract progress data
  const totalLessons = data?.totalLessons || 0;
  const completedLessons = data?.completedLessons || 0;
  const percentageCompleted = data?.percentageCompleted || 0;

  return (
    <nav className="absolute left-0 top-0 z-50 w-full border-b border-gray-700 bg-grayUdemy text-white">
      <div className="mx-auto flex items-center justify-between px-4 py-3">
        {/* Left-aligned logo and title */}
        <Link to="/">
          <div className="flex items-center justify-center space-x-4">
            <img src={inverted} alt="Logo" className="w-20 bg-transparent" />
            <span className="min-h-4 text-gray-500">|</span>
            <span className="text-lg font-semibold">{courseName}</span>
          </div>
        </Link>

        {/* Right-aligned buttons */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={toggleTooltip}
              className="flex items-center justify-between gap-2 rounded-sm text-lg focus:outline-none"
            >
              {/* Outer container with dynamic conic-gradient border */}
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: "40px",
                  height: "40px",
                  background: `conic-gradient(
                    #C0C4FC ${percentageCompleted * 360}deg,
                    #595C73 ${percentageCompleted * 360}deg
                  )`,
                  padding: "2px",
                }}
              >
                {/* Inner container to create the border effect */}
                <div
                  className="flex items-center justify-center rounded-full bg-grayUdemy"
                  style={{
                    width: "35px",
                    height: "35px",
                  }}
                >
                  <AiOutlineTrophy
                    className="text-grayNavbarTxt"
                    style={{ fontSize: "18px" }}
                  />
                </div>
              </div>
              <span className="text-sm hover:text-gray-300">Your Progress</span>
              <IoIosArrowDown className="text-sm" />
            </button>
            {showTooltip && (
              <div className="absolute  left-1/2 top-[2.8rem] w-[250px] -translate-x-1/2 transform rounded-lg border border-gray-200 bg-white p-4 text-black shadow-lg">
                {/* Tooltip pointer */}
                <div className="absolute  -top-[0.4rem] left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 transform border-l border-t border-gray-200 bg-white"></div>
                {isLoading ? (
                  <p className="text-sm font-semibold">Loading...</p>
                ) : isError ? (
                  <p className="text-sm text-red-500">
                    Failed to load progress.
                  </p>
                ) : (
                  <div>
                    <p className="text-sm font-semibold">
                      {completedLessons} of {totalLessons} complete.
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Finish course to get your certificate.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
          <div>
            <button className="flex h-[2rem] items-center justify-between rounded-sm border p-4 px-3 py-1 text-sm hover:border-white hover:bg-gray-600 focus:outline-none">
              Share
              <IoMdShareAlt className="ml-2" />
            </button>
          </div>
          <button className="rounded-sm border-white hover:bg-gray-300 focus:outline-none">
            <HiDotsVertical className="size-8 rounded-sm border p-2" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
