import React from "react";
// import Maximilian from "/images/Maximilian.jpg";

const QnAPreview = () => {
  // Dummy data for questions
  const dummyQuestions = [
    {
      id: 1,
      title: "About the Course Update",
      content:
        "UPDATE:I removed the old content marked as LEGACY and I added a bunch of new content- Brand new sections on...",
      author: "Maximilian",
      // authorImage: Maximilian,
      lectureNumber: 642,
      timeAgo: "1 year ago",
      views: 692,
      comments: 145,
    },
    {
      id: 2,
      title: "No ESLint configuration (e.g .eslintrc) found for file",
      content:
        "Hi, Team! downloaded the local starting project for Section 15: Sending HTTP Requests, and ran 'npm start'...",
      author: "Daniel",
      authorImage: "/api/placeholder/40/40",
      lectureNumber: 233,
      timeAgo: "1 year ago",
      views: 32,
      comments: 20,
    },
    {
      id: 3,
      title: "I cannot add a folder nor a file in CodeSandbox starting Project",
      content:
        "I'm brand new in this course, and in the JavaScript Refresher section, in Section 13, there is a Reason why...",
      author: "Francois",
      authorImage: "/api/placeholder/40/40",
      lectureNumber: 14,
      timeAgo: "8 months ago",
      views: 26,
      comments: 13,
    },
    {
      id: 4,
      title: "Isn't map() already returning a new array? why do we need to destructre it again?",
      content:
        "Why isconst updatedBoard = [...prevGameBoard.map(innerArray=> [...innerArray])]better than simply...",
      author: "Israel",
      authorImage: "/api/placeholder/40/40",
      lectureNumber: 81,
      timeAgo: "1 year ago",
      views: 12,
      comments: 10,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl bg-white p-4 md:p-6 lg:p-8">
      {/* Search and filter section */}
      <div className="mb-8">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search all course questions"
            className="w-full rounded-md border border-gray-300 p-3"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-md bg-purple-600 p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Filters:</label>
            <select className="w-full rounded-md border border-gray-300 p-2 md:w-60">
              <option>All lectures</option>
              <option>My lectures</option>
              <option>Lectures 1-10</option>
              <option>Lectures 11-20</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Sort by:</label>
            <select className="w-full rounded-md border border-gray-300 p-2 md:w-60">
              <option>Sort by recommended</option>
              <option>Most recent</option>
              <option>Most viewed</option>
              <option>Most commented</option>
            </select>
          </div>

          <div className="md:ml-auto">
            <label className="invisible mb-1 block text-sm font-medium text-gray-700 md:visible">
              Filter:
            </label>
            <button className="w-full rounded-md border border-purple-500 p-2 text-purple-600 md:w-auto">
              <span className="flex items-center justify-center">
                Filter questions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured questions section */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold">
          Featured questions in this course <span className="text-gray-500">(5)</span>
        </h2>

        <div className="space-y-6">
          {dummyQuestions.map((question) => (
            <div key={question.id} className="border-b pb-6">
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <img
                    src={question.authorImage}
                    alt={question.author}
                    className="h-10 w-10 rounded-full"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="mb-1 text-lg font-semibold">{question.title}</h3>
                  <p className="mb-2 text-sm text-gray-600">{question.content}</p>

                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium text-purple-600">{question.author}</span>
                    <span className="mx-2">·</span>
                    <span>Lecture {question.lectureNumber}</span>
                    <span className="mx-2">·</span>
                    <span>{question.timeAgo}</span>
                  </div>
                </div>
                <div className="flex flex-shrink-0 flex-col items-end">
                  <div className="mb-2 flex items-center">
                    <span className="mr-1 font-bold">{question.views}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1 font-bold">{question.comments}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QnAPreview;
