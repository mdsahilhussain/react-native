import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";

import GoalList from "./components/GoalList";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);

  const addHandler = (enterGoals) => {
    setGoalsList((currentGoals) => [
      ...currentGoals,
      {
        id: goalsList.length + 1,
        task: enterGoals,
      },
    ]);
  };
  return (
    <View style={styles.root}>
      <GoalInput onAddGoal={addHandler} />
      <FlatList
        data={goalsList}
        keyExtractor={(item) => item.id}
        renderItem={(goal) => <GoalList title={goal.item.task} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    padding: 24,
    paddingTop: 44,
  },
});
