import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { ColorSet } from "../constants";

const Card = props => {
  return <View style={{ ...styles.cardContainer, ...props.style }}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: ColorSet.bgColor,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0,
    shadowRadius: 16,
    elevation: 16,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
  },
});
