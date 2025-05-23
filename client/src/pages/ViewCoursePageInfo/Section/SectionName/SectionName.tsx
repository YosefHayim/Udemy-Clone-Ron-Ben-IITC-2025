const SectionName: React.FC<{ name: string }> = ({ name }) => {
  if (!name) {
    return;
  }

  return (
    <div>
      <h2 className="font-sans font-extrabold">{name}</h2>
    </div>
  );
};

export default SectionName;
