import { StyleSheet, Text } from "react-native";
import React from "react";

const P = (props) => {
  return (
    <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  body: {
    fontSize: 10,
    // fontFamily: "fontname-weigt",
  },
});

export default P;
