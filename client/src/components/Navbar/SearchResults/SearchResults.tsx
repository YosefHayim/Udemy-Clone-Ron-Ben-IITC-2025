import { SearchResultsProps } from '@/types/types';
import SearchResultRow from './SearchResultRow/SearchResultRow';
import SearchResultsCourseImg from './SearchResultsCourseImg/SearchResultsCourseImg';

const SearchResults: React.FC<{
  isTyping: boolean;
  extraCSS?: string;
  data: any;
}> = ({ isTyping, data }) => {
  return (
    <div>
      {isTyping && (
        <div
          className={`absolute left-0 top-full z-50 w-full flex-col  border border-gray-300 bg-white py-2 shadow-md`}
        >
          {data?.response
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
      )}
    </div>
  );
};

export default SearchResults;
