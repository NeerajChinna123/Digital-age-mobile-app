import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';
import useAuth from '../hooks/useAuth';
import { useLayoutEffect } from 'react';

export default function PostDetails() {
    const navigation = useNavigation();


    return (
        <SafeAreaView className="flex-1">
            <ImageBackground source={{ uri: "https://tinder.com/static/tinder.png" }} resizeMode="cover" className="flex-1">

                <Text>Post Details</Text>
            </ImageBackground>
        </SafeAreaView>

    );
}

