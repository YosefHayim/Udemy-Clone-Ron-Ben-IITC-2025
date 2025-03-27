import { useQuery } from '@tanstack/react-query';
import DescriptionOfInstructor from './DescriptionOfInstructor/DescriptionOfInstructor';
import SocialLinks from './SocialLinks/SocialLinks';
import getInstructorById from '@/api/users/getInstructorById';
import Loader from '@/components/Loader/Loader';
import { useParams } from 'react-router-dom';

const InstructorProfile = () => {
  const params = useParams();
  const instructorId = params.instructorId;

  const { isPending, error, data } = useQuery({
    queryKey: ['instructorInfo', instructorId],
    queryFn: () => getInstructorById(instructorId || ''),
    enabled: !!instructorId,
  });

  if (isPending) {
    return (
      <div>
        <Loader hSize="1000px" useSmallLoading={false} />
      </div>
    );
  }

  if (error) return 'An error has occurred: ' + error.message;

  document.title = `
    ${data.userId.fullName} | ${data.userId.headline}| Udemy`;

  console.log(data);

  return (
    <div className="flex w-full  items-center justify-center p-[3em] pl-[10em]">
      <div className="flex w-max  items-start justify-around gap-[3em]">
        <div>
          <h2 className="font-sans font-extrabold">INSTRUCTOR</h2>
          <h1 className="font-[lifeLtstd] font-sans font-extrabold">{data.userId.fullName}</h1>
          <h3 className="font-sans font-extrabold">{data.userId.headline}</h3>
          <div className="mt-[3em] flex  items-start justify-start gap-[2em]">
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
        <div className="flex flex-col items-center justify-center gap-[2em]">
          <img src={data.userId.profilePic} alt="" className="h-[15em] rounded-[100em]" />
          <SocialLinks links={data.userId.links} />
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
