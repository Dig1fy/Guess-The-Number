import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/Common/BodyText';

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
                <BodyText style={styles.text}>Total rounds:</BodyText>
                <BodyText style={styles.text}>{props.totalTries}</BodyText>
            </View>
            <View>
                <Button title="Restart" onPress={props.onRestart} />
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
        textShadowColor: "blue",
        textShadowRadius: 2,
        textShadowOffset: { width: 1, height: 1 },
        elevation: 5,
        fontSize: 22,
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