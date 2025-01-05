import React from "react";
import ReactPlayer from "react-player";

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
  height = "auto",
}) => {
  return (
    <div className="video-player">
      <ReactPlayer
        url={videoUrl}
        controls={controls}
        playing={playing}
        width={width}
        height={height}
      />
    </div>
  );
};

export default VideoPlayer;
