const SkillResult = ({ skillResultName = "WeChat" }) => {
  return (
    <div className="text-start cursor-pointer">
      <p className="mb-[1em] mt-[0.5em]">{skillResultName}</p>
      <hr />
    </div>
  );
};

export default SkillResult;
