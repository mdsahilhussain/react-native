import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Header } from "./components";
import { StartGameScreen, GameScreen, GameOverScreen } from "./screens";

//! Adding Custom Fonts and this function is not re-created !
// const fetchFonts = () => {
//   Font.loadAsync({
//     "open-sans": require("<file-path></file-path>"),
//     "open-sans-bold": require("<file-path></file-path>"),
//   });
// };
//! ========

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  //! Adding Loader timer
  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       // startAsync={fetchFonts}
  //       // startAsync={this._cacheResourcesAsync}
  //       onFinish={() => setDataLoaded(true)}
  //       onError={(error) => console.log(error)}
  //     />
  //   );
  // }
  //! =======

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numOfRound) => {
    setGuessRound(numOfRound);
  };

  const configureNewGameHandler = () => {
    setGuessRound(0);
    setUserNumber(null);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRound <= 0) {
    content = (
      <GameScreen chooesNumber={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRound > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRound}
        userNumber={userNumber}
        onRestGame={configureNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Namber" />
      {content}
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
