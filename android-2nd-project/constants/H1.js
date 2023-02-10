import { StyleSheet, Text } from "react-native";
import React from "react";

const H1 = (props) => {
  return (
    <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  body: {
    fontSize: 22,
    marginVertical: 10,
    // fontFamily: "fontname-weigt",
  },
});

export default H1;
