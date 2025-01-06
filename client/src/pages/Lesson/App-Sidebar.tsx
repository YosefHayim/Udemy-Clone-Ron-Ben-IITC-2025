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

  function CustomTrigger() {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
          <button
  onClick={toggleSidebar}
  className={`p-4 ${
    open ? "bg-black" : "bg-gray-500/50 hover:bg-gray-500"
  } absolute z-10 text-white rounded-md shadow-md transform transition-all duration-300 flex items-center ${
    open ? "" : "w-30 hover:w-[150px]"
  }`}
>
  {open ? (
    <FaTimes className="mr-2" />
  ) : (
    <div className="relative flex items-center">
      <span className="opacity-0 transition-opacity  hover:opacity-100">
        Course Content
      </span>
      <FaArrowRight className="" />
    </div>
  )}
</button>

          </TooltipTrigger>
          <TooltipContent>
            <p>{open ? "Close Sidebar" : "Open Sidebar"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <>
      {/* Sidebar */}
      
      <Sidebar className="fixed min-h-full top-[69px]" side="left">
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
              <CustomTrigger />
            </div>
          )}
        </SidebarContent>
      </Sidebar>

      {/* Trigger outside the sidebar */}
      {!open && (
        <div className="fixed top-1/2 transform -translate-y-1/2">
          <CustomTrigger />
        </div>
      )}
    </>
  );
}
