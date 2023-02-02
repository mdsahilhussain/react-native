import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Header, StartGameScreen } from "./components";
export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Namber" />
      <StartGameScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#75C9C8",
    paddingTop: 44,
  },
});
