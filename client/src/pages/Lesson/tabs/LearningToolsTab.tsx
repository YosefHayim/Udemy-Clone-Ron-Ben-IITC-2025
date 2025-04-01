import React, { useState } from 'react';

const defaultProfileImage = '/api/placeholder/40/40';

const dummyQuestions = [
  {
    id: 1,
    title: 'About the Course Update',
    content: 'UPDATE:I removed the old content marked as LEGACY and I added a bunch of new content- Brand new sections on...',
    author: 'Maximilian',
    authorImage: defaultProfileImage,
    lectureNumber: 642,
    timeAgo: '1 year ago',
    views: 692,
    comments: 145
  },
  {
    id: 2,
    title: 'No ESLint configuration (e.g .eslintrc) found for file',
    content: 'Hi, Team! downloaded the local starting project for Section 15: Sending HTTP Requests, and ran \'npm start\'...',
    author: 'Daniel',
    authorImage: defaultProfileImage,
    lectureNumber: 233,
    timeAgo: '1 year ago',
    views: 32,
    comments: 20
  },
  {
    id: 3,
    title: 'I cannot add a folder nor a file in CodeSandbox starting Project',
    content: 'I\'m brand new in this course, and in the JavaScript Refresher section, in Section 13, there is a Reason why...',
    author: 'Francois',
    authorImage: '/api/placeholder/40/40',
    lectureNumber: 14,
    timeAgo: '8 months ago',
    views: 26,
    comments: 13
  },
  {
    id: 4,
    title: 'Isn\'t map() already returning a new array? why do we need to destructre it again?',
    content: 'Why isconst updatedBoard = [...prevGameBoard.map(innerArray=> [...innerArray])]better than simply...',
    author: 'Israel',
    authorImage: '/api/placeholder/40/40',
    lectureNumber: 81,
    timeAgo: '1 year ago',
    views: 12,
    comments: 10
  }
];

const QnATab = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All lectures');
  const [selectedSort, setSelectedSort] = useState('Sort by recommended');

  return (
    <div id="qna" className="p-4 md:p-6 lg:p-8 max-w-6xl mx-auto">
      {/* Search and filter section */}
      <div className="mb-8">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search all course questions"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Filters:</label>
            <select 
              className="p-2 border border-gray-300 rounded-md w-full md:w-60"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option>All lectures</option>
              <option>My lectures</option>
              <option>Lectures 1-10</option>
              <option>Lectures 11-20</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sort by:</label>
            <select 
              className="p-2 border border-gray-300 rounded-md w-full md:w-60"
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
            >
              <option>Sort by recommended</option>
              <option>Most recent</option>
              <option>Most viewed</option>
              <option>Most commented</option>
            </select>
          </div>
          
          <div className="md:ml-auto">
            <label className="block text-sm font-medium text-gray-700 mb-1 invisible md:visible">Filter:</label>
            <button className="p-2 border border-purple-500 text-purple-600 rounded-md w-full md:w-auto">
              <span className="flex items-center justify-center">
                Filter questions
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Featured questions section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">
          Featured questions in this course <span className="text-gray-500">(5)</span>
        </h2>
        
        <div className="space-y-6">
          {dummyQuestions.map(question => (
            <div key={question.id} className="border-b pb-6">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <img 
                    src={question.authorImage} 
                    alt={question.author} 
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-1">{question.title}</h3>
                  <p className="text-gray-600 mb-2 text-sm">{question.content}</p>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium text-purple-600">{question.author}</span>
                    <span className="mx-2">·</span>
                    <span>Lecture {question.lectureNumber}</span>
                    <span className="mx-2">·</span>
                    <span>{question.timeAgo}</span>
                  </div>
                </div>
                <div className="flex-shrink-0 flex flex-col items-end">
                  <div className="flex items-center mb-2">
                    <span className="font-bold mr-1">{question.views}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold mr-1">{question.comments}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Ask a Question button */}
      {/* <div className="text-center mt-8">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors">
          Ask a New Question
        </button>
      </div> */}
    </div>
  );
};

export default QnATab;