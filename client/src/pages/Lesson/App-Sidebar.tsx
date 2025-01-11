import { useSidebar } from "@/components/ui/sidebar";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";
import { CourseSidebarMenu } from "./CourseSliderBarMenu";
import CustomTrigger from "../Lesson/CustomTrigger";
import { fetchCourseById } from "@/services/courseService";
import React, { useEffect, useState } from "react";

export function AppSidebar() {
  const { toggleSidebar, open } = useSidebar();
  const [courseData, setCourseData] = useState<any>(null);

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
          {open && (
            <div className="p-4">
              <CustomTrigger open={open} toggleSidebar={toggleSidebar} position="insideSidebar" />
            </div>
          )}
        </SidebarContent>
      </Sidebar>

      {!open && (
        <div className="fixed top-1/2 left-4 transform -translate-y-1/2">
          <CustomTrigger open={open} toggleSidebar={toggleSidebar} position="centered" />
        </div>
      )}
    </>
  );
}
