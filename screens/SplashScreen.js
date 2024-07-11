// SplashScreen.js
import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();
    const video = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Home'); // Replace 'Home' with your actual main screen name
        }, 5000); // Duration of the splash screen in milliseconds

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <Video
                ref={video}
                source={require('../d-shadow-r.mp4')} // Ensure the video file is in the correct path
                style={styles.video}
                resizeMode="cover"
                shouldPlay
                isLooping
                isMuted
                rate={1.3}
            />
        </SafeAreaView>
    );
};

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:-40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    video: {
       
        width: width / 1.5,
        height: height / 1.5,
    },
});

export default SplashScreen;
