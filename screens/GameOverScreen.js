import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import Colors from "../constants/colors";
import DefaultStyles from '../constants/default-styles';
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
    return (
        <View style={styles.container}>
            <Text style={DefaultStyles.title}>Game Over Bitch!</Text>
            <View style={styles.imageContainer}>
                {/*<Image source={require('../assets/success.png')} style={styles.image} resizeMode="cover"/>*/}
                <Image source={{uri: 'https://avatarfiles.alphacoders.com/865/86518.png'}} style={styles.image} resizeMode="cover"/>
            </View>
            <View style={styles.resultContainer}>
                <Text style={DefaultStyles.bodyText}>Number of rounds: <Text style={styles.highlight}>{props.rounds}</Text></Text>
                <Text style={DefaultStyles.bodyText}>Game Number: <Text style={styles.highlight}>{props.number}</Text></Text>
            </View>
            <MainButton onPress={props.onRestart}>
                NEW GAME
            </MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 150,
        overflow: 'hidden',
        marginVertical: 30
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    },
    resultContainer: {
        marginHorizontal: 20,
        marginVertical: 10
    }
});

export default GameOverScreen;
