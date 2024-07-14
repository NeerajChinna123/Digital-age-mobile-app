import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Video, Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';


const { width, height } = Dimensions.get('window');

export default function Swipe2({ data }) {
    const navigation = useNavigation();
    const swiperRef = useRef(null);
    const videoRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(false);


    const toggleMute = () => {
        setIsMuted(!isMuted);
        videoRef.current.setIsMutedAsync(!isMuted);
    };


    return (
        <Swiper
            ref={swiperRef}
            cardIndex={currentIndex}
            onSwiped={(index) => setCurrentIndex(index + 1)}
            onSwipedLeft={() => console.log('Swiped Pass')}
            onSwipedRight={() => console.log('Swiped Match')}
            overlayLabels={{
                right: {
                    element: (
                        <View className="ml-[-65%] mt-[35%]">
                            <LottieView
                                source={require('../Animation - 1720995753431.json')} // Replace with your right swipe animation
                                autoPlay
                                // loop={false}
                                style={styles.lottieAnimation1}
                            />
                        </View>
                    ),
                },
                left: {
                    element: (
                        <View className="ml-[105%] mt-[39%]">
                            <LottieView
                                source={require('../repost.json')} // Replace with your left swipe animation
                                autoPlay
                                // loop={false}
                                style={styles.lottieAnimation2}
                            />
                        </View>
                    ),
                },
                top: {
                    element: (
                        <View className="mt-[124%] ml-[2%]">
                            <LottieView
                                source={require('../Share.json')} // Replace with your top swipe animation
                                autoPlay
                                // loop={false}
                                style={styles.lottieAnimation3}
                            />
                        </View>
                    ),
                },
                bottom: {
                    element: (
                        <View className="mt-[-60%] ml-[22%]">
                            <LottieView
                                source={require('../Animation - 1720995626995.json')} // Replace with your top swipe animation
                                autoPlay
                                loop={false}
                                style={styles.lottieAnimation4}
                            />
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
                        card?.category == 'GENERAL'
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
                                    card?.category == 'GENERAL'
                                        ? 'font-semibold ml-4 bg-green-500/20 bg-opacity-20 py-0 px-3 flex justify-center rounded-full text-lg'
                                        : 'font-semibold bg-red-500/20 bg-opacity-20 py-0 ml-4 px-3 flex justify-center rounded-full text-lg'
                                }
                            >
                                <Text
                                    className={
                                        card?.category == 'GENERAL'
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
    // overlayLabel: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: width,
    //     height: height,
    // },
    lottieAnimation1: {
        height: 240,
        width: 240
    },
    lottieAnimation2: {
        height: 170,
        width: 170
    },
    lottieAnimation3: {
        height: 350,
        width: 350
    },
    lottieAnimation4: {
        height: 190,
        width: 190
    },
});
