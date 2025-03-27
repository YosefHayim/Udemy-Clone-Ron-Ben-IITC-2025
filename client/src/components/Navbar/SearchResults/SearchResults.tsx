import { SearchResultsProps } from '@/types/types';
import SearchResultRow from './SearchResultRow/SearchResultRow';
import SearchResultsCourseImg from './SearchResultsCourseImg/SearchResultsCourseImg';
import { useNavigate } from 'react-router-dom';

const SearchResults: React.FC<SearchResultsProps> = ({ isTyping, data, width }) => {
  const navigate = useNavigate();

  if (!data) {
    return undefined;
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const courseId = target.id || target.closest('div')?.id;

    if (courseId) navigate(`/course-view/${courseId}`);
  };

  return (
    <div
      style={{ width: `${width}px` }}
      onClick={handleClick}
      className={`${
        isTyping ? 'flex-col py-2' : 'hidden'
      } absolute left-0 top-full z-50  w-full border border-gray-300 bg-white shadow-md`}
    >
      {data.response
        ?.slice(0, 13)
        .map((result, index: number) => (
          <div key={result._id}>
            {index < 9 ? (
              <SearchResultRow algoWord={result.courseName} courseId={result._id} />
            ) : (
              <SearchResultsCourseImg
                courseName={result.courseName}
                instructorName={result.courseInstructor.fullName}
                courseImg={result.courseImg}
                courseId={result._id}
              />
            )}
          </div>
        ))}
    </div>
  );
};

export default SearchResults;
