import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLessonProgress } from "@/services/ProgressService";
import { useSidebar } from "@/components/ui/sidebar";
import CustomTrigger from "../Lesson/CustomTrigger";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { PlayIcon } from "lucide-react";
import CircularProgress from "@mui/material/CircularProgress";
import { Navigate, useNavigate } from "react-router-dom";



interface VideoPlayerProps {
  videoUrl: string;
  currentLesson: any;
  lessonIndex: number;
  nextLesson: any;
  prevLesson: any;
  onNavigate: (lessonId: string) => void;
  courseId: string; // Add courseId for mutation
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
  courseId,
  controls = true,
  playing = true,
  width = "100%",
  height = "780px",
}) => {
  const { open, toggleSidebar } = useSidebar();
  const [isHovered, setIsHovered] = useState(false);
  const [paused, setPaused] = useState(!playing);
  const [loading, setLoading] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function


  // Track the last watched position
  const [lastWatched, setLastWatched] = useState(0);
  const [updateTimer, setUpdateTimer] = useState<NodeJS.Timeout | null>(null);
  const [progress, setProgress] = useState(0)
  const isCanceledRef = useRef(false); // Use ref to track isCanceled
  const playerRef = useRef<ReactPlayer>(null);
  const queryClient = useQueryClient(); // Access queryClient

  // Seek to the last watched time when the video URL changes or lastWatched updates
  useEffect(() => {
    console.log("currentlesson lastwatched",currentLesson.lastWatched);
    
    if (playerRef.current && currentLesson?.lastWatched > 0) {
      playerRef.current.seekTo(currentLesson.lastWatched, "seconds");
      setPaused(true); // Set paused state to true
    }
  }, [videoUrl, currentLesson._id]);
  
  // Mutation to update lesson progress
  const mutation = useMutation({
    mutationFn: ({
      lessonId,
      payload,
    }: { lessonId: string; payload: { lastWatched?: number; completed?: boolean } }) =>
      updateLessonProgress(courseId, lessonId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["courseProgress", courseId]);
      console.log("Lesson progress updated successfully.");
    },
  });

  // Update `lastWatched` time periodically
  const handleProgress = (progress: { playedSeconds: number }) => {
    const currentSeconds = Math.floor(progress.playedSeconds);
    setLastWatched(currentSeconds);
   console.log(currentLesson.lastWatched);
    

    if (!updateTimer) {
      const timer = setTimeout(() => {
        mutation.mutate({
          lessonId: currentLesson._id,
          payload: { lastWatched: currentSeconds },
        });
        setUpdateTimer(null);
        
      }, 2000); // Update every 5 seconds
      setUpdateTimer(timer);
    }
  };

  // Mark lesson as completed when the video ends
  const handleVideoEnd = () => {
    setIsEnded(true); // Set ended state to true
    mutation.mutate({
      lessonId: currentLesson._id,
      payload: { completed: true }, // Mark lesson as completed
    });

    if (nextLesson) {
      setLoading(true);
      let currentProgress = 0;
  
      // Start a timer to increment progress
      const interval = setInterval(() => {
        currentProgress += 10; // Increment progress by 10
        setProgress(currentProgress);
  
        if (currentProgress >= 100) {
          clearInterval(interval); // Stop when progress reaches 100
        }
      }, 150); // Update progress every 200ms (adjust as needed)
  
      
      setTimeout(() => {
        clearInterval(interval);
        if (!isCanceledRef.current) {
          onNavigate(nextLesson._id);
          setProgress(0);
          setLoading(false);
          setPaused(false);

        }
      }, 2500);
    }
  };
  

  

  // Clear the update timer on unmount
  useEffect(() => {
    return () => {
      if (updateTimer) clearTimeout(updateTimer);
    };
  }, [updateTimer]);

  return (
    <div
      className="relative w-full h-full group video-player bg-[#1D1E27]"
      style={{ width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Current Lesson Title */}
      <div className="absolute top-[65px] w-full text-start text-xl pl-10 text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-black/75 to-transparent">
        {lessonIndex}. {currentLesson.title}
      </div>

      {/* Play Button Overlay */}
      <div
        className={`absolute inset-0 flex items-center z-0 justify-center ${
          paused ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      >
       {paused && !isEnded && (
        <PlayIcon
          size={80}
          color="white"
          className="bg-slate-950 rounded-full bg-opacity-70 p-4 absolute inset-0 m-auto flex justify-center items-center"
        />)}
      </div>

      {/* Loader */}
      {loading && (
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 bg-opacity-75 z-50">
    {/* Display the "Up to next" message */}
    <span className="text-sm text-gray-500 mb-2">Up to next</span>
    <span className="text-white text-4xl mb-6">
      {lessonIndex + 1}. {nextLesson?.title}
    </span>

    {/* Circular Progress Loader */}
    <CircularProgress
      variant="determinate"
      value={progress}
      size="6rem"
      color="inherit"
      style={{ color: "#D1D2E0" }} // Custom color
    />
    {/* Play Icon */}
    <div className="absolute  flex items-center justify-center cursor-pointer">
    <PlayIcon
            onClick={() => {
              if (nextLesson) {
                onNavigate(nextLesson._id);
                setLoading(false);
                setProgress(0);
              }
            }}
            size={80}
        color="white"
        className="mt-7 absolute rounded-full bg-opacity-70 p-4 "
      />
    </div>

    {/* Cancel Button */}
    <button
      onClick={() => {
        isCanceledRef.current = true; // Update the ref
        setLoading(false);
        setProgress(0);
      }}
      className="relative mt-6 px-6 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition duration-300 z-10"
    >
      Cancel
    </button>
  </div>
)}


      {/* Centered Custom Trigger */}
      {!open && window.innerWidth > 1000 && (
        <div className="absolute inset-0 flex justify-end  pb-80 items-center">
          <CustomTrigger open={open} toggleSidebar={toggleSidebar} position="centered" />
        </div>
      )}

      {/* React Player */}
      <ReactPlayer
        ref={playerRef} // Attach the ref here
        url={videoUrl}
        controls={isHovered}
        playing={!paused}
        width="100%"
        height="100%"
        onPause={() => setPaused(true)}
        onPlay={() => {
          setPaused(false);
          isCanceledRef.current = false; // Reset ref on play
        }}
        onProgress={handleProgress} // Update progress
        onEnded={handleVideoEnd} // Mark lesson as completed
      />

      {/* Navigation Buttons */}
      {!open && (
        <div className="absolute h-20 top-1/2 transform -translate-y-1/2 flex justify-between w-full z-[1000]">
          <button
            className={`text-white bg-gradient-to-r bg-purple-500 bg-opacity-60 hover:bg-[#892DE1] p-1 ${
              prevLesson ? "" : "invisible"
            }`}
            onClick={prevLesson ? () => onNavigate(prevLesson._id) : undefined}
            title={prevLesson ? `Previous: ${prevLesson.title}` : ""}
          >
            <MdArrowBackIos size={24} />
          </button>

          <button
            className={`text-white bg-gradient-to-r bg-purple-500 bg-opacity-60 hover:bg-[#892DE1] p-1 ${
              nextLesson ? "" : "invisible"
            }`}
            onClick={nextLesson ? () => onNavigate(nextLesson._id) : undefined}
            title={nextLesson ? `Next: ${nextLesson.title}` : ""}
          >
            <MdArrowForwardIos size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
