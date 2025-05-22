import React from 'react'

function QamaraGallery() {
  return (
  <>
     <div className="historic-container">


        <video
            src="/videos/video-5.mp4"
            type="video/mp4"
            className="background-video"
            autoPlay
            loop
            ></video>

      <div className="content">
        <h1>.. معرض قمرا</h1>
        <p>عدسة توثق الضوء... ومعرض يحاكي جمال جدة من زوايا مختلفة</p>
      </div>
    </div>
    </>



  )
}

export default QamaraGallery