import React from "react";
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return <View style={{ ...styles.card, ...props.style }}>{props.children}</View >
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.7,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 6,
        elevation: 10,
        fontSize: 29,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 7,
    }
});

export default Card;
