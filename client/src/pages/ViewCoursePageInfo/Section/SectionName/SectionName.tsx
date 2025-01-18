const SectionName: React.FC<{ name: string }> = ({ name }) => {
  if (!name) {
    return;
  }

  return (
    <div>
      <h2 className="font-bold">{name}</h2>
    </div>
  );
};

export default SectionName;
