import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert, Dimensions } from 'react-native';

import Card from '../components/Card/Card'
import Colors from '../constants/Colors'
import Input from '../components/Input/Input'
import NumberContainer from "../components/NumberContainer/NumberContainer";
import BodyText from "../components/Common/BodyText";
import PrimaryButton from "../components/Common/PrimaryButton";

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    const changeInputHandler = textInput => {
        setEnteredValue(textInput.replace(/[^0-9]/g, '')); //validate if non-numeric value is typed, replace it with empty string       
    }

    const resetEnteredValue = () => {
        setConfirmed(false);
        setEnteredValue('');
    }

    const confirmInputHandler = () => {
        let chosenNumber = parseInt(enteredValue)

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Ivalid input!", "You should enter a number betwee 1 and 99!!!", [{ text: "Ok", onPress: resetEnteredValue(), style: 'destructive' }])
            return;
        }

        setConfirmed(true);
        setSelectedNumber(chosenNumber)
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let confirmedOutput;
    if (confirmed) {
        confirmedOutput =
            <Card style={styles.outputContainer}>
                <BodyText>Chosen number: </BodyText>
                <NumberContainer style={styles.numberContainer}> {selectedNumber}</NumberContainer>
                <PrimaryButton style={styles.startButton} onPress={() => props.click(selectedNumber)} > START GAME </PrimaryButton>
            </Card>
    }


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <BodyText style={styles.title}>Start new game!</BodyText>
                <Card style={styles.inputContainer}>
                    <BodyText >Guess a number</BodyText>
                    < Input style={styles.input}
                        keyboardType="number-pad"
                        maxLength={2}
                        autoCapitalize='none'
                        autoCorrect={false}
                        blurOnSubmit
                        onChangeText={changeInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button} >
                            <Button title='Confirm' color={Colors.primaryButton} onPress={confirmInputHandler} />
                        </View>
                        <View style={styles.button}>
                            <Button title='Reset' onPress={resetEnteredValue} color={Colors.secondaryButton} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
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
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginTop: Dimensions.get('window').height > 600 ? 5 : 0
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: { //These styles will overwrite the ones in Card component
        // width: '90%',
        // maxWidth: '95%',
        minWidth: Dimensions.get('window').width * 0.9,
        width: Dimensions.get('window').width * 0.9,
        alignItems: 'center',
    },
    button: {
        width: '40%',
    },
    input: {
        width: '35%',
        textAlign: 'center',
    },
    outputContainer: {
        marginTop: 25,
        width: '60%',
        alignItems: 'center'
    },
    startButton: {
        width: Dimensions.get('window').width * 0.4,
        fontSize: 14,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberContainer: {
        width: '50%',
    }
})

export default StartGameScreen;