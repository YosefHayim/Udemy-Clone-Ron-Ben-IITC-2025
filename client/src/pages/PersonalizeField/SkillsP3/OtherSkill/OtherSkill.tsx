import { GoPlus } from "react-icons/go";

const OtherSkill = ({ otherSkillName = "Microsoft Excel" }) => {
  return (
    <div className="flex min-w-min cursor-pointer flex-row items-center rounded-[100em] border border-gray-400 bg-white p-[0.7em] font-bold hover:border-black">
      <GoPlus className="text-[1.5em]" />
      <p>{otherSkillName}</p>
    </div>
  );
};

export default OtherSkill;
