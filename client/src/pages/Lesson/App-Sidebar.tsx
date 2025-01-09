import { useSidebar } from "@/components/ui/sidebar";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";
import courseData from "@/db";
import { CourseSidebarMenu } from "./CourseSliderBarMenu";
import CustomTrigger from "../Lesson/CustomTrigger";

export function AppSidebar() {
  const { toggleSidebar, open } = useSidebar();

  return (
    <>
      <Sidebar className="absolute min-h-full top-[69px] bg-white" side="left">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <CourseSidebarMenu sections={courseData.sections} />
            </SidebarGroupContent>
          </SidebarGroup>
          {/* Trigger inside the sidebar */}
          {open && (
            <div className="p-4">
              <CustomTrigger open={open} toggleSidebar={toggleSidebar} position="insideSidebar" />
            </div>
          )}
        </SidebarContent>
      </Sidebar>

      {/* Trigger outside the sidebar */}
      {!open && (
        <div className="fixed top-1/2 left-4 transform -translate-y-1/2">
          <CustomTrigger open={open} toggleSidebar={toggleSidebar} position="centered" />
        </div>
      )}
    </>
  );
}
