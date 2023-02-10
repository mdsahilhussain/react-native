import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Card, NumberCard } from "../components";
import { ColorSet } from "../constants";

// ! here we import icon and custome button component
// import { Ionicons } from "@expo/vector-icons";
// import MainButton from "../components/MainButton";

const genraterRandomNumber = (min, max, exclued) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === exclued) {
    return genraterRandomNumber(min, max, exclued);
  } else {
    return random;
  }
};

const renderListItem = (value, index, numOfRound) => {
  <View key={index} styles={styles.list}>
    <Text>#{numOfRound}</Text>
    <Text>{value}</Text>
  </View>;
};

const GameScreen = (props) => {
  const { chooesNumber, onGameOver } = props;
  const initialGuess = genraterRandomNumber(1, 100, chooesNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const [pastGuess, setPastGuess] = useState([initialGuess]);
  useEffect(() => {
    if (currentGuess === chooesNumber) {
      onGameOver(pastGuess.length);
    }
  }, [currentGuess, chooesNumber, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < chooesNumber) ||
      (direction === "greater" && currentGuess > chooesNumber)
    ) {
      Alert.alert("Don't lie!", "Your know that this is worong....", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = genraterRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setPastGuess((prevGuess) => [nextNumber, ...prevGuess]);
  };
  return (
    <View style={styles.gamescreen}>
      <Card style={styles.card}>
        <Text style={styles.subtitle}>Opponent's Guess</Text>
        <NumberCard>{currentGuess}</NumberCard>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="lower"
              color={ColorSet.primary}
              onPress={nextGuessHandler.bind(this, "lower")}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="greater"
              color={ColorSet.primary}
              onPress={nextGuessHandler.bind(this, "greater")}
            />
            {/* //! We can use custom button like this. and add icon like this */}
            {/* <MainButton onPress={nextGuessHandler} > <Ionicons name='md-checkmark-circle' size={32} color='green' /></MainButton> */}
          </View>
        </View>
      </Card>
      <ScrollView>
        {pastGuess.map((guess, index) => renderListItem(guess, index))}
      </ScrollView>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gamescreen: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
  },

  card: {
    alignItems: "center",
    width: "90%",
  },

  subtitle: { fontSize: 16, marginBottom: 8 },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 16,
  },
  button: {
    width: 100,
  },
  list: {
    borderColor: "#ccc",
    padding: 15,
    borderWidth: 1,
    marginVertical: 10,
    backgroundColor: "white",
  },
});
