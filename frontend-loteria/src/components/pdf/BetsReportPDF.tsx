import React from "react";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import { BetData } from "../../interfaces/bet-data";
import styles from "./BetsReportPDFStyles";
import icon from "../../../public/icon.png";

interface BetsReportPDFProps {
  bets: BetData[];
}

const BetsReportPDF: React.FC<BetsReportPDFProps> = ({bets}) => (
  <Document>
    <Page size="A4" style={styles.page}>

      <View style={styles.header}>
        <Image src={icon} style={styles.logo} />
        <View>
          <Text style={styles.title}>Verificador de Bolões</Text>
          <Text style={styles.subtitle}>Resultados</Text>
        </View>
      </View>

      <Text style={styles.info}>
        O presente documento apresenta os resultados do{" "}
        <Text style={styles.bold}>Nome do Bolão</Text>, realizado para a modalidade{" "}
        <Text style={styles.bold}>Tipo do Bolão</Text>. Os números sorteados foram:{" "}
        <Text style={styles.bold}>Números do Sorteio</Text>.
      </Text>

      <Text style={styles.bold}>
        Tipo de documento:{" "} 
        <Text style={styles.info}>Forma Escolhida para Gerar o PDF (Apenas a pág. atual; 
          Apenas acertos; Todas as apostas).</Text>
      </Text>

      <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={styles.cell}>Apostas</Text>
          <Text style={styles.cell}>Acertos</Text>
          <Text style={styles.cell}>Valor Investido</Text>
        </View>

        {bets.map((bet, index) => (
          <View style={styles.row} key={index}>
            <Text style={styles.cell}>
              {Array.isArray(bet.bet) ? bet.bet.join(", ") : bet.bet}
            </Text>
            <Text style={styles.cell}>{bet.matched}</Text>
            <Text style={styles.cell}>R$ {bet.valueInvested.toFixed(2)}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.footer}>
        Agradecemos por participar e desejamos boa sorte em futuras apostas!
      </Text>
      <Text style={styles.footer}>
        Este documento foi gerado automaticamente - {new Date().toLocaleDateString()}
      </Text>
    </Page>
  </Document>
);

export default BetsReportPDF;