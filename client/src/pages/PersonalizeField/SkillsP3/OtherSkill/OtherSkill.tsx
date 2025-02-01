import { GoPlus } from "react-icons/go";

const OtherSkill = ({ otherSkillName = "Microsoft Excel" }) => {
  return (
    <div className="hover:border-black rounded-[100em] bg-white p-[0.7em] border border-gray-400 font-bold min-w-min flex flex-row items-center cursor-pointer">
      <GoPlus className="text-[1.5em]" />
      <p>{otherSkillName}</p>
    </div>
  );
};

export default OtherSkill;
