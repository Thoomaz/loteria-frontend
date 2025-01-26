import { StyleSheet } from "@react-pdf/renderer";

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
      width: 45,
      height: 45,
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
    info: {
      fontWeight: "normal",
      fontSize: 12,
      color: "gray",
    },
    bold: {
        fontWeight: "bold",
        fontSize: 13,
        color: "#666666",
    },
    table: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      borderWidth: 1,
      borderColor: "#ddd",
      marginTop: 20,
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

export default styles;