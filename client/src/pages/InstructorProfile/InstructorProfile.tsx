import { useQuery } from "@tanstack/react-query";
import DescriptionOfInstructor from "./DescriptionOfInstructor/DescriptionOfInstructor";
import SocialLinks from "./SocialLinks/SocialLinks";
import getInstructorById from "@/api/users/getInstructorById";
import Loader from "@/components/Loader/Loader";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const InstructorProfile = () => {
  const params = useParams();
  const instructorId = params.instructorId;

  const { isPending, error, data } = useQuery({
    queryKey: ["instructorInfo", instructorId],
    queryFn: () => getInstructorById(instructorId),
    enabled: !!instructorId,
  });

  useEffect(() => {
    document.title = `
    ${data?.fullName} | ${data?.headline}| Udemy`;
  }, [data]);

  if (isPending) {
    return (
      <div>
        <Loader hSize="1000px" useSmallLoading={false} />
      </div>
    );
  }

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex w-full  items-center justify-center p-[3em] pl-[10em]">
      <div className="flex w-max  items-start justify-around gap-[3em]">
        <div>
          <h2 className="font-sans font-extrabold">INSTRUCTOR</h2>
          <h1 className="font-[lifeLtstd] font-extrabold">{data?.fullName}</h1>
          <h3 className="font-sans font-extrabold">{data?.headline}</h3>
          <div className="mt-[3em] flex  items-start justify-start gap-[2em]">
            <div className=" flex flex-col items-start justify-start">
              <b className="text-[1.1em]">Total Students</b>
              <b className="text-[1.6em]">{data?.totalStudents}</b>
            </div>
            <div className="flex flex-col items-start justify-start">
              <b className="text-[1.1em] ">Reviews</b>
              <b className="text-[1.6em] ">{data?.totalReviews}</b>
            </div>
          </div>
          <div className="mt-[1.5em]">
            <DescriptionOfInstructor
              coursesCreated={data?.coursesCreated}
              backgroundOfInstructor={data?.backgroundOfInstructor}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[2em]">
          <img src={data?.profilePic} alt="" className="h-[15em] rounded-[100em]" />
          <SocialLinks links={data?.links} />
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
