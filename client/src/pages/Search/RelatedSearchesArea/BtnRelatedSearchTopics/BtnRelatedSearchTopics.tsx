const BtnRelatedSearchTopics = ({
  topicName = "the complete 2024 web development bootcamp",
}) => {
  return (
    <button className="bg-black text-white rounded-[100em] py-[0.5em] px-[0.7em]  font-bold">
      {topicName}
    </button>
  );
};

export default BtnRelatedSearchTopics;
