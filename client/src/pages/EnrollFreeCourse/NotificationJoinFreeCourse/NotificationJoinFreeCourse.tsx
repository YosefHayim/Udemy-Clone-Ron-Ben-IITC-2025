import { RootState } from '@/redux/store';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { IoMdShareAlt } from 'react-icons/io';

const NotificationJoinFreeCourse = ({ setClicked, isClicked }) => {
  const fullName = useSelector((state: RootState) => state?.user.fullName) || '';

  const handleShareCourse = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div>
      <div className="m-[2em] rounded-[0.5em] border border-[#206241] p-[1em] text-[1.2em]">
        <div className="flex flex-col items-start justify-start gap-[0.5em]">
          <div className="flex  items-center gap-[0.2em]">
            <IoMdCheckmarkCircle className="text-[1.2em] text-[#206241]" />
            <b>Great choice, {fullName}!</b>
          </div>
          <div className="ml-[1em]">
            <button className="flex  items-center gap-[0.2em] rounded-[0.2em] border border-[#206241] p-[0.4em] text-[#206241] focus:outline-none">
              <b onClick={handleShareCourse}>Share this course</b>
              <IoMdShareAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationJoinFreeCourse;
