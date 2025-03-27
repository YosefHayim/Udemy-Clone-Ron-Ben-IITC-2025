const SkillResult = ({ skillResultName = 'WeChat' }) => {
  return (
    <div className="cursor-pointer text-start">
      <p className="mb-[1em] mt-[0.5em]">{skillResultName}</p>
      <hr />
    </div>
  );
};

export default SkillResult;
