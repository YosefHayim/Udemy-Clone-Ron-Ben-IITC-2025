import { useSidebar } from "@/components/ui/sidebar";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

import courseData from "@/db"; // Import the course data
import { CourseSidebarMenu } from "../components/CourseSliderBarMenu"; // Import the menu component

export function AppSidebar() {
  function CustomTrigger() {
    const { toggleSidebar } = useSidebar();

    return (
      <button
        onClick={toggleSidebar}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Toggle Sidebar
      </button>
    );
  }

  return (
    <>
      {/* Sidebar */}
      <Sidebar side="left">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>{courseData.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <CourseSidebarMenu sections={courseData.sections} />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* Custom Trigger */}
      <div className="mt-4">
        <CustomTrigger />
      </div>
    </>
  );
}
