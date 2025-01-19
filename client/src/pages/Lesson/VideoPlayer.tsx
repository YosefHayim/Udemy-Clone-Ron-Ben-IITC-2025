import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useSidebar } from "@/components/ui/sidebar";
import CustomTrigger from "../Lesson/CustomTrigger";
import { MdArrowBackIos, MdPause } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import {  PlayIcon } from "lucide-react";
import Loader from "@/components/Loader/Loader";





interface VideoPlayerProps {
  videoUrl: string;
  currentLesson: any;
  lessonIndex: number; // Add lessonIndex to props
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
  lessonIndex,
  nextLesson,
  prevLesson,
  onNavigate,
  playing = false,
  width = "100%",
  height = "820px",
}) => {
  const { open, toggleSidebar } = useSidebar();
  const [isHovered, setIsHovered] = useState(false);
  const [paused, setPaused] = useState(!playing); // Track the paused state
  const [loading, setLoading] = useState(false); // Loader state


  const handleVideoEnd = () => {
    setLoading(true); // Show loader
    setTimeout(() => {
      if (nextLesson) {
        onNavigate(nextLesson._id); // Navigate to the next lesson
      }
      setLoading(false); // Hide loader after navigation
    }, 1000); // Adjust the delay as needed
  };


  return (
    <div
      className="relative w-full h-full group video-player bg-[#1D1E27]"
      style={{ width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Display Current Lesson Title */}
      <div className="absolute top-[50px] w-full text-start text-xl pl-10 text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-black/75 to-transparent">
        {lessonIndex}. {currentLesson.title}
      </div>


      {/* Button to toggle paused state */}
      <div
        className={`absolute inset-0 flex items-center z-0 justify-center ${
          paused ? "opacity-100 transition-opacity-0 " : "opacity-0"
        } transition-opacity duration-500`}
      >
        {paused && (
          <PlayIcon
            size={80}
            color="white"
            className="bg-slate-950 rounded-full bg-opacity-70 p-4"
          />
        )}
      </div>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-400 bg-opacity-75 z-50">
          <div className="loader"></div> 
            <Loader hSize="1000px" useSmallLoading={false} />
        </div>
      )}



      {/* Centered Trigger */}
      {!open && window.innerWidth > 1000 && ( // Adjust the size threshold as needed
  <div className="absolute inset-0 flex justify-start pb-80 items-center">
    <CustomTrigger
      open={open}
      toggleSidebar={toggleSidebar}
      position="centered"
    />

    {/* Pause or Play Icon */}

  </div>
)}
  

      {/* Video Player */}
      <ReactPlayer
        url={videoUrl}
        controls={isHovered}
        playing={playing}
        width="100%"
        height="100%"
        onPause={() => setPaused(true)} // Set paused to true when paused
        onPlay={() => setPaused(false)} // Set paused to false when playing
        onEnded={handleVideoEnd} // Handle video end

      />

{!open && (
  <div className="absolute min- h-20 top-1/2 transform -translate-y-1/2 flex justify-between w-full z-[1000]">
    <button 
    className={`text-white  bg-gradient-to-r bg-purple-500 bg-opacity-60   hover:bg-[#892DE1] p-1  ${
      prevLesson ? "" : "invisible"
    }`}
    onClick={prevLesson ? () => onNavigate(prevLesson._id) : undefined}
    title={prevLesson ? `Previous: ${prevLesson.title}` : ""}
    aria-label={prevLesson ? `Go to ${prevLesson.title}` : ""}
  >
    <MdArrowBackIos size={24} />
  </button>

  {/* Next Button */}
  <button
    className={`text-white bg-gradient-to-r bg-purple-500 bg-opacity-60   hover:bg-[#892DE1] p-1 ${
      nextLesson ? "" : "invisible"
    }`}
    onClick={nextLesson ? () => onNavigate(nextLesson._id) : undefined}
    title={nextLesson ? `Next: ${nextLesson.title}` : ""}
    aria-label={nextLesson ? `Go to ${nextLesson.title}` : ""}
  >
    <MdArrowForwardIos size={24} />
  </button>
  </div>
)}

          <button
            className={`text-white bg-gray-800 hover:bg-gray-700 rounded-sm p-4 ${
              nextLesson ? "" : "invisible"
            }`}
            onClick={nextLesson ? () => onNavigate(nextLesson._id) : undefined}
            title={nextLesson ? `Next: ${nextLesson.title}` : ""}
            aria-label={nextLesson ? `Go to ${nextLesson.title}` : ""}
          >
            <MdArrowForwardIos size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
