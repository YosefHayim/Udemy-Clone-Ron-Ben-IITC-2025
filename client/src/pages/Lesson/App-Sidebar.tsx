import { useSidebar } from "@/components/ui/sidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { FaArrowRight, FaTimes } from "react-icons/fa";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import courseData from "@/db"; // Import the course data
import { CourseSidebarMenu } from "./CourseSliderBarMenu"; // Import the menu component

export function AppSidebar() {
  const { toggleSidebar, open } = useSidebar(); // Access sidebar state and toggle function


  return (
    <>
      {/* Sidebar */}
      
      <Sidebar className=" min-h-full top-[69px] bg-white" side="left">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>{courseData.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <CourseSidebarMenu sections={courseData.sections} />
            </SidebarGroupContent>
          </SidebarGroup>
          {/* Trigger inside the sidebar */}
          {open && (
            <div className="p-4">
            </div>
          )}
        </SidebarContent>
      </Sidebar>

      {/* Trigger outside the sidebar */}
      {!open && (
        <div className="fixed top-1/2 transform -translate-y-1/2">
        </div>
      )}
    </>
  );
}
