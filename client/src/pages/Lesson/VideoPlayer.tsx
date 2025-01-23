import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useMutation } from "@tanstack/react-query";
import { updateLessonProgress } from "@/services/ProgressService";
import { useSidebar } from "@/components/ui/sidebar";
import CustomTrigger from "../Lesson/CustomTrigger";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { PlayIcon } from "lucide-react";
import Loader from "@/components/Loader/Loader";

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
  height = "820px",
}) => {
  const { open, toggleSidebar } = useSidebar();
  const [isHovered, setIsHovered] = useState(false);
  const [paused, setPaused] = useState(!playing);
  const [loading, setLoading] = useState(false);

  // Track the last watched position
  const [lastWatched, setLastWatched] = useState(0);
  const [updateTimer, setUpdateTimer] = useState<NodeJS.Timeout | null>(null);

  // Mutation to update lesson progress
  const mutation = useMutation({
    mutationFn: ({
      lessonId,
      payload,
    }: { lessonId: string; payload: { lastWatched?: number; completed?: boolean } }) =>
      updateLessonProgress(courseId, lessonId, payload),
    onSuccess: () => {
      console.log("Lesson progress updated successfully.");
    },
  });

  // Update `lastWatched` time periodically
  const handleProgress = (progress: { playedSeconds: number }) => {
    const currentSeconds = Math.floor(progress.playedSeconds);
    setLastWatched(currentSeconds);

    if (!updateTimer) {
      const timer = setTimeout(() => {
        mutation.mutate({
          lessonId: currentLesson._id,
          payload: { lastWatched: currentSeconds },
        });
        setUpdateTimer(null);
      }, 5000); // Update every 5 seconds
      setUpdateTimer(timer);
    }
  };

  // Mark lesson as completed when the video ends
  const handleVideoEnd = () => {
    mutation.mutate({
      lessonId: currentLesson._id,
      payload: { completed: true }, // Mark lesson as completed
    });

    // Navigate to the next lesson if it exists
    if (nextLesson) {
      setLoading(true);
      setTimeout(() => {
        onNavigate(nextLesson._id);
        setLoading(false);
      }, 2000); // Add delay for a smoother transition
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
        {paused && <PlayIcon size={80} color="white" className="bg-slate-950 rounded-full bg-opacity-70 p-4" />}
      </div>

      {/* Loader */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-400 bg-opacity-75 z-50">
          <Loader hSize="1000px" useSmallLoading={false} />
        </div>
      )}

      {/* Centered Custom Trigger */}
      {!open && window.innerWidth > 1000 && (
        <div className="absolute inset-0 flex justify-start pb-80 items-center">
          <CustomTrigger open={open} toggleSidebar={toggleSidebar} position="centered" />
        </div>
      )}

      {/* React Player */}
      <ReactPlayer
        url={videoUrl}
        controls={isHovered}
        playing={!paused}
        width="100%"
        height="100%"
        onPause={() => setPaused(true)}
        onPlay={() => setPaused(false)}
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
