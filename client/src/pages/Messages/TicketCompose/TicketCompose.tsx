const TicketCompose: React.FC<{ text: string; title: string }> = ({
  text,
  title,
}) => {
  return (
    <div className="flex w-[320px] flex-col items-start justify-start gap-[0.5em] rounded-[1em] border border-gray-300 p-[1em]">
      <b>{title}</b>
      <button className="rounded-[0.2em] border border-btnColor p-[0.6em] font-sans font-extrabold text-btnColor hover:bg-purpleHoverBtn focus:outline-none">
        {text}
      </button>
    </div>
  );
};

export default TicketCompose;
