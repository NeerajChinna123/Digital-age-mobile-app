import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useLayoutEffect, useRef, useState } from 'react';
import Swiper from "react-native-deck-swiper";


import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
    const navigation = useNavigation();

    const data = [{
        id: 1,
        name: "User 1",
        userName: "@user1",
        category: "GENERAL",
        feed: "FOR_YOU",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        post: "",
        video: "../d1.mp4"
    },
    {
        id: 2,
        name: "User 2",
        userName: "@user2",
        category: "SENSITIVE",
        feed: "FOR_YOU",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: ""
    },
    {
        id: 3,
        name: "User 3",
        userName: "@user3",
        category: "GENERAL",
        feed: "FOR_YOU",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: ""
    },
    {
        id: 4,
        name: "User 4",
        userName: "@user4",
        category: "GENERAL",
        feed: "FOR_YOU",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: ""
    },

    {
        id: 5,
        name: "User 5",
        userName: "@user5",
        category: "GENERAL",
        feed: "FOLLOW",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: "../d2.mp4"
    },
    {
        id: 6,
        name: "User 6",
        userName: "@user6",
        category: "GENERAL",
        feed: "FOLLOW",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: ""
    },
    {
        id: 7,
        name: "User 7",
        userName: "@user7",
        category: "SENSITIVE",
        feed: "FOLLOW",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: ""
    },
    {
        id: 8,
        name: "User 8",
        userName: "@user8",
        category: "GENERAL",
        feed: "FOLLOW",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: ""
    },
    {
        id: 9,
        name: "User 9",
        userName: "@user9",
        category: "GENERAL",
        feed: "TRENDING",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: ""
    },
    {
        id: 10,
        name: "User 10",
        userName: "@user10",
        category: "GENERAL",
        feed: "TRENDING",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: "../d3.mp4"
    },
    {
        id: 11,
        name: "User 11",
        userName: "@user11",
        category: "GENERAL",
        feed: "TRENDING",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: ""
    },
    {
        id: 12,
        name: "User 12",
        userName: "@user12",
        category: "GENERAL",
        feed: "TRENDING",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: ""
    },
    {
        id: 13,
        name: "User 13",
        userName: "@user13",
        category: "SENSITIVE",
        feed: "RECENT",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: ""
    },
    {
        id: 14,
        name: "User 14",
        userName: "@user14",
        category: "GENERAL",
        feed: "RECENT",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: ""
    },

    {
        id: 15,
        name: "User 15",
        userName: "@user15",
        category: "GENERAL",
        feed: "RECENT",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: "../d1.mp4"
    },
    {
        id: 16,
        name: "User 16",
        userName: "@user16",
        category: "GENERAL",
        feed: "RECENT",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: "../d2.mp4"
    }

    ]

    const swiperRef = useRef(null);

    const [currentNav, setCurrentNav] = useState("FOR_YOU");

    return (
        <SafeAreaView className="flex-1" >

            <ImageBackground source={require('../bg-8.jpg')} className="flex-1" // Ensure the image file is in the correct path
            >

                <SafeAreaView className="bg-black/50 bg-opacity-10 p-2">
                    <View className="flex flex-row justify-between items-center p-4">
                        <TouchableOpacity >
                            <Image className="h-10 w-10 rounded-full object-cover" source={{ uri: "https://media.licdn.com/dms/image/D5603AQFAUcTYDLXqBA/profile-displayphoto-shrink_800_800/0/1681764031887?e=1726099200&v=beta&t=xj9Lxl6yRL2Wcb5imP_zspIqb1ZpIb5vm6Sbw6DQLow" }} />
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => navigation.navigate("Chat")} >
                            <Image className="h-16 w-16" source={require('../d-lo.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity className="mt-1 bg-white/20 rounded-xl p-2 ">
                            <Ionicons size={26} color="white" name="search-outline" />
                        </TouchableOpacity>

                    </View>

                    <View className="flex flex-row justify-between px-4">
                        <View>
                            <TouchableOpacity onPress={()=>setCurrentNav("FOR_YOU")} className={
                                currentNav == "FOR_YOU" ? "font-semibold text-lg text-white bg-white/20 p-2 rounded-3xl transition transform duration-200 ease-in-out" :
                                    " p-2"}><Text className="font-semibold text-lg text-white"
                                    >
                                    For You
                                </Text></TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress={()=>setCurrentNav("FOLLOW")} className={
                                currentNav == "FOLLOW" ? "font-semibold text-lg text-white bg-white/20 p-2 rounded-3xl transition transform duration-200 ease-in-out" :
                                    " p-2"}><Text className="font-semibold text-lg text-white"
                                    >
                                    Follow
                                </Text></TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress={()=>setCurrentNav("TRENDING")} className={
                                currentNav == "TRENDING" ? "font-semibold text-lg text-white bg-white/20 p-2 rounded-3xl transition transform duration-200 ease-in-out" :
                                    " p-2"}><Text className="font-semibold text-lg text-white"
                                    >
                                    Trending
                                </Text></TouchableOpacity>
                        </View>


                        <View>
                            <TouchableOpacity onPress={()=>setCurrentNav("RECENT")} className={
                                currentNav == "RECENT" ? "font-semibold text-lg text-white bg-white/20 p-2 rounded-3xl transition transform duration-200 ease-in-out" :
                                    " p-2"}><Text className="font-semibold text-lg text-white"
                                    >
                                    Recent
                                </Text></TouchableOpacity>
                        </View>


                    </View>

                    <View className="mt-[-32] ">
                        {/* <Swiper
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
                                <View key={card.id} className="relative bg-white/20  h-[65%] rounded-xl ">

                                  
                                </View>
                            )}   >

                        </Swiper> */}


                    </View>

                      {/* <Image className="h-full w-full absolute top-0 rounded-xl" source={{ uri: card.photoUrl }} /> */}
                                    {/* <View style={[styles.cardShadow]} className="bg-white absolute bottom-0 w-full h-20 rounded-b-xl">
                                        <View className="flex-row justify-between px-4 py-6 ">
                                            <View>
                                                <Text className="font-bold text-xl">{card?.name}</Text>
                                            </View>

                                            <View>
                                                <Text className="font-semibold text-xl">{card?.age}</Text>
                                            </View>
                                        </View>
                                    </View> */}


                    {/* <View className="flex-row justify-evenly mt-[163%]">
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
                    </View> */}

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