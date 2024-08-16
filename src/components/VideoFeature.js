// VideoFeature.js
import React from 'react';

const VideoFeature = () => {
  return (
    <div className="video-feature">
      <video controls width="350">
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoFeature;
