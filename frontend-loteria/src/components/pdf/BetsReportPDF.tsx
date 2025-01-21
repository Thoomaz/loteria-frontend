import React from "react";
import { Page, Text, View, Document, StyleSheet} from "@react-pdf/renderer";
import { BetData } from "../../interfaces/bet-data";

interface BetsReportPDFProps {
  bets: BetData[];
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    marginTop: 5,
  },
  description: {
    marginBottom: 20,
  },
  drawInfo: {
    fontSize: 12,
    marginBottom: 20,
    color: "gray",
  },
  table: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    padding: 8,
  },
  headerRow: {
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
  footer: {
    marginTop: 30,
    fontSize: 10,
    textAlign: "center",
    color: "gray",
  },
});


const BetsReportPDF: React.FC<BetsReportPDFProps> = ({bets}) => (
  <Document>
    <Page size="A4" style={styles.page}>

        <View>
          <Text style={styles.title}>Resultados</Text>
          <Text style={styles.subtitle}>{"NOME DO BOLÃO AQUI!"}</Text>
        </View>


      <Text style={styles.drawInfo}>
        Sorteio: {"NÚMEROS DO SORTEIO AQUI!"}
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