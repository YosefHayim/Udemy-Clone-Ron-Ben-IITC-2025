import { IoMdHeartEmpty } from "react-icons/io";

const Heart = () => {
  return (
    <button className="text-black font-bold hover:text-purple-800">
      <IoMdHeartEmpty className="w-6 h-6" />
    </button>
  );
};

export default Heart;
