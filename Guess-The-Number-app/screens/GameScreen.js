import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Alert, ScrollView, Text } from 'react-native';

//Icons
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'

import NumberContainer from '../components/NumberContainer/NumberContainer';
import Card from '../components/Card/Card';
import BodyText from '../components/Common/BodyText';
import PrimaryButton from '../components/Common/PrimaryButton';
import Colors from '../constants/Colors';

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

const renderListItems = (value, numberOfRound) => {
    return <View key={value} style={styles.listItem}>
        <BodyText>Round #{numberOfRound} :</BodyText>
        <BodyText>{value}</BodyText>
    </View>
}

const GameScreen = props => {
    const initialGuess = generateNumberBetween(1, 99, props.excludeNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);

    const currentMinValue = useRef(1);
    const currentMaxValue = useRef(99);
    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
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
        // setTotalRounds((currentRounds) => currentRounds + 1)
        //We can't use the 'currentGuess' since it's not been re-rendered yeb
        const nextGuessNumber = generateNumberBetween(currentMinValue.current, currentMaxValue.current, currentGuess)
        setCurrentGuess(nextGuessNumber)

        setPastGuesses(theLastGuesses => [nextGuessNumber, ...theLastGuesses])
    }

    return (
        <View style={styles.screen}>
            <BodyText>Current Guess</BodyText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <PrimaryButton
                    onPress={nextGuessHandler.bind(this, 'lower')}
                    style={styles.buttonLower}>
                    <SimpleLineIcons
                        name="minus"
                        size={24}
                        color="black"
                    />
                </PrimaryButton>
                <PrimaryButton
                    onPress={nextGuessHandler.bind(this, 'greater')}
                    style={styles.buttonGreater}>
                    <SimpleLineIcons
                        name="plus"
                        size={24}
                        color="white"
                    />
                </PrimaryButton>
            </Card>
            <ScrollView >
                {pastGuesses.map((guess, index) => renderListItems(guess, index + 1))}
            </ScrollView>
            <View><BodyText>Current gueesses: {pastGuesses.length}</BodyText></View>
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
    },
    buttonLower: {
        backgroundColor: 'orange',
        color: 'black'
    },
    buttonGreater: {
        backgroundColor: 'green',
        color: 'white'
    },
    listItem: {
        borderColor: Colors.green,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        padding: 10,
        marginVertical: 10,
        width: 300,
        maxWidth: '100%',
        justifyContent: 'space-between'
    }
})

export default GameScreen;