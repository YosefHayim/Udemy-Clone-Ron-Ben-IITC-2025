const BubbleBtn = ({ similarTopicName = "Electronics" }) => {
  return (
    <div className="rounded-[100em] border border-black p-[0.5em] hover:bg-hoverDivGray cursor-pointer">
      <b>{similarTopicName}</b>
    </div>
  );
};

export default BubbleBtn;
