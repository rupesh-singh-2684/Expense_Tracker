import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: "#f8f8f8",
      padding: 16,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
    },
    cancelButton: {
      color: "#007BFF",
      fontSize: 16,
    },
    saveButton: {
      color: "#007BFF",
      fontSize: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
    },
    userInfo: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
    },
    phoneNumber: {
      fontSize: 16,
      fontWeight: "bold",
    },
    badges: {
      flexDirection: "row",
    },
    badge: {
      backgroundColor: "#E0E0E0",
      borderRadius: 12,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginLeft: 5,
      fontSize: 12,
    },
    unreportedBadge: {
      backgroundColor: "#FFD700",
    },
    inputGroup: {
      marginBottom: 16,
    },
    label: {
      fontSize: 14,
      marginBottom: 8,
    },
    textInput: {
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: "#E0E0E0",
      borderRadius: 8,
      padding: 12,
    },
    currencyTotal: {
      flexDirection: "row",
      marginBottom: 16,
    },
    moreOptions: {
      alignItems: "center",
      padding: 10,
    },
    moreOptionsText: {
      color: "#007BFF",
      fontSize: 16,
    },
  });
  

  export default styles