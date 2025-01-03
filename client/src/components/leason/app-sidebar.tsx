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
              } text-white rounded-md shadow-md transform transition-all duration-300 relative flex items-center ${
                open ? "" : "hover:w-[150px]"
              }`}
              
            >
              {open ? (
                <>
                  <FaTimes className="mr-2" /> 
                </>
              ) : (
                <>
                  <FaArrowRight className="mr-2" />
                  <span className="absolute left-full ml-2 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    Course Content
                  </span>
                </>
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
      <Sidebar side="left">
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
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2">
          <CustomTrigger />
        </div>
      )}
    </>
  );
}
