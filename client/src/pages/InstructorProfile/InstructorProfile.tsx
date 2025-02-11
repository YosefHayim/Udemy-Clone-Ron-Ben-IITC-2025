import { useQuery } from "@tanstack/react-query";
import DescriptionOfInstructor from "./DescriptionOfInstructor/DescriptionOfInstructor";
import SocialLinks from "./SocialLinks/SocialLinks";
import getInstructorById from "@/api/users/getInstructorById";
import Loader from "@/components/Loader/Loader";
import { useParams } from "react-router-dom";

const InstructorProfile = () => {
  const params = useParams();
  const instructorId = params.instructorId;

  const { isPending, error, data } = useQuery({
    queryKey: ["instructorInfo", instructorId],
    queryFn: () => getInstructorById(instructorId || ""),
    enabled: !!instructorId,
  });

  if (isPending) {
    return (
      <div>
        <Loader hSize="" useSmallLoading={false} />
      </div>
    );
  }

  if (error) return "An error has occurred: " + error.message;

  document.title = `
    ${data.userId.fullName} | ${data.userId.headline}| Udemy`;

  return (
    <div className="p-[3em] pl-[10em] w-[1000px]">
      <div className="flex flex-row items-start justify-between w-full">
        <div>
          <h2 className="font-bold">INSTRUCTOR</h2>
          <h1 className="font-bold font-[lifeLtstd]">{data.userId.fullName}</h1>
          <h3 className="font-bold">{data.userId.headline}</h3>
          <div className="flex flex-row items-start justify-start gap-[2em] mt-[3em]">
            <div className=" flex flex-col items-start justify-start">
              <b className="text-[1.1em]">Total Students</b>
              <b className="text-[1.6em]">{data.totalStudents}</b>
            </div>
            <div className="flex flex-col items-start justify-start">
              <b className="text-[1.1em] ">Reviews</b>
              <b className="text-[1.6em] ">{data.totalReviews}</b>
            </div>
          </div>
          <div className="mt-[1.5em]">
            <DescriptionOfInstructor
              coursesRelatedIds={data.coursesRelatedIds}
              backgroundOfInstructor={data.backgroundOfInstructor}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[2em]">
          <img
            src={data.userId.profilePic}
            alt=""
            className="rounded-[100em] h-[15em]"
          />
          <SocialLinks links={data.userId.links} />
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
