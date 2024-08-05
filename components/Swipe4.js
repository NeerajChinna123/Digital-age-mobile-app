

import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, Animated, ScrollView, TextInput, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Video, Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";
import { BlurView } from 'expo-blur';
import * as Progress from 'react-native-progress';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as ImagePicker from 'expo-image-picker';


const { width, height } = Dimensions.get('window');

export default function Swipe4({ data }) {
    const navigation = useNavigation();
    const swiperRef = useRef(null);
    const videoRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(false);

    const [liked, setLiked] = useState(false);

    const toggleMute = () => {
        setIsMuted(!isMuted);
        videoRef.current.setIsMutedAsync(!isMuted);
    };

    const [isActive, setIsActive] = useState(false);
    const handlePressIn = () => setIsActive(true);
    const handlePressOut = () => setIsActive(false);

    const [isActive1, setIsActive1] = useState(false);
    const handlePressIn1 = () => setIsActive1(true);
    const handlePressOut1 = () => setIsActive1(false);

    const [isActive12, setIsActive12] = useState(false);
    const handlePressIn12 = () => setIsActive12(true);
    const handlePressOut12 = () => setIsActive12(false);

    const [isActive123, setIsActive123] = useState(false);
    const handlePressIn123 = () => setIsActive123(true);
    const handlePressOut123 = () => setIsActive123(false);

    const [isActive1234, setIsActive1234] = useState(false);
    const handlePressIn1234 = () => setIsActive1234(true);
    const handlePressOut1234 = () => setIsActive1234(false);

    const [chatModal, setChatModal] = useState(false);

    const [compC, setCompC] = useState(false);

    const [swiped, setSwiped] = useState(false);


    const opacity = useState(new Animated.Value(1))[0];


    function fadeInSec() {

        console.log('faded-in')
        Animated.timing(opacity, {
            toValue: 1, duration: 700, useNativeDriver: true
        }).start()

    }

    function fadeOutSec() {
        Animated.timing(opacity, {
            toValue: 0, duration: 700, useNativeDriver: true
        }).start()
    }

    useEffect(() => {
        if (compC) {
            //nothing
        } else {
            setTimeout(() => {
                fadeOutSec();
            }, 5000)
        }

    }, [swiped]);





    // function swipedFunc(i) {
    //     setCurrentIndex(index + 1);
    //     setSwiped(true);
    // }

    let isFirstCard = currentIndex === 0;
    let isLastCard = currentIndex === data.length - 1;

    const goToPreviousCard = () => {
        if (!isFirstCard) {
            swiperRef.current.swipeBack();
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const goToNextCard = () => {
        if (!isLastCard) {
            swiperRef.current.swipeRight();
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const swipeRight = () => {
        swiperRef.current.swipeRight();
        setCurrentIndex((prevIndex) => prevIndex + 1);

    };

    const swipeBottom = () => {
        swiperRef.current.swipeBottom();
        setCurrentIndex((prevIndex) => prevIndex + 1);

    };

    const swipeLeft = () => {
        swiperRef.current.swipeLeft();
        setCurrentIndex((prevIndex) => prevIndex + 1);

    };


    const fadeAnimRight = useRef(new Animated.Value(0)).current;
    const fadeAnimLeft = useRef(new Animated.Value(0)).current;
    const fadeAnimTop = useRef(new Animated.Value(0)).current;
    const fadeAnimBottom = useRef(new Animated.Value(0)).current;

    const fadeIn = (fadeAnim) => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = (fadeAnim) => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };



    useEffect(() => {
        fadeIn(fadeAnimRight);
        fadeIn(fadeAnimLeft);
        fadeIn(fadeAnimTop);
        fadeIn(fadeAnimBottom);
        return () => {
            fadeOut(fadeAnimRight);
            fadeOut(fadeAnimLeft);
            fadeOut(fadeAnimTop);
            fadeOut(fadeAnimBottom);
        };
    }, [currentIndex]);





    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value of 0




    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: swiped ? 1 : 0, // Fade in if visible is true, fade out if false
            duration: 500, // Duration of the animation
            useNativeDriver: true, // Use native driver for better performance
        }).start();
    }, [swiped]);

    const [swipeDirection, setSwipeDirection] = useState('');





    function onSwiping(x, y) {
        setSwiped(true);

        if (Math.abs(x) > Math.abs(y)) {
            if (x < 0) {
                setSwipeDirection('left');

            } else if (x > 0) {
                setSwipeDirection('right');
                // console.log('right')
            }
        } else {
            if (y < 0) {
                setSwipeDirection('top');

            } else if (y > 0) {
                setSwipeDirection('bottom');

            }
        }

    }

    function onSwiped(index) {
        setSwiped(false);
        setCurrentIndex(index + 1);
        setSwipeDirection('');
        setExplixit(false);
        setCompC(false);
        opacity.setValue(1);
    }




    const [explicit, setExplixit] = useState(false);


    const [swiperKey, setSwiperKey] = useState("swiper-key");

    function forceUpdateCard() {
        setExplixit(true);
        setSwiperKey(Math.random() + 'none');

    }




    const [categoryModal, setCategoryModal] = useState(false);

    const [progress1, setProgress1] = useState(0);
    const [progress2, setProgress2] = useState(0);
    const [progress3, setProgress3] = useState(0);

    const toggleCatModal = () => {
        setCategoryModal(!categoryModal);
        setSwiperKey(Math.random() + 'none8r');

        setTimeout(() => {
            setProgress1(0.4);
            setProgress2(0.95);
            setProgress3(0.99)
        }, 500)


    };



    const [isModalVisible3, setModalVisible3] = useState(false);

    const toggleModal3 = () => {
        setModalVisible3(!isModalVisible3);
    };


    const [isModalVisible4, setModalVisible4] = useState(false);

    const toggleModal4 = () => {
        setModalVisible4(!isModalVisible4);
    };

    const [trend, setTrend] = useState(true);


    function onSwipedRight(index) {
        onSwiped(index);
        setLiked(true);

        setTimeout(() => {
            setLiked(false);
        }, 1400)
        setExplixit(false);
        setCompC(false);
        opacity.setValue(1);
    }



    const [shareModal, setShareModal] = useState(false);

    function toggleShareModal() {
        setShareModal(!shareModal);
    }

    function toggleChatModal() {
        setChatModal(!chatModal);
    }


    function onSwiped1(index) {

        setSwiped(false);
        // swiperRef.current.jumpToCardIndex(index);
        setCurrentIndex(index);
        setSwipeDirection('');

        setShareModal(true);
        setSwiperKey(Math.random() + 'nones');
        setExplixit(false);
        setCompC(false);
        opacity.setValue(1);

    }


    function onSwiped2(index) {
        setSwiped(false);
        // swiperRef.current.jumpToCardIndex(index);
        setCurrentIndex(index);
        setSwipeDirection('');
        // setShareModal(true);
        setSwiperKey(Math.random() + 'nones');
        setExplixit(false);
        setCompC(false);
        opacity.setValue(1);
        setChatModal(true);

    }

    console.log('shm', shareModal);


    const [u1, setU1] = useState(false);

    const [u2, setU2] = useState(false);

    const [u3, setU3] = useState(false);

    const [u4, setU4] = useState(false);



    const [send, setSend] = useState(false);

    function sendin() {
        setSend(true);

        setTimeout(() => {
            setShareModal(false);

        }, 2900)

        setTimeout(() => {
            setSend(false);

        }, 4000)
    }




    function compClicked() {

        setCompC(true);
        if (opacity.__getValue() === 0) {

            Animated.timing(opacity, {
                toValue: 1, duration: 700, useNativeDriver: true
            }).start()
        } else {
            Animated.timing(opacity, {
                toValue: 0, duration: 700, useNativeDriver: true
            }).start()
        }


    }


    const [text, setText] = useState('');

    const [text1, setText1] = useState('');


    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };


    const [selectedImage, setSelectedImage] = useState(null);

    const selectImage = async () => {
        // Request permission to access the media library
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            return;
        }

        // Launch the image library
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        }
    };



    return (
        <>
            <Swiper
                ref={swiperRef}
                cardIndex={currentIndex}
                onSwiping={(x, y) => onSwiping(x, y)}
                key={swiperKey}
                // onSwiping={() => setSwiped(true)}
                onSwipedAborted={() => setSwiped(false)}
                // onSwiped={(index) => setCurrentIndex(index)}
                onSwipedLeft={(index) => onSwiped(index)}
                onSwipedRight={(index) => onSwipedRight(index)}
                onSwipedTop={(index) => onSwiped1(index)}
                onSwipedBottom={(index) => onSwiped2(index)}
                overlayLabels={{
                    right: {
                        element: (
                            <View className="ml-[-62%] mt-[42%] relative">
                                <View className="animate-pulse">
                                    <View className="absolute h-40 w-40 shadow-inner top-2 left-3 rounded-full bg-white/20">
                                    </View>
                                    <Animated.View  >
                                        <LottieView
                                            source={require('../Animation - 1720995753431.json')} // Replace with your right swipe animation
                                            autoPlay
                                            // loop={false}
                                            style={styles.lottieAnimation1}
                                            className=""
                                        />
                                    </Animated.View>
                                </View>
                            </View>
                        ),
                    },
                    left: {
                        element: (
                            <View className="ml-[108%] mt-[45%]">
                                <View className="animate-pulse">
                                    <View className="absolute h-40 w-40 shadow-inner top-3 left-0 rounded-full bg-white/20">
                                    </View>
                                    <Animated.View  >
                                        <LottieView
                                            source={require('../Save-lottie.json')}  // Replace with your right swipe animation
                                            autoPlay

                                            // loop={false}
                                            style={styles.lottieAnimation2}
                                            className="ml-1 mt-4"
                                        />
                                    </Animated.View>
                                </View>
                            </View>
                        ),
                    },
                    top: {
                        element: (
                            <View className="mt-[130%] ml-[8.4%] relative">
                                <View className="animate-pulse">
                                    <View className="absolute h-40 w-40 shadow-inner top-[23%] left-[22.8%] rounded-full bg-white/20">

                                    </View>
                                    <Animated.View  >
                                        <LottieView
                                            source={require('../Share.json')}// Replace with your right swipe animation
                                            autoPlay
                                            // loop={false}
                                            style={styles.lottieAnimation3}
                                            className="ml-[0.6%]"
                                        />
                                    </Animated.View>
                                </View>
                            </View>
                        ),
                    },
                    bottom: {
                        element: (
                            <View className="mt-[-58%] ml-[23.5%]">
                                <View className="animate-pulse">
                                    <View className="absolute h-40 w-40 shadow-inner top-3 left-5 rounded-full bg-white/20">
                                    </View>
                                    <Animated.View>
                                        <LottieView
                                            source={require('../new-com.json')}  // Replace with your right swipe animation
                                            autoPlay
                                            // loop={false}
                                            style={styles.lottieAnimation4}
                                            className="ml-2"
                                        />
                                    </Animated.View>
                                </View>
                            </View>
                        ),
                    },
                }}
                containerStyle={{ backgroundColor: 'transparent' }}
                cards={data}
                stackSize={1}
                animateCardOpacity
                renderCard={(card) => (
                    <TouchableOpacity
                        onPress={() => compClicked()}
                        // onPress={() => navigation.navigate("PostDetails")}
                        key={card.id}
                        activeOpacity={1}
                        className={
                            card?.category === 'GENERAL'
                                ? 'relative bg-black/40 h-[67%] rounded-xl border border-green-500 border-1'
                                : (card?.category === 'PG' ? 'relative bg-black/40 h-[67%] rounded-xl border border-yellow-500 border-1 ' : 'relative bg-black/40 h-[65%] rounded-xl border border-red-500 border-1')
                        }
                    >


                        <Animated.View
                            style={[{ opacity: opacity }]}
                            className="flex absolute z-[100] flex-col items-center space-y-2">
                            <View className="flex flex-row p-4 items-center ml-1 mt-1">
                                <View className="flex flex-row rounded-full bg-black/40 pr-4 pl-2 py-2 ">
                                    <Image className="h-10 w-10 rounded-full object-fit" source={{ uri: card?.photoUrl }} />
                                    <View className="flex flex-col ml-4  items-center justify-center  rounded-3xl">
                                        <Text className="font-bold text-white text-[15%]">{card?.name}</Text>
                                        <Text className="text-white mt-1 opacity-90 text-[12%]">{card?.userName}</Text>
                                    </View>

                                </View>

                                <TouchableOpacity
                                    onPress={() => toggleCatModal()}
                                    className={
                                        card?.category === 'GENERAL'
                                            ? 'font-semibold ml-3 bg-green-700/90 bg-opacity-20 py-4 px-3 flex justify-center rounded-full text-lg'
                                            : (card?.category === 'PG' ? 'font-semibold bg-yellow-700/90 bg-opacity-20 py-4 ml-3 px-9 flex justify-center rounded-full text-lg' : 'font-semibold bg-red-700/90 py-4 ml-3 px-3 flex justify-center rounded-full text-lg')
                                    }
                                >
                                    <Text
                                        className={
                                            card?.category === 'GENERAL'
                                                ? 'font-semibold text-green-200 text-center text-[15%]'
                                                : (card?.category === 'PG' ? 'font-semibold text-yellow-200 text-[15%]' : 'font-semibold text-red-200 text-[15%]')
                                        }
                                    >
                                        {card?.category}
                                    </Text>
                                </TouchableOpacity>


                            </View>

                        </Animated.View>
                        <Animated.View style={[{ opacity: opacity }]} className="absolute z-[80] right-[5%] top-[4.5%]">
                            <TouchableOpacity className=" bg-black/40 rounded-full p-3 self-end ">
                                <Ionicons size={26} color="white" name="ellipsis-horizontal-outline" />
                            </TouchableOpacity>
                        </Animated.View>

                        {(card?.category == "EXPLICIT" && !explicit) &&
                            <View className="flex absolute z-[50] top-[2.5%] h-[94%] w-[94%]  ml-[3%] flex-col space-y-2 bg-black/90  ">


                                <View className="flex flex-col mt-[47%] items-center space-y-6 ml-2 p-2">
                                    <Text className="text-lg text-white font-semibold text-center">This content may contain explicit material. Viewer discretion is advised. Click below to proceed.</Text>
                                    <TouchableOpacity onPress={() => forceUpdateCard()} className="p-4 text-md  rounded-full bg-white/30"><Text className="text-white font-semibold">View Content</Text></TouchableOpacity>
                                </View>
                            </View>

                        }

                        {card?.post && (
                            <Image className="h-[94%] w-[94%] absolute top-[2.5%] rounded-md object-cover ml-[3%] " source={card?.post} />

                        )}


                        {card?.video && (
                            <>
                                <Video
                                    ref={videoRef}
                                    source={card?.video}
                                    className="h-[94%] w-[94%] absolute top-[2.5%] rounded-md object-cover ml-[3%]"
                                    shouldPlay
                                    resizeMode="contain"
                                    isMuted={isMuted}
                                    volume={1.0} // Ensure the volume is set to a reasonable level
                                    isLooping={true}
                                    useNativeControls
                                // onPlaybackStatusUpdate={(status) => ('Playback Staconsole.logtus:', status)}
                                />
                            </>
                        )}
                    </TouchableOpacity>
                )}
            />

            <View className={swiped ? "absolute flex flex-row space-x-6 mt-[147.8%] ml-[4%] z-[-50]" : "absolute flex flex-row space-x-6 mt-[147.8%] ml-[4%]"}>
                <View className="mt-2">
                    <TouchableOpacity onPressIn={handlePressIn}
                        onPressOut={handlePressOut}
                        onPress={goToPreviousCard}
                        disabled={isFirstCard}
                        className={isFirstCard ? "p-3 rounded-full bg-white/20 opacity-50 transition-all transform duration-500 ease-in-out " : "  transition-all transform duration-500 ease-in-out p-3 rounded-full bg-white/20 opacity-100 "}>
                        <Icon name="undo" size={28} color={'#fff'}
                            className={isActive ? "rotate-12 transition-all transform duration-500 ease-in-out" : "rotate-45 transition-all transform duration-500 ease-in-out"} />
                    </TouchableOpacity>
                </View>


                <View className={swiped ? (swipeDirection == 'right' ? "mt-[-4.8%]" : "mt-[-2.8%]") : "mt-[-2.8%]"} >
                    <TouchableOpacity onPressIn={handlePressIn1}
                        onPressOut={handlePressOut1}
                        onPress={swipeRight}
                        className={isActive1 ? "p-3 rounded-full bg-white/10 " : "  p-3 rounded-full bg-white/20 "}>
                        <Icon name="heart" size={32} color={'#be123c'}
                            className={isActive1 ? " transition-all transform duration-500 ease-in-out" : "transition-all transform duration-500 ease-in-out"} />
                    </TouchableOpacity>
                </View>
                <View className="mt-[-2.8%]">
                    <TouchableOpacity onPressIn={handlePressIn12}
                        onPressOut={handlePressOut12}
                        onPress={swipeBottom}
                        className={isActive12 ? "p-3 rounded-full bg-white/10 " : "  p-3 rounded-full bg-white/20 "}>
                        <Icon name="comment" size={32} color={'#0ea5e9'}
                            className={isActive12 ? " transition-all transform duration-500 ease-in-out" : "transition-all transform duration-500 ease-in-out"} />
                    </TouchableOpacity>
                </View>
                <View
                    className={swiped ? (swipeDirection == 'left' ? "mt-[-7.8%] transition-all transform duration-500 ease-in-out" : "mt-[-2.8%] transition-all transform duration-500 ease-in-out") : "mt-[-2.8%] transition-all transform duration-500 ease-in-out"}>
                    <TouchableOpacity onPressIn={handlePressIn123}
                        onPressOut={handlePressOut123}
                        onPress={swipeLeft}
                        className={isActive123 ? "p-3 rounded-full bg-white/10 " : "  p-3 rounded-full bg-white/20 "}>
                        <Icon name="bookmark" size={32} color={'#fff'}
                            className={isActive12 ? " transition-all transform opacity-80 duration-500 ease-in-out" : "transition-all opacity-80 transform duration-500 ease-in-out"} />
                    </TouchableOpacity>
                </View>
                <View className="mt-2">
                    <TouchableOpacity onPressIn={handlePressIn1234}
                        onPressOut={handlePressOut1234}
                        disabled={isLastCard}
                        onPress={goToNextCard}
                        className={isLastCard ? "p-3 rounded-full bg-white/20 opacity-50 transition-all transform duration-500 ease-in-out " : "  transition-all transform duration-500 ease-in-out p-3 rounded-full bg-white/20 opacity-100 "}>
                        <Icon name="repeat" size={28} color={'#fff'}
                            className={isActive1234 ? "rotate-12 transition-all transform duration-500 ease-in-out" : "-rotate-45 transition-all transform duration-500 ease-in-out"} />
                    </TouchableOpacity>
                </View>
                <View>

                </View>
            </View>


            {categoryModal &&


                <Modal onBackdropPress={() => toggleCatModal()} animationInTiming={400} animationOutTiming={400} className="w-[100%] ml-[0] mt-[30%] rounded-t-[40%]" animationIn="slideInUp" animationOut="slideOutDown" isVisible={categoryModal}>
                    <View className="w-full h-[100%] ">
                        <BlurView
                            className=" h-[100%] p-2 relative "
                            tint="dark"
                            intensity={65}
                        >

                            <View className="flex flex-col mt-3">
                                <View className="h-[0.7%] w-[14%] bg-white/40 ml-[42%] rounded-full">

                                </View>

                                <View className="flex flex-row space-x-2 items-center  justify-center mt-4 ml-[-12] relative">

                                    <View className="flex flex-row space-x-2 ">
                                        <Ionicons size={38} color="#ef4444" name="warning" />
                                    </View>
                                    <View className="pt-1">
                                        <Text className="text-[22%] text-white font-bold">Explicit Content</Text>
                                    </View>

                                </View>

                                {/* <View className="flex flex-row justify-center mt-6 px-2">

                                    <Text className="text-center text-white text-[15%] font-semibold opacity-60 leading-5">This content is classified as Explicit due to certain elements listed below. To reclassify or exclude these elements, use the customize button below.</Text>
                                </View>

                                <View className="h-[0.5%] w-[98%] bg-gray-500 opacity-30 ml-[1%] mt-6 rounded-full">

                                </View> */}


                                <View className="flex flex-col  mt-8 space-y-2 px-2">
                                    <View className="flex flex-row items-center">
                                        <Text className="font-bold text-white text-[20%]">Classified Attributes</Text>
                                        <TouchableOpacity onPress={() => toggleModal3()} className="border border-white rounded-full h-5 w-5 relative ml-2 mt-1 opacity-30">

                                            <Text className=" text-white italic text-[12%] absolute font-semibold left-[7] top-[2] ">i</Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>

                                <View className=" rounded-lg mt-1 flex flex-row  pt-4 pl-1  flex-wrap">
                                    <View className="rounded-full p-2 bg-white/20 mr-2 mb-4">
                                        <Text className="text-md font-semibold text-white/80">Violence</Text>
                                    </View>
                                    <View className="rounded-full p-2 bg-white/20  mr-2 mb-4">
                                        <Text className="text-md font-semibold text-white/80">Gore</Text>
                                    </View>
                                    <View className="rounded-full p-2 bg-white/20  mr-2 mb-4">
                                        <Text className="text-md font-semibold text-white/80">Disturbing</Text>
                                    </View>
                                    <View className="rounded-full p-2 bg-white/20  mr-2 mb-4">
                                        <Text className="text-md font-semibold text-white/80">Adult</Text>

                                    </View>
                                    <View className="rounded-full p-2 bg-white/20  mr-2 mb-4">
                                        <Text className="text-md font-semibold text-white/80">Trauma</Text>
                                    </View>

                                    <View className="rounded-full p-2 bg-white/20  mr-2 mb-4">
                                        <Text className="text-md font-semibold text-white/80">Trending</Text>
                                    </View>

                                    <View className="rounded-full p-2 bg-white/20  mr-2 mb-4">
                                        <Text className="text-md font-semibold text-white/80">Strong Language</Text>
                                    </View>
                                    {/* <View className="rounded-full p-2 bg-white/20  mr-2 mb-3">
                                        <Text className="text-md font-semibold text-white/80">Cooking</Text>
                                    </View>
                                    <View className="rounded-full p-2 bg-white/20  mr-2 mb-3">
                                        <Text className="text-md font-semibold text-white/80">Music</Text>
                                    </View> */}

                                </View>



                                <View className="h-[0.5%] w-[98%] bg-gray-500 opacity-30 ml-[1%] mt-3 rounded-full">

                                </View>

                                <View className="flex flex-col  mt-5 space-y-2 px-2">
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
                                            <Progress.Bar className="border-0 bg-gray-500/80 opacity-70 mt-1 " duration={2400} progress={progress1} width={308} height={10} animated={true} color='#22d3ee' />
                                            <View>
                                                <Text className="font-bold text-white text-[15%] opacity-80">40%</Text>
                                            </View>
                                        </View>

                                    </View>


                                    <View className=" pt-4 flex flex-col space-y-2 ">

                                        <View>
                                            <Text className="font-bold text-white text-[16%] opacity-80">Dead Body</Text>
                                        </View>

                                        <View className="flex flex-row space-x-4 items-center">
                                            <Progress.Bar className="border-0 bg-gray-500/80 opacity-70 mt-1 " progress={progress2} duration={2800} width={308} height={10} animated={true} color='#22d3ee' />
                                            <View>
                                                <Text className="font-bold text-white text-[15%] opacity-80">95%</Text>
                                            </View>
                                        </View>

                                    </View>


                                    <View className=" pt-4 flex flex-col space-y-2 ">

                                        <View>
                                            <Text className="font-bold text-white text-[16%] opacity-80">Crime</Text>
                                        </View>

                                        <View className="flex flex-row space-x-4 items-center">
                                            <Progress.Bar className="border-0 bg-gray-500/80 opacity-70 mt-1 " progress={progress3} duration={3200} width={308} height={10} animated={true} color='#22d3ee' />
                                            <View>
                                                <Text className="font-bold text-white text-[15%] opacity-80">99%</Text>
                                            </View>
                                        </View>

                                    </View>


                                </View>

                                <View className="flex flex-col space-y-3 mt-8 px-2">
                                    <TouchableOpacity onPress={() => toggleModal4()} className="justify-center flex flex-row items-center space-x-2 bg-white/20 rounded-md p-4">
                                        <Ionicons size={32} color="white" name="aperture" />
                                        <Text className="text-white font-bold text-[19%]">Customize Category</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity className="justify-center flex flex-row items-center space-x-2 bg-white/20 rounded-md p-4">
                                        <Ionicons size={32} color="white" name="thumbs-up" />
                                        <Text className="text-white font-bold text-[19%]">Help Us Improve</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </BlurView>
                    </View>



                    <Modal
                        isVisible={isModalVisible3}
                        onBackdropPress={toggleModal3}
                        animationIn="fadeIn"
                        animationOut="fadeOut"
                        backdropOpacity={0.8}
                    >

                        <BlurView
                            className=" h-[30%] rounded-3xl relative"
                            tint="dark"
                            intensity={60}

                        >


                            <TouchableOpacity onPress={toggleModal3} className="p-2 absolute bg-white/20 right-4 top-4 rounded-full">
                                <Ionicons size={20} color="#ffffff" name="close-outline" />
                            </TouchableOpacity>

                            <View className="flex flex-row justify-center mt-[18%] px-4">

                                <Text className="text-center text-white text-[18%] font-semibold opacity-60 leading-6">Based on the elements identified in the post, the following attributes have led to its classification as explicit content. To reclassify or exclude these attributes, please use the customize button below.</Text>
                            </View>



                        </BlurView>
                    </Modal>





                    <Modal
                        isVisible={isModalVisible4}
                        onBackdropPress={toggleModal4}
                        animationIn="fadeIn"
                        animationOut="fadeOut"
                        backdropOpacity={0.9}
                    >

                        <BlurView
                            className=" h-[59%] rounded-3xl relative"
                            tint="dark"
                            intensity={60}

                        >

                            <TouchableOpacity onPress={toggleModal4} className="p-2 absolute bg-white/20 right-4 top-4 rounded-full">
                                <Ionicons size={20} color="#ffffff" name="close-outline" />
                            </TouchableOpacity>
                            <View className="relative flex flex-row  justify-center items-center p-8 mt-10 space-x-3" >



                                <Ionicons size={32} color="white" name="aperture" />

                                <Text className="text-xl font-semibold text-white opacity-80" >Customize Explicit Attributes</Text>


                            </View>

                            <View className="flex flex-row flex-wrap ml-[28] ">
                                <View className="rounded-full flex flex-row space-x-1 items-center p-2 bg-white/20 mr-2 mb-3">
                                    <Text className="text-md font-semibold text-white/80">Violence</Text>
                                    <TouchableOpacity>
                                        <Ionicons size={20} color="#ffffff" name="close-outline" />
                                    </TouchableOpacity>

                                </View>
                                <View className="rounded-full flex flex-row space-x-1 items-center p-2 bg-white/20 mr-2 mb-3">
                                    <Text className="text-md font-semibold text-white/80">Gore</Text>
                                    <TouchableOpacity>
                                        <Ionicons size={20} color="#ffffff" name="close-outline" />
                                    </TouchableOpacity>

                                </View>
                                <View className="rounded-full flex flex-row space-x-1 items-center p-2 bg-white/20 mr-2 mb-3">
                                    <Text className="text-md font-semibold text-white/80">Nudity</Text>
                                    <TouchableOpacity>
                                        <Ionicons size={20} color="#ffffff" name="close-outline" />
                                    </TouchableOpacity>

                                </View>
                                <View className="rounded-full flex flex-row space-x-1 items-center p-2 bg-white/20 mr-2 mb-3">
                                    <Text className="text-md font-semibold text-white/80">Drug Use</Text>
                                    <TouchableOpacity>
                                        <Ionicons size={20} color="#ffffff" name="close-outline" />
                                    </TouchableOpacity>

                                </View>
                                <View className="rounded-full flex flex-row space-x-1 items-center p-2 bg-white/20 mr-2 mb-3">
                                    <Text className="text-md font-semibold text-white/80">Sexualized Violence</Text>
                                    <TouchableOpacity>
                                        <Ionicons size={20} color="#ffffff" name="close-outline" />
                                    </TouchableOpacity>

                                </View>
                                <View className="rounded-full flex flex-row space-x-1 items-center p-2 bg-white/20 mr-2 mb-3">
                                    <Text className="text-md font-semibold text-white/80">Self-Harm</Text>
                                    <TouchableOpacity>
                                        <Ionicons size={20} color="#ffffff" name="close-outline" />
                                    </TouchableOpacity>

                                </View>
                                <View className="rounded-full flex flex-row space-x-1 items-center p-2 bg-white/20 mr-2 mb-3">
                                    <Text className="text-md font-semibold text-white/80">Strong Language</Text>
                                    <TouchableOpacity>
                                        <Ionicons size={20} color="#ffffff" name="close-outline" />
                                    </TouchableOpacity>

                                </View>
                                <View className="rounded-full flex flex-row space-x-1 items-center p-2 bg-white/20 mr-2 mb-3">
                                    <Text className="text-md font-semibold text-white/80">Suicide</Text>
                                    <TouchableOpacity>
                                        <Ionicons size={20} color="#ffffff" name="close-outline" />
                                    </TouchableOpacity>

                                </View>
                                <View className="rounded-full flex flex-row space-x-1 items-center p-2 bg-white/20 mr-2 mb-3">
                                    <Text className="text-md font-semibold text-white/80">Disturbing</Text>
                                    <TouchableOpacity>
                                        <Ionicons size={20} color="#ffffff" name="close-outline" />
                                    </TouchableOpacity>

                                </View>
                                <View className="rounded-full flex flex-row space-x-1 items-center p-2 bg-white/20 mr-2 mb-3">
                                    <Text className="text-md font-semibold text-white/80">Adult</Text>
                                    <TouchableOpacity>
                                        <Ionicons size={20} color="#ffffff" name="close-outline" />
                                    </TouchableOpacity>

                                </View>
                                <View className="rounded-full flex flex-row space-x-1 items-center p-2 bg-white/20 mr-2 mb-3">
                                    <Text className="text-md font-semibold text-white/80">Trauma</Text>
                                    <TouchableOpacity>
                                        <Ionicons size={20} color="#ffffff" name="close-outline" />
                                    </TouchableOpacity>

                                </View>

                                {
                                    trend && <View className="rounded-full flex flex-row space-x-1 items-center p-2 bg-white/20 mr-2 mb-3">
                                        <Text className="text-md font-semibold text-white/80">Trending</Text>
                                        <TouchableOpacity onPress={() => setTrend(false)}>
                                            <Ionicons size={20} color="#ffffff" name="close-outline" />
                                        </TouchableOpacity>

                                    </View>
                                }

                                <View className="rounded-full p-2 bg-cyan-600/60  mr-2 mb-3">
                                    <Text className="text-md font-semibold text-white/80">Add +</Text>
                                </View>
                            </View>



                            <TouchableOpacity onPress={toggleModal4} className="p-4 bg-white/25 w-[40%] mt-5 ml-[29%] rounded-md flex flex-row justify-center">

                                <Text className="text-white text-[16%] font-bold">Save</Text>
                            </TouchableOpacity>
                        </BlurView>
                    </Modal>
                </Modal>


            }



            {shareModal &&
                <Modal animationInTiming={400} onBackdropPress={toggleShareModal} animationOutTiming={400} className={(u1 && !u3) ? "w-[100%] ml-[0] mt-[38%] rounded-t-[40%]" : (u3 ? "w-[100%] ml-[0] mt-[23%] rounded-t-[40%]" : "w-[100%] ml-[0] mt-[60%] rounded-t-[40%]")} animationIn="slideInUp" animationOut="slideOutDown" isVisible={shareModal}>
                    <View className="w-full h-[100%] ">
                        <BlurView
                            className=" h-[100%] p-2 relative "
                            tint="dark"
                            intensity={65}
                        >
                            {

                                !send ? <View className="flex flex-col mt-3">
                                    <View className="h-[1.7%] w-[14%] bg-white/40 ml-[42%] rounded-full">

                                    </View>

                                    <View className="p-2 mt-8 rounded-lg bg-white/20 flex flex-row mx-1 items-center space-x-2">
                                        <Ionicons size={25} color="#A9A9A9" name="search-outline" />

                                        <Text className="text-lg  text-gray-300 opacity-70">Search People ...</Text>
                                    </View>


                                    {u1 &&

                                        <View className="flex flex-row flex-wrap  max-w px-1 mt-4 mb-4">
                                            {u1 &&
                                                <View className="flex flex-row space-x-2 mr-2  bg-white/20 items-center rounded-3xl p-2">
                                                    <Image className="h-8 w-8 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D4D03AQELM-tqD-X4-A/profile-displayphoto-shrink_800_800/0/1721061786562?e=1727308800&v=beta&t=-sxV_xa0_vK_04QXMyzseX54cEYlTfuH8xS7bicg-os' }} />
                                                    <View>

                                                        <Text className="text-white text-[16%] font-semibold">Neeraj</Text>
                                                    </View>

                                                    <TouchableOpacity onPress={() => setU1(!u1)}>
                                                        <Ionicons size={24} color="#ffffff" name="close-outline" />
                                                    </TouchableOpacity>
                                                </View>
                                            }




                                            {u2 &&
                                                <View className="flex flex-row space-x-2 bg-white/20 items-center rounded-3xl p-2">
                                                    <Image className="h-8 w-8 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/C5603AQEL1SpiPMx00A/profile-displayphoto-shrink_400_400/0/1626392153104?e=1727308800&v=beta&t=gVWNCSwHqxUvG11xPKrK4C5rGNZg5lM4yLw-sf2rJR4' }} />
                                                    <View>

                                                        <Text className="text-white text-[16%] font-semibold">Leighton</Text>
                                                    </View>

                                                    <TouchableOpacity onPress={() => setU2(!u2)}>
                                                        <Ionicons size={24} color="#ffffff" name="close-outline" />
                                                    </TouchableOpacity>
                                                </View>
                                            }

                                            {u3 &&
                                                <View className="flex flex-row space-x-2 mt-3 bg-white/20 items-center rounded-3xl px-3 py-2">
                                                    <View className="relative h-8 w-8 ml-[-4]">
                                                        <Image className="h-6 w-6 top-1 absolute rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D4E03AQEFL9wup87lNw/profile-displayphoto-shrink_800_800/0/1714019194685?e=1727308800&v=beta&t=OZCYo4jv0DrgCrM8ROvp1WNUEMDBeA5TBFRDtSJ1u8o' }} />
                                                        <Image className="h-6 w-6 top-2 left-[75%] absolute rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D4D03AQELM-tqD-X4-A/profile-displayphoto-shrink_800_800/0/1721061786562?e=1727308800&v=beta&t=-sxV_xa0_vK_04QXMyzseX54cEYlTfuH8xS7bicg-os' }} />
                                                        {/* <View className="p-2 absolute bg-white/20 top-12 left-12 rounded-full"><Text className="text-white text-md">+9</Text></View> */}
                                                    </View>
                                                    <View className="pl-4">

                                                        <Text className="text-white text-[16%] font-semibold">Common</Text>
                                                    </View>

                                                    <TouchableOpacity onPress={() => setU3(!u3)}>
                                                        <Ionicons size={24} color="#ffffff" name="close-outline" />
                                                    </TouchableOpacity>
                                                </View>
                                            }

                                            {u4 &&
                                                <View className="flex flex-row space-x-2 mt-2 bg-white/20 items-center ml-2 rounded-3xl p-2">
                                                    <Image className="h-8 w-8 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D4E03AQEFL9wup87lNw/profile-displayphoto-shrink_800_800/0/1714019194685?e=1727308800&v=beta&t=OZCYo4jv0DrgCrM8ROvp1WNUEMDBeA5TBFRDtSJ1u8o' }} />
                                                    <View>

                                                        <Text className="text-white text-[16%] font-semibold">Renee</Text>
                                                    </View>

                                                    <TouchableOpacity onPress={() => setU4(!u4)}>
                                                        <Ionicons size={24} color="#ffffff" name="close-outline" />
                                                    </TouchableOpacity>
                                                </View>
                                            }
                                        </View>

                                    }



                                    {/* <View className="flex flex-row flex-wrap px-6 max-h-[68%] overflow-hidden mt-10 ml-1"> */}

                                    <View style={u1 ? styles.container1 : styles.container}>
                                        <ScrollView contentContainerStyle={styles.scrollView}>
                                            <TouchableOpacity className="flex flex-col space-y-2 items-center pr-10 pb-8">
                                                <Image className="h-20 w-20 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D5603AQFAUcTYDLXqBA/profile-displayphoto-shrink_800_800/0/1681764031887?e=1727308800&v=beta&t=hGVVaP-8KbWFJTt1kVAPq-GvsaYkg-LBh9Xbo1WShdQ' }} />
                                                <View className="flex flex-col space-y-1">
                                                    <Text className=" text-white text-lg">Peter</Text>

                                                </View>
                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={() => setU1(!u1)} className="flex flex-col relative space-y-2 items-center  pr-10 pb-8">
                                                <Image className="h-20 w-20 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D4D03AQELM-tqD-X4-A/profile-displayphoto-shrink_800_800/0/1721061786562?e=1727308800&v=beta&t=-sxV_xa0_vK_04QXMyzseX54cEYlTfuH8xS7bicg-os' }} />
                                                <View className="flex flex-col space-y-1">
                                                    <Text className=" text-white text-lg">Neeraj</Text>

                                                </View>
                                                {u1 && <View className="absolute left-14 top-[-12] p-2 bg-cyan-500 opacity-90 rounded-full">
                                                    <Ionicons size={14} color="#ffffff" name="checkmark-outline" />
                                                </View>}

                                            </TouchableOpacity>


                                            <TouchableOpacity className="flex flex-col space-y-2 items-center  pb-8">
                                                <Image className="h-20 w-20 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D5603AQFh1MEBbmOVBQ/profile-displayphoto-shrink_800_800/0/1718282646997?e=1727308800&v=beta&t=1uXY8jdo4kN_z_0JCMHwbziuutvZdyuWVpyxqgI4jSI' }} />
                                                <View className="flex flex-col space-y-1">
                                                    <Text className=" text-white text-lg">Jeff</Text>

                                                </View>
                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={() => setU4(!u4)} className="flex flex-col space-y-2 items-center pr-10 pb-8">
                                                <Image className="h-20 w-20 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D4E03AQEFL9wup87lNw/profile-displayphoto-shrink_800_800/0/1714019194685?e=1727308800&v=beta&t=OZCYo4jv0DrgCrM8ROvp1WNUEMDBeA5TBFRDtSJ1u8o' }} />
                                                <View className="flex flex-col space-y-1">
                                                    <Text className=" text-white text-lg">Renee</Text>

                                                </View>
                                                {u4 && <View className="absolute left-14 top-[-12] p-2 bg-cyan-500 opacity-90 rounded-full">
                                                    <Ionicons size={14} color="#ffffff" name="checkmark-outline" />
                                                </View>}
                                            </TouchableOpacity>

                                            <TouchableOpacity className="flex flex-col space-y-2 items-center  pr-11 pb-8">

                                                <View className="relative h-20 w-20 ml-[-4]">
                                                    <Image className="h-14 w-14 top-1 absolute rounded-full object-fit" source={{ uri: 'https://pbs.twimg.com/profile_images/1779151535147986944/-CcykDos_400x400.jpg' }} />
                                                    <Image className="h-10 w-10 top-2 left-[75%] absolute rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D5603AQFAUcTYDLXqBA/profile-displayphoto-shrink_400_400/0/1681764031887?e=1727308800&v=beta&t=0V-4U2d0YzMRkAjulwgEzUcqi_1nJEcG7Uj-_615Ml8' }} />
                                                    <View className="p-2 absolute bg-white/20 top-12 left-12 rounded-full"><Text className="text-white text-md">+4</Text></View>
                                                </View>

                                                <View className="flex flex-col space-y-1">
                                                    <Text className=" text-white text-lg">Squad ..</Text>

                                                </View>
                                            </TouchableOpacity>


                                            <TouchableOpacity onPress={() => setU2(!u2)} className="flex flex-col space-y-2 items-center  pb-8">
                                                <Image className="h-20 w-20 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/C5603AQEL1SpiPMx00A/profile-displayphoto-shrink_400_400/0/1626392153104?e=1727308800&v=beta&t=gVWNCSwHqxUvG11xPKrK4C5rGNZg5lM4yLw-sf2rJR4' }} />
                                                <View className="flex flex-col space-y-1">
                                                    <Text className=" text-white text-lg">Leighton</Text>

                                                </View>

                                                {u2 && <View className="absolute left-14 top-[-12] p-2 bg-cyan-500 opacity-90 rounded-full">
                                                    <Ionicons size={14} color="#ffffff" name="checkmark-outline" />
                                                </View>}
                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={() => setU3(!u3)} className="flex flex-col space-y-2 items-center  pr-11 pb-8">

                                                <View className="relative h-20 w-20 ml-[-4]">
                                                    <Image className="h-14 w-14 top-1 absolute rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D4E03AQEFL9wup87lNw/profile-displayphoto-shrink_800_800/0/1714019194685?e=1727308800&v=beta&t=OZCYo4jv0DrgCrM8ROvp1WNUEMDBeA5TBFRDtSJ1u8o' }} />
                                                    <Image className="h-10 w-10 top-2 left-[75%] absolute rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D4D03AQELM-tqD-X4-A/profile-displayphoto-shrink_800_800/0/1721061786562?e=1727308800&v=beta&t=-sxV_xa0_vK_04QXMyzseX54cEYlTfuH8xS7bicg-os' }} />
                                                    <View className="p-2 absolute bg-white/20 top-12 left-12 rounded-full"><Text className="text-white text-md">+9</Text></View>
                                                </View>

                                                <View className="flex flex-col space-y-1">
                                                    <Text className=" text-white text-lg">Common</Text>

                                                </View>
                                                {u3 && <View className="absolute left-20 top-[-12] p-2 bg-cyan-500 opacity-90 rounded-full">
                                                    <Ionicons size={14} color="#ffffff" name="checkmark-outline" />
                                                </View>}
                                            </TouchableOpacity>


                                            <TouchableOpacity className="flex flex-col space-y-2 items-center pr-10 pb-8">
                                                <Image className="h-20 w-20 rounded-full object-fit" source={{ uri: 'https://pbs.twimg.com/profile_images/1779151535147986944/-CcykDos_400x400.jpg' }} />
                                                <View className="flex flex-col space-y-1">
                                                    <Text className=" text-white text-lg">Chinna</Text>

                                                </View>
                                            </TouchableOpacity>

                                            <TouchableOpacity className="flex flex-col space-y-2 items-center  pb-8">
                                                <Image className="h-20 w-20 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/C5603AQH9HEz8Ny9QaQ/profile-displayphoto-shrink_800_800/0/1661807785415?e=1727308800&v=beta&t=ohPwozK5Z4LweLok0VyqR_-jy8i8TX2oEdFNzzWuZ1U' }} />
                                                <View className="flex flex-col space-y-1">
                                                    <Text className=" text-white text-lg">Newtina</Text>

                                                </View>
                                            </TouchableOpacity>

                                            <TouchableOpacity className="flex flex-col space-y-2 items-center pr-10 pb-8">
                                                <Image className="h-20 w-20 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D5603AQFAUcTYDLXqBA/profile-displayphoto-shrink_800_800/0/1681764031887?e=1727308800&v=beta&t=hGVVaP-8KbWFJTt1kVAPq-GvsaYkg-LBh9Xbo1WShdQ' }} />
                                                <View className="flex flex-col space-y-1">
                                                    <Text className=" text-white text-lg">Peter</Text>

                                                </View>
                                            </TouchableOpacity>

                                            <TouchableOpacity className="flex flex-col space-y-2 items-center  pr-10 pb-8">
                                                <Image className="h-20 w-20 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D4D03AQELM-tqD-X4-A/profile-displayphoto-shrink_800_800/0/1721061786562?e=1727308800&v=beta&t=-sxV_xa0_vK_04QXMyzseX54cEYlTfuH8xS7bicg-os' }} />
                                                <View className="flex flex-col space-y-1">
                                                    <Text className=" text-white text-lg">Neeraj</Text>

                                                </View>
                                            </TouchableOpacity>


                                            <TouchableOpacity className="flex flex-col space-y-2 items-center  pb-8">
                                                <Image className="h-20 w-20 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D5603AQFh1MEBbmOVBQ/profile-displayphoto-shrink_800_800/0/1718282646997?e=1727308800&v=beta&t=1uXY8jdo4kN_z_0JCMHwbziuutvZdyuWVpyxqgI4jSI' }} />
                                                <View className="flex flex-col space-y-1">
                                                    <Text className=" text-white text-lg">Jeff</Text>

                                                </View>
                                            </TouchableOpacity>

                                            <TouchableOpacity className="flex flex-col space-y-2 items-center pr-10 pb-8">
                                                <Image className="h-20 w-20 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D4E03AQEFL9wup87lNw/profile-displayphoto-shrink_800_800/0/1714019194685?e=1727308800&v=beta&t=OZCYo4jv0DrgCrM8ROvp1WNUEMDBeA5TBFRDtSJ1u8o' }} />
                                                <View className="flex flex-col space-y-1">
                                                    <Text className=" text-white text-lg">Renee</Text>

                                                </View>
                                            </TouchableOpacity>

                                            <TouchableOpacity className="flex flex-col space-y-2 items-center  pr-11 pb-8">

                                                <View className="relative h-20 w-20 ml-[-4]">
                                                    <Image className="h-14 w-14 top-1 absolute rounded-full object-fit" source={{ uri: 'https://pbs.twimg.com/profile_images/1779151535147986944/-CcykDos_400x400.jpg' }} />
                                                    <Image className="h-10 w-10 top-2 left-[75%] absolute rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D5603AQFAUcTYDLXqBA/profile-displayphoto-shrink_400_400/0/1681764031887?e=1727308800&v=beta&t=0V-4U2d0YzMRkAjulwgEzUcqi_1nJEcG7Uj-_615Ml8' }} />
                                                    <View className="p-2 absolute bg-white/20 top-12 left-12 rounded-full"><Text className="text-white text-md">+4</Text></View>
                                                </View>

                                                <View className="flex flex-col space-y-1">
                                                    <Text className=" text-white text-lg">Squad ..</Text>

                                                </View>
                                            </TouchableOpacity>


                                            <TouchableOpacity className="flex flex-col space-y-2 items-center  pb-8">
                                                <Image className="h-20 w-20 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/C5603AQEL1SpiPMx00A/profile-displayphoto-shrink_400_400/0/1626392153104?e=1727308800&v=beta&t=gVWNCSwHqxUvG11xPKrK4C5rGNZg5lM4yLw-sf2rJR4' }} />
                                                <View className="flex flex-col space-y-1">
                                                    <Text className=" text-white text-lg">Leighton</Text>

                                                </View>
                                            </TouchableOpacity>

                                            <TouchableOpacity className="flex flex-col space-y-2 items-center  pr-11 pb-8">

                                                <View className="relative h-20 w-20 ml-[-4]">
                                                    <Image className="h-14 w-14 top-1 absolute rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D4E03AQEFL9wup87lNw/profile-displayphoto-shrink_800_800/0/1714019194685?e=1727308800&v=beta&t=OZCYo4jv0DrgCrM8ROvp1WNUEMDBeA5TBFRDtSJ1u8o' }} />
                                                    <Image className="h-10 w-10 top-2 left-[75%] absolute rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D4D03AQELM-tqD-X4-A/profile-displayphoto-shrink_800_800/0/1721061786562?e=1727308800&v=beta&t=-sxV_xa0_vK_04QXMyzseX54cEYlTfuH8xS7bicg-os' }} />
                                                    <View className="p-2 absolute bg-white/20 top-12 left-12 rounded-full"><Text className="text-white text-md">+9</Text></View>
                                                </View>

                                                <View className="flex flex-col space-y-1">
                                                    <Text className=" text-white text-lg">Common</Text>

                                                </View>
                                            </TouchableOpacity>


                                            <TouchableOpacity className="flex flex-col space-y-2 items-center pr-10 pb-8">
                                                <Image className="h-20 w-20 rounded-full object-fit" source={{ uri: 'https://pbs.twimg.com/profile_images/1779151535147986944/-CcykDos_400x400.jpg' }} />
                                                <View className="flex flex-col space-y-1">
                                                    <Text className=" text-white text-lg">Chinna</Text>

                                                </View>
                                            </TouchableOpacity>




                                            <TouchableOpacity className="flex flex-col space-y-2 items-center  pb-8">
                                                <Image className="h-20 w-20 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/C5603AQH9HEz8Ny9QaQ/profile-displayphoto-shrink_800_800/0/1661807785415?e=1727308800&v=beta&t=ohPwozK5Z4LweLok0VyqR_-jy8i8TX2oEdFNzzWuZ1U' }} />
                                                <View className="flex flex-col space-y-1">
                                                    <Text className=" text-white text-lg">Newtina</Text>

                                                </View>
                                            </TouchableOpacity>
                                        </ScrollView>
                                    </View>


                                    <View className="relative">


                                        {!u1 &&
                                            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} className="flex flex-row space-x-7 px-6 mt-4 pr-10">
                                                <View className="flex flex-col space-y-2 justify-center items-center">

                                                    <View className="p-3 bg-white/20 rounded-full">
                                                        <View className="-rotate-45 opacity-90">
                                                            <Ionicons size={32} color="white" name="link-outline" />
                                                        </View>
                                                    </View>
                                                    <View>
                                                        <Text className="text-white">Copy Link</Text>
                                                    </View>
                                                </View>


                                                <View className="flex flex-col space-y-2 justify-center items-center">

                                                    <View className="p-3 bg-white/20 rounded-full">
                                                        <View className="opacity-90">
                                                            <Ionicons size={32} color="white" name="share-outline" />
                                                        </View>
                                                    </View>
                                                    <View>
                                                        <Text className="text-white">Share to..</Text>
                                                    </View>
                                                </View>


                                                <View className="flex flex-col space-y-2 justify-center items-center">

                                                    <View className="p-3 bg-white/20 rounded-full">
                                                        <View className=" opacity-90">
                                                            <Ionicons size={32} color="white" name="chatbubbles-outline" />
                                                        </View>
                                                    </View>
                                                    <View>
                                                        <Text className="text-white">Chat</Text>
                                                    </View>
                                                </View>


                                                <View className="flex flex-col space-y-2 justify-center items-center">

                                                    <View className="p-3 bg-white/20 rounded-full">
                                                        <View className=" opacity-90">
                                                            <Ionicons size={32} color="white" name="logo-whatsapp" />
                                                        </View>
                                                    </View>
                                                    <View>
                                                        <Text className="text-white">WhatsApp</Text>
                                                    </View>
                                                </View>

                                                <View className="flex flex-col space-y-2 justify-center items-center">

                                                    <View className="p-3 bg-white/20 rounded-full">
                                                        <View className=" opacity-90">
                                                            <Ionicons size={32} color="white" name="logo-facebook" />
                                                        </View>
                                                    </View>
                                                    <View>
                                                        <Text className="text-white">facebook</Text>
                                                    </View>
                                                </View>


                                                <View className="flex flex-col space-y-2 justify-center items-center">

                                                    <View className="p-3 bg-white/20 rounded-full">
                                                        <View className=" opacity-90">
                                                            <Ionicons size={32} color="white" name="logo-twitter" />
                                                        </View>
                                                    </View>
                                                    <View>
                                                        <Text className="text-white">Twitter</Text>
                                                    </View>
                                                </View>
                                                <View className="flex flex-col space-y-2 justify-center items-center">

                                                    <View className="p-3 bg-white/20 rounded-full">
                                                        <View className=" opacity-90">
                                                            <Ionicons size={32} color="white" name="logo-snapchat" />
                                                        </View>
                                                    </View>
                                                    <View>
                                                        <Text className="text-white">SnapChat</Text>
                                                    </View>
                                                </View>
                                            </ScrollView>
                                        }

                                        {
                                            u1 &&
                                            <>
                                                <View className="absolute bg-white/20 flex flex-row space-x-3 p-2 left-2 w-[76%] rounded-full items-center ">
                                                    <Image className="h-10 w-10 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D5603AQFAUcTYDLXqBA/profile-displayphoto-shrink_800_800/0/1681764031887?e=1727308800&v=beta&t=hGVVaP-8KbWFJTt1kVAPq-GvsaYkg-LBh9Xbo1WShdQ' }} />
                                                    <Text className="text-[16%] font-semibold text-white opacity-80">Drop a message ...</Text>
                                                </View>

                                                <TouchableOpacity onPress={() => sendin()} className="absolute bg-cyan-500/80 p-3 px-5 right-1 rounded-3xl ">
                                                    <Ionicons size={30} color="white" name="paper-plane" />
                                                </TouchableOpacity>
                                            </>


                                        }




                                    </View>




                                    {/* </View> */}
                                </View>

                                    : <Animated.View className="ml-[1%] mt-[40%]" >
                                        <LottieView
                                            source={require('../Sent.json')} // Replace with your right swipe animation
                                            autoPlay
                                            duration={3000}
                                            loop={false}
                                            style={styles.lottieAnimation9}

                                        />
                                    </Animated.View>
                            }


                        </BlurView>
                    </View>


                </Modal>}






            {chatModal &&
                <Modal animationInTiming={400} onBackdropPress={toggleChatModal} animationOutTiming={400} className="w-[100%] ml-[0] mt-[23%] rounded-t-[40%]" animationIn="slideInUp" animationOut="slideOutDown" isVisible={chatModal}>

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
                                    <TouchableOpacity className="pt-1" onPress={() => toggleChatModal()}>
                                        <Text className="text-[18%] font-semibold text-white opacity-60">Cancel</Text>
                                    </TouchableOpacity>


                                    <TouchableOpacity className="bg-cyan-600/60 px-4 py-3 rounded-full ">
                                        <Text className="text-[16%] font-semibold text-white opacity-70">Respond</Text>
                                    </TouchableOpacity>
                                </View>

                                <View className="h-[0.4%] w-[100%] bg-white/10 px-1 mt-[5%] rounded-full">

                                </View>


                                {/* <ScrollView  className="flex flex-row space-x-7 px-6 mt-4 pr-10"> */}

                                <KeyboardAwareScrollView className="flex  h-full flex-col relative">

                                    <View className="absolute bg-white/20 z-[100] w-[0.9%] top-[16%] left-[7.5%] h-[56.9%]">

                                    </View>

                                    <View className="absolute border-8 border-l-white/20 border-b-white/20 border-t-0 border-tl-0 border-r-0 border-tl  rounded-bl-full w-[10%] top-[72.9%] left-[7.5%] h-[8%]">

                                    </View>

                                    <View className="absolute bg-white/20 z-[100] w-[0.9%] top-[77.6%] left-[7.5%] h-[26.8%]">

                                    </View>

                                    <TouchableOpacity className={text.length > 0 ? "absolute top-[105%] items-center flex flex-row space-x-3 left-[2.8%] z-[120] transition transform duration-200 ease-in-out " : "absolute top-[105%] items-center flex flex-row space-x-3 left-[2.8%] z-[120] opacity-40 transition transform duration-200 ease-in-out "}>
                                        <TouchableOpacity>
                                            <Image className="h-10 w-10 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/v2/D5603AQFAUcTYDLXqBA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681764031887?e=1728518400&v=beta&t=U0BbE5153coD9n0HWoikSSvTpHbQYOEpr6hnnjzLWYc' }} />
                                        </TouchableOpacity>

                                        <Text className="text-[14%] text-gray-100">Add Another Response</Text>
                                    </TouchableOpacity>



                                    {/* <View className="absolute top-[118%] right-[1%] space-x-4 rounded-full bg-black/50 p-4 flex flex-row">
                                        <TouchableOpacity className="flex flex-row items-center opacity-40 space-x-2">
                                            <Ionicons size={22} color="white" name="sync" />
                                            <Text className="font-semibold text-[14%] text-white">Reaction</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity className="flex flex-row relative items-center space-x-2">
                                            <Ionicons size={22} color="white" name="chatbubbles" />
                                            <Text className="font-semibold text-[14%] text-white">Response</Text>

                                           
                                        </TouchableOpacity>

                                        <TouchableOpacity className="flex flex-row items-center opacity-40 space-x-2">
                                            <Ionicons size={22} color="white" name="repeat" />
                                            <Text className="font-semibold text-[14%] text-white">Repost</Text>
                                        </TouchableOpacity>
                                        
                                    </View> */}


                                    <View className="flex flex-row justify-between items-center px-2  mt-8">
                                        <View className="flex flex-row space-x-5 items-center ">
                                            <View>
                                                <TouchableOpacity>
                                                    <Image className="h-12 w-12 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D4D03AQELM-tqD-X4-A/profile-displayphoto-shrink_800_800/0/1721061786562?e=1728518400&v=beta&t=kcR4ry6SXqcBgWehIx-FrjVND2FE0LBPmpfY4rBVyBA' }} />
                                                </TouchableOpacity>
                                            </View>
                                            <View>
                                                <Text className="text-[17%] font-semibold text-white opacity-80">@nc127</Text>
                                            </View>

                                            <TouchableOpacity className="bg-red-600/20 px-4 py-3 rounded-full ">
                                                <Text className="text-[16%]  text-red-500 opacity-70">EXPLICIT</Text>
                                            </TouchableOpacity>

                                        </View>
                                        <View className="">
                                            <TouchableOpacity className=" bg-white/20 rounded-full p-3 self-end ">
                                                <Ionicons size={20} color="white" name="ellipsis-vertical-outline" />
                                            </TouchableOpacity>

                                        </View>
                                    </View>

                                    <View className="mt-6 ml-16 h-[230px]">
                                        <Image className="h-[75%] w-[94%] object-fit rounded-md" source={require('../busy-day.jpeg')} />
                                    </View>

                                    <View className="ml-[15%] mt-[-11%] px-2">
                                        <Text className="text-md leading-5 font-semibold text-white">Crime scene investigation underway. Updates to follow. #BreakingNews</Text>
                                    </View>


                                    <View className="ml-[15%] mt-[9%] flex flex-row space-x-4 items-center">
                                        <TouchableOpacity>
                                            <Image className="h-16 w-16 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/v2/D5603AQFAUcTYDLXqBA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681764031887?e=1728518400&v=beta&t=U0BbE5153coD9n0HWoikSSvTpHbQYOEpr6hnnjzLWYc' }} />
                                        </TouchableOpacity>

                                        <View className="flex flex-col space-y-4 mt-1">
                                            <Text className="text-[17%] font-semibold text-white opacity-80">@Pe20</Text>
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

                                        </View>
                                    </View>

                                    <View>
                                        <View className="flex flex-row space-x-2 w-[61%] mt-[5%] ml-[34%] bg-white/20 rounded-full p-3">
                                            <Ionicons size={20} color="#dedede" name="chatbubble" />
                                            <TextInput
                                                className="text-white font-semibold opacity-80 text-md"
                                                placeholder="Respond to @nc127 .."
                                                placeholderTextColor="#a7a7a7"
                                                value={text}
                                                onChangeText={setText}
                                                selectionColor="#dedede"
                                            />
                                        </View>
                                    </View>

                                </KeyboardAwareScrollView>

                                <View className="absolute top-[81.5%] right-[1%] space-x-4 rounded-full bg-black/50 p-4 flex flex-row">
                                    <TouchableOpacity className="flex flex-row items-center opacity-40 space-x-2">
                                        <Ionicons size={22} color="white" name="sync" />
                                        <Text className="font-semibold text-[14%] text-white">Reaction</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity className="flex flex-row relative items-center space-x-2">
                                        <Ionicons size={22} color="white" name="chatbubbles" />
                                        <Text className="font-semibold text-[14%] text-white">Response</Text>


                                    </TouchableOpacity>

                                    <TouchableOpacity className="flex flex-row items-center opacity-40 space-x-2">
                                        <Ionicons size={22} color="white" name="repeat" />
                                        <Text className="font-semibold text-[14%] text-white">Repost</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </BlurView>
                    </KeyboardAvoidingView>
                </Modal>}


            {
                liked &&

                <Animated.View className=" ml-[-19%]  mt-[70%]" >
                    <LottieView
                        source={require('../Love-anim.json')} // Replace with your right swipe animation
                        autoPlay
                        tim
                        duration={1200}
                        loop={false}
                        style={styles.lottieAnimation9}

                    />
                </Animated.View>
            }
        </>
    );
}




const styles = StyleSheet.create({
    cardShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    image: {
        blurRadius: 10, // Adjust the blur radius to your liking
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    muteButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 50,
    },
    lottieAnimation1: {
        height: 180,
        width: 180,
    },
    lottieAnimation2: {
        height: 150,
        width: 150,
    },
    lottieAnimation3: {
        height: 300,
        width: 300,
    },
    lottieAnimation4: {
        height: 175,
        width: 175,
    },

    lottieAnimation9: {
        height: 375,
        width: 375,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        top: 575,
        left: 16,
        right: 0,
        zIndex: 10,
    },
    iconButton: {
        padding: 10,
        borderRadius: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButtonActive: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    icon: {
        transform: [{ rotate: '45deg' }],
    },
    iconActive: {
        transform: [{ rotate: '0deg' }],
    },
    container: {
        height: 380,
        width: "100%" // Height for 5 items, assuming each item is 50 units tall
    },

    container1: {
        height: 422,
        width: "100%" // Height for 5 items, assuming each item is 50 units tall
    },
    scrollView: {
        // flexGrow: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 30
        // Adjust space between items

    },
});


