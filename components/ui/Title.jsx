import { StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    padding: 12,
    fontSize: 18,
    borderWidth: 2,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    borderColor: "white",
  },
});

export default Title;