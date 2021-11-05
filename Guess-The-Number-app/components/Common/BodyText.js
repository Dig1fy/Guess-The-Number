import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = props => {
    return (<Text style={{ ...styles.myTextStyle, ...props.style }}>
        {props.children}
    </Text >
    )
}

const styles = StyleSheet.create({
    myTextStyle: {
        fontFamily: 'notoserif',
        textShadowColor: 'gray',
        textShadowRadius: 2,
        textShadowOffset: { width: 1, height: 1 },
        textAlign: 'center',
    }
})

export default BodyText;