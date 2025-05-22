// import React from 'react'
import "../assets/styles/HistoricJeddah.css";

function JeddahRally() {
  return (
    <div className="historic-container">
         <video
        src="/videos/video-2.MOV"
        type="video/mp4"
        className="background-video"
        autoPlay
        loop
        ></video>

      <div className="content">
        <h1> رالي جدة</h1>
        <p>حيث يلتقي التحدي بالإثارة على رمال المدينة الساحرة</p>
      </div>
    </div>
  );
}

export default JeddahRally

