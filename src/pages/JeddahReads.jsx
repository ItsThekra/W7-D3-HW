import React from 'react'
import "../assets/styles/HistoricJeddah.css";


function JeddahReads() {
  return (
    
     <div className="historic-container">
        <video
        src="/videos/video-3.mp4"
        type="video/mp4"
        className="background-video"
        autoPlay
        loop
        ></video>
         

      <div className="content">
        <h1>جدة تقرأ</h1>
        <p>لأن لكل كتاب حكاية... ولكل قارئ رحلة</p>
      </div>
    </div>
   
  )
}

export default JeddahReads