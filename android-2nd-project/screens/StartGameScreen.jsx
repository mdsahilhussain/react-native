import {
  StyleSheet,
  View,
  Text,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { NumberCard, Input, Card } from "../components";
import { ColorSet, H1 } from "../constants";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredVAlue] = useState("");
  const [isConfirm, setIsConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const [buttonWidth, setButtonWidth] = useState(Dimensions.get("window"));

  //! if screen if roteated then this update buttonWidth
  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 4);
    };

    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  const numberInputHandler = (inputText) => {
    setEnteredVAlue(inputText.replace(/[^0-9]/g, ""));
  };
  const restInputHandler = () => {
    setEnteredVAlue("");
  };
  const confirmInputHandler = () => {
    const currentNumber = parseInt(enteredValue);
    if (isNaN(currentNumber) || currentNumber <= 0) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 to 99",
        [
          {
            text: "Okey",
            style: "destructive",
            onPress: restInputHandler,
          },
        ]
      );
      return;
    }
    setIsConfirm(true);
    setSelectedNumber(currentNumber);
    setEnteredVAlue("");
  };
  let confirmedOutput;
  if (isConfirm) {
    confirmedOutput = (
      <Card style={styles.outputCardContainer}>
        <Text style={styles.subtitle}>Your selected number is</Text>
        <NumberCard>{selectedNumber}</NumberCard>
        <Button
          color="#75C9C8"
          title="start game"
          onPress={() => {
            props.onStartGame(selectedNumber);
          }}
        />
      </Card>
    );
  }
  return (
    <ScrollView style={{ backgroundColor: ColorSet.bgColor }}>
      {/* //! useing it keyboard not overlie over input  */}
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.gameContainer}>
            <H1>Start a New Game</H1>
            <Card style={styles.inputContainer}>
              <Text style={styles.subtitle}>Select a Number</Text>
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
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Reset"
                    color={ColorSet.aletColor}
                    onPress={() => {
                      restInputHandler();
                    }}
                  />
                </View>
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Confirm"
                    color={ColorSet.primary}
                    onPress={() => {
                      confirmInputHandler();
                    }}
                  />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
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
  subtitle: { fontSize: 16, marginBottom: 8 },

  inputContainer: {
    width: "90%",
    //! makeing responseive
    maxWidth: "95%",
    minWidth: 300,
    alignItems: "center",
    marginBottom: 20,
  },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 16,
  },
  button: {
    width: 100,
    borderRadius: 8,
  },
  input: {
    width: 30,
    textAlign: "center",
  },
  outputCardContainer: {
    marginTop: 16,
    width: 400,
    maxWidth: "90%",
    alignItems: "center",
  },
});
