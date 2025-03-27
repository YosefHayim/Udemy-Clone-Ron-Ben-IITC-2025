import { CourseTitleProps } from '@/types/types';

const CourseTitle: React.FC<CourseTitleProps> = ({
  title = 'React - The Complete Guide 2024 (incl. Next.js, Redux)',
  shortcutTitle = false,
}) => {
  const cuttedTitleCourse = shortcutTitle && title.length > 20 ? `${title.slice(0, 20)}...` : title;
  return <b className="w-auto">{cuttedTitleCourse}</b>;
};

export default CourseTitle;
