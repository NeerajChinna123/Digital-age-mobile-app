import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, Easing, TouchableOpacity, Image, ImageBackground, Animated, KeyboardAvoidingView, Platform, Alert, ScrollView, TextInput } from 'react-native';
import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import Swiper from "react-native-deck-swiper";
import { Video, Audio } from 'expo-av';
import * as Progress from 'react-native-progress';
import Swipe from '../components/Swipe';
import LottieView from 'lottie-react-native';
import Swipe2 from '../components/Swipe2';
import Swipe3 from '../components/Swipe3';
import Swipe4 from '../components/Swipe4';
import * as ImagePicker from 'expo-image-picker';

import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

import { Switch } from 'react-native';

import Modal from "react-native-modal";
import { BlurView } from 'expo-blur';

export default function HomeScreen() {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);



    const [isEnabled1, setIsEnabled1] = useState(true);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);


    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);


    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const navigation = useNavigation();

    const data = [{
        id: 1,
        name: "Peter",
        userName: "@Pe20",
        category: "GENERAL",
        feed: "FOR_YOU",

        photoUrl: "https://media.licdn.com/dms/image/D5603AQFAUcTYDLXqBA/profile-displayphoto-shrink_800_800/0/1681764031887?e=1726704000&v=beta&t=piy0AWRKEDTmdfD3zevzggciPPr9G1SLiGnsf00sq6U",
        post: "",
        video: require("../d-1-a.mp4"),
    },
    {
        id: 2,

        name: "Neeraj",
        userName: "@nc127",
        category: "EXPLICIT",
        feed: "FOR_YOU",
        photoUrl: "https://media.licdn.com/dms/image/D4D03AQELM-tqD-X4-A/profile-displayphoto-shrink_800_800/0/1721061786562?e=1726704000&v=beta&t=st42cxp0lMvJ1179yafkRc8rGUM8uIVeL3fcGYncnlQ",
        video: "",
        post: require('../busy-day.jpeg'),
    },
    {
        id: 3,
        name: "Jeff",
        userName: "@jf21",
        category: "GENERAL",
        feed: "FOR_YOU",
        photoUrl: "https://media.licdn.com/dms/image/D5603AQFh1MEBbmOVBQ/profile-displayphoto-shrink_800_800/0/1718282646997?e=1726704000&v=beta&t=eE42r-Qy5Tt150ihatWEUxA6Cr_JgZt-MLvf52O8KaU",
        video: require("../d-2-a.mp4"),
        post: "",
    },
    {
        id: 121,
        name: "Peter",
        userName: "@Pe20",
        category: "GENERAL",
        feed: "FOR_YOU",

        photoUrl: "https://media.licdn.com/dms/image/D5603AQFAUcTYDLXqBA/profile-displayphoto-shrink_800_800/0/1681764031887?e=1726704000&v=beta&t=piy0AWRKEDTmdfD3zevzggciPPr9G1SLiGnsf00sq6U",
        post: require("../PG.jpeg"),
        video: "",
    },
    {
        id: 4,
        name: "Renee",
        userName: "@Re18",
        category: "PG",
        feed: "FOR_YOU",
        photoUrl: "https://media.licdn.com/dms/image/D4E03AQEFL9wup87lNw/profile-displayphoto-shrink_800_800/0/1714019194685?e=1726704000&v=beta&t=PTO-kEywgVt6n_2_qJJEcaro0uqxbZqp0RQD9Df0Lh8",
        video: "",
        post: require('../biki-f.jpeg'),
    },

    {
        id: 5,
        name: "User 5",
        userName: "@user5",
        category: "GENERAL",
        feed: "FOR_YOU",
        photoUrl: "https://thispersondoesnotexist.com",
        post: require('../d-p-p.png'),
        video: "",
    },
    {
        id: 6,
        name: "User 6",
        userName: "@user6",
        category: "EXPLICIT",
        feed: "FOR_YOU",
        photoUrl: "https://thispersondoesnotexist.com",

        video: require("../d1.mp4"),
        post: "",
    },
    {
        id: 7,
        name: "User 7",
        userName: "@user7",
        category: "GENERAL",
        feed: "FOR_YOU",
        photoUrl: "https://thispersondoesnotexist.com",
        video: "",
        post: require('../d-p-p.png'),
    },
    {
        id: 8,
        name: "User 8",
        userName: "@user8",
        category: "GENERAL",
        feed: "FOR_YOU",
        photoUrl: "https://thispersondoesnotexist.com",
        video: "",
        post: require('../d-p-p.png'),
    },

    {
        id: 9,
        name: "User 6",
        userName: "@user6",
        category: "GENERAL",
        feed: "FOLLOW",
        photoUrl: "https://thispersondoesnotexist.com",
        video: require("../d3.mp4"),
        post: "",
    },
    {
        id: 10,
        name: "User 9",
        userName: "@user9",
        category: "GENERAL",
        feed: "FOLLOW",
        photoUrl: "https://thispersondoesnotexist.com",
        video: "",
        post: require('../d-p-p.png'),
    },
    {
        id: 11,
        name: "User 10",
        userName: "@user10",
        category: "EXPLICIT",
        feed: "FOLLOW",
        photoUrl: "https://thispersondoesnotexist.com",
        video: "",
        post: require('../d-p-p.png'),
    },
    {
        id: 12,
        name: "User 12",
        userName: "@user12",
        category: "GENERAL",
        feed: "FOLLOW",
        photoUrl: "https://thispersondoesnotexist.com",
        video: "",
        post: require('../d-p-p.png'),
    },




    {
        id: 13,
        name: "User 5",
        userName: "@user5",
        category: "GENERAL",
        feed: "FOLLOW",
        photoUrl: "https://thispersondoesnotexist.com",
        video: require("../d3.mp4"),
        post: "",
    },
    {
        id: 14,
        name: "User 6",
        userName: "@user6",
        category: "GENERAL",
        feed: "FOLLOW",
        photoUrl: "https://thispersondoesnotexist.com",
        video: "",
        post: require('../d-p-p.png'),
    },
    {
        id: 15,
        name: "User 7",
        userName: "@user7",
        category: "EXPLICIT",
        feed: "FOLLOW",
        photoUrl: "https://thispersondoesnotexist.com",
        video: "",
        post: require('../d-p-p.png'),
    },
    {
        id: 16,
        name: "User 8",
        userName: "@user8",
        category: "GENERAL",
        feed: "FOLLOW",
        photoUrl: "https://thispersondoesnotexist.com",
        video: "",
        post: require('../d-p-p.png'),
    },


    {
        id: 17,
        name: "Peter",
        userName: "@pe14",
        category: "GENERAL",
        feed: "TRENDING",
        photoUrl: "https://media.licdn.com/dms/image/D5603AQFAUcTYDLXqBA/profile-displayphoto-shrink_800_800/0/1681764031887?e=1726704000&v=beta&t=piy0AWRKEDTmdfD3zevzggciPPr9G1SLiGnsf00sq6U",
        video: "",
        post: require('../d-p-p.png'),
    },
    {
        id: 18,
        name: "Renee",
        userName: "@Re18",
        category: "GENERAL",
        feed: "TRENDING",
        photoUrl: "https://media.licdn.com/dms/image/D4E03AQEFL9wup87lNw/profile-displayphoto-shrink_800_800/0/1714019194685?e=1726704000&v=beta&t=PTO-kEywgVt6n_2_qJJEcaro0uqxbZqp0RQD9Df0Lh8",
        video: require("../d3.mp4"),
        post: "",
    },
    {
        id: 19,
        name: "User 15",
        userName: "@user15",
        category: "GENERAL",
        feed: "TRENDING",
        photoUrl: "https://thispersondoesnotexist.com",
        video: "",
        post: require('../d-p-p.png'),
    },
    {
        id: 20,
        name: "User 12",
        userName: "@user12",
        category: "GENERAL",
        feed: "TRENDING",
        photoUrl: "https://thispersondoesnotexist.com",
        video: "",
        post: require('../d-p-p.png'),
    },





    {
        id: 21,
        name: "User 15",
        userName: "@user15",
        category: "EXPLICIT",
        feed: "RECENT",
        photoUrl: "https://thispersondoesnotexist.com",
        video: "",
        post: require('../d-p-p.png'),
    },
    {
        id: 22,
        name: "User 18",
        userName: "@user18",
        category: "GENERAL",
        feed: "RECENT",
        photoUrl: "https://thispersondoesnotexist.com",
        video: "",
        post: require('../d-p-p.png'),
    },

    {
        id: 23,
        name: "User 2",
        userName: "@user2",
        category: "GENERAL",
        feed: "RECENT",
        photoUrl: "https://thispersondoesnotexist.com",
        video: require("../d1.mp4"),
        post: "",
    },
    {
        id: 24,
        name: "User 19",
        userName: "@user19",
        category: "GENERAL",
        feed: "RECENT",
        photoUrl: "https://thispersondoesnotexist.com",
        video: require("../d3.mp4"),

        post: "",
    },


    {
        id: 21,
        name: "User 13",
        userName: "@user13",
        category: "EXPLICIT",
        feed: "RECENT",
        photoUrl: "https://thispersondoesnotexist.com",
        video: "",
        post: require('../d-p-p.png'),
    },
    {
        id: 22,
        name: "User 14",
        userName: "@user14",
        category: "GENERAL",
        feed: "RECENT",
        photoUrl: "https://thispersondoesnotexist.com",
        video: "",
        post: require('../d-p-p.png'),
    },

    {
        id: 23,
        name: "User 12",
        userName: "@user12",
        category: "GENERAL",
        feed: "RECENT",
        photoUrl: "https://thispersondoesnotexist.com",
        video: require("../d1.mp4"),
        post: "",
    },
    {
        id: 24,
        name: "User 12",
        userName: "@user12",
        category: "GENERAL",
        feed: "RECENT",
        photoUrl: "https://thispersondoesnotexist.com",
        video: require("../d3.mp4"),

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

    const [selecIm, setSelecIm] = useState('');
    const videoRef = useRef(null);


    const [tab, setTab] = useState("default")



    const [isModalVisible2, setModalVisible2] = useState(false);

    const toggleModal2 = () => {
        setModalVisible2(!isModalVisible2);
        // setTab("default");
    };

    const [expanded, setExpanded] = useState(false);
    const heightAnim = useRef(new Animated.Value(0)).current;
    const widthAnim = useRef(new Animated.Value(0)).current;

    const toggleMenu = () => {
        const toValue = expanded ? 0 : 1;
        setExpanded(!expanded);

        Animated.parallel([
            Animated.timing(heightAnim, {
                toValue,
                duration: 400,
                useNativeDriver: false,
            }),
            Animated.timing(widthAnim, {
                toValue,
                duration: 400,
                useNativeDriver: false,
            })
        ]).start();
    };


    // Set custom height and width values
    const heightInterpolate = heightAnim.interpolate({
        inputRange: [0, 2],
        outputRange: [0, 140] // Custom height in pixels (collapsed height, expanded height)
    });

    const widthInterpolate = widthAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 180] // Custom width in pixels (collapsed width, expanded width)
    });


    const [postModal, setPostModal] = useState(false);

    function togglePostModal() {
        setPostModal(!postModal);
    }

    const scrollViewRef = useRef(null);

    const scrollToView = (viewPosition) => {
        scrollViewRef.current?.scrollToPosition(0, viewPosition, true);
    };

    const selectImage = async () => {
        // setSelecIm(true);
        // Request permission to access the media library
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Sorry, we need camera roll permissions to make this work!');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        setSelecIm(result?.assets[0]?.uri);
        scrollToView(9400)
    };


    const [load, setLoad] = useState(false);

    const [load1, setLoad1] = useState(false);

    const [contentSta, setContentSta] = useState(false);

    const [contentSta1, setContentSta1] = useState(false);

    const [showBgRed, setShowBgRed] = useState(false);

    const [showBgGreen, setShowBgGreen] = useState(false);

    const [text, setText] = useState("");

    const [progress1, setProgress1] = useState(0);
    const [progress2, setProgress2] = useState(0);
    const [progress3, setProgress3] = useState(0);

    const [classi, setClassi] = useState(false);

    function loading() {
        setLoad(true);

        setTimeout(() => {
            setContentSta(true);
            setShowBgRed(true);
            setLoad(false);


            setTimeout(() => {
                setProgress1(0.6);
                setProgress2(0.55);
                setProgress3(0.99)
            }, 3100)

            setTimeout(() => {
                setShowBgRed(false);
            }, 1000)

            setTimeout(() => {
                setClassi(true);
            }, 4000)
        }, 4000)
    }

    // const [showBgRed, setShowBgRed] = useState(false);

    // const [showBgGreen, setShowBgGreen] = useState(false);


    const opacity1 = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity1, {
            toValue: showBgRed ? 1 : 0,
            duration: 200, // duration of the transition in milliseconds
            useNativeDriver: true,
        }).start();
    }, [showBgRed]);

    const translateX = useRef(new Animated.Value(0)).current;
    const glassWidth = useRef(new Animated.Value(10)).current; // Starting width of glass effect

    const [isModalVisible3, setModalVisible3] = useState(false);

    const toggleModal3 = () => {
        setModalVisible3(!isModalVisible3);
    };


    useEffect(() => {
        const startAnimation = () => {
            Animated.sequence([
                Animated.parallel([
                    Animated.timing(translateX, {
                        toValue: 300, // Adjust based on image width
                        duration: 2000,
                        easing: Easing.linear,
                        useNativeDriver: true, // Using native driver for translateX only
                    }),
                    Animated.timing(glassWidth, {
                        toValue: 300, // Maximum width of glass effect
                        duration: 2000,
                        easing: Easing.linear,
                        useNativeDriver: false, // Cannot use native driver for width
                    }),
                ]),
                Animated.parallel([
                    Animated.timing(translateX, {
                        toValue: 0,
                        duration: 2000,
                        easing: Easing.linear,
                        useNativeDriver: true, // Using native driver for translateX only
                    }),
                    Animated.timing(glassWidth, {
                        toValue: 10, // Return to initial width
                        duration: 2000,
                        easing: Easing.linear,
                        useNativeDriver: false, // Cannot use native driver for width
                    }),
                ]),
            ]).start(() => startAnimation());
        };

        startAnimation();
    }, [translateX, glassWidth]);

    const [hide, setHide] = useState(false);


    const [ViolenceModal, setViolenceModal] = useState(false);
    const [HumorModal, setHumorModal] = useState(false);
    const [PoliticalModal, setPoliticalModal] = useState(false);
    const [AdultModal, setAdultModal] = useState(false);


    return (
        <SafeAreaView className="flex-1 relative" >

            <ImageBackground source={require('../ocean.jpg')} className="flex-1" // Ensure the image file is in the correct path
            >

                <SafeAreaView className="bg-black/50 bg-opacity-10 flex-1 p-2">


                    <View className="flex flex-row justify-between items-center p-4">
                        <TouchableOpacity >
                            <Image className="h-10 w-10 rounded-full object-cover" source={require('../Real-human-2.webp')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Chat")} >
                            <Image className="h-16 w-16" source={require('../d-lo.png')} />
                        </TouchableOpacity>
                        {/* <TouchableOpacity className="mt-1 bg-white/20 rounded-xl p-2 ">
                            <Ionicons size={26} color="white" name="funnel" />
                        </TouchableOpacity> */}



                        <View className="flex-row items-center relative">
                            {expanded ?

                                <TouchableOpacity onPress={toggleMenu} className="mt-1 bg-black/40 rounded-full p-2 ">
                                    <Ionicons size={26} color="white" name="close" />
                                </TouchableOpacity>
                                : <TouchableOpacity onPress={toggleMenu} className="mt-1 bg-white/20 rounded-xl p-2 ">
                                    <Ionicons size={26} color="white" name="menu" />
                                </TouchableOpacity>
                            }
                        </View>
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


                    <Animated.View className=" absolute right-[20]  top-[75]  rounded-full overflow-hidden z-50  ml-2 " style={[{ height: heightInterpolate, width: widthInterpolate }]}>
                        <BlurView tint="dark"
                            intensity={80} className="flex flex-row space-x-1 pl-[6%] py-1 items-center ">

                            <TouchableOpacity onPress={() => setPostModal(true)} className="mt-1  rounded-xl p-2">
                                <Ionicons size={42} color="#06b6d4" name="add-circle" />
                            </TouchableOpacity>

                            <TouchableOpacity className="mt-1  rounded-xl p-2 ">
                                <Ionicons size={26} color="white" name="notifications" />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={toggleModal} className="mt-1 pl-3 rounded-xl  ">
                                <Ionicons size={26} color="white" name="funnel" />
                            </TouchableOpacity>
                        </BlurView>
                    </Animated.View>

                    <View className="mt-[-44] ">
                        {currentNav == "FOLLOW" ? <Swipe data={filteredData}  >

                        </Swipe> : (currentNav == "TRENDING" ? <Swipe2 data={filteredData} >

                        </Swipe2> : (currentNav == "RECENT" ? <Swipe3 data={filteredData} >

                        </Swipe3> : <Swipe4 data={filteredData} >

                        </Swipe4>))}
                    </View>
                </SafeAreaView>

            </ImageBackground>

            <Modal onBackdropPress={toggleModal} animationInTiming={400} animationOutTiming={400} className="w-[100%] ml-[0] mt-[60%] rounded-t-[40%] " animationIn="slideInUp" animationOut="slideOutDown" isVisible={isModalVisible}>
                <View className="w-full h-[100%] ">
                    <BlurView
                        className=" h-[100%]  "
                        tint="dark"
                        intensity={65}

                    >

                        <View className="flex flex-col space-y-4  items-center  mt-4">
                            <View className="h-[5.4%] w-[14%] bg-white/40 rounded-full">

                            </View>

                            <View className=""><Text className="text-white font-bold text-xl opacity-80">Filters</Text></View>
                        </View>

                        <View className="flex flex-row relative justify-around">
                            <TouchableOpacity onPress={() => setTab("default")} className="">
                                <Text className={tab == "default" ? "text-white font-bold text-lg opacity-70 transition-all transform duration-200 ease-in-out" : "text-white font-bold text-lg opacity-40 transition-all transform duration-500 ease-in-out"}>Default</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setTab("Content")} className="">
                                <Text className={tab == "Content" ? "text-white font-bold text-lg opacity-70 transition-all transform duration-200 ease-in-out" : "text-white font-bold text-lg opacity-40 transition-all transform duration-500 ease-in-out"}>Content</Text>
                            </TouchableOpacity>
                            {
                                tab == "default" ?
                                    <View className="absolute  h-[7%] w-[50%] z-50 bg-white/30  left-0 top-11 transition-all transform duration-200 ease-in-out ">

                                    </View> : <View className="absolute  h-[7%] w-[50%] z-50 bg-white/30  left-[50%] top-11 transition-all transform duration-200 ease-in-out">

                                    </View>
                            }


                            <View className="absolute  h-[7%] w-full bg-white/10  left-0 top-11 ">

                            </View>
                        </View>

                        {
                            tab == "default" ? <View className="flex flex-col space-y-6  mt-14 px-5 ">
                                <TouchableOpacity disabled className="flex flex-row  items-center">
                                    <View className="flex flex-row space-x-2 opacity-50">
                                        <Ionicons size={38} color="white" name="location" />
                                    </View>

                                    <View className="flex flex-row space-x-2 items-center ml-6 mt-1">
                                        <View>
                                            <Text className="text-3xl">🇺🇸</Text>
                                        </View>

                                        <View className="opacity-50">
                                            <Text className="text-lg text-white font-semibold">United States</Text>
                                        </View>
                                    </View>

                                    <View className="opacity-60 ml-[100] mt-1" >
                                        <Ionicons size={32} color="white" name="chevron-forward-outline" />
                                    </View>
                                </TouchableOpacity>


                                <TouchableOpacity disabled className="flex flex-row  items-center">
                                    <View className="flex flex-row space-x-2 opacity-50 mt-2">
                                        <Ionicons size={38} color="white" name="calendar" />
                                    </View>

                                    <View className="flex flex-col space-y-[1%]  ml-7 mt-1">

                                        <View className="opacity-50">
                                            <Text className="text-lg text-white font-semibold">Date of Birth</Text>
                                        </View>
                                        <View>
                                            <Text className="text-md font-semibold text-white opacity-50">July 7, 1964</Text>
                                        </View>

                                    </View>

                                    <View className="opacity-60 ml-[145] mt-2" >
                                        <Ionicons size={32} color="white" name="chevron-forward-outline" />
                                    </View>
                                </TouchableOpacity>

                                <View className="flex flex-row items-center">
                                    <TouchableOpacity className="relative ml-[-4]">
                                        <Image className="h-11 w-11 rounded-full border border-cyan-500 object-cover" source={{ uri: "https://media.licdn.com/dms/image/D5603AQFAUcTYDLXqBA/profile-displayphoto-shrink_800_800/0/1681764031887?e=1726099200&v=beta&t=xj9Lxl6yRL2Wcb5imP_zspIqb1ZpIb5vm6Sbw6DQLow" }} />
                                        <View className="rotate-90 absolute left-7 top-7">
                                            <Ionicons size={18} color="#22d3ee" name="leaf" />
                                        </View>

                                    </TouchableOpacity>

                                    <View className="flex flex-col space-y-[1%]  ml-6 mt-1">

                                        <View className="opacity-90">
                                            <Text className="text-lg text-white font-semibold">Peter Michaels</Text>
                                        </View>
                                        <View>
                                            <Text className="text-md font-semibold text-white opacity-70">Natural Persona</Text>
                                        </View>

                                    </View>

                                    <View className="opacity-60 ml-[128] mt-2" >
                                        <Ionicons size={32} color="white" name="chevron-forward-outline" />
                                    </View>
                                </View>

                                <View className="flex flex-row flex-wrap ml-[60] ">
                                    <View className="rounded-full p-2 bg-white/20 mr-2 mb-3">
                                        <Text className="text-md font-semibold text-white/80">Innovative</Text>
                                    </View>
                                    <View className="rounded-full p-2 bg-white/20  mr-2 mb-3">
                                        <Text className="text-md font-semibold text-white/80">Friendly</Text>
                                    </View>
                                    <View className="rounded-full p-2 bg-white/20  mr-2 mb-3">
                                        <Text className="text-md font-semibold text-white/80">Hiking</Text>
                                    </View>


                                    <View className="rounded-full p-2 bg-white/20  mr-2 mb-3">
                                        <Text className="text-md font-semibold text-white/80">Fitness</Text>
                                    </View>
                                    <View className="rounded-full p-2 bg-white/20  mr-2 mb-3">
                                        <Text className="text-md font-semibold text-white/80">Cooking</Text>
                                    </View>
                                    <View className="rounded-full p-2 bg-white/20  mr-2 mb-3">
                                        <Text className="text-md font-semibold text-white/80">Music</Text>
                                    </View>
                                    <View className="rounded-full p-2 bg-cyan-600/60  mr-2 mb-3">
                                        <Text className="text-md font-semibold text-white/80">Add +</Text>
                                    </View>
                                </View>


                            </View> : <View className="lex flex-col space-y-8 justify-center  mt-14 mb-[14%] px-5">

                                <TouchableOpacity className="flex flex-row  items-center">
                                    <View className="flex flex-row space-x-2 ">
                                        <Ionicons size={38} color="#22c55e" name="checkmark-circle" />
                                    </View>

                                    <View className="flex flex-row space-x-2 items-center ml-6 mt-1">


                                        <View className="">
                                            <Text className="text-[22%] text-white font-bold">General</Text>
                                        </View>
                                    </View>

                                    <View className=" ml-[150] mt-1" >
                                        <Switch
                                            trackColor={{ false: '#767577', true: '#22c55e' }}
                                            thumbColor={isEnabled ? '#ffffff' : '#f4f3f4'}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={toggleSwitch}
                                            value={isEnabled}
                                        />
                                    </View>
                                </TouchableOpacity>


                                <TouchableOpacity className="flex flex-row  items-center">
                                    <View className="flex flex-row space-x-2 ">
                                        <Ionicons size={38} color="#ef4444" name="warning" />
                                    </View>

                                    <View className="flex flex-row space-x-2 items-center ml-6 mt-1 relative">


                                        <View className="">
                                            <Text className="text-[22%] text-white font-bold">Explicit</Text>
                                        </View>


                                        <View className="absolute left-[75] top-[-6]">
                                            <Text className="text-[22%] text-white font-bold">*</Text>
                                        </View>
                                    </View>

                                    <View className=" ml-[154] mt-1" >
                                        <Switch
                                            trackColor={{ false: '#767577', true: '#ef4444' }}
                                            thumbColor={isEnabled1 ? '#ffffff' : '#f4f3f4'}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={toggleSwitch1}
                                            value={isEnabled1}
                                        />
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onLongPress={toggleModal2} className="flex flex-row  items-center">
                                    <View className="flex flex-row space-x-2 ">
                                        <Ionicons size={38} color="#facc15" name="people" />
                                    </View>

                                    <View className="flex flex-row space-x-2 items-center ml-6 mt-1">


                                        <View className="">
                                            <Text className="text-[22%] text-white font-bold">Parental Guidance</Text>
                                        </View>
                                    </View>

                                    <View className=" ml-[40] mt-1" >
                                        <Switch
                                            trackColor={{ false: '#767577', true: '#facc15' }}
                                            thumbColor={isEnabled2 ? '#ffffff' : '#f4f3f4'}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={toggleSwitch2}
                                            value={isEnabled2}
                                        />
                                    </View>
                                </TouchableOpacity>


                                <TouchableOpacity className="flex flex-row  items-center">
                                    <View className="flex flex-row space-x-2 relative ">
                                        <Ionicons size={38} color="#9333ea" name="person-outline" />
                                        <View className="absolute h-1 w-10 bg-purple-500 rotate-45 top-5 left-[-8]">

                                        </View>
                                    </View>

                                    <View className="flex flex-row space-x-2 items-center ml-6 mt-1">


                                        <View className="">
                                            <Text className="text-[22%] text-white font-bold">No Children</Text>
                                        </View>
                                    </View>

                                    <View className=" ml-[106] mt-1" >
                                        <Switch
                                            trackColor={{ false: '#767577', true: '#9333ea' }}
                                            thumbColor={isEnabled3 ? '#ffffff' : '#f4f3f4'}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={toggleSwitch3}
                                            value={isEnabled3}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>}

                        <TouchableOpacity onPress={toggleModal} className="p-4 bg-white/25 w-[90%] mt-6 ml-4 rounded-md flex flex-row justify-center">

                            <Text className="text-white text-lg font-bold">Apply Changes</Text>
                        </TouchableOpacity>

                    </BlurView>
                </View>
                <Modal
                    isVisible={isModalVisible2}
                    onBackdropPress={toggleModal2}
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    backdropOpacity={0.8}
                >

                    <BlurView
                        className=" h-[44%] rounded-3xl relative"
                        tint="dark"
                        intensity={60}

                    >

                        <TouchableOpacity onPress={toggleModal2} className="p-2 absolute bg-white/20 right-4 top-4 rounded-full">
                            <Ionicons size={20} color="#ffffff" name="close-outline" />
                        </TouchableOpacity>
                        <View className="relative flex flex-row  justify-center items-center p-8 mt-10 space-x-3" >


                            <Ionicons size={28} color="#facc15" name="people" />

                            <Text className="text-xl font-semibold text-white opacity-80" >Parental Guidance Attributes</Text>


                        </View>

                        <View className="flex flex-row flex-wrap ml-[20] ">
                            <View className="rounded-full p-2 bg-white/20 mr-2 mb-3">
                                <Text className="text-md font-semibold text-white/80">Educational</Text>
                            </View>
                            <View className="rounded-full p-2 bg-white/20  mr-2 mb-3">
                                <Text className="text-md font-semibold text-white/80">Animated</Text>
                            </View>
                            <View className="rounded-full p-2 bg-white/20  mr-2 mb-3">
                                <Text className="text-md font-semibold text-white/80">Family</Text>
                            </View>

                            <View className="rounded-full p-2 bg-white/20  mr-2 mb-3">
                                <Text className="text-md font-semibold text-white/80">Adventure</Text>
                            </View>
                            <View className="rounded-full p-2 bg-white/20  mr-2 mb-3">
                                <Text className="text-md font-semibold text-white/80">Cooking</Text>
                            </View>
                            <View className="rounded-full p-2 bg-white/20  mr-2 mb-3">
                                <Text className="text-md font-semibold text-white/80">Comedy</Text>
                            </View>
                            <View className="rounded-full p-2 bg-white/20  mr-2 mb-3">
                                <Text className="text-md font-semibold text-white/80">Sports</Text>
                            </View>
                            <View className="rounded-full p-2 bg-white/20  mr-2 mb-3">
                                <Text className="text-md font-semibold text-white/80">Drama</Text>
                            </View>
                            <View className="rounded-full p-2 bg-white/20  mr-2 mb-3">
                                <Text className="text-md font-semibold text-white/80">Science</Text>
                            </View>

                            <View className="rounded-full p-2 bg-cyan-600/60  mr-2 mb-3">
                                <Text className="text-md font-semibold text-white/80">Add +</Text>
                            </View>
                        </View>



                        <TouchableOpacity onPress={toggleModal2} className="p-4 bg-white/25 w-[40%] mt-5 ml-[29%] rounded-md flex flex-row justify-center">

                            <Text className="text-white text-[16%] font-bold">Save</Text>
                        </TouchableOpacity>
                    </BlurView>
                </Modal>
            </Modal>


            {postModal &&
                <Modal animationInTiming={400} onBackdropPress={togglePostModal} animationOutTiming={400} className="w-[100%] ml-[0] mt-[23%] rounded-t-[40%]" animationIn="slideInUp" animationOut="slideOutDown" isVisible={postModal}>

                    <KeyboardAvoidingView

                        className="w-full h-[100%] "
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                        <BlurView
                            className=" h-[100%] p-2 relative "
                            tint="dark"
                            intensity={65}
                        >
                            <View className="flex flex-col">
                                <View className="flex flex-row justify-between items-center px-3 pt-2">
                                    <TouchableOpacity className="pt-1" onPress={() => togglePostModal()}>
                                        <Text className="text-[18%] font-semibold text-white opacity-60">Cancel</Text>
                                    </TouchableOpacity>


                                    <TouchableOpacity disabled={(!selecIm.length > 0 || !text?.length > 0) && !contentSta} className={(!selecIm.length > 0 || !text?.length > 0) && !contentSta ? "bg-cyan-600/20 transition-all transform duration-300 ease-in-out px-4 py-3 rounded-full " : "bg-cyan-600/80 px-4 py-3 transition-all transform duration-300 ease-in-out rounded-full"}>
                                        <Text className="text-[16%] font-semibold text-white opacity-70">Post</Text>
                                    </TouchableOpacity>
                                </View>

                                <View className="h-[0.4%] w-[100%] bg-white/10 px-1 mt-[5%] rounded-full">

                                </View>
                            </View>

                            <ScrollView contentContainerStyle={styles.scrollView}>
                                <View className="ml-[6%] mt-[9%] flex flex-row space-x-8 items-center">
                                    <TouchableOpacity>
                                        <Image className="h-20 w-20 rounded-full object-fit" source={require('../Real-human-2.webp')} />
                                    </TouchableOpacity>

                                    <View className="flex flex-col space-y-4 mt-[-2] relative">
                                        <Text className="text-[17%] font-semibold text-white opacity-80">@Mike12</Text>
                                        <View className="flex flex-row space-x-6">
                                            <TouchableOpacity onPress={selectImage} >
                                                <Ionicons size={23} color="#BEBEBE" name="images" />
                                            </TouchableOpacity>
                                            <TouchableOpacity >
                                                <Ionicons size={26} color="#BEBEBE" name="camera" />
                                            </TouchableOpacity>

                                            <TouchableOpacity className="bg-white/70 rounded-md px-2 py-1" >
                                                <Text className="text-md  text-black font-semibold">GIF</Text>
                                            </TouchableOpacity>
                                        </View>

                                        {selecIm.length &&

                                            (contentSta ?
                                                <TouchableOpacity className="bg-red-600/20 px-3 py-2 absolute left-[60%] top-[-27%]  rounded-full ">
                                                    <Text className="text-[12%]  text-red-500 opacity-70">EXPLICIT</Text>
                                                </TouchableOpacity>

                                                :

                                                (
                                                    load ?
                                                        <View className="absolute left-[53%] opacity-90 top-[-69%]">
                                                            <LottieView
                                                                source={require('../Analyze.json')} // Replace with your right swipe animation
                                                                autoPlay
                                                                tim
                                                                style={styles.lottieAnimation14}
                                                            />
                                                        </View>

                                                        :

                                                        <View className="absolute left-[60%] opacity-90 top-[-29%]">
                                                            <TouchableOpacity onPress={() => loading()} className="flex flex-row space-x-2 p-2 rounded-full bg-white/30">
                                                                <Ionicons size={15} color="white" name="analytics" />
                                                                <Text className="text-[12%] text-white font-semibold">Analyze</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                )
                                            )
                                        }
                                    </View>
                                    <View className={"absolute top-[75%] w-[95%] left-[-14%]"}>
                                        <View className={selecIm.length > 0 ? "flex flex-row space-x-2 w-[64%] mt-[7%]  ml-[37%] bg-white/20 rounded-full p-3" : "flex flex-row space-x-2 w-[64%] mt-[7%] ml-[37%] bg-white/20 rounded-full p-3"}>
                                            <Ionicons size={20} color="#dedede" name="chatbubble" />
                                            <TextInput
                                                className="text-white font-semibold w-[72%]  opacity-80 text-md"
                                                placeholder="Whats New?"
                                                placeholderTextColor="#a7a7a7"
                                                value={text}
                                                onChangeText={setText}
                                                selectionColor="#dedede"
                                            />
                                            {
                                                text.length > 0 && <Ionicons size={20} color="#b8b8b8" name="close-outline" />
                                            }
                                        </View>
                                    </View>
                                    {selecIm.length > 0 &&
                                        <View className={contentSta ? " absolute opacity-100 transition-opacity transform duration-300 ease-in-out left-[-6%] top-[190%]" : load ? " absolute opacity-30 left-[-6%] transition-opacity transform duration-300 ease-in-out top-[190%]" : " absolute opacity-100 transition-opacity transform duration-300 ease-in-out left-[-6%] top-[190%]"}>
                                            <Image className="h-80 w-80 rounded-md  object-cover" source={require('../GUiEfQJa8AEllO4.jpeg')} />
                                        </View>
                                    }
                                    {selecIm.length > 0 &&
                                        <View className="absolute bg-black/80 p-1 rounded-full top-[204%] right-[9%]">
                                            <Ionicons size={15} color="white" name="close-outline" />
                                        </View>
                                    }
                                    {(contentSta && !hide ?


                                        <View className="flex absolute z-[50] top-[190%] h-[400%] left-[-22] w-[90.7%] rounded-md   flex-col space-y-2 bg-black/90  ">
                                            <View className="flex flex-col mt-[22%] items-center space-y-6 ml-2 p-2">
                                                <Text className="text-lg text-white font-semibold text-center">This content contains explicit material. Reach for this post will be limited due to community guidelines on explicit content.</Text>
                                                <TouchableOpacity onPress={() => setHide(true)} className="p-4 text-md  rounded-full bg-white/40"><Text className="text-white font-semibold">Hide This</Text></TouchableOpacity>
                                            </View>
                                        </View>


                                        :

                                        (
                                            load ?
                                                <View className="absolute left-[-8%] rotate-90 opacity-90 top-[216%]">
                                                    <LottieView
                                                        source={require('../Scan.json')} // Replace with your right swipe animation
                                                        autoPlay
                                                        duration={4000}
                                                        style={styles.lottieAnimation15}
                                                    />
                                                </View>

                                                :

                                                <View className="absolute left-[60%] opacity-90 top-[-29%]">

                                                </View>
                                            //     <View className="absolute left-[-8%] rotate-90 opacity-90 top-[216%]">
                                            //     <LottieView
                                            //         source={require('../Scan.json')} // Replace with your right swipe animation
                                            //         autoPlay
                                            //         duration={4000}
                                            //         style={styles.lottieAnimation15}
                                            //     />
                                            // </View>


                                        )
                                    )}


                                    {/* 
                                    {selecIm.length > 0 &&
                                        <View className="  mt-4">
                                            <Image source={require('../crime-2.webp')} className=" h-[84%] w-[60%]" />
                                            <View className="absolute bg-black/80 p-1 rounded-full top-[3%] right-[42%]">
                                                <Ionicons size={15} color="white" name="close-outline" />
                                            </View>
                                        </View>} */}
                                </View>

                                <Animated.View
                                    style={
                                        {
                                            opacity: opacity1,

                                        }}
                                    className="bg-red-800/30 h-[530px] w-[97.5%] left-[1.4%] top-[1%] transition-all transform duration-500 ease-in-out z-[-10] rounded-lg opacity-0  absolute"

                                >
                                </Animated.View>
                                {contentSta ?

                                    classi ?
                                        <View className="mt-[114%] mb-[60] flex px-2 flex-col space-y-4">
                                            <View className="h-[0.5%] w-[98%] bg-gray-500 opacity-30 ml-[1%] mt-2 mb-2 rounded-full">

                                            </View>
                                            <View className="flex flex-col  mt-8 space-y-2 px-2">
                                                <View className="flex flex-row items-center">
                                                    <Text className="font-bold text-white text-[20%]">Classified Attributes</Text>
                                                    <TouchableOpacity className="border border-white rounded-full h-5 w-5 relative ml-2 mt-1 opacity-30">

                                                        <Text className=" text-white italic text-[12%] absolute font-semibold left-[7] top-[2] ">i</Text>
                                                    </TouchableOpacity>

                                                </View>
                                            </View>

                                            <View className=" rounded-lg mt-1 flex flex-row  pt-4 pl-1  flex-wrap">
                                                <TouchableOpacity onPress={() => {
                                                    toggleModal3();
                                                    setViolenceModal(true);
                                                    setHumorModal(false);
                                                    setPoliticalModal(false);
                                                    setAdultModal(false)
                                                }} className="rounded-full p-2 bg-white/20 mr-2 mb-4">
                                                    <Text className="text-md font-semibold text-white/80">Violence</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={(() => {
                                                    toggleModal3(); setHumorModal(true); setViolenceModal(false);

                                                    setPoliticalModal(false);
                                                    setAdultModal(false)
                                                })} className="rounded-full p-2 bg-white/20  mr-2 mb-4">
                                                    <Text className="text-md font-semibold text-white/80">Humor</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={(() => {
                                                    toggleModal3(); setViolenceModal(false);
                                                    setHumorModal(false);
                                                    setPoliticalModal(true);
                                                    setAdultModal(false)
                                                })} className="rounded-full p-2 bg-white/20  mr-2 mb-4">
                                                    <Text className="text-md font-semibold text-white/80">Political</Text>
                                                </TouchableOpacity>
                                                {/* <TouchableOpacity onPress={(() => {
                                                    toggleModal3(); setAdultModal(true); setViolenceModal(false);
                                                    setHumorModal(false);
                                                    setPoliticalModal(true)

                                                })} className="rounded-full p-2 bg-white/20  mr-2 mb-4">
                                                    <Text className="text-md font-semibold text-white/80">Adult</Text>
                                                </TouchableOpacity> */}
                                            </View>



                                            <View className="h-[0.5%] w-[98%] bg-gray-500 opacity-30 ml-[1%] mt-3 rounded-full">

                                            </View>

                                            <View className="flex flex-col  mt-5 mb-3 space-y-2 px-2">
                                                <View className="flex flex-row items-center">
                                                    <Text className="font-bold text-white text-[20%]">Identified Elements</Text>
                                                    <View className="border border-white rounded-full h-5 w-5 relative ml-2 mt-1 opacity-30">
                                                        <Text className=" text-white italic text-[12%] absolute font-semibold left-[7] top-[2] ">i</Text>
                                                    </View>

                                                </View>

                                                <View className=" pt-4 flex flex-col space-y-2 ">

                                                    <View>
                                                        <Text className="font-bold text-white text-[16%] opacity-80">Blood</Text>
                                                    </View>

                                                    <View className="flex flex-row space-x-4 items-center">
                                                        <Progress.Bar className="border-0 bg-gray-500/80 opacity-70 mt-1 " duration={2400} progress={progress1} width={297} height={10} animated={true} color='#22d3ee' />
                                                        <View>
                                                            <Text className="font-bold text-white text-[15%] opacity-80">60%</Text>
                                                        </View>
                                                    </View>

                                                </View>


                                                <View className=" pt-4 flex flex-col space-y-2 ">

                                                    <View>
                                                        <Text className="font-bold text-white text-[16%] opacity-80">Weapons</Text>
                                                    </View>

                                                    <View className="flex flex-row space-x-4 items-center">
                                                        <Progress.Bar className="border-0 bg-gray-500/80 opacity-70 mt-1 " progress={progress2} duration={2800} width={297} height={10} animated={true} color='#22d3ee' />
                                                        <View>
                                                            <Text className="font-bold text-white text-[15%] opacity-80">55%</Text>
                                                        </View>
                                                    </View>

                                                </View>


                                                <View className=" pt-4 flex flex-col space-y-2 ">

                                                    <View>
                                                        <Text className="font-bold text-white text-[16%] opacity-80">Crime</Text>
                                                    </View>

                                                    <View className="flex flex-row space-x-4 items-center">
                                                        <Progress.Bar className="border-0 bg-gray-500/80 opacity-70 mt-1 " progress={progress3} duration={3200} width={297} height={10} animated={true} color='#22d3ee' />
                                                        <View>
                                                            <Text className="font-bold text-white text-[15%] opacity-80">99%</Text>
                                                        </View>
                                                    </View>

                                                </View>


                                            </View>

                                            <View className="h-[0.5%] w-[98%] bg-gray-500 opacity-30 ml-[1%] mt-[8%] rounded-full">

                                            </View>

                                            <View className="flex flex-row items-center px-2">
                                                <Text className="font-bold text-white text-[20%]">Settings</Text>
                                                <View className="border border-white rounded-full h-5 w-5 relative ml-2 mt-1 opacity-30">
                                                    <Text className=" text-white italic text-[12%] absolute font-semibold left-[7] top-[2] ">i</Text>
                                                </View>

                                            </View>

                                            <View className="flex flex-col space-y-2 px-1 pt-2">

                                                <View>
                                                    <View className="flex flex-row justify-between items-center">


                                                        <View className="flex flex-row space-x-3 items-center opacity-90">
                                                            <Ionicons size={20} color="#ffffff" name="musical-notes" />
                                                            <Text className="font-bold text-white text-[18%] ">Choose Music</Text>
                                                        </View>

                                                        <Ionicons size={24} color="#ffffff" name="chevron-forward" />

                                                    </View>
                                                    <View className="h-[1%] w-[98%] bg-gray-500 opacity-30 ml-[1%] mt-[4%] rounded-full">

                                                    </View>

                                                </View>

                                                <View>
                                                    <View className="flex flex-row justify-between items-center">


                                                        <View className="flex flex-row space-x-3 items-center opacity-90">
                                                            <Ionicons size={20} color="#ffffff" name="pricetags" />
                                                            <Text className="font-bold text-white text-[18%] ">Tag People</Text>
                                                        </View>

                                                        <Ionicons size={24} color="#ffffff" name="chevron-forward" />

                                                    </View>
                                                    <View className="h-[1%] w-[98%] bg-gray-500 opacity-30 ml-[1%] mt-[4%] rounded-full">

                                                    </View>

                                                </View>

                                                <View>
                                                    <View className="flex flex-row justify-between items-center">


                                                        <View className="flex flex-row space-x-3 items-center opacity-90">
                                                            <Ionicons size={20} color="#ffffff" name="calendar" />
                                                            <Text className="font-bold text-white text-[18%] ">Schedule</Text>
                                                        </View>

                                                        <Ionicons size={24} color="#ffffff" name="chevron-forward" />

                                                    </View>
                                                    <View className="h-[1%] w-[98%] bg-gray-500 opacity-30 ml-[1%] mt-[4%] rounded-full">

                                                    </View>

                                                </View>

                                                <View>
                                                    <View className="flex flex-row justify-between items-center">



                                                        <View className="flex flex-row space-x-3 items-center opacity-90">
                                                            <Ionicons size={20} color="#ffffff" name="location" />
                                                            <Text className="font-bold text-white text-[18%] ">Add Location</Text>
                                                        </View>

                                                        <Ionicons size={24} color="#ffffff" name="chevron-forward" />

                                                    </View>
                                                    <View className="h-[1%] w-[98%] bg-gray-500 opacity-30 ml-[1%] mt-[4%] rounded-full">

                                                    </View>

                                                </View>

                                                <View>
                                                    <View className="flex flex-row justify-between items-center">


                                                        <View className="flex flex-row space-x-3 items-center opacity-90">
                                                            <Ionicons size={20} color="#ffffff" name="people" />
                                                            <Text className="font-bold text-white text-[18%] ">Manage Audience</Text>
                                                        </View>

                                                        <Ionicons size={24} color="#ffffff" name="chevron-forward" />

                                                    </View>
                                                    <View className="h-[1%] w-[98%] bg-gray-500 opacity-30 ml-[1%] mt-[4%] rounded-full">

                                                    </View>

                                                </View>

                                                <View>
                                                    <View className="flex flex-row justify-between items-center">


                                                        <View className="flex flex-row space-x-3 items-center opacity-90">
                                                            <Ionicons size={20} color="#ffffff" name="settings" />
                                                            <Text className="font-bold text-white text-[18%] ">Advanced Settings</Text>
                                                        </View>

                                                        <Ionicons size={24} color="#ffffff" name="chevron-forward" />

                                                    </View>


                                                </View>












                                                {/* <View className="flex flex-row justify-between items-center">


                                                    <View className="flex flex-row space-x-3 items-center opacity-90">
                                                        <Ionicons size={20} color="#ffffff" name="musical-notes" />
                                                        <Text className="font-bold text-white text-[18%] ">Choose Music</Text>
                                                    </View>

                                                    <Ionicons size={24} color="#ffffff" name="chevron-forward" />
                                                </View> */}
                                            </View>

                                        </View>


                                        : <View className="opacity-60 mt-[290] ml-[-18%]">

                                            <LottieView
                                                source={require('../shimmer.json')} // Replace with your right swipe animation
                                                autoPlay
                                                tim
                                                style={styles.lottieAnimation16}
                                            />
                                        </View>

                                    : <View></View>

                                }




                                <Modal
                                    isVisible={isModalVisible3}
                                    onBackdropPress={toggleModal3}
                                    animationIn="fadeIn"
                                    animationOut="fadeOut"
                                    backdropOpacity={0.8}
                                >

                                    <BlurView
                                        className=" h-[24%] rounded-3xl relative"
                                        tint="dark"
                                        intensity={60}

                                    >

                                        <TouchableOpacity onPress={toggleModal3} className="p-2 absolute bg-white/20 right-4 top-4 rounded-full">
                                            <Ionicons size={20} color="#ffffff" name="close-outline" />
                                        </TouchableOpacity>

                                        <View className="flex flex-row justify-center mt-[18%] px-4">
                                            {

                                                ViolenceModal ?

                                                    <Text className="text-center text-white text-[18%] font-semibold opacity-60 leading-6">The image is categorized under "violence" due to its use of ketchup to mimic blood, symbolically referencing violence in a humorous context.</Text> :

                                                    HumorModal ? <Text className="text-center text-white text-[18%] font-semibold opacity-60 leading-6"> It uses a visual pun—the substitution of a gun with a ketchup bottle—to humorously comment on the absence of guns in Britain.</Text> :

                                                        PoliticalModal ? <Text className="text-center text-white text-[18%] font-semibold opacity-60 leading-6"> This image provides a satirical take on gun control policies in Britain, sparking discussion on cultural and legal differences in firearm regulation.</Text> :

                                                            <Text className="text-center text-white text-[18%] font-semibold opacity-60 leading-6">The image does not contain adult content; it employs a playful and non-serious depiction of ketchup as blood for comedic effect.</Text>

                                            }
                                        </View>

                                    </BlurView>
                                </Modal>



                            </ScrollView>


                        </BlurView>
                    </KeyboardAvoidingView>
                </Modal>}



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
    scrollView: {
        // flexGrow: 0,
        // flexDirection: 'row',
        // flexWrap: 'wrap',

        // paddingHorizontal: 20,
        // marginTop: 30
        // Adjust space between items

    },
    overlay: {

        backgroundColor: 'rgba(0, 0, 0, 0.5)',

    },
    lottieAnimation14: {
        height: 90,
        width: 90,
    },

    lottieAnimation15: {
        height: 280,
        width: 320,
    },

    lottieAnimation16: {
        height: 590,
        width: 500,
    }
});