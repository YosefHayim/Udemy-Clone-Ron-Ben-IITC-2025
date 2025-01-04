import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex items-center border border-gray-300 rounded-full overflow-hidden w-full max-w-lg">
      <input
        type="text"
        placeholder="Search for anything"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 px-4 py-2 focus:outline-none"
      />
      <button
        className="bg-gray-200 px-4 py-2 hover:bg-gray-300"
        onClick={() => console.log(`Searching for: ${searchTerm}`)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 18.75a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 16.5l4.5 4.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
