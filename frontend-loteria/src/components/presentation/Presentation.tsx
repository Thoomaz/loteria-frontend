import "./Presentation.css";

function Presentation() {
  return (
    <section className="container">
      <div className="logo">
        <div className="circle large-circle"></div>
        <div className="circle medium-circle"></div>
        <div className="circle small-circle"></div>
        <h1 className="text-presentation title">Loteria</h1>
      </div>

      <div className="slogan">
        <p className="text-presentation text">
          agilize o processo <br />
          verifique seu bolão{" "}
          <a
            href="https://youtu.be/dQw4w9WgXcQ?si=mxaXf9FK-tcH9S7E"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight"
          >
            AQUI
          </a>
        </p>
      </div>
    </section>
  );
}

export default Presentation;
