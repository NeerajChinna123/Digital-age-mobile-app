import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
import PostDetails from './screens/PostDetails';
import useAuth from './hooks/useAuth';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    const { user } = useAuth();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <>
                <Stack.Group initialRouteName="Splash"
                    screenOptions={{
                        headerShown: false,
                        animation: 'fade', // Apply fade transition
                    }}>
                    {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
                    <Stack.Screen name="Splash" component={SplashScreen} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                   
                </Stack.Group>
                <Stack.Group screenOptions={{ presentation: 'modal' }}>
                    {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
                    <Stack.Screen name="Chat" component={ChatScreen} />
                </Stack.Group>

                <Stack.Group>
                <Stack.Screen name="PostDetails" component={PostDetails} />
                </Stack.Group>
            </>
        </Stack.Navigator>


    );
}

