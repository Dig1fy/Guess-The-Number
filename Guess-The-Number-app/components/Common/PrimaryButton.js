import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native';
import Colors from '../../constants/Colors';

const PrimaryButton = props => {
    let MainButtonEffect = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        MainButtonEffect = TouchableNativeFeedback;
    }
    return (
        <View style={styles.buttonContainer}>
            <MainButtonEffect>
                <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={props.onPress}>
                    <View style={{ ...styles.button, ...props.style }}>
                        <Text style={{ ...styles.buttonText, ...props.style }}>
                            {props.children}
                        </Text>
                    </View>
                </TouchableOpacity>
            </MainButtonEffect>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 25,
        overflow: 'hidden'
    },
    container: {
        textShadowColor: Colors.green,
        textShadowRadius: 25,
        textShadowOffset: { width: 11, height: 11 },
    },
    button: {
        backgroundColor: Colors.lightBlue,
        // color: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
        textShadowColor: Colors.green,
        textShadowRadius: 25,
        textShadowOffset: { width: 11, height: 11 },
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontFamily: 'notoserif',
        fontSize: 18,
        textShadowColor: Colors.lightBlue,
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 },
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default PrimaryButton;