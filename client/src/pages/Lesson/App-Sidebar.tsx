import { useSidebar } from "@/components/ui/sidebar";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";
import { CourseSidebarMenu } from "./CourseSliderBarMenu";
import CustomTrigger from "../Lesson/CustomTrigger";
import { fetchCourseById } from "@/services/courseService";
import React, { useEffect, useState } from "react";

export function AppSidebar() {
  const [courseData, setCourseData] = useState<any>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { toggleSidebar, open } = useSidebar();

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

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, [open, toggleSidebar]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCourseById("67800ee6c7d3d0bd68dceb66");
        setCourseData(data.data);
      } catch (error) {
        console.error("Failed to fetch course data.");
      }
    };
    fetchData();
  }, []);

  if (!courseData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Sidebar className="absolute min-h-full top-[69px] bg-white" side="left">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <CourseSidebarMenu sections={courseData.sections} />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* Centered Trigger */}
      
    
    </>
  );
}
