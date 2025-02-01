import { IoCloseOutline } from "react-icons/io5";
import { MdPeople } from "react-icons/md";
import Skill from "./Skill/Skill";
import { IoMdSearch } from "react-icons/io";
import { GoPlus } from "react-icons/go";

const SkillsP3 = () => {
  return (
    <div className="w-[700px] text-start p-[2em] ml-[8em] mt-[2em]">
      <div className="mb-[2em] bg-[#f2efff] flex flex-col items-start justify-start p-[1em] rounded-[1em] border border-[#d2caff] gap-[1em]">
        <div className=" gap-[0.5em] flex flex-row items-center text-[1.2em]">
          <MdPeople />
          <b>You're in the right place!</b>
        </div>
        <p>
          <span className="font-bold">1,607,173</span> people learn Financial
          Analysis on Udemy.
        </p>
      </div>
      <div>
        <h2 className="text-[1.3em] mb-[1em]">
          What skills are you interested in?
        </h2>
        <p className="mb-[1em]">
          Choose a few to start with. You can change these or follow more skills
          in the future.
        </p>
        <div className="w-[600px] flex flex-row items-center flex-wrap gap-[0.5em] border border-gray-400 rounded-[0.3em] p-[1em] mb-[0.5em]">
          <Skill skillName="Next.js" />
          <Skill skillName="JavaScript" />
          <Skill skillName="React JS" />
          <Skill skillName="HTML" />
          <Skill skillName="MongoDB" />
          <Skill skillName="Django" />
          <Skill skillName="Front End Web Development" />
          <Skill skillName="CSS" />
          <Skill skillName="Node.Js" />
          <Skill skillName="Web Development" />
          <form className="w-full flex flex-row items-center justify-start text-[1.2em]">
            <IoMdSearch className="text-[1.4em]" />
            <input
              type="text"
              placeholder="Search for a skill"
              className="bg-white w-full p-[0.5em] placeholder:text-gray-500 focus:outline-none caret-gray-400"
            />
          </form>
        </div>
        <div className="flex flex-col items-start justify-start gap-[1em] mb-[1.5em]">
          <b className="font-bold">Software</b>
          <div className="rounded-[100em] bg-white p-[0.5em] border border-gray-400 font-bold min-w-min flex flex-row items-center">
            <GoPlus className="text-[1.5em]" />
            <p>Microsoft Excel</p>
          </div>
        </div>
        <div>
          <b>Other skills</b>
        </div>
      </div>
    </div>
  );
};

export default SkillsP3;
