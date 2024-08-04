import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native';

export default function ChatScreen() {
    return (
        <SafeAreaView className="flex-1 relative" >

            <ImageBackground source={require('../bg-8.jpg')} className="flex-1" // Ensure the image file is in the correct path


            >

                <SafeAreaView className="bg-black/60 bg-opacity-10 flex-1 p-2">

                    <Text>ok ok ok </Text>
                </SafeAreaView>

            </ImageBackground>
        </SafeAreaView>

    );
}

