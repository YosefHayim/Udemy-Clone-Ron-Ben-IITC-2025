import { IoCloseOutline } from "react-icons/io5";

const Skill = ({ skillName = "Next.js" }) => {
  return (
    <div className="flex w-max cursor-pointer flex-row items-center gap-[0.5em] rounded-[100em] bg-gray-200 p-[0.7em]">
      <b>{skillName}</b>
      <IoCloseOutline className="h-[1.5em] rounded-[100em] text-[1.5em] hover:bg-gray-400" />
    </div>
  );
};

export default Skill;
