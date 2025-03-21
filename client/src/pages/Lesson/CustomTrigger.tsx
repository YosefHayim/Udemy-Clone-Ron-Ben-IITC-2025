import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { FaTimes, FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

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
  const navigate = useNavigate();
  const location = useLocation();

  const handleSidebarToggle = () => {
    toggleSidebar();

    if (!open) {
      // Check if the current URL doesn't already end with '/overview'
      const currentPath = location.pathname;
      if (!currentPath.endsWith("/overview")) {
        // Replace the current URL with the '/overview' route
        const newPath = `${currentPath
          .split("/")
          .slice(0, -1)
          .join("/")}/overview`;
        navigate(newPath);
      }
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleSidebarToggle}
            className={`z-40 ${
              isInsideSidebar
                ? "flex items-center bg-transparent text-xl font-semibold text-gray-700"
                : "rounded-ts group   top-40 flex w-10 items-center overflow-hidden border bg-purple-500 bg-opacity-60 py-3 pl-2 text-2xl text-white transition-all duration-300 hover:w-80 hover:border-0 hover:bg-[##892DE1]"
            } transform transition-all duration-300 ${
              isInsideSidebar ? "" : "absolute"
            }`}
          >
            {open ? (
              isInsideSidebar ? (
                <IoClose className=" " />
              ) : (
                <FaTimes />
              )
            ) : (
              <>
                <span className="rotate-180 text-white transition-all duration-300 group-hover:left-4">
                  <FaArrowRight className="size-5" />
                </span>
                <span className="duration-400 whitespace-nowrap pl-5 text-lg opacity-0 transition-opacity group-hover:relative group-hover:ml-0 group-hover:opacity-100">
                  Ai Assistant & Course Content
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
