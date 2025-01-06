import React from "react";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { FaTimes, FaArrowRight } from "react-icons/fa";

interface CustomTriggerProps {
  open: boolean;
  toggleSidebar: () => void;
  tooltipOpenText?: string;
  tooltipCloseText?: string;
}

const CustomTrigger: React.FC<CustomTriggerProps> = ({
  open,
  toggleSidebar,
  tooltipOpenText = "Close Sidebar",
  tooltipCloseText = "Open Sidebar",
}) => {
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
                <span className="opacity-0 transition-opacity hover:opacity-100">
                  Course Content
                </span>
                <FaArrowRight />
              </div>
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
