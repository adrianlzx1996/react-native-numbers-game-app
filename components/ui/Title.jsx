import { StyleSheet, Text } from "react-native";

function Title({children}) {
	return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
	title: {
		padding: 12,
		fontSize: 18,
		borderWidth: 2,
		color: "white",
		textAlign: "center",
		borderColor: "white",
		fontFamily: "open-sans-bold",
	},
});

export default Title;