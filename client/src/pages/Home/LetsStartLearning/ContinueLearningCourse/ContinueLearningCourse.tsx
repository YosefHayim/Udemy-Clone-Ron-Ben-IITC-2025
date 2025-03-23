import { BsDot } from "react-icons/bs";
import placeholderCourseViewImg from "/images/placeholderCourseViewImg.png";
import { FaCirclePlay } from "react-icons/fa6";

const ContinueLearningCourse = () => {
  // Need to add course lesson id to navigate on each map of this.
  return (
    <div className="max-w-[350px] cursor-pointer hover:bg-gray-100">
      <div className="flex flex-row items-start justify-start border border-gray-300">
        <div className="relative h-[10em] w-[150px]">
          <img
            src={placeholderCourseViewImg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-[30%] translate-x-3/4">
            <FaCirclePlay
              size={40}
              className="rounded-full bg-gray-600 text-white"
            />
          </div>
        </div>
        <div>
          <div className="flex h-[10em] w-full flex-col items-start justify-between p-2">
            <div className="flex w-full flex-col gap-2">
              <b className="text-gray-600">
                Web design for Web Developers: Build...
              </b>
              <b>8. Working with Images</b>
            </div>
            <div className="flex items-center justify-start">
              <b>Lecture</b>
              <BsDot />
              <p>4m</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueLearningCourse;
