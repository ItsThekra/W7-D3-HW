import React from 'react'
import "../assets/styles/HistoricJeddah.css";


export default function Promenade() {
  return (
         <>
     <div className="historic-container">
      <video
        className="background-video"
        autoPlay
        loop
      >
        <source src="src/assets/videos/video-4.mp4" type="video/mp4" />
    
      </video>

      <div className="content">
        <h1>..البروميناد</h1>
        <p>وجهة جدة الهادئة لصناعة اللحظة</p>
      </div>
    </div>
    </>
  )
}
