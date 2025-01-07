import React from "react";
import ReactPlayer from "react-player";
import { useSidebar } from "@/components/ui/sidebar";
import CustomTrigger from "../Lesson/CustomTrigger";

interface VideoPlayerProps {
  videoUrl: string;
  controls?: boolean;
  playing?: boolean;
  width?: string;
  height?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  controls = true,
  playing = false,
  width = "100%",
  height = "820px",
}) => {
  const { open, toggleSidebar } = useSidebar(); // Access SidebarProvider context

  return (
    <div className="relative video-player bg-[#1C1D1F]" style={{ width, height }}>
      {/* Video Player */}
      <div className="absolute inset-0 flex justify-start items-center">
        <CustomTrigger open={open} toggleSidebar={toggleSidebar} />
      </div>
      <ReactPlayer
        url={videoUrl}
        controls={controls}
        playing={playing}
        width="100%"
        height="100%"
      />

      {/* Centered Custom Trigger */}
    </div>
  );
};

export default VideoPlayer;
