import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchCourseById from "@/services/courseService";
import { FaStar } from "react-icons/fa";
import { BsPatchExclamationFill } from "react-icons/bs";
import { MdOutlineLanguage } from "react-icons/md";
import { IoMdAlarm } from "react-icons/io";

const OverviewTab: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();

  // Log courseId for debugging
  // console.log("Raw courseId from useParams:", courseId);

  const sanitizedCourseId = courseId?.trim().replace(/^:/, "");

  const { data, isLoading, error } = useQuery({
    queryKey: ["course", sanitizedCourseId],
    queryFn: () => {
      // console.log("Calling fetchCourseById with:", sanitizedCourseId);
      return fetchCourseById(sanitizedCourseId || "");
    },
    enabled: !!sanitizedCourseId,
  });

  // console.log("React Query status:", { isLoading, error, data });

  if (isLoading) return;
  <div>{/* <Loader /> */}</div>;
  if (error) return <div>Error loading course data</div>;
  if (!data) return <div>No course data found.</div>;

  const course = data;

  // console.log("Fetched course data:", course);

  return (
    <div id="overview" className="p-20 pt-5">
      <div className="ml-4">
        <h2 className="text-2xl mb-4">
          {course.courseDescription || "No Description"}
        </h2>
        <div className="flex items-start gap-10 text-xl py-1">
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-[#4d3105] text-base font-bold mr-2">
                {course.averageRating.toFixed(1) || "0.0"}
              </span>
              <span className="text-star text-base font-bold">
                <FaStar />
              </span>
            </div>
            <span className="text-gray-500 text-xs">
              {course.totalRatings || 0} ratings
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-[#000000] text-base font-bold mr-2">
                {course.totalStudentsEnrolled.count || "0.0"}
              </span>
            </div>
            <span className="text-gray-500 text-xs">students</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-[#000000] text-base font-bold mr-2">
                {course.totalCourseDuration || "0.0"} hours
              </span>
            </div>
            <span className="text-gray-500 text-xs">Total</span>
          </div>
        </div>
        <div className="flex flex-col ">
          <span>
            <div className="inline-flex flex-row items-center text-sm pt-3 gap-2">
              <BsPatchExclamationFill />
              Last update{" "}
              {new Date(course.updatedAt).toLocaleString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </div>
          </span>
        </div>

        <span>
          <div className="inline-flex flex-row items-center text-sm pt-3 gap-2">
            <MdOutlineLanguage />
            {course.courseLanguages}
          </div>
        </span>
      </div>
      <div className="mt-4 p-4 flex flex-col gap-4 border rounded-lg bg-white shadow-sm">
        <div className=" flex flex-row items-center gap-4">
          <IoMdAlarm className="text-4xl" />
          <h1 className="font-bold text-lg">Schedule learning time</h1>
        </div>
        <p className="text-sm text-gray-600">
          Learning a little each day adds up. Research shows that students who
          make learning a habit are more likely to reach their goals. Set time
          aside to learn and get reminders using your learning scheduler.
        </p>
        <div className="flex flex-row gap-2">
          <button className="focus:outline-none bg-black text-white px-4 py-2 rounded hover:bg-gray-600">
            Get started
          </button>
          <button className="focus:outline-none px-4 py-2 text-black  border-gray-300 rounded hover:border-white ">
            Dismiss
          </button>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center w-full border-t">
        <span className="self-start text-xl">Description</span>
        <span className="px-4 text-l">{course.courseDescription}</span>
        <span></span>
      </div>
    </div>
  );
};

export default OverviewTab;
