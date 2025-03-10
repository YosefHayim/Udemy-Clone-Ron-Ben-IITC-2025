const BubbleBtn: React.FC<{ similarTopicName: string }> = ({
  similarTopicName = "Electronics",
}) => {
  return (
    <div className="rounded-[0.5em] border border-gray-300 p-[0.5em] hover:bg-hoverDivGray cursor-pointer">
      <b>{similarTopicName}</b>
    </div>
  );
};

export default BubbleBtn;
