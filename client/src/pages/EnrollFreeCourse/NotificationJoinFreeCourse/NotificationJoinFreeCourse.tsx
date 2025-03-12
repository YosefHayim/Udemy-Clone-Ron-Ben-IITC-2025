import { RootState } from "@/redux";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import { IoMdShareAlt } from "react-icons/io";

const NotificationJoinFreeCourse = ({ setClicked, isClicked }) => {
  const fullName =
    useSelector((state: RootState) => state?.user?.fullName) || "";

  const handleShareCourse = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div>
      <div className="p-[1em] border border-[#206241] rounded-[0.5em] m-[2em] text-[1.2em]">
        <div className="flex flex-col items-start justify-start gap-[0.5em]">
          <div className="flex flex-row gap-[0.2em] items-center">
            <IoMdCheckmarkCircle className="text-[#206241] text-[1.2em]" />
            <b>Great choice, {fullName}!</b>
          </div>
          <div className="ml-[1em]">
            <button className="focus:outline-none border border-[#206241] rounded-[0.2em] p-[0.4em] text-[#206241] flex flex-row items-center gap-[0.2em]">
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
