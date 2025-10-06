"use client";

interface YouTubeVideoProps {
  videoId: string;
  className?: string;
}

const YouTubeVideo = ({ videoId, className = "" }: YouTubeVideoProps) => {
  return (
    <div className={`relative w-full max-w-[350px] aspect-[9/16] ${className}`}>
      <iframe
        src={`https://www.youtube.com/embed/61bDtpyZLH4?autoplay=1&mute=0&controls=1&showinfo=0&rel=0`}
        title="Product Demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg"
      />
    </div>
  );
};

export default YouTubeVideo;
