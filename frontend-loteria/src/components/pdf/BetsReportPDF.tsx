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
          <Text style={styles.title}>Resultados</Text>
          <Text style={styles.subtitle}>{"NOME DO BOLÃO AQUI!"}</Text>
        </View>
      </View>

      <Text style={styles.info}>
        Este documento apresenta os resultados do <Text style={styles.bold}>NOME DO BOLÃO</Text>, 
        realizado para a modalidade <Text style={styles.bold}>TIPO DO BOLÃO</Text>. O sorteio teve 
        como resultado os números: <Text style={styles.bold}>NÚMEROS DO SORTEIO</Text>. O arquivo 
        foi gerado para incluir somente <Text style={styles.bold}>FORMA ESCOLHIDA PARA CRIAR O PDF</Text>.
      </Text>
      <Text style={styles.info}>
        Agradecemos por participar e desejamos boa sorte em futuras apostas!
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
        Relatório gerado automaticamente - {new Date().toLocaleDateString()}
      </Text>
    </Page>
  </Document>
);

export default BetsReportPDF;