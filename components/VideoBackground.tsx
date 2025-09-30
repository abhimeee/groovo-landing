'use client';

import React from 'react';

interface VideoBackgroundProps {
  videoId: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoId }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&start=65&end=150&version=3`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
        />
        {/* Overlay to control video opacity */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </div>
  );
};

export default VideoBackground; 