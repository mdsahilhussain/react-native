import { StyleSheet, View, Text } from "react-native";
import React from "react";

const GoalList = ({ title }) => {
  return (
    <View style={styles.listItem}>
      <Text style={{ fontSize: 18 }}>{title}</Text>
    </View>
  );
};

export default GoalList;

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 0.8,
    borderColor: "skyblue",
    color: "black",
    marginBottom: 8,
    paddingHorizontal: 5,
    borderRadius: 5,
    paddingVertical: 5,
  },
});
