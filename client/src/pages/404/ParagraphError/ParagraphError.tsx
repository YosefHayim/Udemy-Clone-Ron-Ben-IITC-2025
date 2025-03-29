import React from 'react';
import { Link } from 'react-router-dom';

const ParagraphError = () => {
  return (
    <p>
      Visit our
      <Link to="/" className="mx-[0.5em] cursor-pointer text-purpleStatic underline">
        support page
      </Link>
      for further assistance.
    </p>
  );
};

export default ParagraphError;
