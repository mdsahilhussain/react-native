import React, { useState } from "react";

import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = ({ onAddGoal, isShow }) => {
  const [enterGoals, setEnterGoals] = useState("");

  const clearInputHandler = () => {
    setEnterGoals("");
  };

  return (
    <Modal visible={isShow} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your today goals"
          style={styles.inputField}
          value={enterGoals}
          onChangeText={(text) => setEnterGoals(text)}
        />
        <View style={styles.inputButtonContainer}>
          <View style={styles.inputButton}>
            <Button
              title="Cancel"
              color="red"
              onPress={() => {
                onAddGoal(enterGoals), clearInputHandler();
              }}
            />
          </View>
          <View style={styles.inputButton}>
            <Button
              title="Add"
              onPress={() => {
                onAddGoal(enterGoals), clearInputHandler();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  inputField: {
    color: "black",
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 18,
    borderWidth: 0.5,
    borderRadius: 5,
    width: "90%",
    marginBottom: 16,
  },

  inputButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "88%",
  },

  inputButton: {
    width: "48%",
  },
});
