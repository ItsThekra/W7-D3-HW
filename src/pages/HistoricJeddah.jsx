import "../assets/styles/HistoricJeddah.css";

function HistoricJeddah() {
  return (
    <div className="historic-container">
      <video
        className="background-video"
        autoPlay
        loop
      >
        <source src="public\videos\video-1.mp4" type="video/mp4" />
    
      </video>

      <div className="content">
        <h1>جدة التاريخية</h1>
        <p>كل زاوية تحكي قصة من الماضي.. هنا ينبض التاريخ</p>
      </div>
    </div>
  );
}

export default HistoricJeddah;
