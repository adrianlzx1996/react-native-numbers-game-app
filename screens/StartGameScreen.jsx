import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType={"number-pad"}
        autoCapitalize={"none"}
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    borderRadius: 8,
    marginHorizontal: 16,
    backgroundColor: "#3b021f",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    textAlign: "center",
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;