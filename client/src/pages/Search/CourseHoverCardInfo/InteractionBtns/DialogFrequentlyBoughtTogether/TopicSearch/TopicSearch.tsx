import React from "react";

const TopicSearch: React.FC<{ text: string }> = ({ text = "" }) => {
  return (
    <div className="border border-gray-400 p-2 font-bold text-black rounded-[0.2em] text-center px-3">
      {text}
    </div>
  );
};

export default TopicSearch;
