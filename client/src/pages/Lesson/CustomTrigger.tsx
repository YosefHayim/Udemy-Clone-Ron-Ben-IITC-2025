import React from "react";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { FaTimes, FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface CustomTriggerProps {
  open: boolean;
  toggleSidebar: () => void;
  position?: "insideSidebar" | "centered";
  tooltipOpenText?: string;
  tooltipCloseText?: string;
}

const CustomTrigger: React.FC<CustomTriggerProps> = ({
  open,
  toggleSidebar,
  position = "centered",
  tooltipOpenText = "Close Sidebar",
  tooltipCloseText = "Open Sidebar",
}) => {
  const isInsideSidebar = position === "insideSidebar";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <button
  onClick={toggleSidebar}
  className={`p-2 z-40 ${
    isInsideSidebar
      ? "text-gray-700 bg-transparent flex items-center font-semibold "
      : "bg-gray-500/50 hover:bg-gray-500 text-white rounded-sm group flex items-center w-10 overflow-hidden transition-all duration-300 hover:w-48"
  }  transform transition-all duration-300 ${
    isInsideSidebar ? "" : "absolute"
  }`}
>
  {open ? (
    isInsideSidebar ? (
      <IoClose className="text-xl" />
    ) : (
      <FaTimes className="mr-2" />
    )
  ) : (
    <>
      {/* Icon (always visible, shifts to the right on hover) */}
      <span className="text-white  transition-all duration-300 group-hover:left-4">
        <FaArrowRight />
      </span>

      {/* Text (hidden by default, appears on hover) */}
      <span className=" whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:relative group-hover:ml-6 transition-opacity duration-400">
        Course Content
      </span>
    </>
  )}
</button>

        </TooltipTrigger>
        <TooltipContent>
          <p>{open ? tooltipOpenText : tooltipCloseText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CustomTrigger;
