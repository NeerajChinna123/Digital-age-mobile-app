import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';
import useAuth from './hooks/useAuth';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {

    const { user } = useAuth();


    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />

                {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
                <Stack.Screen name="Chat" component={ChatScreen} />
            </>
        </Stack.Navigator>


    );
}

