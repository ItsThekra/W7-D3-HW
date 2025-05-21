import React from 'react'
import "../assets/styles/HistoricJeddah.css";

function JeddahRally() {
  return (
    <div className="historic-container">
      <video
        className="background-video"
        autoPlay
        loop
      >
        <source src="src/assets/videos/video-2.MOV" type="video/mp4" />
    
      </video>

      <div className="content">
        <h1> رالي جدة</h1>
        <p>حيث يلتقي التحدي بالإثارة على رمال المدينة الساحرة</p>
      </div>
    </div>
  );
}

export default JeddahRally

