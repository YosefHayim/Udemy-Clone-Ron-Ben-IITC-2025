import BtnRelatedSearchTopics from "./BtnRelatedSearchTopics/BtnRelatedSearchTopics";
import RelatedSearchesFooterSearch from "./RelatedSearchesFooterSearch/RelatedSearchesFooterSearch";
import RelatedSearchHoverCard from "./RelatedSearchHoverCard/RelatedSearchHoverCard";

const RelatedSearchesArea = () => {
  return (
    <div className="w-[1000px]">
      <RelatedSearchesFooterSearch />
      {/* <RelatedSearchHoverCard /> */}
      <div className="flex flex-wrap gap-[0.5em]">
        <BtnRelatedSearchTopics topicName={"web developer bootcamp"} />
        <BtnRelatedSearchTopics topicName={"typescript react"} />
        <BtnRelatedSearchTopics topicName={"modern javascript"} />
        <BtnRelatedSearchTopics
          topicName={"the complete 2023 web development bootcamp"}
        />
        <BtnRelatedSearchTopics
          topicName={"the complete 2024 web development bootcamp"}
        />
        <BtnRelatedSearchTopics topicName={"react typescript"} />
        <BtnRelatedSearchTopics topicName={"brad schiff"} />
      </div>
    </div>
  );
};

export default RelatedSearchesArea;
