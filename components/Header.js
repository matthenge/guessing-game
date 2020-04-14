import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import Colors from '../constants/colors'
import DefaultStyles from '../constants/default-styles'

const Header = props => {
    return (
        <View style={{
            ...styles.header,
            ...Platform.select({
                ios: styles.headerIOS,
                android: styles.headerAndroid
            })
        }}
        >
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerIOS: {
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    headerAndroid: {
        backgroundColor: Colors.primary
    },
    title: {
        color: Platform.OS === 'ios' ? Colors.primary: 'white',
        fontSize: 18,
        fontFamily: 'open-sans-bold'
    }
});

export default Header;
