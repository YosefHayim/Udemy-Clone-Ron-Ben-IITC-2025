import { tagStyles } from '@/utils/tagStyle';

const CourseTag: React.FC<{ tagName?: string; bgColorTag?: string }> = ({
  tagName = 'Bestseller',
}) => {
  const style = tagStyles[tagName] || 'bg-gray-100 text-gray-800';

  return (
    <span
      className={`${style} inline-block rounded-md px-2 py-1 font-sans text-xs font-extrabold`}
      style={{
        whiteSpace: 'nowrap', // Prevents the span from expanding to fit the container
        width: 'auto', // Ensures the width is only as wide as the content
      }}
    >
      {tagName}
    </span>
  );
};

export default CourseTag;
