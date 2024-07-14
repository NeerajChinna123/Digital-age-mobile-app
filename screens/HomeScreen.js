import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import Swiper from "react-native-deck-swiper";
import { Video, Audio } from 'expo-av';
import * as Progress from 'react-native-progress';
import Swipe from '../components/Swipe';
import Swipe2 from '../components/Swipe2';
import Swipe3 from '../components/Swipe3';
import Swipe4 from '../components/Swipe4';

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
        post: require('../d-p-p.png'),
        video: "",
    },
    {
        id: 2,
        name: "User 2",
        userName: "@user2",
        category: "EXPLICIT",
        feed: "FOR_YOU",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",

        video: require("../d1.mp4"),
        post: "",
    },
    {
        id: 3,
        name: "User 3",
        userName: "@user3",
        category: "GENERAL",
        feed: "FOR_YOU",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: "",
        post: require('../d-p-p.png'),
    },
    {
        id: 4,
        name: "User 4",
        userName: "@user4",
        category: "GENERAL",
        feed: "FOR_YOU",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: "",
        post: require('../d-p-p.png'),
    },

    {
        id: 5,
        name: "User 5",
        userName: "@user5",
        category: "GENERAL",
        feed: "FOLLOW",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: require("../d2.mp4"),
        post: "",
    },
    {
        id: 6,
        name: "User 6",
        userName: "@user6",
        category: "GENERAL",
        feed: "FOLLOW",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: "",
        post: require('../d-p-p.png'),
    },
    {
        id: 7,
        name: "User 7",
        userName: "@user7",
        category: "EXPLICIT",
        feed: "FOLLOW",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: "",
        post: require('../d-p-p.png'),
    },
    {
        id: 8,
        name: "User 8",
        userName: "@user8",
        category: "GENERAL",
        feed: "FOLLOW",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: "",
        post: require('../d-p-p.png'),
    },
    {
        id: 9,
        name: "User 9",
        userName: "@user9",
        category: "GENERAL",
        feed: "TRENDING",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: "",
        post: require('../d-p-p.png'),
    },
    {
        id: 10,
        name: "User 10",
        userName: "@user10",
        category: "GENERAL",
        feed: "TRENDING",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: require("../d3.mp4"),
        post: "",
    },
    {
        id: 11,
        name: "User 11",
        userName: "@user11",
        category: "GENERAL",
        feed: "TRENDING",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: "",
        post: require('../d-p-p.png'),
    },
    {
        id: 12,
        name: "User 12",
        userName: "@user12",
        category: "GENERAL",
        feed: "TRENDING",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: "",
        post: require('../d-p-p.png'),
    },
    {
        id: 13,
        name: "User 13",
        userName: "@user13",
        category: "EXPLICIT",
        feed: "RECENT",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: "",
        post: require('../d-p-p.png'),
    },
    {
        id: 14,
        name: "User 14",
        userName: "@user14",
        category: "GENERAL",
        feed: "RECENT",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: "",
        post: require('../d-p-p.png'),
    },

    {
        id: 15,
        name: "User 15",
        userName: "@user15",
        category: "GENERAL",
        feed: "RECENT",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: require("../d1.mp4"),
        post: "",
    },
    {
        id: 16,
        name: "User 16",
        userName: "@user16",
        category: "GENERAL",
        feed: "RECENT",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQHr31DtXUh9GA/profile-displayphoto-shrink_400_400/0/1719036984229?e=1726099200&v=beta&t=6RhKkyLrJ7OF2iEiiRFwNFOtRgDyA-7mIZpBn2PE8uY",
        video: require("../d2.mp4"),

        post: "",
    }

    ]



    const [currentNav, setCurrentNav] = useState("FOR_YOU");

    const forYouData = data.filter(item => item.feed === "FOR_YOU");

    const followData = data.filter(item => item.feed === "FOLLOW");

    const trendData = data.filter(item => item.feed === "TRENDING");

    const recentData = data.filter(item => item.feed === "RECENT");


    const [progress, setProgress] = useState(0);

    const [filteredData, setFilteredData] = useState(forYouData);
    

    const filterData = (feed) => {
        const filtered = data.filter(item => item.feed === feed);
        setFilteredData(filtered);
        // setCurrentIndex(0);
        setCurrentNav(feed) // Reset index when data is filtered
    };


    const videoRef = useRef(null);





    return (
        <SafeAreaView className="flex-1" >

            <ImageBackground source={require('../bg-8.jpg')} className="flex-1" // Ensure the image file is in the correct path
            >

                <SafeAreaView className="bg-black/50 bg-opacity-10 flex-1 p-2">
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
                            <TouchableOpacity onPress={() => filterData('FOR_YOU')} className={
                                currentNav == "FOR_YOU" ? "font-semibold text-lg text-white bg-white/20 p-2 rounded-3xl transition transform duration-200 ease-in-out" :
                                    " p-2"}><Text className="font-semibold text-lg text-white"
                                    >
                                    For You
                                </Text></TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress={() => filterData("FOLLOW")} className={
                                currentNav == "FOLLOW" ? "font-semibold text-lg text-white bg-white/20 p-2 rounded-3xl transition transform duration-200 ease-in-out" :
                                    " p-2"}><Text className="font-semibold text-lg text-white"
                                    >
                                    Follow
                                </Text></TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress={() => filterData("TRENDING")} className={
                                currentNav == "TRENDING" ? "font-semibold text-lg text-white bg-white/20 p-2 rounded-3xl transition transform duration-200 ease-in-out" :
                                    " p-2"}><Text className="font-semibold text-lg text-white"
                                    >
                                    Trending
                                </Text></TouchableOpacity>
                        </View>


                        <View>
                            <TouchableOpacity onPress={() => filterData("RECENT")} className={
                                currentNav == "RECENT" ? "font-semibold text-lg text-white bg-white/20 p-2 rounded-3xl transition transform duration-200 ease-in-out" :
                                    " p-2"}><Text className="font-semibold text-lg text-white"
                                    >
                                    Recent
                                </Text></TouchableOpacity>
                        </View>


                    </View>

                    <View className="mt-[-32] ">
                        {currentNav == "FOLLOW" ? <Swipe data={filteredData}  >

                        </Swipe> : (currentNav == "TRENDING" ? <Swipe2 data={filteredData} >

                        </Swipe2> : (currentNav == "RECENT" ? <Swipe3 data={filteredData} >

                        </Swipe3> : <Swipe4 data={filteredData} >

                        </Swipe4>))}
                    </View>

                    {/*  */}

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