import { useSidebar } from '@/components/ui/sidebar';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
} from '@/components/ui/sidebar';
import { CourseSidebarMenu } from './CourseSliderBarMenu';
import fetchCourseById from '@/services/courseService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [courseData, setCourseData] = useState<any>(null);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean | null>(false);
  const { toggleSidebar, open } = useSidebar();
  let { courseId } = useParams<{ courseId: string | undefined }>(); // Retrieve courseId from the URL

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth <= 1000; // Adjust threshold as needed
      setIsSmallScreen(isSmall);

      // Automatically close the sidebar if the screen is small
      if (isSmall && open) {
        toggleSidebar();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, [open, toggleSidebar]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!courseId) {
          console.log('Missing courseId in the route.');
          return;
        }

        const data = await fetchCourseById(courseId);
        setCourseData(data);
      } catch (error) {
        console.log('Failed to fetch course data.', error);
      }
    };
    fetchData();
  }, [courseId]);

  if (!courseData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Sidebar className="absolute top-[4rem] min-h-full bg-white px-0" side="right">
        <SidebarContent>
          <SidebarGroup className="gap-0 p-0">
            <SidebarGroupContent className="gap-0">
              <CourseSidebarMenu courseId={courseId || ''} />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* Centered Trigger */}
    </>
  );
}
