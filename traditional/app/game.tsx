import { Text, View, StyleSheet } from "react-native";
import { Button } from 'react-native-paper';


export default function game() {
  return (
    
    <Button mode="contained"
    onPress={()=>console.log('pressed')}
    style={styles.button}
    labelStyle={styles.label}>
    Press me
  </Button>
  
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
  }
})
