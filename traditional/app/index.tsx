
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert, Modal, Button, FlatList, TouchableOpacity } from "react-native";
import { FAB } from "react-native-paper";
import * as Speech from "expo-speech";
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

export default function index() {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [showTip, setShowTip] = useState(true);

  const { language } = route.params; 

  const tips = [
    {
      id: "1",
      text: {
        en: "Always wash your hands before eating to stay healthy!",
        ta: "உணவு சாப்பிடுவதற்கு முந்தைய உங்கள் கைகளை எப்போதும் சுத்தமாக்குங்கள்!"
      }
    },
    {
      id: "2",
      text: {
        en: "Exercise regularly to keep your body strong!",
        ta: "உங்கள் உடலை பலமாக வைத்திருக்க எப்போதும் உடற்பயிற்சி செய்யுங்கள்!"
      }
    },
    {
      id: "3",
      text: {
        en: "Read books to improve your knowledge and imagination!",
        ta: "உங்கள் அறிவையும் கற்பனையையும் மேம்படுத்த புத்தகங்களை படியுங்கள்!"
      }
    },
    {
      id: "4",
      text: {
        en: "Drink plenty of water throughout the day!",
        ta: "நாள بھر அதிகமாக நீர் குடிக்கவும்!"
      }
    },
    {
      id: "5",
      text: {
        en: "Spend time outdoors and enjoy nature!",
        ta: "வெளியில் நேரத்தை கழிக்கவும் மற்றும் இயற்கையை அனுபவிக்கவும்!"
      }
    }
  ];

  useEffect(() => {
    Alert.alert(
      "Select Language",
      "Please choose a language for the app.",
      [
        { text: "English", onPress: () => setLanguage("en") },
        { text: "Tamil", onPress: () => setLanguage("ta") },
      ]
    );

    const timer = setInterval(() => {
      setShowTip(true);
    }, 60000); 

    return () => clearInterval(timer);
  }, []);

  const speak = (text) => {
    Speech.speak(text, { language });
  };

  const handleSwipe = (direction) => {
    if (direction === 'left') {
      setCurrentTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
    } else if (direction === 'right') {
      setCurrentTipIndex((prevIndex) => (prevIndex - 1 + tips.length) % tips.length);
    }
  };

  return (
    <View style={styles.container}>
      {showTip && (
        <GestureHandlerRootView style={styles.tipContainer}>
          <PanGestureHandler
            onGestureEvent={(event) => {
              if (event.nativeEvent.translationX > 50) {
                handleSwipe('right'); 
              } else if (event.nativeEvent.translationX < -50) {
                handleSwipe('left');
              }
            }}
          >
            <View style={styles.tipBox}>
              <Text style={styles.tipText}>
                {tips[currentTipIndex].text[language]}
              </Text>
            </View>
          </PanGestureHandler>
        </GestureHandlerRootView>
      )}

      <FAB
        icon="gamepad-square"
        style={styles.fabBL}
        customSize={80}
        onPress={() => {
          Speech.stop();
          speak(language === "ta" ? "விளையாட்டு பகுதிக்கு செல்ல" : "Navigate to game pad page");
          navigation.navigate('StoryGame', { language }); // Pass language to StoryGame
        }}
      />
      <FAB
        icon="cog"
        style={styles.fabTL}
        customSize={80}
        onPress={() => {
          Speech.stop();
          speak(language === "ta" ? "அமைப்புகள் பகுதியில் செல்ல" : "Navigating into settings section.");
        }}
      />
      <FAB
        icon="gamepad"
        style={styles.fabBR}
        customSize={80}
        onPress={() => {
          Speech.stop();
          speak(language === "ta" ? "விளையாட்டு பக்கம் செல்ல" : "Navigating to game page");
        }}
      />
      <FAB
        icon="account"
        style={styles.fabTR}
        customSize={80}
        onPress={() => {
          Speech.stop();
          speak(language === "ta" ? "சுயவிவர பகுதியில் செல்ல" : "Navigating into profile section");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tipContainer: {
    position: "absolute",
    top: "30%",
    left: "10%",
    right: "10%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  tipBox: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    elevation: 9,
    alignItems: "center",
  },
  tipText: {
    fontSize: 18,
    textAlign: "center",
  },
  fabBR: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  fabTR: {
    position: "absolute",
    margin: 20,
    right: 0,
    top: 0,
    zIndex: 10,
  },
  fabTL: {
    position: "absolute",
    margin: 20,
    left: 0,
    top: 0,
    zIndex: 10,
  },
  fabBL: {
    position: "absolute",
    margin: 20,
    left: 0,
    bottom: 0,
    zIndex: 10,
  },
});
