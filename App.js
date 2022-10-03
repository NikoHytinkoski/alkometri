import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import styles from './styles';

export default function App() {
  const [weight, setWeight] = useState(0)
  const [amount, setAmount] = useState(0)
  const [gender, setGender] = useState('male')
  const [time, setTime] = useState(0)
  const [alcohol, setAlcohol] = useState(0)


const amounts = [
    {label: '1 Bottle',value: 1},
    {label: '2 Bottle',value: 2},
    {label: '3 Bottle',value: 3},
    {label: '4 Bottle',value: 4},
    {label: '5 Bottle',value: 5},
    {label: '6 Bottle',value: 6},
    {label: '7 Bottle',value: 7},
    {label: '8 Bottle',value: 8},
    {label: '9 Bottle',value: 9},
    {label: '10 Bottle',value: 10},
    {label: '11 Bottle',value: 11},
    {label: '12 Bottle',value: 12},
    {label: '13 Bottle',value: 13},
    {label: '14 Bottle',value: 14},
    {label: '15 Bottle',value: 15},
]
const times = [
  {label: '1 Hour',value: 1},
  {label: '2 Hour',value: 2},
  {label: '3 Hour',value: 3},
  {label: '4 Hour',value: 4},
  {label: '5 Hour',value: 5},
  {label: '6 Hour',value: 6},
  {label: '7 Hour',value: 7},
  {label: '8 Hour',value: 8},
  {label: '9 Hour',value: 9},
  {label: '10 Hour',value: 10},
  {label: '11 Hour',value: 11},
  {label: '12 Hour',value: 12},
  {label: '13 Hour',value: 13},
  {label: '14 Hour',value: 14},
  {label: '15 Hour',value: 15},
  {label: '16 Hour',value: 16},
  {label: '17 Hour',value: 17},
  {label: '18 Hour',value: 18},
  {label: '19 Hour',value: 19},
  {label: '20 Hour',value: 20},
  {label: '21 Hour',value: 21},
  {label: '22 Hour',value: 22},
  {label: '23 Hour',value: 23},
  {label: '24 Hour',value: 24},
  
]

  const genders = [
    {label: 'Male',value: 'male'},
    {label: 'Female',value: 'female'},
  ]
  
  const calculate = () => {
    let result = 0
    let litres = amount * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsleft = grams - (burning * time)
    let promillesMale = gramsleft / (weight * 0.7)
    let promillesFemale = gramsleft / (weight * 0.6)


    if (gender === 'male') {
         setAlcohol(promillesMale)  
         if (promillesMale < 0) {setAlcohol(0)}
    }else {
      setAlcohol(promillesFemale)  
      if (promillesFemale < 0) {setAlcohol(0)}
    }
    if (weight == 0) alert ('need weight to calculate') 
    setAlcohol(result)
  } 

  return (
    <View style={styles.container}>

      <Text style={styles.Header}>Alcohol measurement apparatus </Text>
     <Text style={styles.Titles}>Weight</Text>
     <TextInput style={styles.Box} placeholder='enter your weight...' value={weight} onChangeText={text => setWeight(text)} keyboardType='number-pad' />
     <Text style={styles.Titles}>Amount</Text>
     <Picker style={styles.picker} onValueChange={(itemValue)=> setAmount(itemValue)} selectedValue={amount}>
      {
        amounts.map((amount,index) => {
        <Picker.Item key={index} label={amount.label} value={amount.value} />
        })
      }
     </Picker>
     <Text style={styles.Titles}>Time</Text>
     <Picker style={styles.picker} onValueChange={(itemValue)=> setTime(itemValue)} selectedValue={time}>
      {
        times.map((time,index) => {
        <Picker.Item key={index} label={time.label} value={time.value} />
        })
      }
     </Picker>
      <Text style={styles.Titles}>Gender</Text>
      <RadioForm
      buttonSize={10}
      radio_props={genders}
      initial={0}
      onPress={(value) => setGender(value)}
      />
     <Text>{alcohol.toFixed(0)}</Text>
     <Button title='Calculate' onPress={calculate} />
    </View>
  );
}


