import "./Presentation.css";

function Presentation() {
  return (
    <div className="circle-section">
      <h1 className="text-presentation title">Loteria</h1>

      <div className="text-presentation slogan">
        <p className="one">agilize o processo</p>
        <p className="two">verifique seu bolão <a href="https://youtu.be/dQw4w9WgXcQ?si=mxaXf9FK-tcH9S7E" target="_blank" rel="noopener noreferrer" className="highlight">AQUI</a></p>
      </div>

      <div className="circle large-circle"></div>
      <div className="circle medium-circle"></div>
      <div className="circle small-circle"></div>
    </div>
  );
}

export default Presentation;
