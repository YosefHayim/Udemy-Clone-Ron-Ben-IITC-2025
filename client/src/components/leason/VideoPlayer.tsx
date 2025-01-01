import React from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  url: string;
  playing?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  volume?: number;
  onReady?: () => void;
  onStart?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  onError?: (error: any) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  url,
  playing = false,
  controls = true,
  loop = false,
  muted = false,
  volume = 0.8,
  onReady,
  onStart,
  onPause,
  onEnded,
  onError,
}) => {
  return (
    <div className="video-player-wrapper">
      <ReactPlayer
        url={url}
        playing={playing}
        controls={controls}
        loop={loop}
        muted={muted}
        volume={volume}
        onReady={onReady}
        onStart={onStart}
        onPause={onPause}
        onEnded={onEnded}
        onError={onError}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;
