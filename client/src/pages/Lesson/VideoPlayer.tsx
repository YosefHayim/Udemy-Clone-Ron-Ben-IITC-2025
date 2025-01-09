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
  const { open, toggleSidebar } = useSidebar();

  return (
    <div className="relative video-player bg-[#1C1D1F]" style={{ width, height }}>
      {/* Centered Trigger */}
      {!open && (
        <div className="absolute inset-0 flex justify-start pb-80 items-center ">
          <CustomTrigger open={open} toggleSidebar={toggleSidebar} position="centered" />
        </div>
      )}
      <ReactPlayer url={videoUrl} controls={controls} playing={playing} width="100%" height="100%" />
    </div>
  );
};

export default VideoPlayer;
