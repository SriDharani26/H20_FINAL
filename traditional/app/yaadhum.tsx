import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as Speech from "expo-speech";

export default function yaadhum() {

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Age Group</Text>
      <Button 
        mode="contained"
        onPress={() => navigation.navigate('index');
          onPress={() => {
          
          Speech.stop()
          Speech.speak("navigating into home page")
        }}
        }
        style={styles.button}
        labelStyle={styles.label}
      >
        9-12
      </Button>
      <Button 
        mode="contained"
        onPress={() => {
          
          Speech.stop()
          Speech.speak("navigating into home")
        }}
        style={styles.button}
        labelStyle={styles.label}
        
      >
        13-19
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  button: {
    backgroundColor: '#6200ee',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  text: {
    color: '#000',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});