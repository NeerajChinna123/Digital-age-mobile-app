import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useLayoutEffect } from 'react';
import Swiper from "react-native-deck-swiper";

import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
    const navigation = useNavigation();

    const data = [{
        id: 1,
        name: "Neeraj Baipureddy",
        age: "24",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY"
    },

    {
        id: 2,
        name: "Rohit Sharma",
        age: "36",
        photoUrl: "https://pbs.twimg.com/profile_images/1810258334651494400/Gc3PZMyU_400x400.jpg"
    },

    {
        id: 3,
        name: "Virat Kohli",
        age: "18",
        photoUrl: "https://imgs.search.brave.com/r0EEXFZQGrrU7nbtxWQ8U4Fzy5L2r-1ALmALrhM-cq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvdmlyYXQta29o/bGktcGljdHVyZXMt/eWM4ZGZwY2pzc3Az/czRzZS5qcGc"
    },


    {
        id: 4,
        name: "Neeraj Baipureddy",
        age: "24",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY"
    },


    {
        id: 5,
        name: "Neeraj Baipureddy",
        age: "24",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY"
    },


    {
        id: 6,
        name: "Rohit Sharma",
        age: "36",
        photoUrl: "https://pbs.twimg.com/profile_images/1810258334651494400/Gc3PZMyU_400x400.jpg"
    },

    {
        id: 7,
        name: "Virat Kohli",
        age: "18",
        photoUrl: "https://imgs.search.brave.com/r0EEXFZQGrrU7nbtxWQ8U4Fzy5L2r-1ALmALrhM-cq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvdmlyYXQta29o/bGktcGljdHVyZXMt/eWM4ZGZwY2pzc3Az/czRzZS5qcGc"
    },


    ]

    return (
        <SafeAreaView>

            <View className="flex flex-row justify-between items-center p-4">
                <TouchableOpacity >
                    <Image className="h-10 w-10 rounded-full" source={{ uri: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_800_800/0/1719036515157?e=1726099200&v=beta&t=uBADHmrxiMkFc61y_ZjnNAPMjAjFBITxmQE-rlJmSsA" }} />
                </TouchableOpacity>


                <TouchableOpacity >
                    <Image className="h-12 w-12 rounded-full" source={require('../tind-1.png')} />
                </TouchableOpacity>

                <TouchableOpacity className="mt-1">
                    <Ionicons size={35} color="#FE3C72" name="chatbubbles-sharp" />
                </TouchableOpacity>

            </View>

            <View className="mt-[-10] flex-1">
                <Swiper containerStyle={{ backgroundColor: "transparent" }} cards={data} stackSize={5} cardIndex={0} animateCardOpacity renderCard={(card) => (
                    <View key={card.id} className="relative bg-white h-3/4 rounded-xl">

                        <Image className="h-full w-full absolute top-0 rounded-xl" source={{ uri: card.photoUrl }} />

                    </View>
                )}   >

                </Swiper>
            </View>
        </SafeAreaView>

    );
}

