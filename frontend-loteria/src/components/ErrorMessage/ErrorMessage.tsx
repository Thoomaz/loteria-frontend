import { Link } from "react-router-dom";
import "./ErrorMessage.css";

function ErrorMessage() {
  return (
    <>
      <div className="errorContainer">
        <div className="errorContent">
          <h2 className="errorMessage">ERRO!</h2>
          <Link to="/"><button className="errorButton">Tente novamente</button></Link>
        </div>
      </div>
    </>
  );
}

export default ErrorMessage;
