import React from 'react';
import Surface from '../../primitives/Surface/index.jsx';
import Image from '../../primitives/Image/index.jsx';
import Icon from '../../primitives/Icon/index.jsx';

export default function VideoPlayer({
  src,
  poster,
  controls = true,
  onPlay,
  className = '',
}) {
  const [playing, setPlaying] = React.useState(false);

  const handlePlay = () => {
    setPlaying(true);
    if (onPlay) onPlay();
  };

  if (!playing) {
    return (
      <Surface variant="dark" className={`relative rounded-[8px] overflow-hidden ${className}`}>
        {poster ? (
          <Image src={poster} alt="Video thumbnail" aspectRatio="16:9" />
        ) : (
          <div className="aspect-video" />
        )}
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
          aria-label="Play video"
        >
          <span className="w-14 h-14 rounded-full bg-[#D62A91] flex items-center justify-center">
            <Icon name="play" size={24} color="white" />
          </span>
        </button>
      </Surface>
    );
  }

  return (
    <Surface variant="dark" className={`relative rounded-[8px] overflow-hidden ${className}`}>
      <video
        src={src}
        controls={controls}
        className="w-full aspect-video"
        autoPlay
      />
    </Surface>
  );
}

VideoPlayer.displayName = 'VideoPlayer';
