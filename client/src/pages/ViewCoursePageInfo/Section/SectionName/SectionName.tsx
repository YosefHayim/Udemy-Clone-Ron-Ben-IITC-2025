const SectionName = ({ name }) => {
  if (!name) {
    return;
  }

  console.log(name);

  return (
    <div>
      <h2 className="font-bold">{name}</h2>
    </div>
  );
};

export default SectionName;
