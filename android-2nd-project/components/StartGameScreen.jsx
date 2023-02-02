import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";

import Card from "./Card";
import { ColorSet } from "../constants";
import Input from "./Input";

const StartGameScreen = () => {
  const [enteredValue, setEnteredVAlue] = useState("");
  const numberInputHandler = (inputText) => {
    setEnteredVAlue(inputText.replace(/[^0-9]/g, ""));
  };
  return (
    <TouchableWithoutFeedback>
      <View style={styles.gameContainer}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            value={enteredValue}
            onChangeText={numberInputHandler}
          />
          <View style={styles.buttonContainer}>
            <Button title="Reset" color="#ff5a5a" onPress={() => {}} />
            <Button title="Confirm" color="#75C9C8" onPress={() => {}} />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: ColorSet.bgColor,
  },

  title: { fontSize: 22, marginVertical: 10 },

  inputContainer: {
    width: 400,
    maxWidth: "90%",
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 30,
    textAlign: "center",
  },
});
