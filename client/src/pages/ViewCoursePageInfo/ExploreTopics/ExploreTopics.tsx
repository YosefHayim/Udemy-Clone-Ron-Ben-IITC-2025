import BubbleBtn from "./BubbleBtn/BubbleBtn";

const ExploreTopics = () => {
  return (
    <div>
      <h2 className="font-bold text-[1.5em] mb-[0.5em]">
        Explore related topics
      </h2>
      <div className="flex flex-row gap-[0.5em]">
        <BubbleBtn similarTopicName={"Electronics"} />
        <BubbleBtn similarTopicName={"Engineering"} />
        <BubbleBtn similarTopicName={"Teaching & Academics"} />
      </div>
    </div>
  );
};

export default ExploreTopics;
