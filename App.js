import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-ExtraBold.ttf')
    });
};

export default function App() {
    const [dataLoaded, setDataLoaded] = useState(false);
    const [useNumber, setUserNumber] = useState();
    const [guessRounds, setGuessRounds] = useState(0);

    if (!dataLoaded) {
        return <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setDataLoaded(true)}
            onError={(err) => console.log(err)}
        />;
    }

    const configureNewGame = () => {
        setGuessRounds(0);
        setUserNumber(null);
    };

    const startGameHandler = (selectedNumber) => {
        setUserNumber(selectedNumber);
    };

    const gameOverHandler = numOfRounds => {
        setGuessRounds(numOfRounds);
    };

    let content = <StartGameScreen onStartGame={startGameHandler}/>;

    if (useNumber && guessRounds <= 0) {
        content = <GameScreen userChoice={useNumber} onGameOver={gameOverHandler}/>;
    } else if (guessRounds > 0) {
        content = <GameOverScreen rounds={guessRounds} number={useNumber} onRestart={configureNewGame}/>;
    }

  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Guess The Number" />
        {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
