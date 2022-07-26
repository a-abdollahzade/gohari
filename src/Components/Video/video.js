import React from "react";

import "../Video/video.css";

import Video from "../../assets/video/maldivesVideo.mp4";

function video() {
  return (
    <div className="video-conteiner">
      <h2>درباره آستکو</h2>
      <video className="video" controls>
        <source src={Video} type="video/mp4" />
      </video>
      <p>
        درباره آستکو متن آزمایشیدرباره آستکو متن آزمایشیدرباره آستکو متن آزمایشی
        درباره آستکو متن آزمایشی درباره آستکو متن آزمایشی درباره آستکو متن
        آزمایشی درباره آستکو متن آزمایشی
      </p>
    </div>
  );
}

export default video;
