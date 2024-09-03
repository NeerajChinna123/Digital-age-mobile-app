

import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, Animated, ScrollView, FlatList, TextInput, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Video, Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
// import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";
import { BlurView } from 'expo-blur';
import * as Progress from 'react-native-progress';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { useSharedValue, useAnimatedStyle, withTiming, interpolate } from 'react-native-reanimated';


const { width, height } = Dimensions.get('window');

export default function Swipe4({ data }) {
    const navigation = useNavigation();
    const swiperRef = useRef(null);
    const videoRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(false);

    const [text, setText] = useState('');

    const [text1, setText1] = useState('');

    const [selecIm, setSelecIm] = useState('');


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

    const [chatModal1, setChatModal1] = useState(false);

    const [compC, setCompC] = useState(false);

    const [swiped, setSwiped] = useState(false);


    const opacity = useState(new Animated.Value(1))[0];

    const opacityAd = useState(new Animated.Value(1))[0];


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

    function toggleChatModal1() {
        setChatModal1(!chatModal1);
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

        console.log('asasci', currentIndex)

        if (currentIndex == 2) {
            setChatModal1(true);
        } else {
            setChatModal(true);

        }


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
        // setSwiperKey(Math.random() + 'none8r');

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







    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };



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

        setSelecIm(result.assets[0].uri);
        scrollToView(9400)
    };


    const [load, setLoad] = useState(false);

    const [load1, setLoad1] = useState(false);

    const [contentSta, setContentSta] = useState(false);

    const [contentSta1, setContentSta1] = useState(false);

    const [showBgRed, setShowBgRed] = useState(false);

    const [showBgGreen, setShowBgGreen] = useState(false);


    const opacity1 = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity1, {
            toValue: showBgRed ? 1 : 0,
            duration: 200, // duration of the transition in milliseconds
            useNativeDriver: true,
        }).start();
    }, [showBgRed]);

    useEffect(() => {
        Animated.timing(opacity1, {
            toValue: showBgGreen ? 1 : 0,
            duration: 200, // duration of the transition in milliseconds
            useNativeDriver: true,
        }).start();
    }, [showBgGreen]);



    function loading() {
        setLoad(true);

        setTimeout(() => {
            setContentSta(true);
            setShowBgRed(true);

            setTimeout(() => {
                setShowBgRed(false);
            }, 1000)
        }, 3000)
    }


    function loading1() {
        setLoad1(true);

        setTimeout(() => {
            setContentSta1(true);
            setShowBgGreen(true);

            setTimeout(() => {
                setShowBgGreen(false);
            }, 1000)
        }, 3000)
    }



    const [responded, setResponded] = useState(false);

    const [chatSent, setChatSent] = useState(false);

    const [reposted, setReposted] = useState(false);

    function respondedFun() {
        setResponded(true);

        setTimeout(() => { setChatSent(true) }, 2000);

        setTimeout(() => { setChatModal(false) }, 5000);

    }


    function repostFun() {
        setReposted(true);

        setTimeout(() => { setChatModal1(false) }, 2000);
    }

    const [repost, setRepost] = useState(false);

    const opacity2 = useRef(new Animated.Value(0)).current;

    const opacity3 = useRef(new Animated.Value(0)).current;

    const opacity4 = useRef(new Animated.Value(0)).current;

    const opacity5 = useRef(new Animated.Value(0)).current;

    const opacity6 = useRef(new Animated.Value(0)).current;

    const [quote, setQuote] = useState(false);

    useEffect(() => {
        Animated.timing(opacity2, {
            toValue: responded ? 1 : 0,
            duration: 200, // duration of the transition in milliseconds
            useNativeDriver: true,
        }).start();
    }, [responded]);

    useEffect(() => {
        Animated.timing(opacity3, {
            toValue: chatSent ? 1 : 0,
            duration: 200, // duration of the transition in milliseconds
            useNativeDriver: true,
        }).start();
    }, [chatSent]);


    useEffect(() => {
        Animated.timing(opacity4, {
            toValue: repost ? 1 : 0,
            duration: 200, // duration of the transition in milliseconds
            useNativeDriver: true,
        }).start();
    }, [repost]);

    useEffect(() => {
        Animated.timing(opacity5, {
            toValue: !quote ? 1 : 0,
            duration: 200, // duration of the transition in milliseconds
            useNativeDriver: true,
        }).start();
    }, [quote]);

    useEffect(() => {
        Animated.timing(opacity6, {
            toValue: quote ? 1 : 0,
            duration: 200, // duration of the transition in milliseconds
            useNativeDriver: true,
        }).start();
    }, [quote]);


    const [text3, setText3] = useState('')
    const [ViolenceModal, setViolenceModal] = useState(false);
    const [HumorModal, setHumorModal] = useState(false);
    const [PoliticalModal, setPoliticalModal] = useState(false);
    const [isModalVisible5, setModalVisible5] = useState(false);
    const toggleModal5 = () => {
        setModalVisible5(!isModalVisible5);
    };


    const [showOptions, setShowOptions] = useState(false);

    console.log('show-op : ', showOptions);


    const heightAnim = useRef(new Animated.Value(0)).current;
    const widthAnim = useRef(new Animated.Value(0)).current;

    const toggleMenu = () => {
        // setShowAd(true);
        setShowOptions(!showOptions);
        const toValue = showOptions ? 0 : 1;


        Animated.parallel([
            Animated.timing(heightAnim, {
                toValue,
                duration: 140,
                useNativeDriver: false,
            }),
            Animated.timing(widthAnim, {
                toValue,
                duration: 140,
                useNativeDriver: false,
            })
        ]).start();


        if (opacityAd.__getValue() === 0) {

            Animated.timing(opacityAd, {
                toValue: 1, duration: 700, useNativeDriver: true
            }).start()
        } else {
            Animated.timing(opacityAd, {
                toValue: 0, duration: 700, useNativeDriver: true
            }).start()
        }
    };

    const toggleAd = () => {
        setShowAd(true);
        setShowOptions(!showOptions);
        const toValue = showOptions ? 0 : 1;


        Animated.parallel([
            Animated.timing(heightAnim, {
                toValue,
                duration: 140,
                useNativeDriver: false,
            }),
            Animated.timing(widthAnim, {
                toValue,
                duration: 140,
                useNativeDriver: false,
            })
        ]).start();


        if (opacityAd.__getValue() === 0) {

            Animated.timing(opacityAd, {
                toValue: 1, duration: 700, useNativeDriver: true
            }).start()
        } else {
            Animated.timing(opacityAd, {
                toValue: 0, duration: 700, useNativeDriver: true
            }).start()
        }
    };




    // Set custom height and width values
    const heightInterpolate = heightAnim.interpolate({
        inputRange: [0, 2],
        outputRange: [0, 340] // Custom height in pixels (collapsed height, expanded height)
    });

    const widthInterpolate = widthAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 180] // Custom width in pixels (collapsed width, expanded width)
    });


    const [showAd, setShowAd] = useState(false);


    const [currentValue, setCurrentValue] = useState(0);


    const scrollX = useRef(new Animated.Value(0)).current;
    const textAd = ["This", "is", "the", "scrolling", "text!", "This", "is", "the", "scrolling", "text!", "This", "is", "the", "scrolling", "text!", "This", "is", "the", "scrolling", "text!", "This", "is", "the", "scrolling", "text!", "This", "is", "the", "scrolling", "text!", "This", "is", "the", "scrolling", "text!"];

    // useEffect(() => {
    //     const animation = Animated.loop(
    //         Animated.timing(scrollX, {
    //             toValue: 1,
    //             duration: 10000, // Adjust the duration to control the speed
    //             useNativeDriver: true,
    //         })
    //     );

    //     animation.start();

    //     return () => animation.stop();
    // }, [scrollX]);

    const animationRef2 = useRef(null);

    useEffect(() => {
        startAnimation();

        // Listen to the scrollX value and update currentValue state
        // scrollX.addListener(({ value }) => {
        //     setCurrentValue(value);
        // });

        return () => {
            if (animationRef2.current) {
                animationRef2.current?.stop(); // Stop the animation when the component unmounts
            }
            scrollX.removeAllListeners(); // Clean up listeners
        };
    }, [scrollX]);

    const startAnimation = () => {
        animationRef2.current = Animated.loop(
            Animated.timing(scrollX, {
                toValue: 1,
                duration: 10000, // Adjust the duration to control the speed
                useNativeDriver: true,
            })
        );
        animationRef2.current?.start();
    };

    const pauseAnimation = () => {
        if (animationRef2.current) {
            setStopPlay(true);
            animationRef2.current?.stop(); // Pause the animation

        }
    };

    const resumeAnimation = () => {
        if (stopPlay) {
            setStopPlay(false);
            Animated.timing(scrollX, {
                toValue: 1,
                duration: 9000, // Resume from the current position
                useNativeDriver: true,
            }).start(() => startAnimation());

        }
    };


    const [stopPlay, setStopPlay] = useState(false);


    const animationRef = useRef(null);

    useEffect(() => {
        if (stopPlay) {
            animationRef?.current?.pause();
        } else {
            animationRef?.current?.play();
        }
    }, [stopPlay]);




    const autoScrollRef = useRef(null);
    const scrollY = useRef(new Animated.Value(0)).current;

    const subtitles = [
        'A black screen appears with the text "GAME SCIENCE"',
        'Written in white capital letters in the center.',
        'To the right of the text, there is a small',
        'Solid white silhouette of a tooth.',
        'The scene opens with a view of wet, rocky terrain.',
        'A pair of bare, large feet adorned with intricate,',
        'Gold-colored anklets quickly steps into the frame,',
        'Landing firmly on the wet rocks. Detailed engravings on the anklets',
        'Can be seen close up as the foot remains in place,',
        'With the droplets around it slightly shifting',
        'Finally, the foot begins to lift,',
        'Creating a subtle splash in the puddle',
        'Beneath it as it moves away.',
        'The scene seems serene,',
        'Focusing on the ground and the movement of the feet.',
        'The scene opens with close-up shots of a',
        'Gauntleted hand resting on an intricately designed, metal-clad waist.',
        'The armor is detailed with ornate patterns and includes a leather belt',
        'With small pouches attached.',
        'The perspective shifts slightly several times,',
        'Showing different angles of the waist and hand,',
        'Emphasizing the craftsmanship of the armor.',
        'The camera pans higher,',
        "Revealing more of the figure's upper body,",
        'Now focusing on the chest armor adorned with',
        "Elaborate decorations and tied with red cords.",
        "The hand moves, grasping one of the cords on the",
        "Shoulder, Tightening or adjusting it.",
        "The sequence continues to showcase the figure's",
        "Methodical tightening of the armor cords,",
        "Highlighting the rich details and ornate design work",
        "On the chest and shoulder pieces.",
        "The setting appears natural, with a slightly",
        "Blurred background of trees or vegetation under a cloudy sky.",
        "A dense, misty forest scene is depicted with tall,",
        "Twisted evergreen trees scattered",
        "Across a rocky landscape",
        "Covered in fog. In the background, a large waterfall",
        "Cascades down a mountain, Adding a majestic",
        "And serene quality to the setting.",
        "The mist creates an ethereal atmosphere,",
        "While the sound of the waterfall,",
        "Provides a soothing ambiance.",
        "A fierce battle scene unfolds in a desolate, dusty environment.",
        "A large, heavily armored warrior with a shield charges forward,",
        "Creating billowing clouds of dust.",
        "As the dust engulfs the scene, visibility drops dramatically,",
        "Making it difficult to discern specific details.",
        "Amidst the thick dust, bright sparks appear,",
        "Hinting at heavy impacts and intense combat.",
        "The large warrior is seen again wading through the dust,",
        "Emphasizing the chaotic and brutal nature of the fight.",
        "The sparks continue to light up the murky surroundings,",
        "Underscoring the ferocity and intensity of the ongoing battle.",
        "In a misty, rugged landscape, a heavily armored figure,",
        "Adorned with long, curved horns or antlers on their helmet,",
        "Strides forward on a rocky path.",
        "The scene captures the figure's back, ",
        "Showing their determined walk through an eerie, fog-laden forest.",
        "Tall, ancient trees with sparse leaves surround the path,",
        "Contributing to the mysterious, almost mystical atmosphere.",
        "The figure's presence evokes a sense of power and purpose",
        "As they continue their journey deeper into the ominous woodland.",
        "A large creature is on the ground amidst a burning, fiery landscape.",
        "The creature rises from the ground, wreathed in flames.",
        "The fire intensifies, engulfing the scene in bright, destructive light.",
        "In the following moment, the scene shifts to an outdoor environment",
        "Filled with dust and debris as the creature,",
        "Now revealed to be clad in armor and wielding a weapon,",
        "Slams into the earth, causing a massive dust cloud. As it stomps forward,",
        "Details of its form are visible amidst the swirling debris.",
        "The scene darkens momentarily but soon brightens again,",
        "Showing the armored creature in clearer",
        "Daylight as it continues its aggressive advance,",
        "The environment around it becoming more chaotic",
        "With flying debris and shaking ground.",
        "A person dressed in intricate, ornamental armor is standing",
        "With their back to the viewer. ",
        "The armor is adorned with elaborate designs and decorations,",
        "Including gold accents and intricate patterns.",
        "The scene takes place in a misty,",
        "Forested area with trees and foliage visible in the background.",
        "The person’s hair is pulled up, possibly into a topknot",
        "Or a similar hairstyle, and appears to have",
        "Some kind of ornament or decoration in it.",
        "The atmosphere is tense and somber, with a cloudy sky overhead.",
        "In a dense and shadowy forest, a formidable figure clad in rugged attire",
        "Stands with a powerful stance, holding a massive sword.",
        "The figure thrusts the sword into the ground,",
        "Causing an intense explosion of dirt and debris.",
        "The force of the impact sends a shockwave",
        "That scatters leaves and twigs into the air,",
        "Obscuring the scene with a whirlwind of chaotic motion.",
        "Amidst the flying debris, the figure's silhouette is barely visible,",
        "Shrouded in a swirling cloud of earth and nature.",
        "As the commotion subsides,",
        "The view shifts back to the stillness of the forest,",
        "Showing a large, ancient tree with golden leaves,",
        "Standing tall and unaffected by the recent turmoil.",
        "A warrior, heavily armored and carrying a spear,",
        "Is seen riding on the back of a massive",
        "Dragon through a stormy, snowy environment.",
        "The scene is chaotic with swirling winds and white flurries.",
        "Suddenly, bolts of lightning strike across the sky,",
        "Illuminating the dragon and the warrior.",
        "The dragon writhes through the air,",
        "Its movements becoming increasingly erratic as the lightning intensifies.",
        "The scene culminates in a blinding explosion of light as the",
        "Lightning strikes the dragon head-on,",
        "Causing a violent flash that temporarily obscures everything.",
        "After the flash subsides, the dragon savagely twists and turns,",
        "Wracked by the electric impact, before finally",
        "Plunging downwards through the stormy sky.",
        "The aftermath shows the dragon and the warrior,",
        "Still struck by residual lightning,",
        "Spiraling downward amidst the flurry of snow.",
        "A white screen gradually fades to reveal a scene of a",
        "Humanoid creature with simian features and golden armor.",
        "The creature's face becomes clear as it stares",
        "Intently forward with furrowed brows, showcasing an intense expression.",
        "The cloudy sky forms a bleak backdrop,",
        "Adding to the creature's stern demeanor.",
        "Wearing intricately detailed armor with gold accents,",
        "It raises one hand and gestures in the air, summoning a long, ornate staff.",
        "The staff appears out of thin air,",
        "And the creature grips it firmly, holding it aloft.",
        "Throughout the sequence, the creature remains poised and powerful,",
        "Showcasing deliberate movements as it twirls the staff,",
        "Readying itself for action.",
        "In a misty, ethereal landscape, a warrior dressed in ornate,",
        "Ancient armor stands prominently on a rocky outcrop.",
        "Surrounding the warrior in the background, massive, mythical constructs,",
        "Resembling titan-like figures, loom through the fog,",
        "Exuding a mix of both awe and menace. ",
        "The warrior remains steady, clutching a long staff, ",
        "And turns slightly to the left,",
        "As if assessing both the constructs and the terrain.",
        "Trees, sparse and sporadic, frame the scene and add to the mystique.",
        "The atmosphere is tense, hinting at an impending ",
        "Confrontation or significant event.",
        "In a misty, mountainous landscape,",
        "A lone warrior stands on a rocky outcrop with a long staff.",
        "Behind the warrior, immense statues of mythical figures loom in the distance,",
        "Partially obscured by swirling fog.",
        "The warrior, clad in ornate armor, gazes towards the statues, ",
        "Possibly contemplating the journey ahead. On the towering figures,",
        "Intricate details become evident as the mist shifts,",
        "Revealing their majestic and powerful forms.",
        "The atmosphere is both eerie and awe-inspiring,",
        "With muted tones and an air of ancient myth.",
        "Words, 'Black Myth: Wukong,' appear suspended in the mist above the scene,",
        "Suggesting a title or introduction to an epic tale.",
        "The scene begins with a cloudy,",
        "Dark backdrop showing",
        "The text: 'Black Myth: Wukong, Confront Destiny, August 20, 2024,'",
        "Followed by, 'Pre-order now.' Below, there are platform logos",
        "For PlayStation 5, Steam, Xbox, and GeForce with their respective icons",
        "Lining the bottom.",
        "The visual then transitions to a black screen with the same text and layout,",
        "Maintaining the release date, pre-order prompt, and platform information,",
        "But without the cloudy background and with",
        "Clearer visibility of the text and platform icons.",
        "Clearer visibility of the text and platform icons."
    ];

    const itemHeight = 60; // Each item has a height of 60
    const viewHeight = itemHeight * 2; // Showing two sentences at a time

    useEffect(() => {
        const contentHeight = subtitles.length * itemHeight;

        const animateScroll = () => {
            scrollY.setValue(0);
            Animated.timing(scrollY, {
                toValue: contentHeight - viewHeight,
                duration: subtitles.length * 1300, // Adjust the duration as needed
                useNativeDriver: true,
            }).start(() => {
                animateScroll(); // Loop the animation
            });
        };
        if (showAd) {
            setTimeout(() => animateScroll(), 1000);

        }


    }, [scrollY, showAd]);



    useEffect(() => {
        scrollY.addListener(({ value }) => {
            autoScrollRef.current?.scrollTo({ y: value, animated: false });
        });

        return () => {
            scrollY.removeAllListeners();
        };
    }, [scrollY]);







    const renderItem = (item, index) => {
        const rotateX = scrollY.interpolate({
            inputRange: [
                (index - 1) * itemHeight,
                index * itemHeight,
                (index + 1) * itemHeight,
            ],
            outputRange: ['-75deg', '0deg', '75deg'], // Increased curve at the top
            extrapolate: 'clamp',
        });

        const opacity = scrollY.interpolate({
            inputRange: [
                (index - 1) * itemHeight,
                index * itemHeight,
                (index + 1) * itemHeight,
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
        });

        const transform = [
            { perspective: 1000 },
            { rotateX },
        ];

        return (
            <Animated.View
                key={index}
                style={{
                    height: itemHeight,
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity,
                    transform,
                }}
            >
                <Text className="text-white text-[16%]">{item}</Text>
            </Animated.View>
        );
    };


    if (showAd) {
        if (videoRef.current) {
            setTimeout(() => {
                videoRef.current.pauseAsync();
            }, 3000)

            setTimeout(() => {
                videoRef.current.playAsync();
            }, 18000)

            setTimeout(() => {
                videoRef.current.pauseAsync();
            }, 22000)

            setTimeout(() => {
                videoRef.current.playAsync();
            }, 28000)

            setTimeout(() => {
                videoRef.current.pauseAsync();
            }, 29600)

            setTimeout(() => {
                videoRef.current.playAsync();
            }, 38000)

            setTimeout(() => {
                videoRef.current.pauseAsync();
            }, 42000)

            setTimeout(() => {
                videoRef.current.playAsync();
            }, 46000)

            setTimeout(() => {
                videoRef.current.pauseAsync();
            }, 50000)

            setTimeout(() => {
                videoRef.current.playAsync();
            }, 54000)

            setTimeout(() => {
                videoRef.current.pauseAsync();
            }, 56200)

            setTimeout(() => {
                videoRef.current.playAsync();
            }, 61000)

            setTimeout(() => {
                videoRef.current.pauseAsync();
            }, 65000)


            // Scene 5

            setTimeout(() => {
                videoRef.current.playAsync();
            }, 71200)

            setTimeout(() => {
                videoRef.current.pauseAsync();
            }, 74300)

            // Scene 6

            setTimeout(() => {
                videoRef.current.playAsync();
            }, 84000)


            setTimeout(() => {
                videoRef.current.pauseAsync();
            }, 86200)

            setTimeout(() => {
                videoRef.current.playAsync();
            }, 92000)

            // Scene 7

            setTimeout(() => {
                videoRef.current.pauseAsync();
            }, 93500)

            setTimeout(() => {
                videoRef.current.playAsync();
            }, 95000)

            setTimeout(() => {
                videoRef.current.pauseAsync();
            }, 96000)

            // Scene 8

            setTimeout(() => {
                videoRef.current.playAsync();
            }, 103000)

            setTimeout(() => {
                videoRef.current.pauseAsync();
            }, 105200)

             // Scene 9

            setTimeout(() => {
                videoRef.current.playAsync();
            }, 111200)

            setTimeout(() => {
                videoRef.current.pauseAsync();
            }, 113000)

              // Scene 10

            setTimeout(() => {
                videoRef.current.playAsync();
            }, 111200)

            setTimeout(() => {
                videoRef.current.pauseAsync();
            }, 112700)


            // Scene 11

            setTimeout(() => {
                videoRef.current.playAsync();
            }, 115000)


            setTimeout(() => {
                videoRef.current.pauseAsync();
            }, 117000)



            // setTimeout(() => {
            //     videoRef.current.playAsync();
            // }, 67300)

            // setTimeout(() => {
            //     videoRef.current.pauseAsync();
            // }, 68000)


           


        }
    }


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
                            className="flex absolute z-[100] flex-col items-center ">
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
                            {(explicit && card?.category === 'EXPLICIT') &&
                                <View className=" rounded-lg ml-[1%] mt-[-3%] flex flex-row w-[80%] pt-2 relative  flex-wrap">
                                    <TouchableOpacity onPress={() => {
                                        toggleModal5();
                                        setViolenceModal(true);
                                        setHumorModal(false);
                                        setPoliticalModal(false);
                                        // setAdultModal(false)
                                    }} className="rounded-full p-2 bg-white/30 mr-3 mb-4">
                                        <Text className="text-md font-semibold text-white/90">Game</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={(() => {
                                        toggleModal5(); setHumorModal(true); setViolenceModal(false);

                                        setPoliticalModal(false);
                                        // setAdultModal(false)
                                    })} className="rounded-full p-2 bg-white/30  mr-3 mb-4">
                                        <Text className="text-md font-semibold text-white/80">Fantasy</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={(() => {
                                        toggleModal5(); setViolenceModal(false);
                                        setHumorModal(false);
                                        setPoliticalModal(true);
                                        // setAdultModal(false)
                                    })} className="rounded-full p-2 bg-white/30 mt-[-4]  mr-3 mb-4">
                                        <Text className="text-md font-semibold text-white/90">Action</Text>
                                    </TouchableOpacity>

                                    {/* <TouchableOpacity onPress={() => {
                                        toggleModal5();
                                        setViolenceModal(true);
                                        setHumorModal(false);
                                        setPoliticalModal(false);
                                        // setAdultModal(false)
                                    }} className="rounded-full absolute right-5 p-2 bg-black/50 mr-3 mb-4">
                                        <Text className="text-md font-semibold text-white/90">Violence</Text>
                                    </TouchableOpacity> */}
                                    {/* <TouchableOpacity onPress={(() => {
                                                    toggleModal3(); setAdultModal(true); setViolenceModal(false);
                                                    setHumorModal(false);
                                                    setPoliticalModal(true)

                                                })} className="rounded-full p-2 bg-white/20  mr-2 mb-4">
                                                    <Text className="text-md font-semibold text-white/80">Adult</Text>
                                                </TouchableOpacity> */}

                                    <TouchableOpacity onPress={(() => {
                                        toggleModal5(); setViolenceModal(false);
                                        setHumorModal(false);
                                        setPoliticalModal(true);
                                        // setAdultModal(false)
                                    })} className="rounded-full p-2  right-[-79] top-[6%] absolute border border-cyan-500 bg-cyan-500/30  ml-[15%] mb-4">
                                        <Text className="text-md font-semibold text-cyan-500/90">Dispute</Text>
                                    </TouchableOpacity>
                                </View>

                            }

                        </Animated.View>

                        <Animated.View style={[{ opacity: opacity }]} className="absolute z-[80] right-[5%] top-[4.5%]">
                            <TouchableOpacity onPress={() => toggleMenu()} className=" bg-black/40 rounded-full p-3 self-end ">
                                <Ionicons size={26} color="white" name="ellipsis-horizontal-outline" />
                            </TouchableOpacity>
                        </Animated.View>




                        {(card?.category == "EXPLICIT" && !explicit) &&
                            // <View className="  ">

                            <BlurView
                                className="flex absolute z-[50] top-[2.5%] h-[94%] w-[94%]  ml-[3%] bg-black/70 flex-col space-y-2 "
                                tint="dark"
                                intensity={60}

                            >
                                <View className="flex flex-col mt-[22.5%] items-center space-y-2 ml-2 p-2">
                                    <Text className="text-lg text-white font-semibold text-center px-2">This post may contain explicit material. Viewer discretion is advised. Explore further by clicking on the tags.



                                    </Text>
                                    <View className=" rounded-lg mt-1 flex flex-row  pt-2 pl-1  flex-wrap">
                                        <TouchableOpacity onPress={() => {
                                            toggleModal5();
                                            setViolenceModal(true);
                                            setHumorModal(false);
                                            setPoliticalModal(false);
                                            // setAdultModal(false)
                                        }} className="rounded-full p-2 bg-white/20 mr-3 mb-4">
                                            <Text className="text-md font-semibold text-white/80">Violence</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={(() => {
                                            toggleModal5(); setHumorModal(true); setViolenceModal(false);

                                            setPoliticalModal(false);
                                            // setAdultModal(false)
                                        })} className="rounded-full p-2 bg-white/20  mr-3 mb-4">
                                            <Text className="text-md font-semibold text-white/80">Weapons</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={(() => {
                                            toggleModal5(); setViolenceModal(false);
                                            setHumorModal(false);
                                            setPoliticalModal(true);
                                            // setAdultModal(false)
                                        })} className="rounded-full p-2 bg-white/20  mr-3 mb-4">
                                            <Text className="text-md font-semibold text-white/80">Blood</Text>
                                        </TouchableOpacity>
                                        {/* <TouchableOpacity onPress={(() => {
                                                    toggleModal3(); setAdultModal(true); setViolenceModal(false);
                                                    setHumorModal(false);
                                                    setPoliticalModal(true)

                                                })} className="rounded-full p-2 bg-white/20  mr-2 mb-4">
                                                    <Text className="text-md font-semibold text-white/80">Adult</Text>
                                                </TouchableOpacity> */}
                                    </View>
                                    <Text className="text-lg text-white font-semibold pb-3 text-center"> Proceed by clicking below.</Text>
                                    <TouchableOpacity onPress={() => forceUpdateCard()} className="p-4 text-md  rounded-full bg-white/30"><Text className="text-white font-semibold">View Content</Text></TouchableOpacity>
                                </View>
                            </BlurView>
                        }

                        {card?.post && (
                            <Image style={{
                                height: '94%',
                                width: '94%',
                                position: 'absolute',
                                top: '2.5%',
                                borderRadius: 'md',
                                marginLeft: '3%',
                                resizeMode: 'fit' // Ensures the entire image is visible
                            }} source={card?.post} />

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

            {
                showOptions && <Animated.View className="absolute top-[138px] right-[12%] " style={[{ height: heightInterpolate, width: widthInterpolate }]}>
                    <Animated.View className="rounded-lg overflow-hidden">

                        <BlurView tint="dark"
                            intensity={80} className=" p-2 pb-3 flex flex-col space-y-2 items-start  justify-center  ">
                            <View className="flex flex-row space-x-3 pl-2 items-center">
                                <Ionicons size={28} color="#ffffff" name="add-outline" />
                                <Text className="text-white font-semibold text-[17%] tracking-wide">Add to Lists</Text>
                            </View>
                            <View className="flex flex-row justify-center">

                                <View className="h-[10%] w-[108%] border border-b-0  border-white opacity-20">

                                </View>

                            </View>


                            <TouchableOpacity onPress={() => toggleAd()} className="flex flex-row space-x-3 pl-2 items-center">
                                <Ionicons size={28} color="#ffffff" name="ear" />
                                <Text className="text-white font-semibold text-[17%] tracking-wide">Audio Guide</Text>
                            </TouchableOpacity>
                            <View className="flex flex-row justify-center">

                                <View className="h-[10%] w-[108%] border border-b-0  border-white opacity-20">

                                </View>

                            </View>
                            <View className="flex flex-row space-x-3 pl-2 items-center">
                                <Ionicons size={28} color="#ffffff" name="flag" />
                                <Text className="text-white font-semibold text-[17%] tracking-wide">Report Post</Text>
                            </View>
                            <View className="flex flex-row justify-center">

                                <View className="h-[10%] w-[108%] border border-b-0  border-white opacity-20">

                                </View>

                            </View>
                            <View className="flex flex-row space-x-3 pl-2 items-center">
                                <Ionicons size={28} color="#ffffff" name="sad" />
                                <Text className="text-white font-semibold text-[17%] tracking-wide">Not for Me</Text>
                            </View>
                        </BlurView>
                    </Animated.View >
                </Animated.View>
            }


            {showAd &&
                <Animated.View style={[{ opacity: opacityAd }]}>
                    <TouchableOpacity onPress={() => setShowAd(false)} className="p-1 absolute  bg-white/20 z-[200]  top-[402] left-[328] rounded-full">
                        <Ionicons size={12} color="#ffffff" className="opacity-50" name="close-outline" />
                    </TouchableOpacity>
                </Animated.View>
            }

            {showAd &&


                <Animated.View
                    style={[{ opacity: opacityAd }]}

                    className=" overflow-hidden absolute top-[430] left-[45]"
                >


                    <BlurView tint="dark"
                        intensity={10} className=" pl-3 pb-3 py-2 flex flex-row space-x-2 w-[310px] bg-black ">
                        <Animated.View className="relative py-6 px-2" >
                            <LottieView
                                source={require('../visual.json')} // Replace with your right swipe animation
                                autoPlay
                                duration={12000}
                                loop={true}
                                ref={animationRef}
                                className="absolute top-[-2] left-[-15]"
                                style={styles.lottieAnimation19}

                            />
                        </Animated.View>

                        <View>
                            <View className="absolute w-[240px] left-[20] top-[-8] ">


                                {/* <View className="px-1 " style={{ height: viewHeight, overflow: 'hidden', backgroundColor: '#000' }}>
                                    <ScrollView ref={autoScrollRef} scrollEnabled={false}>
                                        {subtitles.map((item, index) => renderItem(item, index))}
                                    </ScrollView>
                                </View> */}

                                <View className="px-1" style={{ height: viewHeight, overflow: 'hidden', backgroundColor: '' }}>
                                    <ScrollView
                                        ref={autoScrollRef}
                                        scrollEnabled={false}
                                        snapToInterval={itemHeight} // Snaps to each item height
                                        decelerationRate="fast" // Faster deceleration for a snappier feel
                                        showsVerticalScrollIndicator={false}
                                    >
                                        {subtitles.map((item, index) => renderItem(item, index))}
                                    </ScrollView>
                                </View>



                                {/* </LinearGradient> */}

                                <LinearGradient
                                    colors={['transparent', 'black', 'black', 'transparent']}
                                    style={styles.gradient}
                                    start={{ x: 0, y: 0 }} // Start at the top
                                    end={{ x: 0, y: 1 }}
                                    className="h-[70px] w-[250px] absolute top-[-48] left-[-6] opacity-40"
                                >

                                </LinearGradient>

                                <LinearGradient
                                    colors={['transparent', 'black', 'black', 'transparent']}
                                    style={styles.gradient}
                                    start={{ x: 0, y: 0 }} // Start at the top
                                    end={{ x: 0, y: 1 }}
                                    className="h-[70px] w-[250px] absolute top-[36] left-[-6] opacity-40"
                                >

                                </LinearGradient>


                                {/* <LinearGradient
                                    colors={['transparent', 'black', 'black', 'transparent']}
                                    style={styles.gradient}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    className="h-[72px] w-[160px] absolute top-[-22] left-[120] opacity-40"
                                >

                                </LinearGradient>  */}
                                {/* {stopPlay ? <TouchableOpacity onPress={() => resumeAnimation()} className="absolute opacity-40 right-[-48] z-[120] top-[-2%] ">
                                    <Ionicons size={32} color="#ffffff" name="play" />
                                </TouchableOpacity> :

                                    <TouchableOpacity onPress={() => pauseAnimation()} className="absolute right-[-44] z-[120] top-[2%] flex flex-row justify-center items-center p-2 rounded-full bg-white opacity-30 h-7 w-7">
                                        <View className="rounded-sm h-3 w-3 bg-gray-700 opacity-80">

                                        </View>
                                    </TouchableOpacity>
                                } */}


                            </View>


                        </View>




                    </BlurView>

                </Animated.View>
            }

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

            <Modal
                isVisible={isModalVisible5}
                onBackdropPress={toggleModal5}
                animationIn="fadeIn"
                animationOut="fadeOut"
                backdropOpacity={0.8}
            >

                <BlurView
                    className="h-auto pb-4 rounded-3xl relative"
                    tint="dark"
                    intensity={60}

                >

                    <TouchableOpacity onPress={toggleModal5} className="p-2 absolute bg-white/20 right-4 top-4 rounded-full">
                        <Ionicons size={20} color="#ffffff" name="close-outline" />
                    </TouchableOpacity>

                    <View className="flex flex-row justify-center mt-[18%] px-4">
                        {

                            ViolenceModal ?

                                <Text className="text-center text-white text-[18%] font-semibold opacity-60 leading-6">The post is tagged with 'violence' due to multiple scenes depicting violent actions, including characters being physically assaulted with knives. The characters exhibit expressions of fear, pain, and distress further supporting the violent context.</Text> :

                                HumorModal ? <Text className="text-center text-white text-[18%] font-semibold opacity-60 leading-6"> The post is tagged with 'weapons' because several scenes depict characters with knives, an example of which includes characters being threatened and attacked with them.</Text> :

                                    PoliticalModal ? <Text className="text-center text-white text-[18%] font-semibold opacity-60 leading-6">The media is tagged with 'blood' due to numerous graphic depictions of bleeding wounds and splattering blood effects from knife attacks, which is visibly seen in several frames.</Text> :

                                        <Text className="text-center text-white text-[18%] font-semibold opacity-60 leading-6">The post does not contain adult content; it employs a playful and non-serious depiction of ketchup as blood for comedic effect.</Text>

                        }
                    </View>

                </BlurView>
            </Modal>

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
                            {
                                responded ?

                                    (chatSent ? <Animated.View
                                        style={
                                            {
                                                opacity: opacity3,

                                            }} className="absolute top-[25%] left-[7%]" >

                                        <LottieView
                                            source={require('../Chat-Sent.json')} // Replace with your right swipe animation
                                            autoPlay
                                            tim


                                            style={styles.lottieAnimation18}

                                        />
                                    </Animated.View> :
                                        <Animated.View
                                            style={
                                                {
                                                    opacity: opacity2,

                                                }} className="relative">
                                            <View className="mt-[22%] flex flex-col items-center">
                                                <Image className="h-28 w-28 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D5603AQFAUcTYDLXqBA/profile-displayphoto-shrink_800_800/0/1681764031887?e=1727308800&v=beta&t=hGVVaP-8KbWFJTt1kVAPq-GvsaYkg-LBh9Xbo1WShdQ' }} />
                                            </View>
                                            <View className={"absolute bg-white/20 transition transform duration-200 ease-in-out  z-[100] w-[0.9%] top-[100%] left-[49%] h-[50%]"}>

                                            </View>

                                            <View className="bg-white/10 absolute rounded-full h-28 w-28 top-[150%] left-[35%]">

                                            </View>

                                            <View className="absolute rounded-full h-28 w-28 top-[138%] left-[29%]">
                                                <LottieView
                                                    source={require('../chatting.json')} // Replace with your right swipe animation
                                                    autoPlay
                                                    tim


                                                    style={styles.lottieAnimation15}

                                                />
                                            </View>
                                            <View className={"absolute bg-white/20 transition transform duration-200 ease-in-out  z-[100] w-[0.9%] top-[207%] left-[49%] h-[50%]"}>

                                            </View>

                                            <View className="absolute flex top-[257%] left-[35%] flex-col items-center">
                                                <Image className="h-28 w-28 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D4D03AQELM-tqD-X4-A/profile-displayphoto-shrink_800_800/0/1721061786562?e=1728518400&v=beta&t=kcR4ry6SXqcBgWehIx-FrjVND2FE0LBPmpfY4rBVyBA' }} />
                                            </View>


                                        </Animated.View>) :

                                    <View className="flex flex-col">
                                        <View className="flex flex-row justify-between items-center px-3 pt-2">
                                            <TouchableOpacity className="pt-1" onPress={() => toggleChatModal()}>
                                                <Text className="text-[18%] font-semibold text-white opacity-60">Cancel</Text>
                                            </TouchableOpacity>


                                            <TouchableOpacity onPress={() => respondedFun()} className="bg-cyan-600/60 px-4 py-3 rounded-full ">
                                                <Text className="text-[16%] font-semibold text-white opacity-70">Respond</Text>
                                            </TouchableOpacity>
                                        </View>

                                        <View className="h-[0.4%] w-[100%] bg-white/10 px-1 mt-[5%] rounded-full">

                                        </View>


                                        {/* <ScrollView  className="flex flex-row space-x-7 px-6 mt-4 pr-10"> */}

                                        <KeyboardAwareScrollView ref={scrollViewRef} className="flex  h-full flex-col relative">

                                            <View className={selecIm.length > 0 ? "absolute bg-white/20 transition transform duration-200 ease-in-out  z-[100] w-[0.9%] top-[14%] left-[7.5%] h-[67%]" : "absolute bg-white/20 transition transform duration-200 ease-in-out  z-[100] w-[0.9%] top-[16%] left-[7.5%] h-[68.8%]"}>

                                            </View>

                                            <View className={selecIm.length > 0 ? "absolute border-8 transition transform duration-200 ease-in-out border-l-white/20 border-b-white/20 border-t-0 border-tl-0 border-r-0 border-tl   rounded-bl-full w-[10%] top-[80.9%] left-[7.5%] h-[8%]" : "absolute transition transform duration-200 ease-in-out border-8 border-l-white/20 border-b-white/20 border-t-0 border-tl-0 border-r-0 border-tl  rounded-bl-full w-[10%] top-[84.9%] left-[7.5%] h-[8%]"}>

                                            </View>

                                            <View className={selecIm.length > 0 ? "absolute bg-white/20 z-[100] w-[0.9%] top-[86%] left-[7.5%] h-[48.8%] transition transform duration-200 ease-in-out" : "absolute bg-white/20 z-[100] w-[0.9%] top-[90.6%] left-[7.5%] h-[28.3%] transition transform duration-200 ease-in-out"}>

                                            </View>

                                            <Animated.View
                                                style={
                                                    {
                                                        opacity: opacity1,

                                                    }}
                                                className="bg-red-800/30 h-[56%] w-[85%] left-[13.4%] top-[78%] transition-all transform duration-500 ease-in-out rounded-lg opacity-0  absolute"

                                            >
                                            </Animated.View>


                                            < TouchableOpacity className={selecIm.length > 0 ? "absolute top-[134%] items-center flex flex-row space-x-3 left-[2.8%] z-[120] transition transform duration-200 ease-in-out " : "absolute top-[119%] items-center flex flex-row space-x-3 left-[2.8%] z-[120] transition transform duration-200 ease-in-out "}>
                                                <TouchableOpacity className={text.length > 0 ? "transition transform opacity-100 duration-200 ease-in-out" : "transition opacity-50  transform duration-200 ease-in-out"}>
                                                    <Image className="h-10 w-10 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/v2/D5603AQFAUcTYDLXqBA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681764031887?e=1728518400&v=beta&t=U0BbE5153coD9n0HWoikSSvTpHbQYOEpr6hnnjzLWYc' }} />
                                                </TouchableOpacity>
                                                <View className={text.length > 0 ? "transition transform opacity-100  duration-200 ease-in-out" : "transition opacity-50  transform duration-200 ease-in-out"}>

                                                    <Text className="text-[14%] text-gray-100">Add Another Response</Text>
                                                </View>
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

                                                <View className="flex flex-col space-y-4 mt-1 relative">
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

                                                    {selecIm.length &&

                                                        (contentSta ?
                                                            <TouchableOpacity className="bg-red-600/20 px-3 py-2 absolute left-[50%] top-[-36%]  rounded-full ">
                                                                <Text className="text-[12%]  text-red-500 opacity-70">EXPLICIT</Text>
                                                            </TouchableOpacity>

                                                            :

                                                            (
                                                                load ?
                                                                    <View className="absolute left-[43%] opacity-90 top-[-92%]">
                                                                        <LottieView
                                                                            source={require('../Analyze.json')} // Replace with your right swipe animation
                                                                            autoPlay
                                                                            tim


                                                                            style={styles.lottieAnimation14}

                                                                        />

                                                                    </View>

                                                                    :

                                                                    <View className="absolute left-[50%] opacity-90 top-[-38%]">
                                                                        <TouchableOpacity onPress={() => loading()} className="flex flex-row space-x-2 p-2 rounded-full bg-white/30">
                                                                            <Ionicons size={15} color="white" name="analytics" />
                                                                            <Text className="text-[12%] text-white font-semibold">Analyze</Text>
                                                                        </TouchableOpacity>
                                                                    </View>
                                                            )
                                                        )



                                                    }

                                                    {selecIm.length > 0 &&

                                                        <TouchableOpacity className="absolute left-[150%] opacity-90 top-[-26%]">

                                                            <Ionicons size={20} color="white" name="calendar-clear" />

                                                        </TouchableOpacity>}
                                                </View>
                                            </View>



                                            {selecIm.length > 0 &&
                                                <View className="ml-[37%] h-[24%] relative mt-4">
                                                    <Image source={require('../crime-2.webp')} className=" h-[64%] w-[60%]" />
                                                    <View className="absolute bg-black/80 p-1 rounded-full top-[3%] right-[42%]">
                                                        <Ionicons size={15} color="white" name="close-outline" />
                                                    </View>
                                                </View>}



                                            <View className={selecIm.length > 0 ? "absolute top-[120%] w-[95%] left-[3%]" : "absolute top-[100%] w-[95%] left-[3%]"}>
                                                <View className={selecIm.length > 0 ? "flex flex-row space-x-2 w-[61%]  ml-[34%] bg-white/20 rounded-full p-3" : "flex flex-row space-x-2 w-[61%] mt-[5%] ml-[34%] bg-white/20 rounded-full p-3"}>
                                                    <Ionicons size={20} color="#dedede" name="chatbubble" />
                                                    <TextInput
                                                        className="text-white font-semibold w-[72%]  opacity-80 text-md"
                                                        placeholder="Respond to @nc127 .."
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


                                        </KeyboardAwareScrollView>

                                        <View className="absolute top-[81.5%] right-[1%] space-x-4 rounded-full bg-black/80 p-4 flex flex-row">
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

                            }


                        </BlurView>
                    </KeyboardAvoidingView>
                </Modal>}










            {chatModal1 &&
                <Modal animationInTiming={400} onBackdropPress={toggleChatModal1} animationOutTiming={400} className="w-[100%] ml-[0] mt-[23%] rounded-t-[40%]" animationIn="slideInUp" animationOut="slideOutDown" isVisible={chatModal1}>


                    {quote ? <KeyboardAvoidingView

                        className="w-full h-[100%] "
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                        <BlurView
                            className=" h-[100%] p-2 relative "
                            tint="dark"
                            intensity={65}
                        >
                            {
                                reposted ?

                                    <Animated.View
                                        style={
                                            {
                                                opacity: opacity6,

                                            }} className="absolute top-[25%] left-[7%]" >

                                        <LottieView
                                            source={require('../repost.json')} // Replace with your right swipe animation
                                            autoPlay
                                            tim


                                            style={styles.lottieAnimation18}

                                        />
                                    </Animated.View> :

                                    <View className="flex flex-col">
                                        <View className="flex flex-row justify-between items-center px-3 pt-2">
                                            <TouchableOpacity className="pt-1" onPress={() => toggleChatModal1()}>
                                                <Text className="text-[18%] font-semibold text-white opacity-60">Cancel</Text>
                                            </TouchableOpacity>


                                            <TouchableOpacity onPress={() => repostFun()} className="bg-cyan-600/60 px-4 py-3 rounded-full ">
                                                <Text className="text-[16%] font-semibold text-white opacity-70">Repost</Text>
                                            </TouchableOpacity>
                                        </View>

                                        <View className="h-[0.4%] w-[100%] bg-white/10 px-1 mt-[5%] rounded-full">

                                        </View>


                                        {/* <ScrollView  className="flex flex-row space-x-7 px-6 mt-4 pr-10"> */}

                                        <KeyboardAwareScrollView ref={scrollViewRef} className="flex  h-full flex-col relative">

                                            <View className={"absolute bg-white/20 transition transform duration-200 ease-in-out  z-[100] w-[0.9%] top-[24%] left-[12.5%] h-[6%]"}>

                                            </View>

                                            <View className={"absolute transition transform duration-200 ease-in-out border-8 border-l-white/20 border-b-white/20 border-t-0 border-tl-0 border-r-0 border-tl  rounded-bl-full w-[10%] top-[30%] left-[12.5%] h-[12%]"}>

                                            </View>


                                            <Animated.View
                                                style={
                                                    {
                                                        opacity: opacity1,

                                                    }}
                                                className="bg-green-800/30 h-[25%] w-[99%] left-[0.3%] top-[4%] transition-all transform duration-500 ease-in-out rounded-lg opacity-0  absolute"

                                            >
                                            </Animated.View>






                                            <View className="ml-[3%] mt-[9%] flex flex-row space-x-4 items-center">
                                                <TouchableOpacity>
                                                    <Image className="h-20 w-20 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/v2/D5603AQFAUcTYDLXqBA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681764031887?e=1728518400&v=beta&t=U0BbE5153coD9n0HWoikSSvTpHbQYOEpr6hnnjzLWYc' }} />
                                                </TouchableOpacity>

                                                <View className="flex flex-col space-y-4 mt-[-14%] relative">
                                                    <Text className="text-[17%] font-semibold text-white opacity-80">@Pe20</Text>



                                                    {text3.length > 0 && (contentSta1 ?
                                                        <TouchableOpacity className="bg-green-600/20 px-2 py-2 absolute left-[129%] w-[135%] top-[-17%]  rounded-full ">
                                                            <Text className="text-[13%]  text-green-500 opacity-70">GENERAL</Text>
                                                        </TouchableOpacity>

                                                        :

                                                        (
                                                            load1 ?
                                                                <View className="absolute left-[110%] opacity-90 top-[-42%]">
                                                                    <LottieView
                                                                        source={require('../Analyze.json')} // Replace with your right swipe animation
                                                                        autoPlay
                                                                        tim


                                                                        style={styles.lottieAnimation14}

                                                                    />

                                                                </View>

                                                                :

                                                                <View className="absolute left-[129%] w-[160%] opacity-90 top-[-17%]">
                                                                    <TouchableOpacity onPress={() => loading1()} className="flex flex-row space-x-2 p-2 rounded-full bg-white/30">
                                                                        <Ionicons size={15} color="white" name="analytics" />
                                                                        <Text className="text-[12%] text-white font-semibold">Analyze</Text>
                                                                    </TouchableOpacity>
                                                                </View>
                                                        ))
                                                    }





                                                </View>
                                            </View>






                                            <View className={"absolute top-[12%] w-[100%] left-[-6%]"}>
                                                <View className={"flex flex-row space-x-2 w-[66%] mt-[5%] ml-[34%] bg-white/20 rounded-full p-3"}>
                                                    <Text className="font-semibold absolute text-[54%]  top-[49%]  left-[6%] text-white">‟</Text>
                                                    <TextInput
                                                        className="text-white font-semibold w-[83%] pl-5 py-  opacity-90 text-md"
                                                        placeholder="Add Quote.."
                                                        placeholderTextColor="#a7a7a7"
                                                        value={text3}
                                                        onChangeText={setText3}
                                                        selectionColor="#dedede"
                                                    />
                                                    {
                                                        text3.length > 0 && <Ionicons size={20} color="#b8b8b8" name="close-outline" />
                                                    }
                                                </View>
                                            </View>


                                            <View className="flex flex-row justify-between items-center px-2 ml-[15%]  mt-14">
                                                <View className="flex flex-row space-x-5 items-center ">
                                                    <View>
                                                        <TouchableOpacity>
                                                            <Image className="h-12 w-12 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D5603AQFh1MEBbmOVBQ/profile-displayphoto-shrink_800_800/0/1718282646997?e=1728518400&v=beta&t=JnPOwXrDNDf3_vJJKndKgzjEgUUlsv90O0Gcq_WxSnI' }} />
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View>
                                                        <Text className="text-[17%] font-semibold text-white opacity-80">@jf21</Text>
                                                    </View>

                                                    <TouchableOpacity className="bg-green-600/20 px-4 py-3 rounded-full ">
                                                        <Text className="text-[16%]  text-green-500 opacity-70">General</Text>
                                                    </TouchableOpacity>

                                                </View>
                                                <View className="">
                                                    <TouchableOpacity className=" bg-white/20 rounded-full p-3 self-end ">
                                                        <Ionicons size={20} color="white" name="ellipsis-vertical-outline" />
                                                    </TouchableOpacity>

                                                </View>
                                            </View>

                                            <View className="mt-6 ml-[18%] h-[230px] relative">
                                                <Image className="h-[75%] w-[94%] object-fit rounded-md" source={require('../Dgi-v.png')} />
                                                <View className="absolute left-[40%] top-[28%] p-2 bg-black/40 rounded-full">
                                                    <Ionicons size={28} color="#22d3ee" name="play-circle" />
                                                </View>
                                            </View>

                                            <View className="ml-[16%] mt-[-11%] px-2">
                                                <Text className="text-md leading-5 font-semibold text-white">Calling All Creators! An innovative Web3 platform that empowers creators <Text className="opacity-60 font-bold">more ..</Text></Text>
                                            </View>

                                        </KeyboardAwareScrollView>

                                        <View className="absolute top-[81.5%] right-[1%] space-x-4 rounded-full bg-black/80 p-4 flex flex-row">
                                            <TouchableOpacity className="flex flex-row items-center opacity-40 space-x-2">
                                                <Ionicons size={22} color="white" name="sync" />
                                                <Text className="font-semibold text-[14%] text-white">Reaction</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity className="flex flex-row relative items-center opacity-40 space-x-2">
                                                <Ionicons size={22} color="white" name="chatbubbles" />
                                                <Text className="font-semibold text-[14%] text-white">Response</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={() => setRepost(true)} className="flex flex-row items-center  space-x-2">
                                                <Ionicons size={22} color="white" name="repeat" />
                                                <Text className="font-semibold text-[14%] text-white">Repost</Text>
                                            </TouchableOpacity>

                                        </View>

                                        {/* <Animated.View style={[{ opacity: opacity4 }]} className="absolute top-[70%] right-[3%] flex flex-col space-y-4  p-4 px-5 rounded-lg bg-black/80">
                                            <TouchableOpacity className="flex flex-row items-center opacity-80  space-x-2">
                                                <Ionicons size={22} color="white" name="repeat" />
                                                <Text className="font-semibold text-[14%] text-white">Repost</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={() => setQuote(true)} className="flex flex-row relative opacity-80  items-center space-x-2">
                                                <Text className="font-semibold absolute text-[54%]  top-[-10%] text-white">‟</Text>
                                                <Text className="font-semibold text-[14%] pl-5 text-white">Quote</Text>
                                            </TouchableOpacity>
                                        </Animated.View> */}
                                    </View>

                            }


                        </BlurView>
                    </KeyboardAvoidingView>


                        :

                        <KeyboardAvoidingView

                            className="w-full h-[100%] "
                            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                            <BlurView
                                className=" h-[100%] p-2 relative "
                                tint="dark"
                                intensity={65}
                            >
                                {
                                    reposted ?

                                        (chatSent ? <Animated.View
                                            style={
                                                {
                                                    opacity: opacity3,

                                                }} className="absolute top-[25%] left-[7%]" >

                                            <LottieView
                                                source={require('../Chat-Sent.json')} // Replace with your right swipe animation
                                                autoPlay
                                                tim


                                                style={styles.lottieAnimation18}

                                            />
                                        </Animated.View> :
                                            <Animated.View
                                                style={
                                                    {
                                                        opacity: opacity2,

                                                    }} className="relative">
                                                <View className="mt-[22%] flex flex-col items-center">
                                                    <Image className="h-28 w-28 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D5603AQFAUcTYDLXqBA/profile-displayphoto-shrink_800_800/0/1681764031887?e=1727308800&v=beta&t=hGVVaP-8KbWFJTt1kVAPq-GvsaYkg-LBh9Xbo1WShdQ' }} />
                                                </View>
                                                <View className={"absolute bg-white/20 transition transform duration-200 ease-in-out  z-[100] w-[0.9%] top-[100%] left-[49%] h-[50%]"}>

                                                </View>

                                                <View className="bg-white/10 absolute rounded-full h-28 w-28 top-[150%] left-[35%]">

                                                </View>

                                                <View className="absolute rounded-full h-28 w-28 top-[138%] left-[29%]">
                                                    <LottieView
                                                        source={require('../chatting.json')} // Replace with your right swipe animation
                                                        autoPlay
                                                        tim


                                                        style={styles.lottieAnimation15}

                                                    />
                                                </View>
                                                <View className={"absolute bg-white/20 transition transform duration-200 ease-in-out  z-[100] w-[0.9%] top-[207%] left-[49%] h-[50%]"}>

                                                </View>

                                                <View className="absolute flex top-[257%] left-[35%] flex-col items-center">
                                                    <Image className="h-28 w-28 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D4D03AQELM-tqD-X4-A/profile-displayphoto-shrink_800_800/0/1721061786562?e=1728518400&v=beta&t=kcR4ry6SXqcBgWehIx-FrjVND2FE0LBPmpfY4rBVyBA' }} />
                                                </View>


                                            </Animated.View>) :

                                        <View className="flex flex-col">
                                            <View className="flex flex-row justify-between items-center px-3 pt-2">
                                                <TouchableOpacity className="pt-1" onPress={() => toggleChatModal1()}>
                                                    <Text className="text-[18%] font-semibold text-white opacity-60">Cancel</Text>
                                                </TouchableOpacity>


                                                <TouchableOpacity onPress={() => respondedFun()} className="bg-cyan-600/60 px-4 py-3 rounded-full ">
                                                    <Text className="text-[16%] font-semibold text-white opacity-70">Respond</Text>
                                                </TouchableOpacity>
                                            </View>

                                            <View className="h-[0.4%] w-[100%] bg-white/10 px-1 mt-[5%] rounded-full">

                                            </View>


                                            {/* <ScrollView  className="flex flex-row space-x-7 px-6 mt-4 pr-10"> */}

                                            <KeyboardAwareScrollView ref={scrollViewRef} className="flex  h-full flex-col relative">

                                                <View className={"absolute bg-white/20 transition transform duration-200 ease-in-out  z-[100] w-[0.9%] top-[16%] left-[7.5%] h-[68.8%]"}>

                                                </View>

                                                <View className={"absolute transition transform duration-200 ease-in-out border-8 border-l-white/20 border-b-white/20 border-t-0 border-tl-0 border-r-0 border-tl  rounded-bl-full w-[10%] top-[84.9%] left-[7.5%] h-[8%]"}>

                                                </View>

                                                <View className={"absolute bg-white/20 z-[100] w-[0.9%] top-[90.6%] left-[7.5%] h-[28.3%] transition transform duration-200 ease-in-out"}>

                                                </View>

                                                <Animated.View
                                                    style={
                                                        {
                                                            opacity: opacity1,

                                                        }}
                                                    className="bg-red-800/30 h-[56%] w-[85%] left-[13.4%] top-[78%] transition-all transform duration-500 ease-in-out rounded-lg opacity-0  absolute"

                                                >
                                                </Animated.View>


                                                < TouchableOpacity className={"absolute top-[119%] items-center flex flex-row space-x-3 left-[2.8%] z-[120] transition transform duration-200 ease-in-out "}>
                                                    <TouchableOpacity className={text.length > 0 ? "transition transform opacity-100 duration-200 ease-in-out" : "transition opacity-50  transform duration-200 ease-in-out"}>
                                                        <Image className="h-10 w-10 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/v2/D5603AQFAUcTYDLXqBA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681764031887?e=1728518400&v=beta&t=U0BbE5153coD9n0HWoikSSvTpHbQYOEpr6hnnjzLWYc' }} />
                                                    </TouchableOpacity>
                                                    <View className={text.length > 0 ? "transition transform opacity-100  duration-200 ease-in-out" : "transition opacity-50  transform duration-200 ease-in-out"}>

                                                        <Text className="text-[14%] text-gray-100">Add Another Response</Text>
                                                    </View>
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
                                                                <Image className="h-12 w-12 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/D5603AQFh1MEBbmOVBQ/profile-displayphoto-shrink_800_800/0/1718282646997?e=1728518400&v=beta&t=JnPOwXrDNDf3_vJJKndKgzjEgUUlsv90O0Gcq_WxSnI' }} />
                                                            </TouchableOpacity>
                                                        </View>
                                                        <View>
                                                            <Text className="text-[17%] font-semibold text-white opacity-80">@jf21</Text>
                                                        </View>

                                                        <TouchableOpacity className="bg-green-600/20 px-4 py-3 rounded-full ">
                                                            <Text className="text-[16%]  text-green-500 opacity-70">General</Text>
                                                        </TouchableOpacity>

                                                    </View>
                                                    <View className="">
                                                        <TouchableOpacity className=" bg-white/20 rounded-full p-3 self-end ">
                                                            <Ionicons size={20} color="white" name="ellipsis-vertical-outline" />
                                                        </TouchableOpacity>

                                                    </View>
                                                </View>

                                                <View className="mt-6 ml-16 h-[230px] relative">
                                                    <Image className="h-[75%] w-[94%] object-fit rounded-md" source={require('../Dgi-v.png')} />
                                                    <View className="absolute left-[40%] top-[28%] p-2 bg-black/40 rounded-full">
                                                        <Ionicons size={28} color="#22d3ee" name="play-circle" />
                                                    </View>
                                                </View>

                                                <View className="ml-[15%] mt-[-11%] px-2">
                                                    <Text className="text-md leading-5 font-semibold text-white">Calling All Creators! An innovative Web3 platform that empowers creators <Text className="opacity-60 font-bold">more ..</Text></Text>
                                                </View>


                                                <View className="ml-[15%] mt-[9%] flex flex-row space-x-4 items-center">
                                                    <TouchableOpacity>
                                                        <Image className="h-16 w-16 rounded-full object-fit" source={{ uri: 'https://media.licdn.com/dms/image/v2/D5603AQFAUcTYDLXqBA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681764031887?e=1728518400&v=beta&t=U0BbE5153coD9n0HWoikSSvTpHbQYOEpr6hnnjzLWYc' }} />
                                                    </TouchableOpacity>

                                                    <View className="flex flex-col space-y-4 mt-1 relative">
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

                                                        {/* {selecIm.length &&

                                                            (contentSta ?
                                                                <TouchableOpacity className="bg-red-600/20 px-3 py-2 absolute left-[50%] top-[-36%]  rounded-full ">
                                                                    <Text className="text-[12%]  text-red-500 opacity-70">EXPLICIT</Text>
                                                                </TouchableOpacity>

                                                                :

                                                                (
                                                                    load ?
                                                                        <View className="absolute left-[43%] opacity-90 top-[-92%]">
                                                                            <LottieView
                                                                                source={require('../Analyze.json')} // Replace with your right swipe animation
                                                                                autoPlay
                                                                                tim


                                                                                style={styles.lottieAnimation14}

                                                                            />

                                                                        </View>

                                                                        :

                                                                        <View className="absolute left-[50%] opacity-90 top-[-38%]">
                                                                            <TouchableOpacity onPress={() => loading()} className="flex flex-row space-x-2 p-2 rounded-full bg-white/30">
                                                                                <Ionicons size={15} color="white" name="analytics" />
                                                                                <Text className="text-[12%] text-white font-semibold">Analyze</Text>
                                                                            </TouchableOpacity>
                                                                        </View>
                                                                )
                                                            )



                                                        } */}
                                                        {/* 
                                                        {selecIm.length > 0 &&

                                                            <TouchableOpacity className="absolute left-[150%] opacity-90 top-[-26%]">

                                                                <Ionicons size={20} color="white" name="calendar-clear" />

                                                            </TouchableOpacity>} */}
                                                    </View>
                                                </View>



                                                {/* {selecIm.length > 0 &&
                                                    <View className="ml-[37%] h-[24%] relative mt-4">
                                                        <Image source={require('../crime-2.webp')} className=" h-[64%] w-[60%]" />
                                                        <View className="absolute bg-black/80 p-1 rounded-full top-[3%] right-[42%]">
                                                            <Ionicons size={15} color="white" name="close-outline" />
                                                        </View>
                                                    </View>} */}



                                                <View className={"absolute top-[100%] w-[95%] left-[3%]"}>
                                                    <View className={"flex flex-row space-x-2 w-[61%] mt-[5%] ml-[34%] bg-white/20 rounded-full p-3"}>
                                                        <Ionicons size={20} color="#dedede" name="chatbubble" />
                                                        <TextInput
                                                            className="text-white font-semibold w-[72%]  opacity-80 text-md"
                                                            placeholder="Respond to @jf21 .."
                                                            placeholderTextColor="#a7a7a7"
                                                            value={text3}
                                                            // onChangeText={setText}
                                                            selectionColor="#dedede"
                                                        />
                                                        {/* {
                                                            text.length > 0 && <Ionicons size={20} color="#b8b8b8" name="close-outline" />
                                                        } */}
                                                    </View>
                                                </View>


                                            </KeyboardAwareScrollView>

                                            <View className="absolute top-[81.5%] right-[1%] space-x-4 rounded-full bg-black/80 p-4 flex flex-row">
                                                <TouchableOpacity className="flex flex-row items-center opacity-40 space-x-2">
                                                    <Ionicons size={22} color="white" name="sync" />
                                                    <Text className="font-semibold text-[14%] text-white">Reaction</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity className="flex flex-row relative items-center space-x-2">
                                                    <Ionicons size={22} color="white" name="chatbubbles" />
                                                    <Text className="font-semibold text-[14%] text-white">Response</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity onPress={() => setRepost(true)} className="flex flex-row items-center opacity-40 space-x-2">
                                                    <Ionicons size={22} color="white" name="repeat" />
                                                    <Text className="font-semibold text-[14%] text-white">Repost</Text>
                                                </TouchableOpacity>

                                            </View>

                                            <Animated.View style={[{ opacity: opacity4 }]} className="absolute top-[70%] right-[3%] flex flex-col space-y-4  p-4 px-5 rounded-lg bg-black/80">
                                                <TouchableOpacity className="flex flex-row items-center opacity-80  space-x-2">
                                                    <Ionicons size={22} color="white" name="repeat" />
                                                    <Text className="font-semibold text-[14%] text-white">Repost</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity onPress={() => setQuote(true)} className="flex flex-row relative opacity-80  items-center space-x-2">
                                                    <Text className="font-semibold absolute text-[54%]  top-[-10%] text-white">‟</Text>
                                                    <Text className="font-semibold text-[14%] pl-5 text-white">Quote</Text>
                                                </TouchableOpacity>
                                            </Animated.View>
                                        </View>

                                }


                            </BlurView>
                        </KeyboardAvoidingView>
                    }
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
    lottieAnimation14: {
        height: 90,
        width: 90,
    },

    lottieAnimation15: {
        height: 160,
        width: 160,
    },
    lottieAnimation18: {
        height: 350,
        width: 350,
    },

    lottieAnimation19: {
        height: 60,
        width: 60,
    },

    container: {
        width: 250, // Fixed width of the container
        overflow: 'hidden', // Ensure text doesn't overflow the container
        // backgroundColor: '#fff',
        padding: 10,
    },
    gradient: {
        flex: 1,
        flexDirection: 'row',
    },
    //   textAd: {
    //     fontSize: 18,
    //     whiteSpace: 'nowrap', // Prevent text from wrapping
    //   },
});


