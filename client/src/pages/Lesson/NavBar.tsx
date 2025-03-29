import { Link, useLocation, useParams } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { useSidebar } from '@/components/ui/sidebar';



const NavBar: React.FC = () => {
  const location = useLocation();
  const { courseId, id } = useParams<{ courseId: string; id: string }>(); // Get courseId and lessonId from route params
  const { open } = useSidebar(); // Get the sidebar state

  const activePath = location.pathname.split('/').pop(); // Get the active tab

  const tabs = [
    { name: <IoIosSearch />, path: 'search' }, // Icon for the search tab
    { name: 'Overview', path: 'overview' },
    { name: 'Q&A', path: 'qna' },
    { name: 'Notes', path: 'notes' },
    { name: 'Announcements', path: 'announcements' },
    { name: 'Reviews', path: 'reviews' },
    { name: 'Learning Tools', path: 'learning-tools' },
  ];

  // Conditionally add the "Course Content" tab when the sidebar is closed
  if (!open) {
    tabs.splice(1, 0, { name: 'Course Content', path: 'course-content' });
  }

  // Construct the base path dynamically
  const basePath = `/course/${courseId}/lesson/${id}`;

  return (
    <div className="min-w-full px-40 ">
      <nav className="flex max-w-full  flex-wrap border-b bg-white  text-gray-500">
        {tabs.map((tab) => (
          <Link
            key={tab.path}
            to={`${basePath}/${tab.path}`} // Append tab path to the base path
            className={`flex items-center px-4  py-3 text-base  font-bold  ${
              activePath === tab.path ? 'border-b-2 border-black text-black' : 'hover:text-black'
            }`}
          >
            {typeof tab.name === 'string' ? (
              tab.name
            ) : (
              <span className="text-xl">{tab.name}</span> // Render icon if name is not a string
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
