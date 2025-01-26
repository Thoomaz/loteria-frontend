import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import BetsReportPDF from "../pdf/BetsReportPDF";
import "./ModalPDF.css";

const sampleBets = [
  { bet: [1, 2, 3, 4, 5, 6], matched: 3, valueInvested: 5.0},
  { bet: [5, 6, 7, 8, 9, 10], matched: 0, valueInvested: 5.0},
]

interface ModalPDFProps {
  onClose: () => void;
}

const ModalPDF: React.FC<ModalPDFProps> = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState("all");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  }

  return (
    <div className="modalPDF">
      <div className="modalPDFContent">
        <h2 className="ModalPDFTitle">Gerar PDF</h2>
        <div className="options">
          <input
            type="radio"
            id="all"
            name="filterOption"
            value="all"
            className="option"
            checked={selectedOption ==="all"}
            onChange={handleOptionChange}
          />
          <label htmlFor="all">Todas as apostas</label>
          <input
            type="radio"
            id="matched"
            name="filterOption"
            value="matched"
            className="option"
            checked={selectedOption === "matched"}
            onChange={handleOptionChange}
          />
          <label htmlFor="matched">Apenas apostas com acertos</label>
        </div>

        <div className="actions">
          <PDFDownloadLink
            document={<BetsReportPDF bets={sampleBets} />}
            fileName="Apostas.pdf"
          >
            <button className="confirmButton">Baixar</button>
          </PDFDownloadLink>
            <button onClick={onClose} className="cancelButton">Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalPDF;
