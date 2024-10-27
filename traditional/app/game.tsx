import { Text, View, StyleSheet } from "react-native";
import { Button } from 'react-native-paper';


export default function game() {
  return (
    <View>
        <Text style={styles.text}>age group</Text>
    <Button mode="contained"
    onPress={()=>console.log('pressed')}
    style={styles.button}
    labelStyle={styles.label}>
    9-12
    </Button>
    <Button mode="contained"
    onPress={()=>console.log('pressed')}
    style={styles.button}
    labelStyle={styles.label}>
    13-19
    </Button>
</View>
  
  );
}

const styles=StyleSheet.create({
 button:{
    
    backgroundColor: '#6200ee',
    borderRadius: 8, 
    paddingVertical: 12,
    paddingHorizontal: 20,
    margin:10,
  },
  label:{
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#ffffff',
  },
  text:{
    color:'#000',
     fontSize: 24, 
    textAlign: 'center',
  }
})
