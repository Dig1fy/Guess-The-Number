import React from "react";
import { View, StyleSheet, Platform } from 'react-native'
import BodyText from "../Common/BodyText";

const Header = (props) => {
    return (
        <View style={styles.header}>
            <BodyText style={styles.headerTitle}>{props.title}</BodyText>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: '#DAA520',
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerTitle: {
        color: 'black',
        fontSize: 21,

    },
})

export default Header;
