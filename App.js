import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const[age, setAge] = useState('')
  const[lhr, setLhr] = useState(0)
  const[uhr, setUhr] = useState(0)

  function calculate (value){
      setAge(value)
      const lower = (220-value.replace(',','.'))*0.65
      const upper = (220-value.replace(',','.'))*0.85
      setLhr(lower)
      setUhr(upper)
  
  }
  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput 
        style={styles.textbox}
        value={age}
        placeholder='Enter your age'
        keyboardType='decimal-pad'
        onChangeText={text => calculate(text)}>
      </TextInput>
      <Text style={styles.field}>Hr limits</Text>
      <Text style={styles.field}>{lhr.toFixed(0)}-{uhr.toFixed(0)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginLeft: 10,
    margingLight: 10,
  },
  field: {
    marginBottom: 10,
  },
  textbox:{
    borderColor: "#399cbd",
    borderWidth: 2,
    borderRadius: 5,
    padding: 2,
  }
});
