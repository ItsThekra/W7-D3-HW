import React from 'react'
import "../assets/styles/HistoricJeddah.css";


export default function Promenade() {
  return (
         <>
     <div className="historic-container">

         <video
            src="/videos/video-4.mp4"
            type="video/mp4"
            className="background-video"
            autoPlay
            loop
        ></video>

      <div className="content">
        <h1>..البروميناد</h1>
        <p>وجهة جدة الهادئة لصناعة اللحظة</p>
      </div>
    </div>
    </>
  )
}
