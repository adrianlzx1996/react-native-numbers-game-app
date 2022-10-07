import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function GuessLogItem({roundNumber, guess}) {
	return <View style={styles.listItem}>
		<Text style={styles.itemText}>#{roundNumber}</Text>
		<Text style={styles.itemText}>Opponents' Guess: {guess}</Text>
	</View>
}

const styles = StyleSheet.create({
	listItem: {
		padding: 12,
		width: "100%",
		borderWidth: 1,
		borderRadius: 40,
		marginVertical: 12,
		flexDirection: "row",
		borderColor: Colors.primary800,
		justifyContent: "space-between",
		backgroundColor: Colors.accent500,

		elevation: 4,
		shadowColor: "black",
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: .25,
		shadowRadius: 6,
	},
	itemText: {
		fontFamily: "open-sans",
	},
})

export default GuessLogItem