import React from "react";

import "../Video/video.css";

import Video from "../../assets/maldivesVideo.mp4";

function video() {
  return (
    <div className="video-conteiner">
      <h2>lorem ipsum</h2>
      <video className="video" controls>
        <source src={Video} type="video/mp4" />
      </video>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        standard dummy text
      </p>
    </div>
  );
}

export default video;
