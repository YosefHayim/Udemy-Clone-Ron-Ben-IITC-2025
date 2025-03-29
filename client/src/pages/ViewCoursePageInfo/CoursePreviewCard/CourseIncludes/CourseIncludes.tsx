import { BiMobile } from "react-icons/bi";
import { IoIosInfinite } from "react-icons/io";
import { IoTrophyOutline } from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";

const CourseIncludes: React.FC = () => {
  return (
    <div className="mb-[0.5em]">
      <h2 className="mb-[0.5em] font-sans font-extrabold">This course includes:</h2>
      <ul className=" flex-col gap-[0.5em]">
        <div className="flex items-center gap-[0.5em]">
          <MdOutlineOndemandVideo />
          <li>2 hours on-demand video</li>
        </div>
        <div className="flex items-center gap-[0.5em]">
          <BiMobile />
          <li>Access on mobile and TV</li>
        </div>
        <div className="flex items-center gap-[0.5em]">
          <IoIosInfinite />
          <li>Full lifetime access</li>
        </div>
        <div className="flex items-center gap-[0.5em]">
          <IoTrophyOutline />
          <li>Certificate on completion</li>
        </div>
      </ul>
    </div>
  );
};

export default CourseIncludes;
