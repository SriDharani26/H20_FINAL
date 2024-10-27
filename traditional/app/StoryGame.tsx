
import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, Alert } from 'react-native';
import * as Speech from 'expo-speech';
import { useRoute } from '@react-navigation/native';

export default function StoryGame() {
  const route = useRoute();
  const { language } = route.params; 
  const [storyPart, setStoryPart] = useState(0);

  const story = [
    {
      text: language === "ta" ? "நீங்கள் ஒரு அடிமை காடில் நடந்து கொண்டிருக்கிறீர்கள், மற்றும் உங்கள் அருகிலுள்ள ஓசை கேட்கிறீர்கள். அது யாரோ உதவிக்காக கேட்கிறது போலதா? நீங்கள் விசாரிக்க விரும்புகிறீர்களா?" : "You are walking through a dense forest, and you hear a sound nearby. It could be someone who needs help. Do you want to investigate?",
      options: [
        { text: language === "ta" ? "ஆம், ஓசைக்கு நோக்கி செல்லுங்கள்" : "Yes, go towards the sound", next: 1 },
        { text: language === "ta" ? "இல்லை, உங்கள் பாதையில் தொடருங்கள்" : "No, keep walking on your path", next: 2 }
      ]
    },
    {
      text: language === "ta" ? "நீங்கள் அருகில் செல்லும்போது, நீங்கள் பயத்தில் இருப்பவராகிய ஒருவரை காண்கிறீர்கள். அவர்கள் நாங்கள் தவறிப் போனவர்கள் என்று கூறுகிறார்கள். நீங்கள் என்ன செய்வீர்கள்?" : "As you approach, you see someone who appears frightened. They tell you they are lost. What will you do?",
      options: [
        { text: language === "ta" ? "தயவுசெய்து அவர்களை உங்களுடன் வரவும் உதவுங்கள்" : "Offer to help them find their way", next: 3 },
        { text: language === "ta" ? "இவர்கள் அமைதியுடன் தங்களைத் தேடி செல்ல வேண்டும்" : "Suggest they stay calm and find their own way", next: 4 }
      ]
    },
    {
      text: language === "ta" ? "நீங்கள் நிலத்தில் உழைக்கும் குழாயின் வழியாக முந்திரி விழுந்தது போல கேள்கிறீர்கள். இது உங்கள் மீது விழும் என்பதை நினைத்தால், நீங்கள் என்ன செய்வீர்கள்?" : "You hear a loud snap, like a branch breaking above you. What do you do?",
      options: [
        { text: language === "ta" ? "முகத்தை மறைக்கவும்" : "Dodge quickly", next: 5 },
        { text: language === "ta" ? "விழுந்த கிளைக்கு அருகில் செல்லுங்கள்" : "Go investigate the sound", next: 6 }
      ]
    },
    {
      text: language === "ta" ? "நீங்கள் அருகில் செல்லும் போது, அவர்கள் உங்களை உதவுவார்கள் என்று நம்புகிறார்கள். நீங்கள் எப்படி உதவ முடியும்?" : "As you approach, they seem relieved. How can you help?",
      options: [
        { text: language === "ta" ? "உங்கள் முறை தொடர்பு கொள்ளுங்கள்" : "Call for help", next: 7 },
        { text: language === "ta" ? "தொலைபேசி தேடும்" : "Search for a phone", next: 8 }
      ]
    },
    
  ];

  const handleOptionSelect = (nextPart) => {
    Speech.stop();
    setStoryPart(nextPart);
    if (story[nextPart].text) {
      Speech.speak(story[nextPart].text, { language });
    }
  };

  useEffect(() => {
    if (story[storyPart]?.text) {
      Speech.speak(story[storyPart].text, { language });
    }
  }, [storyPart, language]);

  return (
    <View style={styles.container}>
      <Text style={styles.storyText}>{story[storyPart]?.text}</Text>
      <View style={styles.buttonContainer}>
        {story[storyPart]?.options.map((option, index) => (
          <Button key={index} title={option.text} onPress={() => handleOptionSelect(option.next)} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  storyText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
});
