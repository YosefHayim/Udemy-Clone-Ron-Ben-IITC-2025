import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useSidebar } from "@/components/ui/sidebar";
import CustomTrigger from "../Lesson/CustomTrigger";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

interface VideoPlayerProps {
  videoUrl: string;
  currentLesson: any;
  nextLesson: any;
  prevLesson: any;
  onNavigate: (lessonId: string) => void;
  controls?: boolean;
  playing?: boolean;
  width?: string;
  height?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  currentLesson,
  nextLesson,
  prevLesson,
  onNavigate,
  controls = true,
  playing = false,
  width = "100%",
  height = "820px",
}) => {
  const { open, toggleSidebar } = useSidebar();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-full group video-player bg-[#1C1D1F]"
      style={{ width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Display Current Lesson Title */}
      <div
  className="absolute top-[50px] w-full text-start pl-10 text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-black/75 to-transparent"
>
  {currentLesson.title}
</div>


      {/* Centered Trigger */}
      {!open && (
        <div className="absolute inset-0 flex justify-start pb-80 items-center">
          <CustomTrigger
            open={open}
            toggleSidebar={toggleSidebar}
            position="centered"
          />
        </div>
      )}

      {/* Video Player */}
      <ReactPlayer
        url={videoUrl}
        controls={isHovered}
        playing={playing}
        width="100%"
        height="100%"
      />

      {!open && (
      <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4 z-[1000]">
        {prevLesson && (
          <button
            className="text-white bg-gray-800 hover:bg-gray-700 rounded-full p-4"
            onClick={() => onNavigate(prevLesson._id)}
            title={`Previous: ${prevLesson.title}`}
            aria-label={`Go to ${prevLesson.title}`}
          >
            <MdArrowBackIos size={24} />
          </button>
        )}
        {nextLesson && (
          <button
            className="text-white bg-gray-800 hover:bg-gray-700 rounded-full p-4"
            onClick={() => onNavigate(nextLesson._id)}
            title={`Next: ${nextLesson.title}`}
            aria-label={`Go to ${nextLesson.title}`}
          >
            <MdArrowForwardIos size={24} />
          </button>
        )}
      </div>
      )}
    </div>
  );
};

export default VideoPlayer;
