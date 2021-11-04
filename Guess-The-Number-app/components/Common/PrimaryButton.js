import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';

const PrimaryButton = props => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={props.onPress}>
            <View style={{ ...styles.button, ...props.style }}>
                <Text style={{ ...styles.buttonText, ...props.style }}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
        textShadowOffset: { width: 11, height: 11 }
    },
    buttonText: {
        color: 'white',
        fontFamily: 'notoserif',
        fontSize: 18,
        textShadowColor: Colors.lightBlue,
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 },
        fontWeight: 'bold'
    },
})

export default PrimaryButton;