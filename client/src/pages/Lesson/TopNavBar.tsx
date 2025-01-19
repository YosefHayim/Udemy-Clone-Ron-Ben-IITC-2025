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
        <div className="flex  items-center  space-x-4">
        <button >
          <div className="flex items-center gap-1 justify-between text-lg rounded-sm">
          <AiOutlineTrophy className="size-8 text-sm p-1  mr-1 rounded-full border text-gray-600 border-gray-600"/>
          <span className="hover:text-gray-300">Your Progress</span >
          <IoIosArrowDown />
          </div>
          </button>
          <div>
          <button className="border px-3 h-[2rem] flex p-4 justify-between items-center hover:border-white py-1 rounded-sm text-sm hover:bg-gray-600">
            Share
          <IoMdShareAlt className="ml-2" />
          </button>
          </div>
          <button className="hover:bg-gray-300 border-white rounded-sm">
          <HiDotsVertical className="border size-8 p-2 rounded-sm size-5"/>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
