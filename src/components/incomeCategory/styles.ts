import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f8f8f8",
    },
    openButton: {
      padding: 15,
      backgroundColor: "#007BFF",
      borderRadius: 8,
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
    },
    modalContainer: {
      flex: 1,
      backgroundColor: "#fff",
      top:50
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#E0E0E0",
    },
    cancelButton: {
      color: "#007BFF",
      fontSize: 16,
    },
    doneButton: {
      color: "#007BFF",
      fontSize: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
    },
    searchBar: {
      margin: 16,
      padding: 12,
      backgroundColor: "#f8f8f8",
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#E0E0E0",
    },
    sectionHeader: {
      fontSize: 16,
      fontWeight: "bold",
      backgroundColor: "#f8f8f8",
      padding: 8,
    },
    categoryItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#E0E0E0",
    },
    categoryText: {
      fontSize: 16,
    },
    checkmark: {
      color: "#007BFF",
      fontSize: 16,
    },
    emptyMessage: {
      textAlign: "center",
      padding: 16,
      color: "#999",
    },
  });

  export default styles
  