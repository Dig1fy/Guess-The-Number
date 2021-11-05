import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Header from './components/Header/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [numberOfTries, setNumberOfTries] = useState(0)

  const restartGameHandler = () => {
    setNumberOfTries(0);
    setUserNumber(null);
  }

  const startGameHandler = selectedUserNumber => {
    setNumberOfTries(0);
    setUserNumber(selectedUserNumber);

  }

  const gameOverHandler = totalTries => {
    setNumberOfTries(totalTries);
  }

  let currentScreen = <StartGameScreen click={startGameHandler} />

  //We won't be using nagivation here, so that's a workaround to display certain screen
  if (userNumber && numberOfTries <= 0) {
    currentScreen = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if (numberOfTries > 0) {
    currentScreen = <GameOverScreen totalTries={numberOfTries} onRestart={restartGameHandler} />
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Header title='Guess a number' />
      {currentScreen}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});