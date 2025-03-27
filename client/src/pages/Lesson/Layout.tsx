import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from './App-Sidebar';
import TopNavBar from './TopNavBar';
import fetchCourseById from '@/services/courseService';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Get the courseId from the URL
  const { courseId } = useParams<{ courseId: string }>();

  // Fetching course data using the courseId from the URL
  const { data, isLoading, error } = useQuery({
    queryKey: ['course', courseId],
    queryFn: () => fetchCourseById(courseId || ''),
    enabled: !!courseId, // Only fetch if the courseId exists
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return (
      <div>
        <h1>Error</h1>
        <p>Failed to load course data.</p>
      </div>
    );
  }

  const courseData = data;

  return (
    <SidebarProvider
      style={{
        '--sidebar-width': '28rem',
        '--sidebar-width-mobile': '20rem',
      }}
    >
      <header>
        <TopNavBar courseName={courseData.courseName} courseId={courseId} />
      </header>
      <SidebarInset>
        <main className="top-[64px] w-full ">{children}</main>
      </SidebarInset>
      <AppSidebar />
    </SidebarProvider>
  );
};

export default Layout;
