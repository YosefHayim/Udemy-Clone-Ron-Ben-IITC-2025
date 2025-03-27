import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { Link, useParams, useLocation } from 'react-router-dom';
import { MdOndemandVideo } from 'react-icons/md';

interface CourseContentProps {
  sections: Array<{
    _id: string;
    title: string;
    lessons: Array<{
      _id: string;
      title: string;
      duration?: string;
    }>;
  }>;
}

const SearchTab: React.FC<CourseContentProps> = ({ sections }) => {
  const { courseId } = useParams<{ courseId: string }>();
  const location = useLocation();

  const [searchQuery, setSearchQuery] = useState('');

  // Highlight matching text
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="font-sans font-extrabold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // Filter lessons based on the search query
  const filteredSections = sections
    .map((section) => ({
      ...section,
      lessons: section.lessons.filter((lesson) =>
        lesson.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((section) => section.lessons.length > 0); // Only include sections with matching lessons

  return (
    <div className="flex flex-col items-center justify-center p-10">
      {/* Search Input */}
      <div id="search" className="mb-6 flex items-center justify-between">
        <input
          type="text"
          placeholder="Search course content"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="min-h-[48px] min-w-[744px] rounded-sm border border-black bg-white px-4 text-lg focus:outline-none"
        />
        <IoIosSearch className="ml-2 size-[48px] rounded-[4px] bg-btnColor p-3 text-white" />
      </div>

      {/* Filtered Results */}
      {searchQuery ? (
        filteredSections.length > 0 ? (
          filteredSections.map((section, idx) => (
            <div key={section._id} className="group min-w-[800px] border-y">
              <div className="flex items-center justify-between bg-bgCommercial p-4">
                <span className="text-lg font-medium">
                  Section {idx + 1}: {section.title}
                </span>
              </div>
              <ul className="mt-2 pl-4">
                {section.lessons.map((lesson) => {
                  const isCurrentLesson =
                    location.pathname === `/course/${courseId}/lesson/${lesson._id}/search` ||
                    location.pathname === `/course/${courseId}/lesson/${lesson._id}`;

                  return (
                    <li
                      key={lesson._id}
                      className={`mb-2 flex items-center gap-3 p-2 ${
                        isCurrentLesson ? 'bg-slate-400 text-white' : 'hover:bg-slate-400'
                      }`}
                    >
                      <div className="flex flex-col">
                        <Link
                          to={`/course/${courseId}/lesson/${lesson._id}`}
                          state={{ courseId }}
                          className="ml-2 flex-col text-sm"
                        >
                          <span>{highlightText(lesson.title, searchQuery)}</span>
                          <span
                            className={`flex items-center text-xs ${
                              isCurrentLesson ? 'text-white' : 'text-black'
                            }`}
                          >
                            <MdOndemandVideo />
                            <span>{lesson.duration ? `${lesson.duration} min` : ''}</span>
                          </span>
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))
        ) : (
          // No Results Found
          <div className="mt-10 text-center">
            <h2 className="font-sans text-2xl font-extrabold text-gray-600">No results found</h2>
            <p className="text-gray-500">Try a different search query.</p>
          </div>
        )
      ) : (
        <span className="my-[40px] flex flex-col items-center  self-center">
          <h2 className="font-sans text-2xl font-extrabold text-[##303141] ">Start a new search</h2>
          <h2 className="text-sm text-black ">To find captions, lectures or resources</h2>
        </span>
      )}
    </div>
  );
};

export default SearchTab;
