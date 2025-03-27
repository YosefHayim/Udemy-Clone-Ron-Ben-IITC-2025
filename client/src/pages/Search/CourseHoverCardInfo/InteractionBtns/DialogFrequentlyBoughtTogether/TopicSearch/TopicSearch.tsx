import React from 'react';

const TopicSearch: React.FC<{ text: string }> = ({ text = '' }) => {
  return (
    <div className="rounded-[0.2em] border border-gray-400 p-2 px-3 text-center font-sans font-extrabold text-black">
      {text}
    </div>
  );
};

export default TopicSearch;
