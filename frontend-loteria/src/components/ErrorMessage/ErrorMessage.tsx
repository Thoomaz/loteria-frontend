import { Link } from "react-router-dom";
import "./ErrorMessage.css";

interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({ message } : ErrorMessageProps ) {
  return (
    <>
      <div className="errorContainer">
        <div className="errorContent">
          <h2 className="errorTitle">ERRO!</h2>
          <h3 className="errorMessage">{message}</h3>
          <Link to="/"><button className="errorButton">Tente novamente</button></Link>
        </div>
      </div>
    </>
  );
}

export default ErrorMessage;
