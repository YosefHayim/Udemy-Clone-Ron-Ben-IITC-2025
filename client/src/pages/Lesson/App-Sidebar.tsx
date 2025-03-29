import { useSidebar } from '@/components/ui/sidebar';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
} from '@/components/ui/sidebar';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { WiStars } from "react-icons/wi";
import { CourseSidebarMenu } from './CourseSliderBarMenu';
import fetchCourseById from '@/services/courseService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CustomTrigger from './CustomTrigger';

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
              
  <span className='flex justify-between pt-4  border-black  bg-white'>
  <Tabs defaultValue="course content " className="w-full ">
    <TabsList className="w-full flex justify-start rounded-none bg-white  border-b border-gray-200">
      <TabsTrigger
        className="relative text-lg font-semibold  rounded-none focus:outline-none data-[state=active]:border-b-2 data-[state=active]:border-black "
        value="course content"
      >
        course content
      </TabsTrigger>

      <TabsTrigger
        className="relative text-lg font-semibold rounded-none  focus:outline-none data-[state=active]:border-b-2 data-[state=active]:border-x-0 data-[state=active]:border-black "
        value="AI Assistant"
      >
<WiStars className='text-purple-500'/>
AI Assistant
        <span className="bg-[#D1D2E0] rounded-md ml-2 px-1 py-0.5 text-sm">Beta</span>
      </TabsTrigger>
    </TabsList>

    <TabsContent value="course content" className="absolute">
      <CourseSidebarMenu courseId={courseId || ''} />
    </TabsContent>

    <TabsContent value="AI Assistant">
      Make changes to your account here.
    </TabsContent>
  </Tabs>
  {open && (
    <div className="">
      <CustomTrigger open={open} toggleSidebar={toggleSidebar} position="insideSidebar" />
    </div>
  )}
</span>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* Centered Trigger */}
    </>
  );
}
