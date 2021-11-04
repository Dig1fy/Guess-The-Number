import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Alert, ScrollView, Text, FlatList } from 'react-native';

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

const renderListItems = (listOfGuessesLength, itemData) => {
    //itemData is being passed from FlatList (renderItem) as an additional param
    return <View style={styles.listItem}>
        <BodyText>Round #{listOfGuessesLength - itemData.index} : </BodyText>
        <BodyText>{itemData.item}</BodyText>
    </View>
}

const GameScreen = props => {
    const initialGuess = generateNumberBetween(1, 99, props.excludeNumber);
    //We need strings for the 'key' of FlatLish -> KeyExtractor
    const [currentGuess, setCurrentGuess] = useState(initialGuess.toString())
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

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

        //We can't use the 'currentGuess' since it's not been re-rendered yeb
        const nextGuessNumber = generateNumberBetween(currentMinValue.current, currentMaxValue.current, currentGuess)
        setCurrentGuess(nextGuessNumber)
        //We need string for the 'key' of FlatLish -> KeyExtractor
        setPastGuesses(theLastGuesses => [nextGuessNumber.toString(), ...theLastGuesses])
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
            <View style={styles.listContainer}>
                {/* <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, index) => renderListItems(guess, index + 1))}
                </ScrollView> */}
                <FlatList
                    data={pastGuesses}
                    renderItem={renderListItems.bind(this, pastGuesses.length)}
                    keyExtractor={key => key}
                    contentContainerStyle={styles.list}
                />
            </View>
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
    listContainer: {
        width: '45%',
        flex: 1,
        flexGrow: 1
    },
    list: {
        flexGrow: 1,
        justifyContent: 'flex-end'
    },
    listItem: {
        borderColor: Colors.green,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        padding: 10,
        marginVertical: 10,
        justifyContent: 'space-between'
    }
})

export default GameScreen;