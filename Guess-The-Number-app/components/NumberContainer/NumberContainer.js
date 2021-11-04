import React from "react";
import { Text, View, StyleSheet } from 'react-native'
import Colors from "../../constants/Colors";

const NumberContainer = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: Colors.secondaryButton,
        padding: 10,
        borderRadius: 9,
        marginVertical: 10,
        marginHorizontal: 10,
        opacity: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        color: Colors.primaryButton,
        fontSize: 21,
        width: 150,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default NumberContainer;