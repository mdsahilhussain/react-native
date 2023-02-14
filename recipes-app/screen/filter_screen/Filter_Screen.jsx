import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Filter_Screen = () => {
  return (
    <View style={styles.screen}>
      <Text>filter_screen</Text>
    </View>
  );
};

export default Filter_Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
