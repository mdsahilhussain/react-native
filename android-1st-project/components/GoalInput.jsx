import React, { useState } from "react";

import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = ({ onAddGoal }) => {
  const [enterGoals, setEnterGoals] = useState("");

  const goalsInputHandler = (enterGoals) => {
    setEnterGoals(enterGoals);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter your today goals"
        style={styles.inputField}
        onChangeText={goalsInputHandler}
      />
      <Button
        style={styles.addButton}
        title="Add"
        onPress={onAddGoal.bind(this, enterGoals)}
      />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  inputField: {
    color: "black",
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
});
