import { IoCloseOutline } from "react-icons/io5";

const Skill = ({ skillName = "Next.js" }) => {
  return (
    <div className="flex flex-row items-center gap-[0.5em] bg-gray-200 rounded-[100em] p-[0.7em] w-max cursor-pointer">
      <b>{skillName}</b>
      <IoCloseOutline className="text-[1.5em] hover:bg-gray-400 rounded-[100em] h-[1.5em]" />
    </div>
  );
};

export default Skill;
