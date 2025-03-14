import React from "react";

const TopicSearch: React.FC<{ text: string }> = ({ text = "" }) => {
  return <div className="border border-gray-300 p-2 font-bold">{text}</div>;
};

export default TopicSearch;
