import { MdPeople } from "react-icons/md";
import Skill from "./Skill/Skill";
import { IoMdSearch } from "react-icons/io";
import OtherSkill from "./OtherSkill/OtherSkill";
import SkillResult from "./SkillResult/SkillResult";
import axios from "axios";
import { useState } from "react";

const SkillsP3 = () => {
  document.title = "Select Skills | Udemy";
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (input: string) => {
    if (input.length > 1) {
      try {
        const response = await axios.get(
          `https://api.datamuse.com/words?rel_trg=${encodeURIComponent(
            input
          )}&max=30`
        );

        setSuggestions(response.data.map((item: any) => item.word));
      } catch (error) {
        console.log("Error fetching autocomplete suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="w-[700px] text-start p-[2em] ml-[8em] mb-[2em]">
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
        <div className="hover:bg-gray-100 w-[600px] flex flex-row items-center flex-wrap gap-[0.5em] border border-gray-400 rounded-[0.3em] p-[1em] mb-[0.5em]">
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
          <form className="w-full flex flex-row items-center justify-start text-[1.2em] gap-[0.2em]">
            <div className="hover:bg-purpleHoverBtn p-[0.5em] rounded-[0.2em]">
              <IoMdSearch className="text-[1.5em]" />
            </div>
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                fetchSuggestions(e.target.value);
              }}
              type="text"
              placeholder="Search for a skill"
              className="hover:bg-gray-100 bg-white w-full p-[0.5em] placeholder:text-gray-500 focus:outline-none caret-gray-400"
            />
          </form>
        </div>
        <div
          className={`${
            suggestions.length > 0
              ? "overflow-y-auto h-[300px] absolute z-[200] bg-white"
              : "hidden"
          } w-[600px] shadow-skillsShadow rounded-[0.5em] border border-gray-300 text-center p-[2em]`}
        >
          {suggestions.length > 0 ? (
            <div>
              {suggestions.map((word, index) => (
                <SkillResult key={index} skillResultName={word} />
              ))}
            </div>
          ) : (
            <div>
              <b>No results</b>
            </div>
          )}
        </div>
        <div className="flex flex-col items-start justify-start gap-[1em] mb-[1.5em]">
          <b className="font-bold">Software</b>
          <OtherSkill otherSkillName="Microsoft Excel" />
        </div>
        <div>
          <b>Other skills</b>
          <div className="w-[600px] flex flex-row items-center flex-wrap gap-[0.5em] rounded-[0.3em] p-[1em] mb-[0.5em]">
            <OtherSkill otherSkillName="Finance Fundamentals" />
            <OtherSkill otherSkillName="Financial Modeling" />
            <OtherSkill otherSkillName="Financial Statement" />
            <OtherSkill otherSkillName="Accounting" />
            <OtherSkill otherSkillName="Financial Accounting" />
            <OtherSkill otherSkillName="Investing" />
            <OtherSkill otherSkillName="Company Valuation" />
            <OtherSkill otherSkillName="Stock Trading" />
            <OtherSkill otherSkillName="Financial Management" />
            <OtherSkill otherSkillName="Value Investing" />
            <OtherSkill otherSkillName="Financial Markets" />
            <OtherSkill otherSkillName="Corporate Finance" />
            <OtherSkill otherSkillName="Fundamental Analysis" />
            <OtherSkill otherSkillName="Technical Analysis(finance)" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsP3;
