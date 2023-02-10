import { StyleSheet, View, Text } from "react-native";
import React from "react";

import { ColorSet } from "../constants";
const NumberCard = (props) => {
  return (
    <View style={styles.seltedNumber}>
      <Text style={styles.innerText}>{props.children}</Text>
    </View>
  );
};

export default NumberCard;
const styles = StyleSheet.create({
  seltedNumber: {
    borderWidth: 4,
    borderRadius: 100,
    borderColor: ColorSet.textColor,
    padding: 5,
    width: 74,
    height: 74,
    marginVertical: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  innerText: {
    fontSize: 48,
    color: ColorSet.textColor,
    fontWeight: "500",
  },
});
