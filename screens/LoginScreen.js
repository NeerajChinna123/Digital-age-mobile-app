import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';
import useAuth from '../hooks/useAuth';
import { useLayoutEffect } from 'react';

export default function LoginScreen() {
    const navigation = useNavigation();


    return (
        <SafeAreaView className="flex-1">
            <ImageBackground source={{ uri: "https://tinder.com/static/tinder.png" }} resizeMode="cover" className="flex-1">

                <TouchableOpacity onPress={() => navigation.navigate("Home")} className="absolute bottom-[18%] left-[26%] p-4 bg-gray-200 rounded-lg">
                    <Text className="text-black font-bold">Sign in to Start swiping</Text>
                </TouchableOpacity>

            </ImageBackground>
        </SafeAreaView>

    );
}

