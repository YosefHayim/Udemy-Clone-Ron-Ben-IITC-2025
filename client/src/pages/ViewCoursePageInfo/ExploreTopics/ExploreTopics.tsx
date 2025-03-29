import BubbleBtn from "./BubbleBtn/BubbleBtn";

const ExploreTopics: React.FC<{
  category: string;
  subCategory: string;
  topic: string;
}> = ({ category, subCategory, topic }) => {
  return (
    <div>
      <h2 className="mb-[0.5em] font-sans text-[1.5em] font-extrabold">Explore related topics</h2>
      <div className="flex  gap-[0.5em]">
        <BubbleBtn similarTopicName={topic} />
        <BubbleBtn similarTopicName={subCategory} />
        <BubbleBtn similarTopicName={category} />
      </div>
    </div>
  );
};

export default ExploreTopics;
