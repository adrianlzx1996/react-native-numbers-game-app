import { Alert, FlatList, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	}

	return rndNum;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userChoice, onGameOver}) {
	const initialGuess = generateRandomBetween(
		minBoundary,
		maxBoundary,
		userChoice,
	);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [guessRounds, setGuessRounds] = useState([initialGuess]);

	useEffect(() => {
		if (currentGuess === userChoice) {
			onGameOver(guessRounds.length);
		}
	}, [currentGuess, userChoice, onGameOver]);

	useEffect(() => {
		minBoundary = 1;
		maxBoundary = 100;
	}, [])

	function nextGuessHandler(direction) {
		if (
			(direction === "lower" && currentGuess < userChoice) ||
			(direction === "higher" && currentGuess > userChoice)
		) {
			Alert.alert("Don't lie!", "You know that this is wrong...", [
				{text: "Sorry!", style: "cancel"},
			]);
			return;
		}

		if (direction === "lower") {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}

		const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
		setCurrentGuess(newRandomNumber);
		setGuessRounds((previousGuessRounds) => [newRandomNumber, ...previousGuessRounds]);
	}

	const guessRoundListLength = guessRounds.length;

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>

			<NumberContainer>{currentGuess}</NumberContainer>

			<Card>
				<InstructionText style={styles.instructionText}>
					Higher or Lower?
				</InstructionText>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={() => nextGuessHandler("lower")}>
							<Ionicons name={"remove"} size={24} color={"white"}/>
						</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={() => nextGuessHandler("higher")}>
							<Ionicons name={"add"} size={24} color={"white"}/>
						</PrimaryButton>
					</View>
				</View>
			</Card>

			<View style={styles.listContainer}>
				<FlatList keyExtractor={item => item} data={guessRounds}
						  renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundListLength - itemData.index}
																  guess={itemData.item}/>}/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	buttonContainer: {
		flex: 1,
	},
	instructionText: {
		marginBottom: 12,
	},
	listContainer: {
		flex: 1,
		padding: 16,
		paddingBottom: 0,
	},
});

export default GameScreen;