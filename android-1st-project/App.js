import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";

import GoalList from "./components/GoalList";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const addHandler = (enterGoals) => {
    if (enterGoals.trim() !== "") {
      setGoalsList((currentGoals) => [
        ...currentGoals,
        {
          id: goalsList.length + 1,
          task: enterGoals,
        },
      ]);
    }
    setAddMode(false);
  };

  const goalsRemoveHandler = (id) => {
    console.log(id);
    setGoalsList((currentGoals) => {
      return currentGoals.filter((goals) => goals.id !== id);
    });
  };

  const addTodayHandler = () => {
    setAddMode(true);
  };

  const cancelTodayHandler = () => {
    setAddMode(false);
  };

  return (
    <View style={styles.root}>
      <Button title="Add today's goals" onPress={() => addTodayHandler()} />
      <GoalInput
        onAddGoal={addHandler}
        onCancelGoal={cancelTodayHandler}
        isShow={addMode}
      />
      <FlatList
        style={styles.listContainer}
        data={goalsList}
        keyExtractor={(item) => item.id}
        renderItem={(goal) => (
          <GoalList
            id={goal.item.id}
            onDelGoal={goalsRemoveHandler}
            title={goal.item.task}
          />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    padding: 24,
    paddingTop: 44,
    textTransform: "capitalize",
  },

  listContainer: {
    marginTop: 16,
  },
});
