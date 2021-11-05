import React from "react";
import { View, StyleSheet, Dimensions } from 'react-native'
import BodyText from "../Common/BodyText";

const Header = (props) => {
    return (
        <View style={{ ...styles.header, ...props.style }}>
            <BodyText style={styles.headerTitle}>{props.title}</BodyText>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        paddingTop: 2,
        marginVertical: 35,
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
