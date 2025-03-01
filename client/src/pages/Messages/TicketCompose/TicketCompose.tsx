const TicketCompose: React.FC<{ text: string; title: string }> = ({
  text,
  title,
}) => {
  return (
    <div className="flex flex-col justify-start items-start w-[320px] gap-[0.5em] border border-gray-300 rounded-[1em] p-[1em]">
      <b>{title}</b>
      <button className="text-btnColor border border-btnColor p-[0.6em] rounded-[0.2em] font-bold hover:bg-purpleHoverBtn">
        {text}
      </button>
    </div>
  );
};

export default TicketCompose;
