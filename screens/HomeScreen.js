import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useLayoutEffect, useRef } from 'react';
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

    const swiperRef = useRef(null);

    return (
        <SafeAreaView className="flex-1" >

            <ImageBackground source={require('../bg-8.jpg')} className="flex-1" // Ensure the image file is in the correct path
            >

                <SafeAreaView className="bg-black/40 bg-opacity-20 p-2">
                    <View className="flex flex-row justify-between items-center p-4">
                        <TouchableOpacity >
                            <Image className="h-10 w-10 rounded-full object-cover" source={{ uri: "https://media.licdn.com/dms/image/D5603AQFAUcTYDLXqBA/profile-displayphoto-shrink_800_800/0/1681764031887?e=1726099200&v=beta&t=xj9Lxl6yRL2Wcb5imP_zspIqb1ZpIb5vm6Sbw6DQLow" }} />
                        </TouchableOpacity>


                        <TouchableOpacity  onPress={() => navigation.navigate("Chat")} >
                            <Image className="h-16 w-16" source={require('../d-lo.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity className="mt-1 bg-white/20 rounded-xl p-2 ">
                            <Ionicons size={26} color="white" name="search-outline" />
                        </TouchableOpacity>

                    </View>

                    <View className="mt-[-32] ">
                        <Swiper
                            ref={swiperRef}
                            onSwipedLeft={() => { console.log('Swiped Pass') }}
                            onSwipedRight={() => { console.log('Swiped Match') }}
                            overlayLabels={{
                                left: {
                                    title: "NOPE",
                                    style: {
                                        label: {
                                            textAlign: "right",
                                            color: "red"
                                        }
                                    }
                                },
                                right: {
                                    title: "MATCH",
                                    style: {
                                        label: {
                                            textAlign: "LEFT",
                                            color: "#4DED30"
                                        }
                                    }
                                }
                            }}

                            containerStyle={{ backgroundColor: "transparent" }} cards={data} stackSize={3} cardIndex={0} animateCardOpacity renderCard={(card) => (
                                <View key={card.id} className="relative bg-white h-3/4 rounded-xl ">

                                    <Image className="h-full w-full absolute top-0 rounded-xl" source={{ uri: card.photoUrl }} />
                                    <View style={[styles.cardShadow]} className="bg-white absolute bottom-0 w-full h-20 rounded-b-xl">
                                        <View className="flex-row justify-between px-4 py-6 ">
                                            <View>
                                                <Text className="font-bold text-xl">{card?.name}</Text>
                                            </View>

                                            <View>
                                                <Text className="font-semibold text-xl">{card?.age}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )}   >

                        </Swiper>


                    </View>


                    <View className="flex-row justify-evenly mt-[163%]">
                        <View>
                            <TouchableOpacity onPress={() => swiperRef?.current.swipeRight()} className="p-4 rounded-full bg-red-200 ">

                                <Entypo name="cross" size={24} color="red" />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress={() => swiperRef?.current.swipeLeft()} className="p-4 rounded-full bg-green-200 ">
                                <AntDesign name="heart" size={24} color="green" />
                            </TouchableOpacity>
                        </View>
                    </View>

                </SafeAreaView>

            </ImageBackground>


        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    cardShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0, height: 1,
        },
        shadowOpacity: 0.2, shadowRadius: 1.41,
        elevation: 2,
    },
    image: {
        blurRadius: 10, // Adjust the blur radius to your liking
    },
    overlay: {

        backgroundColor: 'rgba(0, 0, 0, 0.5)',

    }
});