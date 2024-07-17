

import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, Animated } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Video, Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function Swipe4({ data }) {
    const navigation = useNavigation();
    const swiperRef = useRef(null);
    const videoRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(false);

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

    const [swiped, setSwiped] = useState(false);




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

    return (
        <>
            <Swiper
                ref={swiperRef}
                cardIndex={currentIndex}
                onSwiping={() => setSwiped(true)}
                onSwipedAborted={() => setSwiped(false)}
                // onSwiped={(index) => setCurrentIndex(index)}
                onSwipedLeft={(index) => setCurrentIndex(index + 1)}
                onSwipedRight={(index) => setCurrentIndex(index + 1)}
                onSwipedTop={(index) => setCurrentIndex(index + 1)}
                onSwipedBottom={(index) => setCurrentIndex(index + 1)}
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
                                            source={require('../repost.json')}  // Replace with your right swipe animation
                                            autoPlay

                                            // loop={false}
                                            style={styles.lottieAnimation2}
                                            className="ml-3 mt-5"
                                        />
                                    </Animated.View>
                                </View>

                            </View>
                        ),
                    },
                    top: {
                        element: (
                            // <View className="mt-[124%] ml-[2%]">
                            //     <Animated.View style={{ opacity: fadeAnimTop }}>
                            //         <LottieView
                            //             source={require('../Share.json')} // Replace with your top swipe animation
                            //             autoPlay
                            //             // loop={false}
                            //             style={styles.lottieAnimation3}
                            //         />
                            //     </Animated.View>
                            // </View>


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
                                    <Animated.View  >
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
                    <View
                        key={card.id}
                        className={
                            card?.category === 'GENERAL'
                                ? 'relative bg-black/40 h-[67%] rounded-xl border border-green-500 border-1'
                                : 'relative bg-black/40 h-[65%] rounded-xl border border-red-500 border-1'
                        }
                    >
                        <View className="flex flex-col space-y-2">
                            <View className="flex flex-row p-4">
                                <Image className="h-14 w-14 rounded-full object-cover" source={{ uri: card?.photoUrl }} />
                                <View className="flex flex-col space-y-1 pl-4">
                                    <Text className="font-semibold text-white text-lg">{card?.name}</Text>
                                    <Text className="text-white opacity-80 text-[15%]">{card?.userName}</Text>
                                </View>
                                <View
                                    className={
                                        card?.category === 'GENERAL'
                                            ? 'font-semibold ml-4 bg-green-500/20 bg-opacity-20 py-0 px-3 flex justify-center rounded-full text-lg'
                                            : 'font-semibold bg-red-500/20 bg-opacity-20 py-0 ml-4 px-3 flex justify-center rounded-full text-lg'
                                    }
                                >
                                    <Text
                                        className={
                                            card?.category === 'GENERAL'
                                                ? 'font-semibold text-green-600 text-center text-[15%]'
                                                : 'font-semibold text-red-600 text-[15%]'
                                        }
                                    >
                                        {card?.category}
                                    </Text>
                                </View>
                                <View className="ml-9">
                                    <TouchableOpacity className="mt-1 bg-white/20 rounded-full p-3 self-end ">
                                        <Ionicons size={26} color="white" name="ellipsis-horizontal-outline" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {card?.post && (
                            <Image className="h-[78%] w-[88%] absolute top-[18%] rounded-md object-cover ml-5" source={card?.post} />
                        )}

                        {card?.video && (
                            <>
                                <Video
                                    ref={videoRef}
                                    source={card?.video}
                                    className="h-[78%] w-[88%] absolute top-[18%] rounded-md object-cover ml-5"
                                    shouldPlay
                                    resizeMode="contain"
                                    isMuted={isMuted}
                                    volume={1.0} // Ensure the volume is set to a reasonable level
                                    isLooping={true}
                                    useNativeControls
                                    onPlaybackStatusUpdate={(status) => console.log('Playback Status:', status)}
                                />
                            </>
                        )}
                    </View>
                )}
            />

            <View className={swiped ? "absolute flex flex-row space-x-6 mt-[146.8%] ml-[4%] z-[-50]" : "absolute flex flex-row space-x-6 mt-[146.8%] ml-[4%]"}>
                <View>
                    <TouchableOpacity onPressIn={handlePressIn}
                        onPressOut={handlePressOut}
                        onPress={goToPreviousCard}
                        disabled={isFirstCard}
                        className={isFirstCard ? "p-3 rounded-full bg-white/20 opacity-50 transition-all transform duration-500 ease-in-out " : "  transition-all transform duration-500 ease-in-out p-3 rounded-full bg-white/20 opacity-100 "}>
                        <Icon name="undo" size={28} color={'#fff'}
                            className={isActive ? "rotate-12 transition-all transform duration-500 ease-in-out" : "rotate-45 transition-all transform duration-500 ease-in-out"} />
                    </TouchableOpacity>
                </View>
                <View className="mt-[-1%]">
                    <TouchableOpacity onPressIn={handlePressIn1}
                        onPressOut={handlePressOut1}
                        onPress={swipeRight}
                        className={isActive1 ? "p-3 rounded-full bg-white/10 " : "  p-3 rounded-full bg-white/20 "}>
                        <Icon name="heart" size={32} color={'#be123c'}
                            className={isActive1 ? " transition-all transform duration-500 ease-in-out" : "transition-all transform duration-500 ease-in-out"} />
                    </TouchableOpacity>
                </View>

                <View className="mt-[-1%]">
                    <TouchableOpacity onPressIn={handlePressIn12}
                        onPressOut={handlePressOut12}
                        onPress={swipeBottom}
                        className={isActive12 ? "p-3 rounded-full bg-white/10 " : "  p-3 rounded-full bg-white/20 "}>
                        <Icon name="comment" size={32} color={'#0ea5e9'}
                            className={isActive12 ? " transition-all transform duration-500 ease-in-out" : "transition-all transform duration-500 ease-in-out"} />
                    </TouchableOpacity>
                </View>

                <View className="mt-[-1%]">
                    <TouchableOpacity onPressIn={handlePressIn123}
                        onPressOut={handlePressOut123}
                        onPress={swipeLeft}
                        className={isActive123 ? "p-3 rounded-full bg-white/10 " : "  p-3 rounded-full bg-white/20 "}>
                        <Icon name="retweet" size={32} color={'#0ea5e9'}
                            className={isActive12 ? " transition-all transform duration-500 ease-in-out" : "transition-all transform duration-500 ease-in-out"} />
                    </TouchableOpacity>
                </View>



                <View>
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
        height: 136,
        width: 136,
    },
    lottieAnimation3: {
        height: 300,
        width: 300,
    },
    lottieAnimation4: {
        height: 175,
        width: 175,
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
});


