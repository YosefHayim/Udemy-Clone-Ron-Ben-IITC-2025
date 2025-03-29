const BtnRelatedSearchTopics = ({ topicName = "the complete 2024 web development bootcamp" }) => {
  return (
    <button className="rounded-[100em] bg-black px-[0.7em] py-[0.5em] font-sans font-extrabold text-white  focus:outline-none">
      {topicName}
    </button>
  );
};

export default BtnRelatedSearchTopics;
