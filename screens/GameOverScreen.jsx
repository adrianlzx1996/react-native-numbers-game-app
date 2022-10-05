import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen() {
	return (
		<View style={styles.rootContainer}>
			<Title>GAME OVER!</Title>
			<View style={styles.imageContainer}>
				<Image source={require("../assets/images/success.png")} style={styles.image}/>
			</View>
			<Text style={styles.summaryText}>Your phone requires <Text style={styles.highlight}>X</Text> round to
				guess the
				number <Text style={styles.highlight}>Y</Text></Text>
			<PrimaryButton>Start New Game</PrimaryButton>
		</View>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		padding: 24,
		alignItems: "center",
		justifyContent: "center",
	},
	imageContainer: {
		margin: 36,
		width: 300,
		height: 300,
		borderWidth: 3,
		borderRadius: 150,
		overflow: "hidden",
		borderColor: Colors.primary800,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	summaryText: {
		fontFamily: 'open-sans',
		fontSize: 24,
		textAlign: 'center',
		marginVertical: 24,
	},
	highlight: {
		fontFamily: "open-sans-bold",
		color: Colors.primary500,
	},
})

export default GameOverScreen;