import { StyleSheet, View, Text } from "react-native";
import React from "react";

import { ColorSet } from "../constants";
const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 44,
    backgroundColor: ColorSet.primary,
  },

  headerTitle: {
    color: ColorSet.textColor,
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
  },
});
