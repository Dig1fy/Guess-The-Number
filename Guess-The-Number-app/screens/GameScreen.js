import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';

import NumberContainer from '../components/NumberContainer/NumberContainer';
import Card from '../components/Card/Card';
import BodyText from '../components/Common/BodyText';

const generateNumberBetween = (min, max, exclude) => {
    //Generate inclusive min/max number
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (randomNumber === exclude) {
        return generateNumberBetween(min, max, exclude)
    } else {
        return randomNumber;
    }
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateNumberBetween(1, 99, props.excludeNumber))
    const [totalRounds, setTotalRounds] = useState(0);
    const currentMinValue = useRef(1);
    const currentMaxValue = useRef(99);
    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(totalRounds);
        }
    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) ||
            (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('Oh, you!', 'Don\'t try to lie the computer!', [{ text: 'Ok, sorry' }])
            return;
        }

        if (direction === 'lower') {
            currentMaxValue.current = currentGuess - 1; //Since it's inclusive
        } else {
            currentMinValue.current = currentGuess + 1;
        }
        setTotalRounds((currentRounds) => currentRounds + 1)
        const nextGuessNumber = generateNumberBetween(currentMinValue.current, currentMaxValue.current, currentGuess)
        setCurrentGuess(nextGuessNumber)
    }

    return (
        <View style={styles.screen}>
            <BodyText>Current Guess</BodyText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="Lower" onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title="Greater" onPress={nextGuessHandler.bind(this, 'greater')} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
        width: 300,
        maxWidth: '80%',
    }
})

export default GameScreen;