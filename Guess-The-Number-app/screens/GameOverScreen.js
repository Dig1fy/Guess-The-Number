import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/Common/BodyText';
import MainButton from '../components/Common/PrimaryButton'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.imageContainer}>
                <Image
                    // source={require('../assets/Images/go.png')}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxPargZuBWMkwYNo7Yeq3kRPhSfUTgYXXs6E5CPZWX7gl4Efh28pztjqnHvWkuX6O-gI&usqp=CAU' }}
                    style={styles.image}
                    fadeDuration={5000}
                />
            </View>
            <View style={styles.gameOver}>
                <Text style={styles.text}>Your phone managed to guess the number in: </Text>
                <BodyText style={styles.gameResult} >{props.totalTries} rounds</BodyText>
            </View>
            <View>
                <MainButton onPress={props.onRestart}>Restart</MainButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
    },
    gameOver: {
        marginVertical: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textShadowColor: "#CCF",
        textShadowRadius: 2,
        textShadowOffset: { width: 2, height: 1 },
        fontSize: 19,
    },
    gameResult: {
        fontSize: 20,
        color: '#ab872b',
        fontWeight: 'bold',
        textShadowColor: "#2f6891",
        textShadowRadius: 2,
        textShadowOffset: { width: 1, height: 1 },
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 4,
        borderColor: 'purple',
        overflow: 'hidden',
        marginVertical: 5
    },
    image: {
        width: '100%',
        height: '100%',
        opacity: 0.8
    },
})

export default GameOverScreen;