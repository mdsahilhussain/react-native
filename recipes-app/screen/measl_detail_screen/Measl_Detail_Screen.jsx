import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Measl_Detail_Screen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>measl_detail_screen</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

export default Measl_Detail_Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
