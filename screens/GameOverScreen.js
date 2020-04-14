import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, ScrollView } from 'react-native';
import Colors from "../constants/colors";
import DefaultStyles from '../constants/default-styles';
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
    return (
        <ScrollView>
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
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.8,
        //the height also uses the same exact dimensions as the width to ensure it's a square
        height: Dimensions.get('window').width * 0.8,
        borderColor: 'black',
        borderWidth: 3,
        //Border radius must be half of the width and height dimensions to make is a perfect square
        borderRadius: Dimensions.get('window').width * 0.8/2,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    },
    resultContainer: {
        marginHorizontal: 20,
        marginVertical: Dimensions.get('window').height / 60
    }
});

export default GameOverScreen;
