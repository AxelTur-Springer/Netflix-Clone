import React from "react";
export const YoutubeEmbed = () => (
    <div className="video-responsive">
      <iframe className="Iframe"
        src={`https://www.youtube.com/embed/mCdA4bJAGGk`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );