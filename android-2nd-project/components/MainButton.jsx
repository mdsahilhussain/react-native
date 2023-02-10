import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet({
  button: {},
  buttonText: {},
});
