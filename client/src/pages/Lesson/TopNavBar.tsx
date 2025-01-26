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
    <nav className="border-b z-50 border-gray-700 absolute top-0 left-0 w-full bg-[#1D1E27] text-white z-10">
      <div className="mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left-aligned logo and title */}
        <Link to="/">
          <div className="flex items-center justify-center space-x-4">
            <img src={inverted} alt="Logo" className="w-20 bg-transparent" />
            <span className="text-gray-500 min-h-4">|</span>
            <span className="text-lg font-semibold">{courseName}</span>
          </div>
        </Link>

        {/* Right-aligned buttons */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={toggleTooltip}
              className="flex items-center gap-2 focus:outline-none justify-between text-lg rounded-sm"
            >
              {/* Outer container with dynamic conic-gradient border */}
              <div
                className="rounded-full flex items-center justify-center"
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
                  className="rounded-full flex items-center justify-center bg-[#1D1E27]"
                  style={{
                    width: "35px",
                    height: "35px",
                  }}
                >
                  <AiOutlineTrophy
                    className="text-[#595C73]"
                    style={{ fontSize: "18px" }}
                  />
                </div>
              </div>
              <span className="hover:text-gray-300 text-sm">Your Progress</span>
              <IoIosArrowDown className="text-sm" />
            </button>
            {showTooltip && (
              <div className="absolute  top-[2.8rem] left-1/2 transform -translate-x-1/2 w-[250px] p-4 bg-white text-black rounded-lg shadow-lg border border-gray-200">
                {/* Tooltip pointer */}
                <div className="absolute  -top-[0.4rem] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-200"></div>
                {isLoading ? (
                  <p className="text-sm font-semibold">Loading...</p>
                ) : isError ? (
                  <p className="text-sm text-red-500">Failed to load progress.</p>
                ) : (
                  <div>
                    <p className="text-sm font-semibold">
                      {completedLessons} of {totalLessons} complete.
                    </p>
                    <p className="text-xs mt-1 text-gray-500">
                      Finish course to get your certificate.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
          <div>
            <button className="border px-3 h-[2rem] flex p-4 justify-between items-center hover:border-white py-1 rounded-sm text-sm hover:bg-gray-600">
              Share
              <IoMdShareAlt className="ml-2" />
            </button>
          </div>
          <button className="hover:bg-gray-300 border-white rounded-sm">
            <HiDotsVertical className="border size-8 p-2 rounded-sm" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
