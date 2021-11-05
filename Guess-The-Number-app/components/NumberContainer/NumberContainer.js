import React from "react";
import { Text, View, StyleSheet } from 'react-native'
import Colors from "../../constants/Colors";
import BodyText from "../Common/BodyText";

const NumberContainer = props => {
    return (
        <View style={{ ...styles.container, ...props.style }}>
            <BodyText style={styles.number}>{props.children}</BodyText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: Colors.secondaryButton,
        padding: 10,
        borderRadius: 55,
        marginVertical: 10,
        marginHorizontal: 550,
        opacity: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        color: Colors.primaryButton,
        fontSize: 21,
        width: 150,
        textAlign: 'center',
        fontWeight: 'bold',
        marginHorizontal: 30,
    }
})

export default NumberContainer;