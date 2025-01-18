import inverted from "/images/logo-udemy-inverted.svg?url";
import { AiOutlineTrophy } from "react-icons/ai";
import { IoIosArrowDown, IoMdShareAlt } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";

const Navbar: React.FC<{ courseName: string }> = ({ courseName }) => {
  return (
    <nav className="border-b border-gray-700 absolute top-0 left-0 w-full bg-[#1C1D1F] text-white z-10">
      <div className=" mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left-aligned logo and title */}
        <div className="flex items-center justify-center space-x-4 ">
          <img src={inverted} alt="Logo" className="w-20 bg-transparent " />
          <span className="text-gray-500 min-h-4">|</span>
          <span className="text-lg font-semibold">{courseName}</span>
        </div>

        {/* Right-aligned buttons */}
        <div className="flex  items-center space-x-4">
          <div>
            <AiOutlineTrophy className="rounded-lg text-gray-600 border-gray-600" />
            <button className="hover:text-gray-300">Your Progress</button>
            <IoIosArrowDown />
          </div>
          <div>
            <button className="bg-gray-700 px-3 border-white py-1 rounded-sm text-sm hover:bg-gray-600">
              Share
            </button>
            <IoMdShareAlt />
          </div>
          <button className="hover:text-gray-300 border-white rounded-sm">
            <HiDotsVertical />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
