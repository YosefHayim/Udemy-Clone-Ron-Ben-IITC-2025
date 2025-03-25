import { FaCirclePlay } from 'react-icons/fa6';
import { IoIosRibbon } from 'react-icons/io';
import { MdOutlineStarPurple500, MdPeople } from 'react-icons/md';

const InstructorRatings: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-[0.5em]">
      <div className="flex  items-center gap-[0.5em]">
        <MdOutlineStarPurple500 />
        <p>4.3 Instructor Rating</p>
      </div>
      <div className="flex  items-center gap-[0.5em]">
        <IoIosRibbon />
        <p>Reviews</p>
      </div>
      <div className="flex  items-center gap-[0.5em]">
        <MdPeople />
        <p>48,064 Students</p>
      </div>
      <div className="flex  items-center gap-[0.5em]">
        <FaCirclePlay />
        <p>8 Courses</p>
      </div>
    </div>
  );
};

export default InstructorRatings;
