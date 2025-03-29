import React from 'react';

const ParagraphInside = ({ paragraphText }) => {
  return (
    <p className="font-sans text-base font-extrabold leading-tight text-gray-800">
      {paragraphText}
    </p>
  );
};

export default ParagraphInside;
