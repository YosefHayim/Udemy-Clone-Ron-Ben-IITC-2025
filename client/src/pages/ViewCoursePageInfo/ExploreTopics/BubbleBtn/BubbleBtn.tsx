const BubbleBtn: React.FC<{ similarTopicName: string }> = ({
  similarTopicName = 'Electronics',
}) => {
  return (
    <div className="cursor-pointer rounded-[0.5em] border border-gray-300 p-[0.5em] hover:bg-hoverDivGray">
      <b>{similarTopicName}</b>
    </div>
  );
};

export default BubbleBtn;
