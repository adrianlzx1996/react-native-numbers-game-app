import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    padding: 12,
    fontSize: 18,
    borderWidth: 2,
    color: Colors.accent500,
    fontWeight: "bold",
    textAlign: "center",
    borderColor: Colors.accent500,
  },
});

export default Title;