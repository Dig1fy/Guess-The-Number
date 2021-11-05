import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
    return (
        <TextInput {...props} placeholder='Type here' style={{ ...styles.screen, ...props.style }} />
    )
}

const styles = StyleSheet.create({
    screen: {
        borderBottomColor: 'grey',
        height: 30,
        borderBottomWidth: 1,
        marginVertical: 10,
    }
})

export default Input;